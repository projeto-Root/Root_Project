import { Router } from 'express'
import auth from '../midware/AuthAdminMidleware'
import { TeacherController } from '../controllers/TeacherController'
import { uploadArray } from '../midware/uploadMidleware'


const routes = Router()
routes.get('/Teacher', auth, TeacherController.getTeacher)
routes.get('/Teacher/:id', auth, TeacherController.getTeacherById)
routes.post('/Teacher', auth, uploadArray, TeacherController.createTeacher)
routes.put('/Teacher/:id', auth, uploadArray, TeacherController.updateTeacher)
routes.delete('/Teacher/:id', auth, TeacherController.deleteTeacher)

export default routes
