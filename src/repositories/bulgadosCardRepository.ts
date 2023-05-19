import { AppDataSource } from '../data-source'
import { bugados } from '../entities/BulgadosCard'

export const bugadosRepository = AppDataSource.getRepository(bugados)