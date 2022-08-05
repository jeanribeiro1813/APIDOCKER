import { AppErrors } from '../../../../shared/errors/AppErrors';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';
import UserTokensRepository from '../../../data/typeorm/repository/UserTokensRepository';

interface IRequest {
  UserEmail: string;
}

export default class SendForgotPasswordEmailService {
  public async execute({ UserEmail }: IRequest): Promise<void> {
    const userRepository = getCustomRepository(UsersRepository);
    const userTokenRepository = getCustomRepository(UserTokensRepository);

    const users = await userRepository.findByEmail(UserEmail);

    if (!users) {
      throw new AppErrors('User does not exits', 404);
    }

    console.log(users);

    const token = await userTokenRepository.generate(users.UserID);

    console.log(token);
  }
}
