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

export default class UpdateInventaryService {
  public async update({
    Id,
    IdUser,
    tipo_punicao,
    tempo_punicao,
    status_punicao,
  }: IRequest): Promise<Punicao | AppErrors> {
    const repository = getCustomRepository(PunicaoRepository);

    const invent = await repository.findById(Id);

    const redisCache = new RedisCache();

    if (!invent) {
      throw new AppErrors('Não existe esse item', 404);
    }

    await redisCache.invalidation('api-block-PUNICAO');

    invent.IdUser = IdUser ? IdUser : invent.IdUser;
    invent.tipo_punicao = tipo_punicao ? tipo_punicao : invent.tipo_punicao;
    invent.tempo_punicao = tempo_punicao ? tempo_punicao : invent.tempo_punicao;
    invent.status_punicao = status_punicao
      ? status_punicao
      : invent.status_punicao;

    const result = await repository.save(invent);

    return result;
  }
}
