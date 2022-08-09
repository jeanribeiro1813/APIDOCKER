import { getCustomRepository } from 'typeorm';
import FichasRepository from '../../../data/typeorm/repository/FichasRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Fichas from '../../../data/typeorm/entities/Fichas';

interface IRequest {
  Id: string;
}

export default class IndexServiceUsers {
  public async index({ Id }: IRequest): Promise<Fichas | AppErrors> {
    const repository = getCustomRepository(FichasRepository);

    const result = await repository.findById(Id);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
