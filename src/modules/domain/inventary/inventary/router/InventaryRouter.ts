import { Router } from 'express';
import Inventary from '../controllers/InventaryController';
import SessionsInventaryControllers from '../controllers/SessionsInventaryControllers';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();

const inventaryController = new Inventary();
const sessaoCotroler = new SessionsInventaryControllers();

router.put(
  '/update/:inventoryID',
  celebrate({
    [Segments.PARAMS]: {
      inventoryID: Joi.string().required(),
    },
  }),
  inventaryController.update,
);

router.get('/list', inventaryController.list);

router.get(
  '/index/:inventoryID',
  celebrate({
    [Segments.PARAMS]: {
      inventoryID: Joi.string().required(),
    },
  }),
  inventaryController.index,
);

router.delete(
  '/delete/:inventoryID',
  celebrate({
    [Segments.PARAMS]: {
      inventoryID: Joi.string().required(),
    },
  }),
  inventaryController.delete,
);

router.post(
  '/sessao',
  celebrate({
    [Segments.BODY]: {
      inventoryID: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  sessaoCotroler.execute,
);
export default router;
