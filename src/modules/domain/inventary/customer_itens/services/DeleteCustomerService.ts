import { getCustomRepository } from 'typeorm';
import CustomerItemRepository from '../../../../data/typeorm/repository/CustomerItemRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';

interface IRequest {
  itemHash: string;
}

export default class DeleteInventary {
  public async delete({ itemHash }: IRequest): Promise<void> {
    const repository = getCustomRepository(CustomerItemRepository);

    const inventary = await repository.findOne({ itemHash });

    if (!inventary) {
      throw new AppErrors('Não existe esse item', 404);
    }

    await repository.remove(inventary);
  }
}
