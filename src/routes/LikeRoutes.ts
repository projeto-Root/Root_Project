import { Router } from 'express'
import { LikeController } from '../controllers/LikeController'
import auth from "../midware/AuthUserMidleware"



const routes = Router()
routes.get('/check',auth, LikeController.checkLike);
routes.post('/toggle',auth, LikeController.toggleLike)


export default routes
