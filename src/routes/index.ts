import { Application, Request, Response } from 'express';

import User from './UserRoutes'
import Teacher from './TeacherRoutes'
import Login from './LoginRoutes'
import userPost from './userPostsRoutes'
export const routes = (app: Application) => {

    app.use(User)
    app.use(Teacher)
    app.use(Login)
    app.use(userPost)
    
    app.get('/', (_req: Request, res: Response) => {
        res.status(200).send({ mensagem: 'Boas vindas à API' });
    })
}
