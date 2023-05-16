import { Request, Response } from "express"
import { CalicompRepository } from "../../repositories/calicompRepository"
export async function createPost(req: Request, res: Response) {
    const info = req.body

    try {
        const newPost = CalicompRepository.create(info) // criar
        await CalicompRepository.save(newPost)

        return res.status(201).json(newPost)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}