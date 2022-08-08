import { getCustomRepository } from 'typeorm';
import FriendsRepository from '../../../data/typeorm/repository/FriendsRepository';
import Friends from '../../../data/typeorm/entities/Friends';
import RedisCache from '../../../../shared/cache/Redischace';

export default class ListInventaryService {
  public async list(): Promise<Friends[] | undefined> {
    const repository = getCustomRepository(FriendsRepository);

    const result = await repository.findAll();

    const redisCache = new RedisCache();

    let fri = await redisCache.recover<Friends[]>('api-block-FRIENDS');

    if (!fri) {
      fri = await repository.findAll();

      await redisCache.save('api-block-FRIENDS', fri);
    }

    return result;
  }
}
