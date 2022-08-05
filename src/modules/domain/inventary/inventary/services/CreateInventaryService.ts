import { getCustomRepository } from 'typeorm';
import InventaryRepository from '../../../../data/typeorm/repository/InventaryRepository';
import { AppErrors } from '../../../../../shared/errors/AppErrors';
import Inventary from '../../../../data/typeorm/entities/Inventary';

interface IRequest {
  inventoryID: string;
  password: string;
}

export default class CreateService {
  public async criar({
    inventoryID,
    password,
  }: IRequest): Promise<Inventary | undefined> {
    const repository = getCustomRepository(InventaryRepository);

    const inventary = await repository.findById(inventoryID);

    if (inventary) {
      throw new AppErrors('Existe esse item', 409);
    }

    const result = repository.create({
      inventoryID,
      password,
    });

    await repository.save(result);

    return result;
  }
}
