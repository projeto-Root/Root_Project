import { Router } from 'express'
import { LoginController } from '../controllers/LoginController'



const routes = Router()
routes.post('/authUser', LoginController.authUser)
routes.post('/authAdmin', LoginController.authAdmin)
routes.post('/sendResetEmailPassword', LoginController.sendPasswordResetEmail)
routes.put('/reset-password/:token', LoginController.resetPassword)
routes.post('/send-confirmation-email', LoginController.sendConfirmationEmail);
routes.get('/confirm-email/:token', LoginController.confirmEmail);


export default routes
