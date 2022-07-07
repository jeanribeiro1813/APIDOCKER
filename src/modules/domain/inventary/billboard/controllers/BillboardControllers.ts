import { Request, Response } from 'express';
import ListBillboardService from '../services/ListBillboardService';
import CreateBillboardService from '../services/CreateBillboardService';
import UpdateBillboardService from '../services/UpdateBillboardService';
import DeleteBillboardService from '../services/DeleteBillboardService';
import IndexServiceBillboard from '../services/IndexServiceBillboard';

export default class UsersControllers {
  public async create(req: Request, res: Response) {
    const { BillboardID, width, height, vectorx, vectory, vectorz } = req.body;

    const result = new CreateBillboardService();

    const criado = await result.criar({
      BillboardID,
      width,
      height,
      vectorx,
      vectory,
      vectorz,
    });

    return res.status(200).json(criado);
  }

  public async list(req: Request, res: Response) {
    const result = new ListBillboardService();

    const listando = await result.list();

    return res.json(listando);
  }

  public async delete(req: Request, res: Response) {
    const { BillboardID } = req.params;

    const result = new DeleteBillboardService();

    await result.delete({ BillboardID });

    return res.json('Deletado com sucesso');
  }

  public async index(req: Request, res: Response) {
    const { BillboardID } = req.params;

    const result = new IndexServiceBillboard();

    const result_id = await result.index({ BillboardID });

    return res.json(result_id);
  }

  public async update(req: Request, res: Response) {
    const { BillboardID } = req.params;

    const { width, height, vectorx, vectory, vectorz } = req.body;

    const result = new UpdateBillboardService();

    const criado = await result.update({
      BillboardID,
      width,
      height,
      vectorx,
      vectory,
      vectorz,
    });

    return res.status(200).json(criado);
  }
}
