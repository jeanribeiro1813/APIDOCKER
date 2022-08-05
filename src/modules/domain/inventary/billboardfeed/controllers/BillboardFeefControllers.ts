import { Request, Response } from 'express';
import ListBillboardFeedService from '../services/ListBillboardFeedService';
import CreateBillboardFeedService from '../services/CreateBillboardFeedService';
import UpdateBillboardFeedService from '../services/UpdateBillboardFeedService';
import DeleteBillboardFeedService from '../services/DeleteBillboardFeedService';
import IndexServiceBillboardFeed from '../services/IndexServiceBillboardFeed';

export default class UsersControllers {
  public async create(req: Request, res: Response) {
    const { IdBillBoardFeed, UserId, imageProfile, Isimage, Url } = req.body;

    const result = new CreateBillboardFeedService();

    const criado = await result.criar({
      IdBillBoardFeed,
      UserId,
      imageProfile,
      Isimage,
      Url,
    });

    return res.status(200).json(criado);
  }

  public async list(req: Request, res: Response) {
    const result = new ListBillboardFeedService();

    const listando = await result.list();

    return res.json(listando);
  }

  public async delete(req: Request, res: Response) {
    const { IdBillBoardFeed } = req.params;

    const result = new DeleteBillboardFeedService();

    await result.delete({ IdBillBoardFeed });

    return res.json('Deletado com sucesso');
  }

  public async index(req: Request, res: Response) {
    const { IdBillBoardFeed } = req.params;

    const result = new IndexServiceBillboardFeed();

    const result_id = await result.index({ IdBillBoardFeed });

    return res.json(result_id);
  }

  public async update(req: Request, res: Response) {
    const { IdBillBoardFeed } = req.params;

    const { UserId, imageProfile, Isimage, Url } = req.body;

    const result = new UpdateBillboardFeedService();

    const criado = await result.update({
      IdBillBoardFeed,
      UserId,
      imageProfile,
      Isimage,
      Url,
    });

    return res.status(200).json(criado);
  }
}
