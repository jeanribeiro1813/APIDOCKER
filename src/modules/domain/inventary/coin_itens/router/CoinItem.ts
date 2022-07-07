import { Router } from 'express';
import CoinControllers from '../controllers/CoinControllers';
import { celebrate, Joi, Segments } from 'celebrate';
import isAutentication from '../../../../../shared/middlewares/isAutentication';

const router = Router();

router.use(isAutentication);

const inventaryController = new CoinControllers();

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
