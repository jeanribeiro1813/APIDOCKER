import { getCustomRepository } from 'typeorm';
import InventaryRepository from '../../../../data/typeorm/repository/InventaryRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';

interface IRequest {
  inventoryID: string;
}

export default class DeleteInventary {
  public async delete({ inventoryID }: IRequest): Promise<void> {
    const repository = getCustomRepository(InventaryRepository);

    const inventary = await repository.findOne({ inventoryID });

    if (!inventary) {
      throw new AppErrors('Não existe esse item', 404);
    }

    await repository.remove(inventary);
  }
}
