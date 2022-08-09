import { getCustomRepository } from 'typeorm';
import BillboardFeedRepository from '../../../../data/typeorm/repository/BillboardFeedRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import RedisCache from '../../../../../shared/cache/Redischace';

interface IRequest {
  IdBillBoardFeed: string;
}

export default class DeleteInventary {
  public async delete({ IdBillBoardFeed }: IRequest): Promise<void> {
    const repository = getCustomRepository(BillboardFeedRepository);

    const inventary = await repository.findOne({ IdBillBoardFeed });

    if (!inventary) {
      throw new AppErrors('Não existe esse item', 404);
    }

    const redisCache = new RedisCache();

    await redisCache.invalidation('api-block-BILLBOARDFEED');

    await repository.remove(inventary);
  }
}
