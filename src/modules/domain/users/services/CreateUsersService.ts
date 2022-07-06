import { getCustomRepository } from 'typeorm';
import Users from '../../../data/typeorm/entities/Users';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import { hash } from 'bcryptjs';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  tp_conta: string;
}

export default class CreateService {
  public async criar({
    id,
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

    // const hashed = await hash(password, 8);

    const usuario = repository.create({
      id,
      name,
      email,
      password,
      tp_conta,
    });

    await repository.save(usuario);

    return usuario;
  }
}
