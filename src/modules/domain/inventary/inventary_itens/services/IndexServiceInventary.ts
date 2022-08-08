import { getCustomRepository } from 'typeorm';
import InventaryItensRepository from '../../../../data/typeorm/repository/InventaryItensRepository';
import InventaryItens from '../../../../data/typeorm/entities/InventaryItens';
import { AppErrors } from '../../../../../shared/errors/AppErrors';

interface IRequest {
  itemHash: string;
}

export default class IndexServiceUsers {
  public async index({
    itemHash,
  }: IRequest): Promise<InventaryItens | AppErrors> {
    const repository = getCustomRepository(InventaryItensRepository);

    const result = await repository.findByHashId(itemHash);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
