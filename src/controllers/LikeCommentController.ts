import {Request, Response} from 'express';
import {LikeComment} from '../entities/LikeComment';
import { likeCommentRepository } from '../repositories/likeCommentRepository';


export class LikeCommentController {

    static async checkLikeComment(req: Request, res: Response) {
        const {userIdParams, commentIdParams} = req.params;
        const userId: number = parseInt(userIdParams);
        const commentId: number = parseInt(commentIdParams);
        return await likeCommentRepository.findOne({
            where: {
                user_id: userId,
                comment_id: commentId,
            },
        });
    }

    static async toggleLikeComment(req: Request, res: Response) {
        try {
            //Recebe os ids do User e do comment
            const {userIdParams, commentIdParams} = req.params;
            const userId: number = parseInt(userIdParams);
            const userCommentId: number = parseInt(commentIdParams);

            // Verifique se existe um registro de LikeComment com as duas chaves
            const existingLikeComment = await LikeCommentController.checkLikeComment(req, res);
            if (existingLikeComment) {
                await likeCommentRepository.delete(existingLikeComment.id);
                return res.status(200).json({message: 'Like do comentário retirado do sistema.'});
            } else {
                const newLikeComment = new LikeComment();
                newLikeComment.user_id = userId;
                newLikeComment.comment_id = userCommentId;
                await likeCommentRepository.save(newLikeComment);
                return res.status(201).json({message: 'Like do comentário registrado com sucesso.'});
            }
        } catch (error) {
            console.error('Erro ao verificar like do comentário:', error);
            return res.status(500).json({message: 'Erro ao verificar like do comentário.'});
        }
    }
    static async listLikeComment(req: Request, res: Response) {
        var lista = []
        try {
            const commentsPost = await likeCommentRepository.find()
    
            return res.status(200).json(commentsPost)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
}