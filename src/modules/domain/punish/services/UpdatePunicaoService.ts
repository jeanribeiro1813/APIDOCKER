import { getCustomRepository } from 'typeorm';
import PunishRepository from '../../../data/typeorm/repository/PunishRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Punish from '../../../data/typeorm/entities/Punish';
import RedisCache from '../../../../shared/cache/Redischace';

interface IRequest {
  Id: string;
  IdUser: string;
  IsPunishing: boolean;
  TimePunishing: string;
  Describe: string;
}

export default class UpdateInventaryService {
  public async update({
    Id,
    IdUser,
    IsPunishing,
    TimePunishing,
    Describe,
  }: IRequest): Promise<Punish | AppErrors> {
    const repository = getCustomRepository(PunishRepository);

    const invent = await repository.findById(Id);

    const redisCache = new RedisCache();

    if (!invent) {
      throw new AppErrors('Não existe esse item', 404);
    }

    await redisCache.invalidation('api-block-PUNICAO');

    invent.IdUser = IdUser ? IdUser : invent.IdUser;
    invent.IsPunishing = IsPunishing ? IsPunishing : invent.IsPunishing;
    invent.TimePunishing = TimePunishing ? TimePunishing : invent.TimePunishing;
    invent.Describe = Describe ? Describe : invent.Describe;

    const result = await repository.save(invent);

    return result;
  }
}
