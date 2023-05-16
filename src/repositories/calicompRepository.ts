import { AppDataSource } from "../data-source";
import { CalicompUser } from "../entities/CalicompUser";
export const CalicompRepository = AppDataSource.getRepository(CalicompUser)