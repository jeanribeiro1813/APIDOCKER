<<<<<<< HEAD
import { getCustomRepository } from 'typeorm';
import CoinItemRepository from '../../../../data/typeorm/repository/CoinItemRepository';
import CoinItem from '../../../../data/typeorm/entities/CoinItem';
import RedisCache from '../../../../../shared/cache/Redischace';

export default class ListInventaryService {
  public async list(): Promise<CoinItem[] | undefined> {
    const repository = getCustomRepository(CoinItemRepository);

    const result = await repository.findAll();

    const redisCache = new RedisCache();

    let coin = await redisCache.recover<CoinItem[]>('api-block-COIN');

    if (!coin) {
      coin = await repository.findAll();

      await redisCache.save('api-block-COIN', coin);
    }

    return result;
  }
}
=======
import { getCustomRepository } from 'typeorm';
import CoinItemRepository from '../../../../data/typeorm/repository/CoinItemRepository';
import CoinItem from '../../../../data/typeorm/entities/CoinItem';

export default class ListInventaryService {
  public async list(): Promise<CoinItem[] | undefined> {
    const repository = getCustomRepository(CoinItemRepository);

    const result = await repository.findAll();

    return result;
  }
}
>>>>>>> develop
