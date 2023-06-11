import { Request, Response } from 'express'
import ValitadionContract from "../validador/fluent-validator"
import { commentRepository } from "../repositories/commentRepository";
import { format } from 'date-fns';


export class CommentController {

    static async createComment(req: Request, res: Response) {

        let contract = new ValitadionContract();

        contract.hasMinLen(req.body.content, 6, 'O conteúdo deve conter pelo menos 6 caracteres')


        if (!contract.isValid()) {
            return res.status(400).json(contract.errors())
        } else {
            var info = req.body
        }

        try {
            const newComment = commentRepository.create(info)
            await commentRepository.save(newComment)

            return res.status(201).json(newComment)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async listComment(req: Request, res: Response) {
        try {
            const userspost = await commentRepository.find()

            return res.status(200).json(userspost)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async updateComment(req: Request, res: Response) {
        const info = req.body
        const { id } = req.params;
        try {
            const userspost = await commentRepository.update({ id: Number(id) }, info);
            return res.status(200).json({ message: 'successfully updated teacher' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    static async deleteComment(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const userspost = await commentRepository.delete(id)
            return res.status(200).json({ message: 'successfully deleted teacher' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    // static async listCommentLike(req: Request, res: Response) {
    //     try {
    //         const usersPost = await commentRepository.find({
    //           relations: {
    //             likes: true
    //           },
    //           order: {
    //             createdAt: 'DESC'
    //           }
    //         });
        
    //         const formattedComments = usersPost.map(Comment => ({
    //           ...Comment,
    //           createdAt: format(Comment.createdAt, 'dd/MM/yyyy HH:mm:ss'),
    //           updatedAt: format(Comment.updatedAt, 'dd/MM/yyyy HH:mm:ss')
    //         }));
        
    //         return res.status(200).json(formattedComments);
    //       } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ message: 'Internal Server Error' });
    //       }
    // }

    // static async listOrderCommentLike(req: Request, res: Response) {
    //     try {
    //         const usersPost = await commentRepository.find({
    //             relations: {
    //                 likes: true
    //             }
    //         });

    //         const sortedPosts = usersPost.sort((a, b) => b.likes.length - a.likes.length);

    //         return res.status(200).json(sortedPosts);
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ message: 'Internal Server Error' });
    //     }
    // }



}
