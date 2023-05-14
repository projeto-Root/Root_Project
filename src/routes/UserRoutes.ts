import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import auth from "../midware/AuthUserMidleware"


const routes = Router()
routes.get('/User', auth, UserController.listUser)
routes.post('/User', auth, UserController.createUser)
routes.put('/User', auth, UserController.updateUser)
routes.delete('/User', auth, UserController.deleteUser)

export default routes
