import { Request, Response } from 'express';
import CreateServiceUsers from '../services/CreateUsersService';
import ListarAllUsers from '../services/ListarServiceUsers';

export default class UsersControllers {
  public async create(req: Request, res: Response) {
    const { name, email, password, tp_conta } = req.body;

    const result = new CreateServiceUsers();

    const criado = await result.criar({ name, email, password, tp_conta });

    return res.status(200).json(criado);
  }

  public async list(req: Request, res: Response) {
    const result = new ListarAllUsers();

    const listando = await result.listar();

    return res.json(listando);
  }
}
