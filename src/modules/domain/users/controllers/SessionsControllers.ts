import { Request, Response } from 'express';
import SessionServiceUsers from '../services/SessionServiceUsers';

export default class Sessao {
  public async execute(req: Request, res: Response) {
    const { UserEmail, UserPassword } = req.body;

    const sessao = new SessionServiceUsers();

    const result = await sessao.session({ UserEmail, UserPassword });

    return res.json(result);
  }
}
