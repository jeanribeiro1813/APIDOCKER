import { getCustomRepository } from 'typeorm';
import InventaryItensRepository from '../../../../data/typeorm/repository/InventaryItensRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';

interface IRequest {
  itemID: string;
}

export default class DeleteInventary {
  public async delete({ itemID }: IRequest): Promise<void> {
    const repository = getCustomRepository(InventaryItensRepository);

    const inventary = await repository.findOne({ itemID });

    if (!inventary) {
      throw new AppErrors('Não existe esse item', 404);
    }

    await repository.remove(inventary);
  }
}
