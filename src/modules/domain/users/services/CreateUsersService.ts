import { getCustomRepository } from 'typeorm';
import Users from '../../../data/typeorm/entities/Users';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import { hash } from 'bcryptjs';

interface IRequest {
  UserID: string;
  UserEmail: string;
  UserPassword: string;
}

export default class CreateService {
  public async criar({
    UserID,
    UserEmail,
    UserPassword,
  }: IRequest): Promise<Users | undefined> {
    const repository = getCustomRepository(UsersRepository);

    const user = await repository.findByEmail(UserEmail);

    if (user) {
      throw new AppErrors('Esse Usuario já exist', 409);
    }

    // const hashed = await hash(password, 8);

    const usuario = repository.create({
      UserID,
      UserEmail,
      UserPassword,
    });

    await repository.save(usuario);

    return usuario;
  }
}
