import { Router } from 'express'
import { CaliCompController } from '../controllers/CalicompController'
import auth from "../midware/AuthAdminMidleware"
import { uploadSingle } from '../midware/uploadMidleware'


const routes = Router()
routes.get('/CaliCard', auth, CaliCompController.listCali)
routes.post('/CaliCard', auth, uploadSingle, CaliCompController.createCali)
routes.put('/CaliCard/:id', auth, uploadSingle, CaliCompController.updateCali)
routes.delete('/CaliCard/:id', auth, CaliCompController.deleteCali)
export default routes
