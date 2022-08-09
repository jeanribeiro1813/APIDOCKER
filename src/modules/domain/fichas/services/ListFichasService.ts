import { getCustomRepository } from 'typeorm';
import FichasRepository from '../../../data/typeorm/repository/FichasRepository';
import Fichas from '../../../data/typeorm/entities/Fichas';
import RedisCache from '../../../../shared/cache/Redischace';

export default class ListInventaryService {
  public async list(): Promise<Fichas[] | undefined> {
    const repository = getCustomRepository(FichasRepository);

    const result = await repository.findAll();

    const redisCache = new RedisCache();

    let bill = await redisCache.recover<Fichas[]>('api-block-FICHA');

    if (!bill) {
      bill = await repository.findAll();

      await redisCache.save('api-block-FICHA', bill);
    }

    return result;
  }
}
