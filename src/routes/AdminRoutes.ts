import { Router } from 'express'
import { AdminController } from '../controllers/AdminController'
import auth from "../midware/AuthMidleware"


const routes = Router()
routes.get('/Admin', auth, AdminController.listUser)
routes.get('/Teacher', auth, AdminController.listTeacher)
routes.get('/Teacher/:id', auth, AdminController.listTeacherbyId)
routes.post('/Admin', auth, AdminController.createUser)
routes.post('/Teacher', auth, AdminController.createTeacher)
routes.put('/Teacher/:id', auth, AdminController.updateTeacher)
routes.delete('/Teacher/:id', auth, AdminController.deleteTeacher)

export default routes
