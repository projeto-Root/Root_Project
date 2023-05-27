import { Request, Response } from 'express'
import { userpostRepository } from '../repositories/userpostRepository'
const bcrypt = require('bcryptjs');
import ValitadionContract from "../validador/fluent-validator"
import { commetRepository } from '../repositories/commentRepository';
import { userRepository } from '../repositories/userRepository';
import { Comment } from '../entities/Comment';
export class UserPostController {

    static async createUserPost(req: Request, res: Response) {

        let contract = new ValitadionContract();

        contract.hasMinLen(req.body.description, 3, 'A descrição deve conter pelo menos 3 caracteres')
        contract.hasMinLen(req.body.content, 6, 'O conteúdo deve conter pelo menos 6 caracteres')


        if (!contract.isValid()) {
            return res.status(400).json(contract.errors())
        } else {
            var info = req.body
        }

        try {
            const newUserPost = userpostRepository.create(info)
            await userpostRepository.save(newUserPost)

            return res.status(201).json(newUserPost)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async listUserPost(req: Request, res: Response) {
        try {
            const userspost = await userpostRepository.find()

            return res.status(200).json(userspost)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async updateUserPost(req: Request, res: Response) {
        const info = req.body
        const { id } = req.params;
        try {
            const userspost = await userpostRepository.update({ id: Number(id) }, info);
            return res.status(200).json({ message: 'successfully updated teacher' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    static async deleteUserPost(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const userspost = await userpostRepository.delete(id)
            return res.status(200).json({ message: 'successfully deleted teacher' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    static async postComment(req: Request, res: Response) {
        const  info  = req.body
        try {
            const user = await userRepository.findOne({where:{
                id: Number(info.user_id)
            },select:['id']})
            if(!user){
                return res.json('usuário não encontrado!')
            }
            const post = await userpostRepository.findOne({where:{id: Number(info.userpost_id)}, select:['id']})
            if(!post){return res.json('post não encontrado!')}
            const comment = new Comment
            comment.descricao = info.descricao
            comment.post = post
            comment.user = user
            await commetRepository.save(comment)
            return res.status(200).json(comment)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

}
