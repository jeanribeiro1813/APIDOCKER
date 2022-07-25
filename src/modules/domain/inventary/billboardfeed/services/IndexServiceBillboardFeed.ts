import { getCustomRepository } from 'typeorm';
import BillboardFeedRepository from '../../../../data/typeorm/repository/BillboardFeedRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import BillboardFeed from '../../../../data/typeorm/entities/BillboardFeed';

interface IRequest {
  IdBillBoardFeed: string;
}

export default class IndexServiceUsers {
  public async index({
    IdBillBoardFeed,
  }: IRequest): Promise<BillboardFeed | AppErrors> {
    const repository = getCustomRepository(BillboardFeedRepository);

    const result = await repository.findById(IdBillBoardFeed);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
