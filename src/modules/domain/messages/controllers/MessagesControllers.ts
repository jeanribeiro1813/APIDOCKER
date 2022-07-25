import { Request, Response } from 'express';
import CreateMessagesService from '../services/CreateMessagesService';
import DestinatarioService from '../services/DestinatarioService';
import RemetenteService from '../services/RemetenteService';

export default class UsersControllers {
  public async create(req: Request, res: Response) {
    const { IdDestinatário, idRemetente, messages } = req.body;

    const result = new CreateMessagesService();

    const criado = await result.criar({
      IdDestinatário,
      idRemetente,
      messages,
    });

    return res.json(criado);
  }

  public async indexDest(req: Request, res: Response) {
    const { IdDestinatário } = req.params;

    const result = new DestinatarioService();

    const result_id = await result.index({ IdDestinatário });

    return res.json(result_id);
  }

  public async indexReme(req: Request, res: Response) {
    const { idRemetente } = req.params;

    const result = new RemetenteService();

    const result_id = await result.index({ idRemetente });

    return res.json(result_id);
  }
}
