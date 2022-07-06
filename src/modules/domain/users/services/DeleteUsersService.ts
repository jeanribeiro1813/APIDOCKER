import { AppErrors } from '../../../../shared/errors/AppErrors';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';

interface IRequest {
  id: string;
}

export default class DeleteProducts {
  public async delete({ id }: IRequest): Promise<void> {
    const deleteProducts = getCustomRepository(UsersRepository);

    const result = await deleteProducts.findOne({ id });

    if (!result) {
      throw new AppErrors('Não existe esse User', 409);
    }

    await deleteProducts.remove(result);
  }
}
