import { getCustomRepository } from 'typeorm';
import Users from '../../typeorm/entities/Users';
import UsersRepository from '../../typeorm/repository/UsersRepository';
import { AppErrors } from '../../../shared/errors/AppErrors';
import { hash } from 'bcryptjs';

interface IRequest {
  name: string;
  email: string;
  password: string;
  tp_conta: string;
}

export default class CreateService {
  public async criar({
    name,
    email,
    password,
    tp_conta,
  }: IRequest): Promise<Users | undefined> {
    const repository = getCustomRepository(UsersRepository);

    const user = await repository.findByName(name);

    if (user) {
      throw new AppErrors('Esse Usuario já exist', 409);
    }

    const hashed = await hash(password, 8);

    const usuario = repository.create({
      name,
      email,
      password: hashed,
      tp_conta,
    });

    await repository.save(usuario);

    return usuario;
  }
}
