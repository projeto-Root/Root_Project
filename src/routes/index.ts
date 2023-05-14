import { Application, Request, Response } from 'express';

import Admin from './AdminRoutes'
import Teacher from './TeacherRoutes'
import Login from './LoginRoutes'
import UserPost from './UserPostRoutes'

export const routes = (app: Application) => {

    app.use(Admin)
    app.use(Teacher)
    app.use(Login)
    app.use(UserPost)

    app.get('/', (_req: Request, res: Response) => {
        res.status(200).send({ mensagem: 'Boas vindas à API' });
    })
}
