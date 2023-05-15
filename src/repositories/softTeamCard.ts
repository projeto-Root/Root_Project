import { AppDataSource } from '../data-source'
import { SoftTeamCard } from '../entities/SoftTeamCard'

export const softTeamRepository = AppDataSource.getRepository(SoftTeamCard)
