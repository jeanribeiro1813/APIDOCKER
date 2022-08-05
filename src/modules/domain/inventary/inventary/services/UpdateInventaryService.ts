import { getCustomRepository } from 'typeorm';
import InventaryRepository from '../../../../data/typeorm/repository/InventaryRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import Inventary from '../../../../data/typeorm/entities/Inventary';

interface IRequest {
  inventoryID: string;
  password: string;
}

export default class UpdateInventaryService {
  public async update({
    inventoryID,
    password,
  }: IRequest): Promise<Inventary | AppErrors> {
    const repository = getCustomRepository(InventaryRepository);

    const invent = await repository.findById(inventoryID);

    if (!invent) {
      throw new AppErrors('Não existe esse item', 404);
    }

    invent.password = password ? password : invent.password;

    const result = await repository.save(invent);

    return result;
  }
}
