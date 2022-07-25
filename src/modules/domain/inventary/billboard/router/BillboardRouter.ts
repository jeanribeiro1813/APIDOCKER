import { Router } from 'express';
import BillboardControllers from '../controllers/BillboardControllers';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();

const billboardController = new BillboardControllers();

router.post('/create', billboardController.create);

router.put(
  '/update/:BillboardID',
  celebrate({
    [Segments.PARAMS]: {
      BillboardID: Joi.string().required(),
    },
  }),
  billboardController.update,
);

router.get('/list', billboardController.list);

router.get(
  '/index/:BillboardID',
  celebrate({
    [Segments.PARAMS]: {
      BillboardID: Joi.string().required(),
    },
  }),
  billboardController.index,
);

router.delete(
  '/delete/:BillboardID',
  celebrate({
    [Segments.PARAMS]: {
      BillboardID: Joi.string().required(),
    },
  }),
  billboardController.delete,
);

export default router;
