import { getCustomRepository } from 'typeorm';
import MessagesRepository from '../../../data/typeorm/repository/MessagesRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Messages from '../../../data/typeorm/entities/Messages';

interface IRequest {
  IdDestinatário: string;
}

export default class IndexServiceDestinatario {
  public async index({
    IdDestinatário,
  }: IRequest): Promise<Messages | AppErrors> {
    const repository = getCustomRepository(MessagesRepository);

    const result = await repository.findById(IdDestinatário);

    if (!result) {
      throw new AppErrors('Não existe esse id', 409);
    }

    return result;
  }
}
