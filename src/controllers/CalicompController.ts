import { Request, Response } from 'express'
import { caliRepository } from '../repositories/caliRepository'

export class CaliCompController {

    static async listCali(req: Request, res: Response) {
        try {
            const CaliCard = await caliRepository.find()

            return res.status(200).json(CaliCard)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    static async createCali(req: Request, res: Response) {
        const file = req.file?.filename
        const info = req.body
        info.photo = file

        try {
            const newCaliCard = caliRepository.create(info)
            await caliRepository.save(newCaliCard)

            return res.status(201).json(newCaliCard)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }



    static async updateCali(req: Request, res: Response) {
        const file = req.file?.filename
        const info = req.body
        info.photo = file
        const { id } = req.params;
        try {
            const CaliCard = await caliRepository.update({ id: Number(id) }, info);
            return res.status(200).json({ message: 'successfully updated SoftTeam Card' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    
    static async deleteCali(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const CaliCard = await caliRepository.delete(id)
            return res.status(200).json({ message: 'successfully deleted SoftTeam Card' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

}   

