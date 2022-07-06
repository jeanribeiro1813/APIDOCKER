import { Request, Response } from 'express';
import SessionServiceUsers from '../services/SessionServiceUsers';

export default class Sessao {
  public async execute(req: Request, res: Response) {
    const { email, password } = req.body;

    const sessao = new SessionServiceUsers();

    const result = await sessao.session({ email, password });

    return res.json(result);
  }
}
