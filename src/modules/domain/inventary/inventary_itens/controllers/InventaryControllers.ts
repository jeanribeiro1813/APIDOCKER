import { Request, Response } from 'express';
import ListInventaryService from '../services/ListInventaryService';
import CreateInventaryService from '../services/CreateInventaryService';
import UpdateInventaryService from '../services/UpdateInventaryService';
import DeleteInventaryService from '../services/DeleteInventaryService';
import IndexServiceInventary from '../services/IndexServiceInventary';

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

    const result = new CreateInventaryService();

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
    const result = new ListInventaryService();

    const listando = await result.list();

    return res.json(listando);
  }

  public async delete(req: Request, res: Response) {
    const { itemHash } = req.params;

    const result = new DeleteInventaryService();

    await result.delete({ itemHash });

    return res.json('Deletado com sucesso');
  }

  public async index(req: Request, res: Response) {
    const { itemHash } = req.params;

    const result = new IndexServiceInventary();

    const result_id = await result.index({ itemHash });

    return res.json(result_id);
  }

  public async update(req: Request, res: Response) {
    const { itemHash } = req.params;

    const { itemID, displayName, description, icon, stackable, category } =
      req.body;

    const result = new UpdateInventaryService();

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
