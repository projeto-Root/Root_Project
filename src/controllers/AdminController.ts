import { Request, Response } from 'express'
import { adminRepository } from '../repositories/adminRepository'
import { teacherRepository } from '../repositories/teacherRepository'
const bcrypt = require('bcryptjs');
import ValitadionContract from "../validador/fluent-validator"


export class AdminController {

    static async createUser(req: Request, res: Response) {

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

    static async listUser(req: Request, res: Response) {
        try {
            const users = await adminRepository.find()

            return res.status(200).json(users)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async createTeacher(req: Request, res: Response) {
        const info = req.body

        try {
            const newTeacher = teacherRepository.create(info)
            await teacherRepository.save(newTeacher)

            return res.status(201).json(newTeacher)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async listTeacher(req: Request, res: Response) {
        try {
            const teachers = await teacherRepository.find()

            return res.status(200).json(teachers)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    static async listTeacherbyId(req: Request, res: Response) {
        const { id } = req.params
        try {
            const teachers = await teacherRepository.findOneBy({
                id: Number(id),
            })

            return res.status(200).json(teachers)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    static async deleteTeacher(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const teachers = await teacherRepository.delete(id)
            return res.status(200).json({ message: 'successfully deleted teacher' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    static async updateTeacher(req: Request, res: Response) {
        const info = req.body
        const { id } = req.params;
        try {
            const teachers = await teacherRepository.update({ id: Number(id) }, info);
            return res.status(200).json({ message: 'successfully updated teacher' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }


}
