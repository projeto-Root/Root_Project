import { AppDataSource } from '../data-source'
import { Teacher } from '../entities/Teacher'

export const teacherRepository = AppDataSource.getRepository(Teacher)
