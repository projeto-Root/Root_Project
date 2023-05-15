import { Router } from 'express'
import { SoftTeamCardController } from '../controllers/SoftTeamCardController'
import auth from "../midware/AuthAdminMidleware"


const routes = Router()
routes.get('/SoftTeamCard', auth, new SoftTeamCardController().listSftCard)
routes.post('/SoftTeamCard', auth, new SoftTeamCardController().createSftCard)
routes.put('/SoftTeamCard/:id', auth, new SoftTeamCardController().updateSftCard)
routes.delete('/SoftTeamCard/:id', auth, new SoftTeamCardController().deleteSftCard)
export default routes
