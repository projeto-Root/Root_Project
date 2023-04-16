import { AppDataSource } from '../data-source'
import { Admin } from '../entities/Admin'

export const adminRepository = AppDataSource.getRepository(Admin)
