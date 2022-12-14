import { getCustomRepository } from 'typeorm';
import MessagesRepository from '../../../data/typeorm/repository/MessagesRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Messages from '../../../data/typeorm/entities/Messages';
import RedisCache from '../../../../shared/cache/Redischace';

interface IRequest {
  Sala: string;
  IdRemetente?: string;
  messages: string;
}

export default class CreateService {
  public async criar({
    Sala,
    IdRemetente,
    messages,
  }: IRequest): Promise<Messages | undefined> {
    const repository = getCustomRepository(MessagesRepository);

    const redisCache = new RedisCache();

    const result = repository.create({
      Sala,
      IdRemetente,
      messages,
    });

    await redisCache.invalidation('api-block-MENSSAGES');

    await repository.save(result);

    return result;
  }
}
