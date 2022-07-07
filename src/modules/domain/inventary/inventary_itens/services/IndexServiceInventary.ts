import { getCustomRepository } from 'typeorm';
import InventaryItensRepository from '../../../../data/typeorm/repository/InventaryItensRepository';
import InventaryItens from '../../../../data/typeorm/entities/InventaryItens';
import { AppErrors } from '../../../../../shared/errors/AppErrors';

interface IRequest {
  itemID: string;
}

export default class IndexServiceUsers {
  public async index({
    itemID,
  }: IRequest): Promise<InventaryItens | AppErrors> {
    const repository = getCustomRepository(InventaryItensRepository);

    const result = await repository.findById(itemID);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
