import {Router} from 'express'
import {LikeController} from '../controllers/LikeController'
import auth from "../midware/AuthUserMidleware"


const routes = Router()
routes.get('/like', auth, LikeController.listLike);
routes.get('/userPost/:userPostIdParams/user/:userIdParams/check', auth, LikeController.checkLike);
routes.post('/userPost/:userPostIdParams/user/:userIdParams/toggle', auth, LikeController.toggleLike)


export default routes
