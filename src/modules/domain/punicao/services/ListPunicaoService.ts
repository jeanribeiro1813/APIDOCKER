import { getCustomRepository } from 'typeorm';
import PunicaoRepository from '../../../data/typeorm/repository/PunicaoRepository';
import Punicao from '../../../data/typeorm/entities/Punicao';
import RedisCache from '../../../../shared/cache/Redischace';

export default class ListInventaryService {
  public async list(): Promise<Punicao[] | undefined> {
    const repository = getCustomRepository(PunicaoRepository);

    const result = await repository.findAll();

    const redisCache = new RedisCache();

    let bill = await redisCache.recover<Punicao[]>('api-block-PUNICAO');

    if (!bill) {
      bill = await repository.findAll();

      await redisCache.save('api-block-PUNICAO', bill);
    }

    return result;
  }
}
