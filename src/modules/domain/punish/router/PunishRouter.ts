import { Router } from 'express';
import PunishControllers from '../controllers/PunishControllers';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();

const punicaoController = new PunishControllers();

router.post('/create', punicaoController.create);

router.put(
  '/update/:Id',
  celebrate({
    [Segments.PARAMS]: {
      Id: Joi.string().required(),
    },
  }),
  punicaoController.update,
);

router.get('/list', punicaoController.list);

router.get(
  '/index/:Id',
  celebrate({
    [Segments.PARAMS]: {
      Id: Joi.string().required(),
    },
  }),
  punicaoController.index,
);

router.delete(
  '/delete/:Id',
  celebrate({
    [Segments.PARAMS]: {
      Id: Joi.string().required(),
    },
  }),
  punicaoController.delete,
);

export default router;
