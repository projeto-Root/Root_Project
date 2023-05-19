import { Application, Request, Response } from 'express';

import Admin from './AdminRoutes'
import User from './UserRoutes'
import Teacher from './TeacherRoutes'
import Login from './LoginRoutes'
import UserPost from './UserPostRoutes'
import SoftTeam from './SoftTeamCardRoutes'
import CaliComp from './CaliRoutes'
import BulgadosCard from './BulgadosCardRoutes'
export const routes = (app: Application) => {

    app.use(Admin)
    app.use(User)
    app.use(Teacher)
    app.use(Login)
    app.use(UserPost)
    app.use(SoftTeam)
    app.use(CaliComp)
    app.use(BulgadosCard)
    app.get('/', (_req: Request, res: Response) => {
        res.status(200).send({ mensagem: 'Boas vindas à API' });
    })
}
