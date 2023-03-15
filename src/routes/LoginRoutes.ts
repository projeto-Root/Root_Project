import { Router } from 'express'
import { LoginController } from '../controllers/LoginController'



const routes = Router()
routes.post('/auth', new LoginController().auth)


export default routes
