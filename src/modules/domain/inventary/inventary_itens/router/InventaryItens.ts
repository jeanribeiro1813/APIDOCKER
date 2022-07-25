import { Router } from 'express';
import InventaryControllers from '../controllers/InventaryControllers';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();

const inventaryController = new InventaryControllers();

router.post('/create', inventaryController.create);

router.put(
  '/update/:itemHash',
  celebrate({
    [Segments.PARAMS]: {
      itemHash: Joi.string().required(),
    },
  }),
  inventaryController.update,
);

router.get('/list', inventaryController.list);

router.get(
  '/index/:itemHash',
  celebrate({
    [Segments.PARAMS]: {
      itemHash: Joi.string().required(),
    },
  }),
  inventaryController.index,
);

router.delete(
  '/delete/:itemHash',
  celebrate({
    [Segments.PARAMS]: {
      itemHash: Joi.string().required(),
    },
  }),
  inventaryController.delete,
);

export default router;
