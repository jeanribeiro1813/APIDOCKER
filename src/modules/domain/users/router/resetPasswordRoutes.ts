import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import resetControllers from '../controllers/ResetPasswordControllers';

const routes = Router();

const user = new resetControllers();

routes.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),

      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  user.create,
);

export default routes;
