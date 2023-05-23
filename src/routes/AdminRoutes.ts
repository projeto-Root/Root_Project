import { Router } from 'express'
import { AdminController } from '../controllers/AdminController'
import auth from "../midware/AuthAdminMidleware"


const routes = Router()

routes.get('/Admin', auth, AdminController.getAdmin)
routes.get('/Admin/:id', auth, AdminController.getAdminById)
routes.post('/Admin', auth, AdminController.createAdmin)
routes.put('/Admin/:id', auth, AdminController.updateAdmin)
routes.delete('/Admin/:id', auth, AdminController.deleteAdmin)



export default routes
