import { Router } from 'express'
import { SoftTeamCardController } from '../controllers/SoftTeamCardController'
import auth from "../midware/AuthAdminMidleware"
import { uploadSingle } from '../midware/uploadMidleware'


const routes = Router()
routes.get('/SoftTeamCard', auth, SoftTeamCardController.listSftCard)
routes.post('/SoftTeamCard', auth, uploadSingle, SoftTeamCardController.createSftCard)
routes.put('/SoftTeamCard/:id', auth, uploadSingle, SoftTeamCardController.updateSftCard)
routes.delete('/SoftTeamCard/:id', auth, SoftTeamCardController.deleteSftCard)
export default routes
