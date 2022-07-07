import { getCustomRepository } from 'typeorm';
import Users from '../../../data/typeorm/entities/Users';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';

interface IRequest {
  UserID: string;
}

export class IndexServiceUsers {
  public async index({ UserID }: IRequest): Promise<Users | AppErrors> {
    const repository = getCustomRepository(UsersRepository);

    const result = await repository.findById(UserID);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
