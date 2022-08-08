import { AppErrors } from '../../../../shared/errors/AppErrors';
import { getCustomRepository, Repository } from 'typeorm';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../../../../config/auth';
import User from '../../../data/typeorm/entities/Users';

interface IRequest {
  UserEmail: string;
  UserPassword: string;
}

interface IResponseDTO {
  user: User;
  token: string;
}

export default class CreateSession {
  public async session({
    UserEmail,
    UserPassword,
  }: IRequest): Promise<IResponseDTO> {
    const repository = getCustomRepository(UsersRepository);

    const user = await repository.findByEmail(UserEmail);

    if (!user) {
      throw new AppErrors('Incorrect email/password', 404);
    }

    // const password_confirmation = compare(UserPassword, user.UserPassword);

    if (UserPassword !== user.UserPassword) {
      throw new AppErrors('Incorrect email/password', 404);
    }

    const token = sign(
      {
        id: user.UserID,
      },
      authConfig.jwt.secret,
      {
        subject: user.UserID,
        expiresIn: authConfig.jwt.expireIn,
      },
    );

    return { user, token };
  }
}
