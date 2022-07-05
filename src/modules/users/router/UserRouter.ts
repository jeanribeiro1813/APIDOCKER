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
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      tp_conta: Joi.string().required(),
    },
  }),
  userController.create,
);

router.get('/list', userController.list);

router.delete(
  '/delete/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  userController.delete,
);

router.post(
  '/sessao',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  sessaoController.execute,
);

export default router;
