import { getCustomRepository } from 'typeorm';
import MessagesRepository from '../../../data/typeorm/repository/MessagesRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Messages from '../../../data/typeorm/entities/Messages';

interface IRequest {
  IdRemetente: string;
}

export default class IndexServiceUsers {
  public async index({
    IdRemetente,
  }: IRequest): Promise<Messages[] | AppErrors> {
    const repository = getCustomRepository(MessagesRepository);

    const result = await repository.find({
      where: { IdRemetente },
      relations: ['user'],
    });

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
