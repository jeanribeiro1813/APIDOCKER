import { Request, Response } from 'express';
import SendForgotPasswordEmailService from '../services/SendForgotPasswordEmailService';

export default class ForgotPAsswordController {
  public async create(req: Request, res: Response) {
    const { email } = req.body;

    const sendForgot = new SendForgotPasswordEmailService();

    await sendForgot.execute({
      email,
    });

    return res.status(204).json();
  }
}
