import { Router } from 'express'
import { BugadosCardController } from '../controllers/BugadosCardController'
import auth from "../midware/AuthAdminMidleware"


const routes = Router()
routes.get('/BugadosCard', new BugadosCardController().listBugadosCard)
routes.post('/BugadosCard', new BugadosCardController().createBugadosCard)
routes.put('/BugadosCard/:id', new BugadosCardController().updateBugadosCard)
routes.delete('/BugadosCard/:id', new BugadosCardController().deleteBugadosCard)
export default routes