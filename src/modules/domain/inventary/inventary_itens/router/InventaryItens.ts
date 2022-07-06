import { Router } from 'express';
import InventaryControllers from '../controllers/InventaryControllers';
import { celebrate, Joi, Segments } from 'celebrate';
import isAutentication from '../../../../../shared/middlewares/isAutentication';

const router = Router();

router.use(isAutentication);

const inventaryController = new InventaryControllers();

router.post('/create', inventaryController.create);

router.put(
  '/update',
  celebrate({
    [Segments.PARAMS]: {
      item_id: Joi.string().required().uuid(),
    },
  }),
  inventaryController.update,
);

router.get('/list', inventaryController.list);

router.get(
  '/index/:item_id',
  celebrate({
    [Segments.PARAMS]: {
      item_id: Joi.string().required().uuid(),
    },
  }),
  inventaryController.index,
);

router.delete(
  '/delete/:item_id',
  celebrate({
    [Segments.PARAMS]: {
      item_id: Joi.string().required(),
    },
  }),
  inventaryController.delete,
);

export default router;
