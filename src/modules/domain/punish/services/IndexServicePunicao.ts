import { getCustomRepository } from 'typeorm';
import PunishRepository from '../../../data/typeorm/repository/PunishRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Punish from '../../../data/typeorm/entities/Punish';

interface IRequest {
  Id: string;
}

export default class IndexServiceUsers {
  public async index({ Id }: IRequest): Promise<Punish | AppErrors> {
    const repository = getCustomRepository(PunishRepository);

    const result = await repository.findById(Id);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
