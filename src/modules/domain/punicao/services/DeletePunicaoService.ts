import { getCustomRepository } from 'typeorm';
import PunicaoRepository from '../../../data/typeorm/repository/PunicaoRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import RedisCache from '../../../../shared/cache/Redischace';

interface IRequest {
  Id: string;
}

export default class DeleteInventary {
  public async delete({ Id }: IRequest): Promise<void> {
    const repository = getCustomRepository(PunicaoRepository);

    const inventary = await repository.findOne({ Id });

    if (!inventary) {
      throw new AppErrors('Não existe esse item', 404);
    }

    const redisCache = new RedisCache();

    await redisCache.invalidation('api-block-PUNICAO');

    await repository.remove(inventary);
  }
}
