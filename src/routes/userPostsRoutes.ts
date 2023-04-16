import { Router } from 'express'
import { userPostController } from '../controllers/userPostsController'



const routes = Router()
routes.get('/UserPost', new userPostController().listUser)
routes.post('/UserPost', new userPostController().createPost)
routes.put('/UserPost/:id', new userPostController().update)
routes.delete('/UserPost/:id', new userPostController().delete)
export default routes