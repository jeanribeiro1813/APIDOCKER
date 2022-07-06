import { Request, Response } from 'express';
import CreateServiceUsers from '../services/CreateUsersService';
import ListarAllUsers from '../services/ListarServiceUsers';
import DeleteUsersService from '../services/DeleteUsersService';
import { IndexServiceUsers } from '../services/IndexServiceUsers';

export default class UsersControllers {
  public async create(req: Request, res: Response) {
    const { id, name, email, password, tp_conta } = req.body;

    const result = new CreateServiceUsers();

    const criado = await result.criar({ id, name, email, password, tp_conta });

    return res.status(200).json(criado);
  }

  public async list(req: Request, res: Response) {
    const result = new ListarAllUsers();

    const listando = await result.listar();

    return res.json(listando);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const result = new DeleteUsersService();

    await result.delete({ id });

    return res.json('Deletado com sucesso');
  }

  public async index(req: Request, res: Response) {
    const { id } = req.params;

    const result = new IndexServiceUsers();

    const result_id = await result.index({ id });

    return res.json(result_id);
  }
}
