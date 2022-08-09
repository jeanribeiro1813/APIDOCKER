import { getCustomRepository } from 'typeorm';
import InventaryRepository from '../../../../data/typeorm/repository/InventaryRepository';
import Inventary from '../../../../data/typeorm/entities/Inventary';
import RedisCache from '../../../../../shared/cache/Redischace';

export default class ListInventaryService {
  public async list(): Promise<Inventary[] | undefined> {
    const repository = getCustomRepository(InventaryRepository);

    const result = await repository.findAll();

    const redisCache = new RedisCache();

    let inventary = await redisCache.recover<Inventary[]>(
      'api-block-INVENTARY',
    );

    if (!inventary) {
      inventary = await repository.findAll();

      await redisCache.save('api-block-INVENTARY', inventary);
    }

    return result;
  }
}
