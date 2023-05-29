import { Router } from 'express'
import { CommentController } from '../controllers/CommentController'
import auth from "../midware/AuthUserMidleware"


const routes = Router()
routes.get('/Comment', auth, CommentController.listComment)
routes.post('/Comment',auth, CommentController.createComment)
routes.put('/Comment/:id', auth, CommentController.updateComment)
routes.delete('/Comment/:id', auth, CommentController.deleteComment)

export default routes
