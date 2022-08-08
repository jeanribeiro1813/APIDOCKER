import { Router } from 'express';
import UsersControllers from '../controllers/UsersControllers';
import SessionsControllers from '../controllers/SessionsControllers';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();

const userController = new UsersControllers();

const sessaoController = new SessionsControllers();

router.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
      UserID: Joi.string().uuid().required(),
      UserEmail: Joi.string().required(),
      UserPassword: Joi.string().required(),
      TpConta: Joi.string().required(),
    },
  }),
  userController.create,
);

router.get('/list', userController.list);

router.get(
  '/index/:UserID',
  celebrate({
    [Segments.PARAMS]: {
      UserID: Joi.string().required().uuid(),
    },
  }),
  userController.index,
);

router.delete(
  '/delete/:UserID',
  celebrate({
    [Segments.PARAMS]: {
      UserID: Joi.string().required(),
    },
  }),
  userController.delete,
);

router.post(
  '/sessao',
  celebrate({
    [Segments.BODY]: {
      UserEmail: Joi.string().required(),
      UserPassword: Joi.string().required(),
    },
  }),
  sessaoController.execute,
);

export default router;
