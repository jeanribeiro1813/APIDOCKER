import { Request, Response } from 'express';
import ResetPasswordService from '../services/ResetPasswordService';

export default class ResetPassword {
  public async create(req: Request, res: Response) {
    const { Token, UserPassword } = req.body;

    const resetPassword = new ResetPasswordService();

    await resetPassword.execute({
      UserPassword,
      Token,
    });

    return res.status(204).json('Mudanca de Senha realizada com sucesso');
  }
}
