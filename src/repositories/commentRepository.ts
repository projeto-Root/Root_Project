import { AppDataSource } from '../data-source'
import { Comment } from '../entities/Comment'

export const commentRepository = AppDataSource.getRepository(Comment)
