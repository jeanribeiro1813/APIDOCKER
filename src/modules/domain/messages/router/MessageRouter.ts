import { Router } from 'express';
import MessagesControllers from '../controllers/MessagesControllers';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();

const billboardController = new MessagesControllers();

router.post('/create', billboardController.create);

router.get(
  '/destinatario/:IdDestinatário',
  celebrate({
    [Segments.PARAMS]: {
      IdDestinatário: Joi.string().required(),
    },
  }),
  billboardController.indexDest,
);

router.get(
  '/remetente/:idRemetente',
  celebrate({
    [Segments.PARAMS]: {
      idRemetente: Joi.string().required(),
    },
  }),
  billboardController.indexReme,
);

export default router;
