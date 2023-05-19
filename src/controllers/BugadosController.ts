import { Request, Response } from 'express'
import { bugadosRepository } from '../repositories/bulgadosCardRepository'

export class BugadosCardController {

    async listBugadosCard(req: Request, res: Response) {
        try {
            const BugadosCard = await bugadosRepository.find()

            return res.status(200).json(BugadosCard)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

    async createBugadosCard(req: Request, res: Response) {
        const info = req.body

        try {
            const newBugadosCard = bugadosRepository.create(info)
            await bugadosRepository.save(newBugadosCard)

            return res.status(201).json(newBugadosCard)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }



    async updateBugadosCard(req: Request, res: Response) {
        const info = req.body
        const { id } = req.params;
        try {
            const BugadosCard = await bugadosRepository.update({ id: Number(id) }, info);
            return res.status(200).json({ message: 'successfully updated Bugados Card' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }
    
    async deleteBugadosCard(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const BugadosCards = await bugadosRepository.delete(id)
            return res.status(200).json({ message: 'successfully deleted Bugados Card' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Sever Error' })
        }
    }

}  
