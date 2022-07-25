import { Router } from 'express';

import ProfileController from '../controllers/ProfileControllers';
import { celebrate, Joi, Segments } from 'celebrate';
import isAutenticacion from '../../../../shared/middlewares/isAutentication';

const profileRouter = Router();
const profileControllers = new ProfileController();

profileRouter.use(isAutenticacion);

profileRouter.get('/show', profileControllers.show);

profileRouter.put(
  '/update',
  celebrate({
    [Segments.BODY]: {
      UserEmail: Joi.string().required(),
      TpConta: Joi.string().optional(),
      UserPassword: Joi.string().optional(),
      UserOldPassword: Joi.string(),
      UserPasswordConfirmation: Joi.string()
        .valid(Joi.ref('UserPassword'))
        .when('UserPassword', {
          is: Joi.exist(),
          then: Joi.required(),
        }),
    },
  }),
  profileControllers.update,
);

export default profileRouter;
