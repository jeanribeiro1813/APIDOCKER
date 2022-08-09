import { getCustomRepository } from 'typeorm';
import FichasRepository from '../../../data/typeorm/repository/FichasRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import RedisCache from '../../../../shared/cache/Redischace';

interface IRequest {
  Id: string;
}

export default class DeleteInventary {
  public async delete({ Id }: IRequest): Promise<void> {
    const repository = getCustomRepository(FichasRepository);

    const inventary = await repository.findOne({ Id });

    if (!inventary) {
      throw new AppErrors('Não existe esse item', 404);
    }

    const redisCache = new RedisCache();

    await redisCache.invalidation('api-block-FICHAS');

    await repository.remove(inventary);
  }
}
