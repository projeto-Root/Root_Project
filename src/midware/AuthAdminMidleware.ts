import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken')
import { jwtsecret } from '../config/configAuth';

interface AuthenticatedRequest extends Request {
  loggerUserA?: { Email: string };
  token?: string;
}

function authAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authToken = req.headers['authorization'];

  if (authToken != undefined) {
    const bearer = authToken.split(' ');
    const token = bearer[1];

    jwt.verify(token, jwtsecret.secretJWTA, (err: any, data: any) => {
      if (err) {
        res.status(401);
        res.json({ err: "Token inválido" });
      } else {
        req.token = token;
        req.loggerUserA = { Email: data.email };
        next();
      }
    });
  } else {
    res.status(401);
    res.json({ err: 'Token inválido' });
  }
}

export default authAdmin;
