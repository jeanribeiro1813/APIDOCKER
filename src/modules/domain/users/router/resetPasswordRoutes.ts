import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import resetControllers from '../controllers/ResetPasswordControllers';

const routes = Router();

const user = new resetControllers();

routes.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      Token: Joi.string().uuid().required(),

      UserPassword: Joi.string().required(),
      UserPasswordConfirmation: Joi.string()
        .required()
        .valid(Joi.ref('password')),
    },
  }),
  user.create,
);

export default routes;
