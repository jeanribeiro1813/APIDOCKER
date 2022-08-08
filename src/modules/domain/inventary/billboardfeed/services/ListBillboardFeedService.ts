<<<<<<< HEAD
import { getCustomRepository } from 'typeorm';
import BillboardFeedRepository from '../../../../data/typeorm/repository/BillboardFeedRepository';
import BillboardFeed from '../../../../data/typeorm/entities/BillboardFeed';
import RedisCache from '../../../../../shared/cache/Redischace';

export default class ListInventaryService {
  public async list(): Promise<BillboardFeed[] | undefined> {
    const repository = getCustomRepository(BillboardFeedRepository);

    const result = await repository.findAll();

    const redisCache = new RedisCache();

    let bill = await redisCache.recover<BillboardFeed[]>(
      'api-block-BILLBOARDFEED',
    );

    if (!bill) {
      bill = await repository.findAll();

      await redisCache.save('api-block-BILLBOARDFEED', bill);
    }

    return result;
  }
}
=======
import { getCustomRepository } from 'typeorm';
import BillboardFeedRepository from '../../../../data/typeorm/repository/BillboardFeedRepository';
import BillboardFeed from '../../../../data/typeorm/entities/BillboardFeed';

export default class ListInventaryService {
  public async list(): Promise<BillboardFeed[] | undefined> {
    const repository = getCustomRepository(BillboardFeedRepository);

    const result = await repository.findAll();

    return result;
  }
}
>>>>>>> develop
