import { Request, Response } from 'express';
import ShowProfileService from '../../users/services/ShowPeofileService';
import UpdateShowProfileService from '../../users/services/UpdateProfileService';

export default class ProfileController {
  //Loading

  public async show(request: Request, response: Response): Promise<Response> {
    const showProfiles = new ShowProfileService();

    const user_id = request.user.id;

    const result = await showProfiles.showProfile({ user_id });

    const usuario = [
      {
        id: result.id,
        name: result.name,
        email: result.email,
      },
    ];

    return response.json(usuario);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const { usuario, email, tp_conta, senha, old_senha } = request.body;

    const updateFuncao = new UpdateShowProfileService();

    const user = await updateFuncao.updateProfile({
      user_id,
      usuario,
      email,
      tp_conta,
      senha,
      old_senha,
    });

    return response.json('Troca de Senha Realizada com sucesso');
  }
}
