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
      usuario: Joi.string().required(),
      email: Joi.string().required(),
      senha: Joi.string().optional(),
      old_senha: Joi.string(),
      senha_confirmacao: Joi.string().valid(Joi.ref('senha')).when('senha', {
        is: Joi.exist(),
        then: Joi.required(),
      }),
    },
  }),
  profileControllers.update,
);

export default profileRouter;
