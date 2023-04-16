import { Request, Response } from 'express'
import { userRepository } from '../repositories/userRepository'
const bcrypt = require('bcryptjs');
import { jwtsecret } from '../config/configAuth';
const jwt = require('jsonwebtoken')

export class LoginController {

    async auth(req: Request, res: Response) {

        const authlogin_valida = await userRepository.findOneBy({
            email: req.body.email
        })
        if (authlogin_valida) {
            const validasenha = await bcrypt.compare(req.body.password, authlogin_valida.password);
            if (validasenha) {
                return res.
                    status(200).
                    json({
                        message: "Login encontrado Associado", token: jwt.
                            sign({ email: req.body.email }, jwtsecret.secretJWTU, { expiresIn: "48h" })
                    })
            } else {
                return res.status(401).json({ message: "Acesso Negado" })
            }
        } else {
            return res.status(401).json({ message: "Acesso Negado" })
        }
    }

}