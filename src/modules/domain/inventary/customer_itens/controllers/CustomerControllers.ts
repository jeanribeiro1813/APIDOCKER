import { Request, Response } from 'express';
import ListCustomerService from '../services/ListCustomerService';
import CreateCustomerService from '../services/CreateCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';
import IndexServiceCustomer from '../services/IndexServiceCustomer';

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

    const result = new CreateCustomerService();

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
    const result = new ListCustomerService();

    const listando = await result.list();

    return res.json(listando);
  }

  public async delete(req: Request, res: Response) {
    const { itemHash } = req.params;

    const result = new DeleteCustomerService();

    await result.delete({ itemHash });

    return res.json('Deletado com sucesso');
  }

  public async index(req: Request, res: Response) {
    const { itemHash } = req.params;

    const result = new IndexServiceCustomer();

    const result_id = await result.index({ itemHash });

    return res.json(result_id);
  }

  public async update(req: Request, res: Response) {
    const { itemHash } = req.params;

    const { itemID, displayName, description, icon, stackable, category } =
      req.body;

    const result = new UpdateCustomerService();

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
