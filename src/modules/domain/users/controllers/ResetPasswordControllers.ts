import { Request, Response } from 'express';
import ResetPasswordService from '../services/ResetPasswordService';

export default class ResetPassword {
  public async create(req: Request, res: Response) {
    const { token, password } = req.body;

    const resetPassword = new ResetPasswordService();

    await resetPassword.execute({
      password,
      token,
    });

    return res.status(204).json('Mudanca de Senha realizada com sucesso');
  }
}
