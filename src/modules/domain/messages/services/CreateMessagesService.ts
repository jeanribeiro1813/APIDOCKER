import { getCustomRepository } from 'typeorm';
import MessagesRepository from '../../../data/typeorm/repository/MessagesRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Messages from '../../../data/typeorm/entities/Messages';

interface IRequest {
  Sala: string;
  IdRemetente?: string;
  messages: string;
}

export default class CreateService {
  public async criar({
    Sala,
    IdRemetente,
    messages,
  }: IRequest): Promise<Messages | undefined> {
    const repository = getCustomRepository(MessagesRepository);

    const result = repository.create({
      Sala,
      IdRemetente,
      messages,
    });

    await repository.save(result);

    return result;
  }
}
