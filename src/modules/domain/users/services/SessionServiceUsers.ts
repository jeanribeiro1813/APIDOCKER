import { AppErrors } from '../../../../shared/errors/AppErrors';
import { getCustomRepository, Repository } from 'typeorm';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../../../../config/auth';
import User from '../../../data/typeorm/entities/Users';

interface IRequest {
  email: string;
  password: string;
}

interface IResponseDTO {
  user: User;
  token: string;
}

export default class CreateSession {
  public async session({ email, password }: IRequest): Promise<IResponseDTO> {
    const repository = getCustomRepository(UsersRepository);

    const user = await repository.findByEmail(email);

    if (!user) {
      throw new AppErrors('Incorrect email/password', 404);
    }

    const password_confirmation = compare(password, user.password);

    if (!password_confirmation) {
      throw new AppErrors('Incorrect email/password', 404);
    }

    const token = sign(
      {
        id: user.id,
      },
      authConfig.jwt.secret,
      {
        subject: user.id,
        expiresIn: authConfig.jwt.expireIn,
      },
    );

    return { user, token };
  }
}
