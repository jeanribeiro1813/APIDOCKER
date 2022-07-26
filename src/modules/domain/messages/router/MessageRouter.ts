import { Router } from 'express';
import MessagesControllers from '../controllers/MessagesControllers';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();

const billboardController = new MessagesControllers();

router.post('/create', billboardController.create);

router.get(
  '/index/:IdRemetente',
  celebrate({
    [Segments.PARAMS]: {
      IdRemetente: Joi.string().required(),
    },
  }),
  billboardController.indexReme,
);

router.get('/list', billboardController.list);

export default router;
