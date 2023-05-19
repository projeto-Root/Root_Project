import { Router } from 'express'
import { BugadosCardController } from '../controllers/BugadosCardController'
import auth from "../midware/AuthAdminMidleware"


const routes = Router()
routes.get('/BugadosCard',auth, new BugadosCardController().listBugadosCard)
routes.post('/BugadosCard',auth, new BugadosCardController().createBugadosCard)
routes.put('/BugadosCard/:id',auth, new BugadosCardController().updateBugadosCard)
routes.delete('/BugadosCard/:id',auth, new BugadosCardController().deleteBugadosCard)
export default routes