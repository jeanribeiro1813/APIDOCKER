import { getCustomRepository } from 'typeorm';
import Users from '../../typeorm/entities/Users';
import { compare, hash } from 'bcryptjs';
import UsersRepository from '../../typeorm/repository/UsersRepository';
import { AppErrors } from '../../../shared/errors/AppErrors';

interface IRequest {
  user_id: string;
  usuario: string;
  email: string;
  tp_conta: string;
  senha?: string;
  old_senha?: string;
}

class UpdateShowProfileService {
  public async updateProfile({
    user_id,
    usuario,
    email,
    tp_conta,
    senha,
    old_senha,
  }: IRequest): Promise<Users | AppErrors> {
    const userUpdate = getCustomRepository(UsersRepository);

    const user = await userUpdate.findById(user_id);

    if (!user) {
      throw new AppErrors('Usuario não Existe', 409);
    }

    const userEmail = await userUpdate.findByEmail(email);

    if (userEmail && userEmail.id !== user_id) {
      throw new AppErrors('Já existe usuario com esse email', 409);
    }

    if (senha && !old_senha) {
      throw new AppErrors('Colocar a senha antiga', 409);
    }

    if (senha && old_senha) {
      const checkOldPassowrd = await compare(old_senha, user.password);

      if (!checkOldPassowrd) {
        throw new AppErrors('Senha antiga não existe', 409);
      }

      user.password = await hash(senha, 8);
    }

    user.name = usuario ? usuario : user.name;
    user.email = email ? email : user.email;
    user.tp_conta = tp_conta ? tp_conta : user.tp_conta;

    await userUpdate.save(user);

    return user;
  }
}

export default UpdateShowProfileService;
