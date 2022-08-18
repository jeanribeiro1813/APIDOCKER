import { getCustomRepository } from 'typeorm';
import PunishRepository from '../../../data/typeorm/repository/PunishRepository';
import Punish from '../../../data/typeorm/entities/Punish';
import RedisCache from '../../../../shared/cache/Redischace';

export default class ListInventaryService {
  public async list(): Promise<Punish[] | undefined> {
    const repository = getCustomRepository(PunishRepository);

    const result = await repository.findAll();

    const redisCache = new RedisCache();

    let bill = await redisCache.recover<Punish[]>('api-block-PUNICAO');

    if (!bill) {
      bill = await repository.findAll();

      await redisCache.save('api-block-PUNICAO', bill);
    }

    return result;
  }
}
