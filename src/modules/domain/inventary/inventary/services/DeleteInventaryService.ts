import { getCustomRepository } from 'typeorm';
import InventaryRepository from '../../../../data/typeorm/repository/InventaryRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import RedisCache from '../../../../../shared/cache/Redischace';

interface IRequest {
  inventoryID: string;
}

export default class DeleteInventary {
  public async delete({ inventoryID }: IRequest): Promise<void> {
    const repository = getCustomRepository(InventaryRepository);

    const inventary = await repository.findOne({ inventoryID });

    if (!inventary) {
      throw new AppErrors('Não existe esse item', 404);
    }

    const redisCache = new RedisCache();

    await redisCache.invalidation('api-block-INVENTARY');

    await repository.remove(inventary);
  }
}
