import { AppErrors } from '../../../../shared/errors/AppErrors';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';
import UserTokensRepository from '../../../data/typeorm/repository/UserTokensRepository';
import { isAfter, addHours } from 'date-fns';
import { hash } from 'bcryptjs';

interface IRequest {
  Token: string;
  UserPassword: string;
}

export default class ResetPasswordService {
  public async execute({ Token, UserPassword }: IRequest): Promise<void> {
    const userRepository = getCustomRepository(UsersRepository);
    const userTokenRepository = getCustomRepository(UserTokensRepository);

    const userToken = await userTokenRepository.findByToken(Token);

    if (!userToken) {
      throw new AppErrors('User Token does not exists', 404);
    }

    const user = await userRepository.findById(userToken.UserIDToken);

    if (!user) {
      throw new AppErrors('User does not exists.', 404);
    }

    const tokenCreated = userToken.created_at;

    const compareDate = addHours(tokenCreated, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppErrors('Token expired.', 404);
    }

    // user.password = await hash(password, 8);
    user.UserPassword = UserPassword;

    await userRepository.save(user);
  }
}
