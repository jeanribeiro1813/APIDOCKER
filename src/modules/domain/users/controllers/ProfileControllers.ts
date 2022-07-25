import { Request, Response } from 'express';
import ShowProfileService from '../services/ShowPeofileService';
import UpdateShowProfileService from '../services/UpdateProfileService';

export default class ProfileController {
  //Loading

  public async show(request: Request, response: Response): Promise<Response> {
    const showProfiles = new ShowProfileService();

    const user_id = request.user.id;

    const result = await showProfiles.showProfile({ user_id });

    const usuario = [
      {
        UserID: result.UserID,
        UserEmail: result.UserEmail,
      },
    ];

    return response.json(usuario);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const { UserEmail, UserPassword, UserOldPassword, TpConta } = request.body;

    const updateFuncao = new UpdateShowProfileService();

    const user = await updateFuncao.updateProfile({
      user_id,
      UserEmail,
      UserPassword,
      UserOldPassword,
      TpConta,
    });

    return response.json('Troca de Senha Realizada com sucesso');
  }
}
