import { Router } from 'express'
import { UserPostController } from '../controllers/UserPostController'
import auth from "../midware/AuthUserMidleware"


const routes = Router()
routes.get('/UserPost', auth, UserPostController.listUserPost)
routes.get('/UserPostLike', auth, UserPostController.listUserPostLike)
routes.get('/UserPostOrderLike', auth, UserPostController.listOrderUserPostLike)
routes.post('/UserPost', UserPostController.createUserPost)
routes.put('/UserPost/:id', auth, UserPostController.updateUserPost)
routes.put('/UserPost/:id', auth, UserPostController.deleteUserPost)

export default routes
