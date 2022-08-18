import { Request, Response } from 'express';
import CreateServiceUsers from '../services/CreateUsersService';
import ListarAllUsers from '../services/ListarServiceUsers';
import UpdateUsersService from '../services/UpdateUsersService';
import DeleteUsersService from '../services/DeleteUsersService';
import { IndexServiceUsers } from '../services/IndexServiceUsers';

export default class UsersControllers {
  public async create(req: Request, res: Response) {
    const {
      UserID,
      UserEmail,
      UserPassword,
      TpConta,
      IsPunishing,
      PunishingType,
    } = req.body;

    const result = new CreateServiceUsers();

    const criado = await result.criar({
      UserID,
      UserEmail,
      UserPassword,
      TpConta,
      IsPunishing,
      PunishingType,
    });

    return res.status(200).json(criado);
  }

  public async list(req: Request, res: Response) {
    const result = new ListarAllUsers();

    const listando = await result.listar();

    return res.json(listando);
  }

  public async delete(req: Request, res: Response) {
    const { UserID } = req.params;

    const result = new DeleteUsersService();

    await result.delete({ UserID });

    return res.json('Deletado com sucesso');
  }

  public async index(req: Request, res: Response) {
    const { UserID } = req.params;

    const result = new IndexServiceUsers();

    const result_id = await result.index({ UserID });

    return res.json(result_id);
  }
  // public async update(req: Request, res: Response) {

  //   const { UserID } = req.params;

  //   const {
  //     UserEmail,
  //     UserPassword,
  //     TpConta,
  //     IsPunishing,
  //     PunishingType,
  //   } = req.body;

  //   const result = new UpdateUsersService();

  //   await result.criar()

  //   const punish = new CreatePunish();

  //   const punindo = {
  //     UserID,
  //     IsPunishing,
  //   };

  //   if (user.IsPunishing === true) {
  //     await punish.criar(punindo);
  //   }

  // }
}
