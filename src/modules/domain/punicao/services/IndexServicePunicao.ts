import { getCustomRepository } from 'typeorm';
import PunicaoRepository from '../../../data/typeorm/repository/PunicaoRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Punicao from '../../../data/typeorm/entities/Punicao';

interface IRequest {
  Id: string;
}

export default class IndexServiceUsers {
  public async index({ Id }: IRequest): Promise<Punicao | AppErrors> {
    const repository = getCustomRepository(PunicaoRepository);

    const result = await repository.findById(Id);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
