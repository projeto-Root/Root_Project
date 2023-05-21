import { Router } from 'express'
import { BugadosCardController } from '../controllers/BugadosCardController'
import auth from "../midware/AuthAdminMidleware"
import { uploadSingle } from '../midware/uploadMidleware'


const routes = Router()
routes.get('/BugadosCard', auth, BugadosCardController.listBugadosCard)
routes.post('/BugadosCard', auth, uploadSingle, BugadosCardController.createBugadosCard)
routes.put('/BugadosCard/:id', auth, uploadSingle, BugadosCardController.updateBugadosCard)
routes.delete('/BugadosCard/:id', auth, BugadosCardController.deleteBugadosCard)
export default routes