import { getCustomRepository } from 'typeorm';
import CoinItemRepository from '../../../../data/typeorm/repository/CoinItemRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import RedisCache from '../../../../../shared/cache/Redischace';

interface IRequest {
  itemHash: string;
}

export default class DeleteInventary {
  public async delete({ itemHash }: IRequest): Promise<void> {
    const repository = getCustomRepository(CoinItemRepository);

    const inventary = await repository.findOne({ itemHash });

    if (!inventary) {
      throw new AppErrors('Não existe esse item', 404);
    }

    const redisCache = new RedisCache();

    await redisCache.invalidation('api-block-COIN');

    await repository.remove(inventary);
  }
}
