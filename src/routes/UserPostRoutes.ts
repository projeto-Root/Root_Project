import { Router } from 'express'
import { UserPostController } from '../controllers/UserPostController'
import authPost from "../midware/AuthUserMidleware"


const routes = Router()
routes.get('/UserPost', authPost, new UserPostController().listUserPost)
routes.post('/UserPost', authPost, new UserPostController().createUserPost)
routes.put('/UserPost/:id', authPost, new UserPostController().updateUserPost)
routes.put('/UserPost/:id', authPost, new UserPostController().deleteUserPost)

export default routes
