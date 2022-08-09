import { getCustomRepository } from 'typeorm';
import PunicaoRepository from '../../../data/typeorm/repository/PunicaoRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Punicao from '../../../data/typeorm/entities/Punicao';
import RedisCache from '../../../../shared/cache/Redischace';

interface IRequest {
  Id: string;
  IdUser: string;
  tipo_punicao: string;
  tempo_punicao: string;
  status_punicao: string;
}

export default class CreateService {
  public async criar({
    Id,
    IdUser,
    tipo_punicao,
    tempo_punicao,
    status_punicao,
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
      tipo_punicao,
      tempo_punicao,
      status_punicao,
    });

    await redisCache.invalidation('api-block-PUNICAO');

    await repository.save(result);

    return result;
  }
}
