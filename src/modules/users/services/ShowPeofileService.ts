import { getCustomRepository } from 'typeorm';
import Users from '../../../modules/typeorm/entities/Users';
import UsersRepository from '../../../modules/typeorm/repository/UsersRepository';
import { AppErrors } from '../../../shared/errors/AppErrors';

//Como esse serviço é com o usuario logado tenho que utilizar o user_id que está dentro da tabela user Token
// No qual já esta logado e assim terei a garantia que o proprio usuario que vai modificar a sua senha
interface IRequest {
  user_id: string;
}

class ShowProfileService {
  public async showProfile({ user_id }: IRequest): Promise<Users> {
    const loadService = getCustomRepository(UsersRepository);

    const user = await loadService.findById(user_id);

    if (!user) {
      throw new AppErrors('Usuario não encontrado', 409);
    }

    return user;
  }
}

export default ShowProfileService;
