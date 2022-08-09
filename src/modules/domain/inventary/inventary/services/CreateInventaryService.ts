import { getCustomRepository } from 'typeorm';
import InventaryRepository from '../../../../data/typeorm/repository/InventaryRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import Inventary from '../../../../data/typeorm/entities/Inventary';
import RedisCache from '../../../../../shared/cache/Redischace';

interface IRequest {
  inventoryID: string;
  password: string;
}

export default class CreateService {
  public async criar({
    inventoryID,
    password,
  }: IRequest): Promise<Inventary | undefined> {
    const repository = getCustomRepository(InventaryRepository);

    const inventary = await repository.findById(inventoryID);

    if (inventary) {
      throw new AppErrors('Existe esse item', 409);
    }

    const redisCache = new RedisCache();

    const result = repository.create({
      inventoryID,
      password,
    });

    await redisCache.invalidation('api-block-INVENTARY');

    await repository.save(result);

    return result;
  }
}
