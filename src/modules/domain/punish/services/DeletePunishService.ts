import { getCustomRepository } from 'typeorm';
import PunishRepository from '../../../data/typeorm/repository/PunishRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import RedisCache from '../../../../shared/cache/Redischace';

interface IRequest {
  Id: string;
}

export default class DeleteInventary {
  public async delete({ Id }: IRequest): Promise<void> {
    const repository = getCustomRepository(PunishRepository);

    const inventary = await repository.findOne({ Id });

    if (!inventary) {
      throw new AppErrors('Não existe esse item', 404);
    }

    const redisCache = new RedisCache();

    await redisCache.invalidation('api-block-PUNICAO');

    await repository.remove(inventary);
  }
}
