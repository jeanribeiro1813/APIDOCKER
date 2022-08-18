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
  IsPunishing: boolean;
  PunishingType: boolean;
}

export default class CreateService {
  public async criar({
    UserID,
    UserEmail,
    UserPassword,
    TpConta,
    IsPunishing,
    PunishingType,
  }: IRequest): Promise<Users | undefined> {
    const repository = getCustomRepository(UsersRepository);

    const user = await repository.findById(UserID);

    const redisCache = new RedisCache();

    if (!user) {
      throw new AppErrors('Esse Usuario não existe', 409);
    }

    await redisCache.invalidation('api-block-USERLIST');

    user.UserEmail = UserEmail ? UserEmail : user.UserEmail;
    user.UserPassword = UserPassword ? UserPassword : user.UserPassword;
    user.TpConta = TpConta ? TpConta : user.TpConta;
    user.IsPunishing = IsPunishing ? IsPunishing : user.IsPunishing;
    user.PunishingType = PunishingType ? PunishingType : user.PunishingType;

    await repository.save(user);

    return user;
  }
}
