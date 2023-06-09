import { Request, Response } from 'express'
import { adminRepository } from '../repositories/adminRepository'
import { userRepository } from '../repositories/userRepository'
const bcrypt = require('bcryptjs');
import { jwtsecret } from '../config/configAuth';
const jwt = require('jsonwebtoken')
import { transport } from '../config/configNodeMail'
import 'dotenv/config'

export class LoginController {

    static async authUser(req: Request, res: Response) {
        const { email, password } = req.body;
      
        const user = await userRepository.findOneBy({ email });
      
        if (!user) {
          return res.status(401).json({ message: 'Acesso Negado' });
        }
      
        if (!user.emailconfirmed) {
          return res.status(401).json({ message: 'E-mail não confirmado. Por favor, verifique seu e-mail para confirmar sua conta.' });
        }
      
        const validPassword = await bcrypt.compare(password, user.password);
      
        if (!validPassword) {
          return res.status(401).json({ message: 'Acesso Negado' });
        }
      
        const token = jwt.sign({ email }, jwtsecret.secretJWTU, { expiresIn: '48h' });
      
        return res.status(200).json({ message: 'Login encontrado Associado', token });
      }
      
    static async authAdmin(req: Request, res: Response) {

        const authlogin_valida = await adminRepository.findOneBy({
            email: req.body.email
        })
        if (authlogin_valida) {
            const validasenha = await bcrypt.compare(req.body.password, authlogin_valida.password);
            if (validasenha) {
                return res.
                    status(200).
                    json({
                        message: "Login encontrado Associado", token: jwt.
                            sign({ email: req.body.email }, jwtsecret.secretJWTA, { expiresIn: "48h" })
                    })
            } else {
                return res.status(401).json({ message: "Acesso Negado" })
            }
        } else {
            return res.status(401).json({ message: "Acesso Negado" })
        }
    }
    static async sendPasswordResetEmail(req: Request, res: Response) {
        try {
            const { email } = req.body;

            const user = await userRepository.findOneBy({ email });

            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            const token = jwt.sign({ email }, jwtsecret.secretJWTU, { expiresIn: '30m' });


            await transport.sendMail({
                from: process.env.FROM,
                to: email,
                subject: 'Redefinição de Senha',
                text: `Clique no seguinte link para redefinir sua senha: ${req.headers.host}/reset-password/${token}`,
            });

            return res.status(200).json({ message: 'E-mail de redefinição de senha enviado' });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Erro ao enviar o e-mail de redefinição de senha' });
        }
    }

    static async resetPassword(req: Request, res: Response) {
        try {
            const { token } = req.params;
            const { password } = req.body;

            jwt.verify(token, jwtsecret.secretJWTU, async (err: any, decoded: any) => {
                if (err) {
                    return res.status(401).json({ message: 'Token inválido ou expirado' });
                }

                const user = await userRepository.findOneBy({ email: decoded.email });

                if (!user) {
                    return res.status(404).json({ message: 'Usuário não encontrado' });
                }

                const hashedPassword = await bcrypt.hash(password, 8);

                await userRepository.update({ email: decoded.email }, { password: hashedPassword });

                return res.status(200).json({ message: 'Senha redefinida com sucesso' });
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Erro ao redefinir a senha' });
        }
    }
    static async sendConfirmationEmail(req: Request, res: Response) {
        try {
            const { email } = req.body;

            const user = await userRepository.findOneBy({ email });

            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            if (user.emailconfirmed) {
                return res.status(400).json({ message: 'O e-mail já foi confirmado anteriormente' });
            }

            const token = jwt.sign({ email }, jwtsecret.secretJWTU, { expiresIn: '30m' });


            await transport.sendMail({
                from: process.env.FROM,
                to: email,
                subject: 'Confirmação de E-mail',
                text: `Clique no seguinte link para confirmar seu e-mail: ${req.headers.host}/confirm-email/${token}`,
            });

            return res.status(200).json({ message: 'E-mail de confirmação enviado' });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Erro ao enviar o e-mail de confirmação' });
        }
    }

    static async confirmEmail(req: Request, res: Response) {
        try {
            const { token } = req.params;

            jwt.verify(token, jwtsecret.secretJWTU, async (err: any, decoded: any) => {
                if (err) {
                    return res.status(401).json({ message: 'Token inválido ou expirado' });
                }

                const user = await userRepository.findOneBy({ email: decoded.email });

                if (!user) {
                    return res.status(404).json({ message: 'Usuário não encontrado' });
                }

                if (user.emailconfirmed) {
                    return res.status(400).json({ message: 'O e-mail já foi confirmado anteriormente' });
                }

                await userRepository.update({ email: decoded.email }, { emailconfirmed: true });

                return res.status(200).json({ message: 'E-mail confirmado com sucesso' });
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Erro ao confirmar o e-mail' });
        }
    }

}