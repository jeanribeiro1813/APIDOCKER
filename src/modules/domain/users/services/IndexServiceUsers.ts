import { getCustomRepository } from 'typeorm';
import Users from '../../../data/typeorm/entities/Users';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';

interface IRequest {
  id: string;
}

export class IndexServiceUsers {
  public async index({ id }: IRequest): Promise<Users | AppErrors> {
    const repository = getCustomRepository(UsersRepository);

    const result = await repository.findById(id);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
