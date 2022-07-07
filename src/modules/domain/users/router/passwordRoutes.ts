import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import forgotControllers from '../controllers/ForgotControllers';
import resetControllers from '../controllers/ResetPasswordControllers';

const routes = Router();

const user = new forgotControllers();

const reset = new resetControllers();

routes.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      UserEmail: Joi.string().required(),
    },
  }),
  user.create,
);

routes.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      Token: Joi.string().uuid().required(),

      UserPassword: Joi.string().required(),
      UserPasswordConfirmation: Joi.string()
        .required()
        .valid(Joi.ref('UserPassword')),
    },
  }),
  reset.create,
);

export default routes;
