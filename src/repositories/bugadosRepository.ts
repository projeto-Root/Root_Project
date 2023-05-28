import { AppDataSource } from '../data-source'
import { bugados } from '../entities/BugadosCard'

export const bugadosRepository = AppDataSource.getRepository(bugados)
