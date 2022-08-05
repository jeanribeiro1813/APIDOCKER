import { getCustomRepository } from 'typeorm';
import FriendsRepository from '../../../data/typeorm/repository/FriendsRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';
import Friends from '../../../data/typeorm/entities/Friends';

interface IRequest {
  IdUser: string;
  IdFriend: string;
  EmailUser: string;
  status: string;
}

export default class CreateService {
  public async criar({
    IdUser,
    IdFriend,
    EmailUser,
    status,
  }: IRequest): Promise<Friends | undefined> {
    const repository = getCustomRepository(FriendsRepository);

    const criado = await repository.findById(IdFriend);

    if (criado) {
      throw new AppErrors('Você já adicionou esse pessoa como amigo', 409);
    }
    const result = repository.create({
      IdUser,
      IdFriend,
      EmailUser,
      status,
    });

    await repository.save(result);

    return result;
  }
}
