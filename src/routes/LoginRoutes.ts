import { Router } from 'express'
import { LoginController } from '../controllers/LoginController'



const routes = Router()
routes.post('/authUser', LoginController.authUser)
routes.post('/authAdmin', LoginController.authAdmin)


export default routes
