import { AppDataSource } from '../data-source'
import { LikeComment } from '../entities/LikeComment'

export const likeCommentRepository = AppDataSource.getRepository(LikeComment)

