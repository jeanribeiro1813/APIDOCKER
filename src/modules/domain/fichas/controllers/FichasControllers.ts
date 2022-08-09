import { Request, Response } from 'express';
import ListFichasService from '../services/ListFichasService';
import CreateFichasService from '../services/CreateFichasService';
import UpdateFichasService from '../services/UpdateFichasService';
import DeleteFichasService from '../services/DeleteFichasService';
import IndexServiceFichas from '../services/IndexServiceFichas';

export default class UsersControllers {
  public async create(req: Request, res: Response) {
    const { Id, icone, name, price, quantity, availabillity } = req.body;

    const result = new CreateFichasService();

    const criado = await result.criar({
      Id,
      icone,
      name,
      price,
      quantity,
      availabillity,
    });

    return res.status(200).json(criado);
  }

  public async list(req: Request, res: Response) {
    const result = new ListFichasService();

    const listando = await result.list();

    return res.json(listando);
  }

  public async delete(req: Request, res: Response) {
    const { Id } = req.params;

    const result = new DeleteFichasService();

    await result.delete({ Id });

    return res.json('Deletado com sucesso');
  }

  public async index(req: Request, res: Response) {
    const { Id } = req.params;

    const result = new IndexServiceFichas();

    const result_id = await result.index({ Id });

    return res.json(result_id);
  }

  public async update(req: Request, res: Response) {
    const { Id } = req.params;

    const { icone, name, price, quantity, availabillity } = req.body;

    const result = new UpdateFichasService();

    const criado = await result.update({
      Id,
      icone,
      name,
      price,
      quantity,
      availabillity,
    });

    return res.status(200).json(criado);
  }
}
