import { getCustomRepository, Repository } from 'typeorm';
import Users from '../../typeorm/entities/Users';
import UsersRepository from '../../typeorm/repository/UsersRepository';

class ListarAllUsers {
  public async listar(): Promise<Users[] | undefined> {
    const repository = getCustomRepository(UsersRepository);

    const result = await repository.findAll();

    return result;
  }
}

export default ListarAllUsers;
