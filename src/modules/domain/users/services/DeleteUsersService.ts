import { AppErrors } from '../../../../shared/errors/AppErrors';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';
import RedisCache from '../../../../shared/cache/Redischace';

interface IRequest {
  UserID: string;
}

export default class DeleteProducts {
  public async delete({ UserID }: IRequest): Promise<void> {
    const deleteProducts = getCustomRepository(UsersRepository);

    const result = await deleteProducts.findOne({ UserID });

    if (!result) {
      throw new AppErrors('Não existe esse User', 409);
    }

    const redisCache = new RedisCache();

    await redisCache.invalidation('api-block-USERLIST');

    await deleteProducts.remove(result);
  }
}
