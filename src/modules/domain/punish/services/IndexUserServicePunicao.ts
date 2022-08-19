import { getCustomRepository } from 'typeorm';
import PunishRepository from '../../../data/typeorm/repository/PunishRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Punish from '../../../data/typeorm/entities/Punish';

interface IRequest {
  IdUser: string;
}

export default class IndexUserServiceUsers {
  public async index({ IdUser }: IRequest): Promise<Punish | AppErrors> {
    const repository = getCustomRepository(PunishRepository);

    const result = await repository.findById(IdUser);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
