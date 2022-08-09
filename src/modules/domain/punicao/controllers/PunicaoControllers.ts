import { Request, Response } from 'express';
import ListPunicaoService from '../services/ListPunicaoService';
import CreatePunicaoService from '../services/CreatePunicaoService';
import UpdatePunicaoService from '../services/UpdatePunicaoService';
import DeletePunicaoService from '../services/DeletePunicaoService';
import IndexServicePunicao from '../services/IndexServicePunicao';

export default class UsersControllers {
  public async create(req: Request, res: Response) {
    const { Id, IdUser, tipo_punicao, tempo_punicao, status_punicao } =
      req.body;

    const result = new CreatePunicaoService();

    const criado = await result.criar({
      Id,
      IdUser,
      tipo_punicao,
      tempo_punicao,
      status_punicao,
    });

    return res.status(200).json(criado);
  }

  public async list(req: Request, res: Response) {
    const result = new ListPunicaoService();

    const listando = await result.list();

    return res.json(listando);
  }

  public async delete(req: Request, res: Response) {
    const { Id } = req.params;

    const result = new DeletePunicaoService();

    await result.delete({ Id });

    return res.json('Deletado com sucesso');
  }

  public async index(req: Request, res: Response) {
    const { Id } = req.params;

    const result = new IndexServicePunicao();

    const result_id = await result.index({ Id });

    return res.json(result_id);
  }

  public async update(req: Request, res: Response) {
    const { Id } = req.params;

    const { IdUser, tipo_punicao, tempo_punicao, status_punicao } = req.body;

    const result = new UpdatePunicaoService();

    const criado = await result.update({
      Id,
      IdUser,
      tipo_punicao,
      tempo_punicao,
      status_punicao,
    });

    return res.status(200).json(criado);
  }
}
