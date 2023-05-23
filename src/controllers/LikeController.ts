import { Request, Response } from 'express';
//import { Like } from '../entities/Like';
import { likeRepository } from '../repositories/likeRepository';

export class LikeController{

  static async createBugadosCard(req: Request, res: Response) {
    const file = req.file?.filename
    console.log(file)
    const info = req.body
    info.photo = file

    try {
        const newBugadosCard = likeRepository.create(info)
        await likeRepository.save(newBugadosCard)

        return res.status(201).json(newBugadosCard)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
    }
}

// static async checkLike(req: Request, res: Response): Promise<Like | null>{
//     const { userIdParams, userPostIdParams } = req.params;
//     const userId: number = parseInt(userIdParams)
//     const userPostId: number = parseInt(userPostIdParams)
//     const existingLike = await likeRepository.findOne({
//         where: {
//           userId: userId,
//           userPostId: userPostId,
//         },
//       });
//     return existingLike;
// }

// static async toggleLike(req: Request, res: Response): Promise<Response> {
//   try {
//     const { userIdParams, userPostIdParams } = req.params;
//     const userId: number = parseInt(userIdParams)
//     const userPostId: number = parseInt(userPostIdParams)

//     // Verifique se existe um registro de Like com as duas chaves
//     const existingLike = await LikeController.checkLike(req, res)
//     if (existingLike) {
//         await likeRepository.delete(existingLike.id);
//         return res.status(200).json({ message: 'Like retirado do sistema.' });
//     }else{
//         const newLike = new Like();
//         newLike.userId = userId;
//         newLike.userPostId = userPostId;    
//         await likeRepository.save(newLike);
//         return res.status(201).json({ message: 'Like registrado com sucesso.' });
//     }
//   } catch (error) {
//     console.error('Erro ao verificar like:', error);
//     return res.status(500).json({ message: 'Erro ao verificar like.' });
//   }
// }
}