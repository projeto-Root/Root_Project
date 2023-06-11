import {Request, Response} from 'express';
import {Like} from '../entities/Like';
import {likeRepository} from '../repositories/likeRepository';

export class LikeController {

    static async checkLike(req: Request, res: Response) {
        const {userIdParams, userPostIdParams} = req.params;
        const userId: number = parseInt(userIdParams);
        const userPostId: number = parseInt(userPostIdParams);
        return await likeRepository.findOne({
            where: {
                user_id: userId,
                userPost_id: userPostId,
            },
        });
    }

    static async toggleLike(req: Request, res: Response) {
        try {
            //Recebe os ids do User e do UserPost
            const {userIdParams, userPostIdParams} = req.params;
            const userId: number = parseInt(userIdParams);
            const userPostId: number = parseInt(userPostIdParams);

            // Verifique se existe um registro de Like com as duas chaves
            const existingLike = await LikeController.checkLike(req, res);
            if (existingLike) {
                await likeRepository.delete(existingLike.id);
                return res.status(200).json({message: 'Like retirado do sistema.'});
            } else {
                const newLike = new Like();
                newLike.user_id = userId;
                newLike.userPost_id = userPostId;
                await likeRepository.save(newLike);
                return res.status(201).json({message: 'Like registrado com sucesso.'});
            }
        } catch (error) {
            console.error('Erro ao verificar like:', error);
            return res.status(500).json({message: 'Erro ao verificar like.'});
        }
    }
    static async listLike(req: Request, res: Response) {
        var lista = []
        try {
            const usersPost = await likeRepository.find()
    
            return res.status(200).json(usersPost)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
}