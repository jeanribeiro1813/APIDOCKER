import { Router } from 'express';
import FichasControllers from '../controllers/FichasControllers';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();

const fichasController = new FichasControllers();

router.post('/create', fichasController.create);

router.put(
  '/update/:Id',
  celebrate({
    [Segments.PARAMS]: {
      Id: Joi.string().required(),
    },
  }),
  fichasController.update,
);

router.get('/list', fichasController.list);

router.get(
  '/index/:Id',
  celebrate({
    [Segments.PARAMS]: {
      Id: Joi.string().required(),
    },
  }),
  fichasController.index,
);

router.delete(
  '/delete/:Id',
  celebrate({
    [Segments.PARAMS]: {
      Id: Joi.string().required(),
    },
  }),
  fichasController.delete,
);

export default router;
