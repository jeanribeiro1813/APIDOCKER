import { getCustomRepository } from 'typeorm';
import FriendsRepository from '../../../data/typeorm/repository/FriendsRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Friends from '../../../data/typeorm/entities/Friends';

interface IRequest {
  IdUser: string;
}

export default class IndexServiceUsers {
  public async index({ IdUser }: IRequest): Promise<Friends[] | AppErrors> {
    const repository = getCustomRepository(FriendsRepository);

    const result = await repository.find({
      where: { IdUser },
      relations: ['user'],
    });

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
