import { Request, Response } from 'express'
import { teacherRepository } from '../repositories/teacherRepository'

export class TeacherController {
    static async createTeacher(req: Request, res: Response) {
        const files = req.files;
        const info = req.body

        if (Array.isArray(files)) {

            info.photo = files[0].filename
            info.areaIcon = files[1].filename
            info.SubAreaIcon = files[2].filename

        } else if (files) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }

        try {
            const newTeacher = teacherRepository.create(info)
            await teacherRepository.save(newTeacher)
            return res.status(201).json(newTeacher)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async getTeacher(req: Request, res: Response) {
        try {
            const teachers = await teacherRepository.find()

            return res.status(200).json(teachers)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }


    static async getTeacherById(req: Request, res: Response) {
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
            await teacherRepository.delete(id)
            return res.status(200).json({ message: 'successfully deleted teacher' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async updateTeacher(req: Request, res: Response) {
        const info = req.body
        const files = req.files;
        const { id } = req.params;

        if (Array.isArray(files)) {

            info.photo = files[0].filename
            info.areaIcon = files[1].filename
            info.SubAreaIcon = files[2].filename

        } else if (files) {
            return res.status(500).json({ message: 'Internal Sever Error' })
        }

        try {
            await teacherRepository.update({ id: Number(id) }, info);
            return res.status(200).json({ message: 'successfully updated teacher' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
}

