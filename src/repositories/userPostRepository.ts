import { AppDataSource } from '../data-source'
import { UserPost } from '../entities/UserPost'

export const teacherRepository = AppDataSource.getRepository(UserPost)