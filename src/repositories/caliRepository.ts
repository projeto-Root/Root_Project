import { AppDataSource } from '../data-source'
import { CaliCard } from '../entities/CaliCard'

export const caliRepository = AppDataSource.getRepository(CaliCard)
