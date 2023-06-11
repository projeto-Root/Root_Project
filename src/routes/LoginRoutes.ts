import { Router } from 'express'
import { LoginController } from '../controllers/LoginController'



const routes = Router()
routes.post('/authUser', LoginController.authUser)
routes.post('/authAdmin', LoginController.authAdmin)
routes.post('/sendResetEmailPassword', LoginController.sendPasswordResetEmail)
routes.put('/reset-password/:token', LoginController.resetPassword)


export default routes
