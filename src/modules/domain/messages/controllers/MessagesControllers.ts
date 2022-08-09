import { Request, Response } from 'express';
import CreateMessagesService from '../services/CreateMessagesService';
import RemetenteService from '../services/RemetenteService';
import ListMessagesService from '../services/ListMessagesService';

export default class UsersControllers {
  public async create(req: Request, res: Response) {
    const { Sala, IdRemetente, messages } = req.body;

    const result = new CreateMessagesService();

    const criado = await result.criar({
      Sala,
      IdRemetente,
      messages,
    });

    return res.json(criado);
  }

  public async indexReme(req: Request, res: Response) {
    const { IdRemetente } = req.params;

    const result = new RemetenteService();

    const result_id = await result.index({ IdRemetente });

    return res.json(result_id);
  }

  public async list(req: Request, res: Response) {
    const result = new ListMessagesService();

    const result_id = await result.list();

    return res.json(result_id);
  }
}
