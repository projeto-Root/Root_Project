import { Router } from 'express'
import { CaliCompController } from '../controllers/CalicompController'
import auth from '../midware/AuthAdminMidleware'


const routes = Router()
routes.get('/CaliCard',auth, new CaliCompController().listCali)
routes.post('/CaliCard',auth, new CaliCompController().createCali)
routes.put('/CaliCard/:id',auth, new CaliCompController().updateCali)
routes.delete('/CaliCard/:id',auth, new CaliCompController().deleteCali)
export default routes
