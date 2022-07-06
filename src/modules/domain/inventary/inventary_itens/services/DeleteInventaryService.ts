import { getCustomRepository } from 'typeorm';
import InventaryItensRepository from '../../../../data/typeorm/repository/InventaryItensRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';

interface IRequest {
  item_id: string;
}

export default class DeleteInventary {
  public async delete({ item_id }: IRequest): Promise<void> {
    const repository = getCustomRepository(InventaryItensRepository);

    const inventary = await repository.findOne({ item_id });

    if (!inventary) {
      throw new AppErrors('Não existe esse item', 404);
    }

    await repository.remove(inventary);
  }
}
