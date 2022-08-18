import { getCustomRepository } from 'typeorm';
import PunicaoRepository from '../../../data/typeorm/repository/PunishRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Punicao from '../../../data/typeorm/entities/Punish';
import RedisCache from '../../../../shared/cache/Redischace';

interface IRequest {
  Id: string;
  IdUser: string;
  IsPunishing: boolean;
  TimePunishing: string;
  Describe: string;
}

export default class CreateService {
  public async criar({
    Id,
    IdUser,
    IsPunishing,
    TimePunishing,
    Describe,
  }: IRequest): Promise<Punicao | undefined> {
    const repository = getCustomRepository(PunicaoRepository);

    const inventary = await repository.findById(Id);

    if (inventary) {
      throw new AppErrors('Existe esse item', 409);
    }

    const redisCache = new RedisCache();

    const result = repository.create({
      Id,
      IdUser,
      IsPunishing,
      TimePunishing,
      Describe,
    });

    await redisCache.invalidation('api-block-PUNICAO');

    await repository.save(result);

    return result;
  }
}
