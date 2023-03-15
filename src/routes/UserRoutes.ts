import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import auth from "../midware/AuthMidleware"


const routes = Router()
routes.get('/User',auth, new UserController().listUser)
routes.get('/Teacher',auth, new UserController().listTeacher)
routes.post('/User',auth, new UserController().createUser)
routes.post('/Teacher',auth, new UserController().createTeacher)

export default routes
