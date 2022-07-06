import { AppErrors } from '../../../../shared/errors/AppErrors';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';
import UserTokensRepository from '../../../data/typeorm/repository/UserTokensRepository';

interface IRequest {
  email: string;
}

export default class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const userRepository = getCustomRepository(UsersRepository);
    const userTokenRepository = getCustomRepository(UserTokensRepository);

    const users = await userRepository.findByEmail(email);

    if (!users) {
      throw new AppErrors('User does not exits', 404);
    }

    console.log(users);

    const token = await userTokenRepository.generate(users.id);

    console.log(token);
  }
}
