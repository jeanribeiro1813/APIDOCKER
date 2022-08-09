import { getCustomRepository } from 'typeorm';
import CustomerItemRepository from '../../../../data/typeorm/repository/CustomerItemRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import CustomerItem from '../../../../data/typeorm/entities/CustomerItem';

interface IRequest {
  itemHash: string;
}

export default class IndexServiceUsers {
  public async index({
    itemHash,
  }: IRequest): Promise<CustomerItem | AppErrors> {
    const repository = getCustomRepository(CustomerItemRepository);

    const result = await repository.findByHashId(itemHash);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
