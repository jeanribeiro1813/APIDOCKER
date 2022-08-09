import { getCustomRepository } from 'typeorm';
import InventaryItensRepository from '../../../../data/typeorm/repository/InventaryItensRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import InventaryItens from '../../../../data/typeorm/entities/InventaryItens';
import RedisCache from '../../../../../shared/cache/Redischace';

interface IRequest {
  itemHash: string;
  itemID: string;
  displayName: string;
  description: string;
  icon: string;
  stackable: string;
  category: string;
}

export default class CreateService {
  public async criar({
    itemHash,
    itemID,
    displayName,
    description,
    icon,
    stackable,
    category,
  }: IRequest): Promise<InventaryItens | undefined> {
    const repository = getCustomRepository(InventaryItensRepository);

    const inventary = await repository.findByName(displayName);

    if (inventary) {
      throw new AppErrors('Existe esse item', 409);
    }

    const redisCache = new RedisCache();

    const result = repository.create({
      itemHash,
      itemID,
      displayName,
      description,
      icon,
      stackable,
      category,
    });

    await redisCache.invalidation('api-block-INVENTARYITENS');

    await repository.save(result);

    return result;
  }
}
