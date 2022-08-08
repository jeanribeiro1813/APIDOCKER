import { getCustomRepository } from 'typeorm';
import CoinItemRepository from '../../../../data/typeorm/repository/CoinItemRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import CoinItem from '../../../../data/typeorm/entities/CoinItem';

interface IRequest {
  itemHash: string;
}

export default class IndexServiceUsers {
  public async index({ itemHash }: IRequest): Promise<CoinItem | AppErrors> {
    const repository = getCustomRepository(CoinItemRepository);

    const result = await repository.findByHashId(itemHash);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
