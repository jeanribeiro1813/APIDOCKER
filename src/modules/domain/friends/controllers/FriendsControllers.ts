import { Request, Response } from 'express';
import CreateService from '../services/CreateService';
import EmailService from '../services/EmailService';
import IdUserService from '../services/IdUserService';
import ListService from '../services/ListService';

export default class UsersControllers {
  public async create(req: Request, res: Response) {
    const { IdUser, IdFriend, EmailUser, status } = req.body;

    const result = new CreateService();

    const criado = await result.criar({
      IdUser,
      IdFriend,
      EmailUser,
      status,
    });

    return res.json(criado);
  }

  public async indexUser(req: Request, res: Response) {
    const { IdUser } = req.params;

    const result = new IdUserService();

    const result_id = await result.index({ IdUser });

    return res.json(result_id);
  }

  public async email(req: Request, res: Response) {
    const { EmailUser } = req.body;

    const result = new EmailService();

    const result_id = await result.mail({ EmailUser });

    return res.json(result_id);
  }

  public async list(req: Request, res: Response) {
    const result = new ListService();

    const result_id = await result.list();

    return res.json(result_id);
  }
}
