import { getCustomRepository } from 'typeorm';
import Users from '../../../data/typeorm/entities/Users';
import { compare, hash } from 'bcryptjs';
import UsersRepository from '../../../data/typeorm/repository/UsersRepository';
import { AppErrors } from '../../../../shared/errors/AppErrors';

interface IRequest {
  user_id: string;
  UserEmail: string;
  UserPassword?: string;
  UserOldPassword?: string;
}

class UpdateShowProfileService {
  public async updateProfile({
    user_id,
    UserEmail,
    UserPassword,
    UserOldPassword,
  }: IRequest): Promise<Users | AppErrors> {
    const userUpdate = getCustomRepository(UsersRepository);

    const user = await userUpdate.findById(user_id);

    if (!user) {
      throw new AppErrors('Usuario não Existe', 409);
    }

    const userEmail = await userUpdate.findByEmail(UserEmail);

    if (userEmail && userEmail.UserID !== user_id) {
      throw new AppErrors('Já existe usuario com esse email', 409);
    }

    if (UserPassword && !UserOldPassword) {
      throw new AppErrors('Colocar a senha antiga', 409);
    }

    if (UserPassword && UserOldPassword) {
      const checkOldPassowrd = await compare(
        UserOldPassword,
        user.UserPassword,
      );

      if (!checkOldPassowrd) {
        throw new AppErrors('Senha antiga não existe', 409);
      }

      user.UserPassword = await hash(UserPassword, 8);
    }

    user.UserEmail = UserEmail ? UserEmail : user.UserEmail;

    await userUpdate.save(user);

    return user;
  }
}

export default UpdateShowProfileService;
