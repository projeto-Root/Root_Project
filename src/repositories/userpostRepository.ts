import { AppDataSource } from '../data-source'
import { UserPost } from '../entities/UserPost'

export const userpostRepository = AppDataSource.getRepository(UserPost)
