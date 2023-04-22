import { Request, Response } from 'express'
import { adminRepository } from '../repositories/adminRepository'
const bcrypt = require('bcryptjs');
import ValitadionContract from "../validador/fluent-validator"


export class AdminController {

    static async createAdmin(req: Request, res: Response) {

        let contract = new ValitadionContract();
        contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres')
        contract.isEmail(req.body.email, 'E-mail inválido')
        contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres')

        if (!contract.isValid()) {
            return res.status(400).json(contract.errors())
        } else {
            var info = req.body
            info.password = await bcrypt.hash(info.password, 8);
        }

        try {
            const newUser = adminRepository.create(info)
            await adminRepository.save(newUser)
            return res.status(201).json(newUser)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async getAdmin(req: Request, res: Response) {
        try {
            const users = await adminRepository.find()
            return res.status(200).json(users)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async getAdminById(req: Request, res: Response) {
        const { id } = req.params
        try {
            const admins = await adminRepository.findOneBy({
                id: Number(id),
            })
            return res.status(200).json(admins)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async deleteAdmin(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await adminRepository.delete(id)
            return res.status(200).json({ message: 'successfully deleted admin' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    static async updateAdmin(req: Request, res: Response) {
        const info = req.body
        const { id } = req.params;
        try {
            await adminRepository.update({ id: Number(id) }, info);
            return res.status(200).json({ message: 'successfully updated admin' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
}
