import { getCustomRepository } from 'typeorm';
import MessagesRepository from '../../../data/typeorm/repository/MessagesRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Messages from '../../../data/typeorm/entities/Messages';

interface IRequest {
  IdDestinatário?: string;
  idRemetente: string;
  messages: string;
}

export default class CreateService {
  public async criar({
    IdDestinatário,
    idRemetente,
    messages,
  }: IRequest): Promise<Messages | undefined> {
    const repository = getCustomRepository(MessagesRepository);

    // const inventary = await repository.findById(BillboardID);

    // if (inventary) {
    //   throw new AppErrors('Existe esse item', 409);
    // }

    const result = repository.create({
      IdDestinatário,
      idRemetente,
      messages,
    });

    await repository.save(result);

    return result;
  }
}
