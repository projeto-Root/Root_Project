import { Application, Request, Response } from 'express';

import Admin from './AdminRoutes'
import User from './UserRoutes'
import Teacher from './TeacherRoutes'
import Login from './LoginRoutes'
import UserPost from './UserPostRoutes'
import SoftTeam from './SoftTeamCardRoutes'
import Bugados from './BugadosCardRoutes'

export const routes = (app: Application) => {

    app.use(Admin)
    app.use(User)
    app.use(Teacher)
    app.use(Login)
    app.use(UserPost)
    app.use(Bugados)

    app.get('/', (_req: Request, res: Response) => {
        res.status(200).send({ mensagem: 'Boas vindas à API' });
    })
}
