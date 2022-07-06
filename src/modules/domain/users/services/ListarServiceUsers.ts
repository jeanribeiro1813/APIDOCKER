import { getCustomRepository, Repository } from 'typeorm';
import Users from '../../../data/typeorm/entities/Users';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';

class ListarAllUsers {
  public async listar(): Promise<Users[] | undefined> {
    const repository = getCustomRepository(UsersRepository);

    const result = await repository.findAll();

    return result;
  }
}

export default ListarAllUsers;
