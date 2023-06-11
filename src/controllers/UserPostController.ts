import { Request, Response } from 'express'
import ValitadionContract from "../validador/fluent-validator"
import { userPostRepository } from "../repositories/userpostRepository";
import { format } from 'date-fns';


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
            const newUserPost = userPostRepository.create(info)
            await userPostRepository.save(newUserPost)

            return res.status(201).json(newUserPost)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async listUserPost(req: Request, res: Response) {
        try {
            const userspost = await userPostRepository.find()

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
            const userspost = await userPostRepository.update({ id: Number(id) }, info);
            return res.status(200).json({ message: 'successfully updated teacher' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    static async deleteUserPost(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const userspost = await userPostRepository.delete(id)
            return res.status(200).json({ message: 'successfully deleted teacher' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async listUserPostLike(req: Request, res: Response) {
        try {
            const usersPost = await userPostRepository.find({
                relations: {
                    likes: true
                },
                order: {
                    createdAt: 'DESC'
                }
            });

            const formattedUserPosts = usersPost.map(userPost => ({
                ...userPost,
                createdAt: format(userPost.createdAt, 'dd/MM/yyyy HH:mm:ss'),
                updatedAt: format(userPost.updatedAt, 'dd/MM/yyyy HH:mm:ss')
            }));

            return res.status(200).json(formattedUserPosts);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    static async listOrderUserPostLike(req: Request, res: Response) {
        try {
            const usersPost = await userPostRepository.find({
                relations: {
                    likes: true
                }
            });

            const sortedPosts = usersPost.sort((a, b) => b.likes.length - a.likes.length);

            return res.status(200).json(sortedPosts);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    
    static async listUserComments(req: Request, res: Response) {
        try {
            const users = await userPostRepository.find({
                relations: {
                    comment: true
                },
                order: {
                    createdAt: 'DESC' 
                }
            });
            return res.status(200).json(users);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

}
