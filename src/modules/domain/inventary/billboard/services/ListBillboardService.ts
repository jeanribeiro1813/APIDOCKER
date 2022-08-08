<<<<<<< HEAD
import { getCustomRepository } from 'typeorm';
import BillboardRepository from '../../../../data/typeorm/repository/BillboardRepository';
import Billboard from '../../../../data/typeorm/entities/Billboard';
import RedisCache from '../../../../../shared/cache/Redischace';

export default class ListInventaryService {
  public async list(): Promise<Billboard[] | undefined> {
    const repository = getCustomRepository(BillboardRepository);

    const result = await repository.findAll();

    const redisCache = new RedisCache();

    let bill = await redisCache.recover<Billboard[]>('api-block-BILLBOARD');

    if (!bill) {
      bill = await repository.findAll();

      await redisCache.save('api-block-BILLBOARD', bill);
    }

    return result;
  }
}
=======
import { getCustomRepository } from 'typeorm';
import BillboardRepository from '../../../../data/typeorm/repository/BillboardRepository';
import Billboard from '../../../../data/typeorm/entities/Billboard';

export default class ListInventaryService {
  public async list(): Promise<Billboard[] | undefined> {
    const repository = getCustomRepository(BillboardRepository);

    const result = await repository.findAll();

    return result;
  }
}
>>>>>>> develop
