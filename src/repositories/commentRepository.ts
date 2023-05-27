import { AppDataSource } from '../data-source'
import { Comment } from '../entities/Comment'

export const commetRepository = AppDataSource.getRepository(Comment)
