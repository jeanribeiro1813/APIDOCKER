import { getCustomRepository } from 'typeorm';
import BillboardRepository from '../../../../data/typeorm/repository/BillboardRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import Billboard from '../../../../data/typeorm/entities/Billboard';

interface IRequest {
  BillboardID: string;
}

export default class IndexServiceUsers {
  public async index({
    BillboardID,
  }: IRequest): Promise<Billboard | AppErrors> {
    const repository = getCustomRepository(BillboardRepository);

    const result = await repository.findById(BillboardID);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
