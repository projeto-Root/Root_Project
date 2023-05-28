import { AppDataSource } from '../data-source'
import { UserPost } from '../entities/UserPost'

export const userPostRepository = AppDataSource.getRepository(UserPost)
