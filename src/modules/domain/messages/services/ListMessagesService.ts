import { getCustomRepository } from 'typeorm';
import MessagesRepository from '../../../data/typeorm/repository/MessagesRepository';
import Messages from '../../../data/typeorm/entities/Messages';
import RedisCache from '../../../../shared/cache/Redischace';

export default class ListInventaryService {
  public async list(): Promise<Messages[] | undefined> {
    const repository = getCustomRepository(MessagesRepository);

    const result = await repository.findAll();

    const redisCache = new RedisCache();

    let message = await redisCache.recover<Messages[]>('api-block-MENSSAGES');

    if (!message) {
      message = await repository.findAll();

      await redisCache.save('api-block-MENSSAGES', message);
    }
    return result;
  }
}
