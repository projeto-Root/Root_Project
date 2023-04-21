import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import authPost from "../midware/AuthUserMidleware"


const routes = Router()
routes.get('/User', authPost, new UserController().listUser)
routes.post('/User', authPost, new UserController().createUser)
routes.put('/User', authPost, new UserController().updateUser)
routes.delete('/User', authPost, new UserController().deleteUser)

export default routes
