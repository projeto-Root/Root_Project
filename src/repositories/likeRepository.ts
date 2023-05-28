import { AppDataSource } from '../data-source'
import { Like } from '../entities/Like'

export const likeRepository = AppDataSource.getRepository(Like)

