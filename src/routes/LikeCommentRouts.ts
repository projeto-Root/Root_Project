import {Router} from 'express'
import {LikeCommentController} from '../controllers/LikeCommentController'
import auth from "../midware/AuthUserMidleware"


const routes = Router()
routes.get('/like', auth, LikeCommentController.listLikeComment);
routes.get('/comment/:commentIdParams/user/:userIdParams/check', auth, LikeCommentController.checkLikeComment);
routes.post('/comment/:commentIdParams/user/:userIdParams/toggle', auth, LikeCommentController.toggleLikeComment)


export default routes
