import { Router } from 'express'
import { UserPostController } from '../controllers/UserPostController'
import auth from "../midware/AuthUserMidleware"


const routes = Router()
routes.get('/UserPost', auth, UserPostController.listUserPost)
routes.post('/UserPost', UserPostController.createUserPost)
routes.put('/UserPost/:id', auth, UserPostController.updateUserPost)
routes.put('/UserPost/:id', auth, UserPostController.deleteUserPost)
routes.post('/UserPost/comment/', UserPostController.postComment)
export default routes
