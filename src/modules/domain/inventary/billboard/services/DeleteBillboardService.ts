import { getCustomRepository } from 'typeorm';
import BillboardRepository from '../../../../data/typeorm/repository/BillboardRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';

interface IRequest {
  BillboardID: string;
}

export default class DeleteInventary {
  public async delete({ BillboardID }: IRequest): Promise<void> {
    const repository = getCustomRepository(BillboardRepository);

    const inventary = await repository.findOne({ BillboardID });

    if (!inventary) {
      throw new AppErrors('Não existe esse item', 404);
    }

    await repository.remove(inventary);
  }
}
