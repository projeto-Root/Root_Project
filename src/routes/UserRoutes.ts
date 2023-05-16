import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import auth from "../midware/AuthMidleware"


const routes = Router()
routes.get('/User', auth, new UserController().listUser)
routes.get('/Teacher', auth, new UserController().listTeacher)
routes.get('/Teacher/:id', auth, new UserController().listTeacherbyId)
routes.post('/User', new UserController().createUser)
routes.post('/Teacher', auth, new UserController().createTeacher)
routes.put('/Teacher/:id', auth, new UserController().updateTeacher)
routes.delete('/Teacher/:id', auth, new UserController().deleteTeacher)
routes.post('/test', new UserController().test)

export default routes
