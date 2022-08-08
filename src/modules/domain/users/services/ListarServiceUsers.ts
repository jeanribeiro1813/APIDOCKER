import { getCustomRepository, Repository } from 'typeorm';
import Users from '../../../data/typeorm/entities/Users';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';
import RedisCache from '../../../../shared/cache/Redischace';

class ListarAllUsers {
  public async listar(): Promise<Users[]> {
    const repository = getCustomRepository(UsersRepository);

    const result = await repository.findAll();

    const redisCache = new RedisCache();

    let users = await redisCache.recover<Users[]>('api-block-USERLIST');

    if (!users) {
      users = await repository.findAll();

      await redisCache.save('api-block-USERLIST', users);
    }

    return result;
  }
}

export default ListarAllUsers;
