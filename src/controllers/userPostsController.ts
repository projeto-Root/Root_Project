import { Request, Response } from 'express'
import { userRepository } from '../repositories/userRepository'

export class userPostController {
    async listUser(req: Request, res: Response) {
        try {
            const users = await userRepository.find() 

            return res.status(200).json(users)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    async createPost(req: Request, res: Response) {
        const info = req.body

        try {
            const newPost = userRepository.create(info) // criar
            await userRepository.save(newPost)

            return res.status(201).json(newPost)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    async update(req: Request, res: Response) {
        const info = req.body
        const { id } = req.params;
        try {
            const users = await userRepository.update({ id: Number(id) }, info);
            return res.status(200).json({ message: 'successfully updated teacher' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const user = await userRepository.delete(id)
            return res.status(200).json({ message: 'successfully deleted teacher' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
}
