import { getCustomRepository } from 'typeorm';
import Users from '../../../data/typeorm/entities/Users';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import RedisCache from '../../../../shared/cache/Redischace';

interface IRequest {
  UserID: string;
  UserEmail: string;
  UserPassword: string;
  TpConta: string;
}

export default class CreateService {
  public async criar({
    UserID,
    UserEmail,
    UserPassword,
    TpConta,
  }: IRequest): Promise<Users | undefined> {
    const repository = getCustomRepository(UsersRepository);

    const user = await repository.findByEmail(UserEmail);

    if (user) {
      throw new AppErrors('Esse Usuario já exist', 409);
    }

    const redisCache = new RedisCache();

    // const hashed = await hash(password, 8);

    const usuario = repository.create({
      UserID,
      UserEmail,
      UserPassword,
      TpConta,
    });

    await redisCache.invalidation('api-block-USERLIST');

    await repository.save(usuario);

    return usuario;
  }
}
