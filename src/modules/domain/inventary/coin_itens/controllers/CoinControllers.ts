import { Request, Response } from 'express';
import ListCoinService from '../services/ListCoinService';
import CreateCoinService from '../services/CreateCoinService';
import UpdateCoinService from '../services/UpdateCoinService';
import DeleteCoinService from '../services/DeleteCoinService';
import IndexServiceCoin from '../services/IndexServiceCoin';

export default class UsersControllers {
  public async create(req: Request, res: Response) {
    const {
      itemHash,
      itemID,
      displayName,
      description,
      icon,
      stackable,
      category,
    } = req.body;

    const result = new CreateCoinService();

    const criado = await result.criar({
      itemHash,
      itemID,
      displayName,
      description,
      icon,
      stackable,
      category,
    });

    return res.status(200).json(criado);
  }

  public async list(req: Request, res: Response) {
    const result = new ListCoinService();

    const listando = await result.list();

    return res.json(listando);
  }

  public async delete(req: Request, res: Response) {
    const { itemHash } = req.params;

    const result = new DeleteCoinService();

    await result.delete({ itemHash });

    return res.json('Deletado com sucesso');
  }

  public async index(req: Request, res: Response) {
    const { itemHash } = req.params;

    const result = new IndexServiceCoin();

    const result_id = await result.index({ itemHash });

    return res.json(result_id);
  }

  public async update(req: Request, res: Response) {
    const { itemHash } = req.params;

    const { itemID, displayName, description, icon, stackable, category } =
      req.body;

    const result = new UpdateCoinService();

    const criado = await result.update({
      itemHash,
      itemID,
      displayName,
      description,
      icon,
      stackable,
      category,
    });

    return res.status(200).json(criado);
  }
}
