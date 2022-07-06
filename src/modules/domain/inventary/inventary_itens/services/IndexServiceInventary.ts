import { getCustomRepository } from 'typeorm';
import InventaryItensRepository from '../../../../data/typeorm/repository/InventaryItensRepository';
import InventaryItens from '../../../../data/typeorm/entities/InventaryItens';
import { AppErrors } from '../../../../../shared/errors/AppErrors';

interface IRequest {
  item_id: string;
}

export default class IndexServiceUsers {
  public async index({
    item_id,
  }: IRequest): Promise<InventaryItens | AppErrors> {
    const repository = getCustomRepository(InventaryItensRepository);

    const result = await repository.findById(item_id);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
