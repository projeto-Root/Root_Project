import { Request, Response } from 'express'
import { softTeamRepository } from '../repositories/softTeamCard'

export class SoftTeamCardController {

    static async listSftCard(req: Request, res: Response) {
        try {
            const sftCard = await softTeamRepository.find()

            return res.status(200).json(sftCard)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async createSftCard(req: Request, res: Response) {
        const file = req.file?.filename
        const info = req.body
        info.photo = file

        try {
            const newSftCard = softTeamRepository.create(info)
            await softTeamRepository.save(newSftCard)

            return res.status(201).json(newSftCard)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }



    static async updateSftCard(req: Request, res: Response) {
        const file = req.file?.filename
        const info = req.body
        info.photo = file
        const { id } = req.params;
        try {
            const SoftTeamCard = await softTeamRepository.update({ id: Number(id) }, info);
            return res.status(200).json({ message: 'successfully updated SoftTeam Card' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    
    static async deleteSftCard(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const SoftTeamCards = await softTeamRepository.delete(id)
            return res.status(200).json({ message: 'successfully deleted SoftTeam Card' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

}   

