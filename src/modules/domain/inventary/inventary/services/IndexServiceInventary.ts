import { getCustomRepository } from 'typeorm';
import InventaryRepository from '../../../../data/typeorm/repository/InventaryRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import Inventary from '../../../../data/typeorm/entities/Inventary';

interface IRequest {
  inventoryID: string;
}

export default class IndexServiceUsers {
  public async index({
    inventoryID,
  }: IRequest): Promise<Inventary | AppErrors> {
    const repository = getCustomRepository(InventaryRepository);

    const result = await repository.findById(inventoryID);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
