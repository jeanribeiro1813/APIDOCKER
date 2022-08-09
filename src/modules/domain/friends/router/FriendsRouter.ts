import { Router } from 'express';
import FriendsControllers from '../controllers/FriendsControllers';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();

const billboardController = new FriendsControllers();

router.post('/create', billboardController.create);

router.get(
  '/index/:IdUser',
  celebrate({
    [Segments.PARAMS]: {
      IdUser: Joi.string().required().uuid(),
    },
  }),
  billboardController.indexUser,
);

router.post(
  '/mail',
  celebrate({
    [Segments.BODY]: {
      EmailUser: Joi.string().required().email(),
    },
  }),
  billboardController.email,
);

router.get('/list', billboardController.list);

export default router;
