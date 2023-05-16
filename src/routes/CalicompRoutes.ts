import { Router } from 'express'
import { CalicompController } from '../controllers'



const routes = Router()
routes.post('/Calicomp', CalicompController.createPost)
export default routes