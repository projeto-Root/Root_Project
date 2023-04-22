import { Router } from 'express'
import auth from '../midware/AuthMidleware'
import { TeacherController } from '../controllers/TeacherController'


const routes = Router()
routes.get('/Teacher', auth, TeacherController.getTeacher)
routes.get('/Teacher/:id', auth, TeacherController.getTeacherById)
routes.post('/Teacher', auth, TeacherController.createTeacher)
routes.put('/Teacher/:id', auth, TeacherController.updateTeacher)
routes.delete('/Teacher/:id', auth, TeacherController.deleteTeacher)

export default routes
