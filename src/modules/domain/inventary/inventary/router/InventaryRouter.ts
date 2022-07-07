import { Router } from 'express';
import Inventary from '../controllers/InventaryController';
import SessionsInventaryControllers from '../controllers/SessionsInventaryControllers';
import { celebrate, Joi, Segments } from 'celebrate';
import isAutenticationInventory from '../../../../../shared/middlewares/isAutenticationInventory';
import isAutentication from '../../../../../shared/middlewares/isAutentication';

const router = Router();

// router.use(isAutentication);

const inventaryController = new Inventary();
const sessaoCotroler = new SessionsInventaryControllers();

router.put(
  '/update/:inventoryID',
  isAutenticationInventory,
  celebrate({
    [Segments.PARAMS]: {
      inventoryID: Joi.string().required(),
    },
  }),
  inventaryController.update,
);

router.get('/list', isAutenticationInventory, inventaryController.list);

router.get(
  '/index/:inventoryID',
  isAutenticationInventory,
  celebrate({
    [Segments.PARAMS]: {
      inventoryID: Joi.string().required(),
    },
  }),
  inventaryController.index,
);

router.delete(
  '/delete/:inventoryID',
  isAutenticationInventory,
  celebrate({
    [Segments.PARAMS]: {
      inventoryID: Joi.string().required(),
    },
  }),
  inventaryController.delete,
);

router.post(
  '/sessao',
  isAutentication,
  celebrate({
    [Segments.BODY]: {
      inventoryID: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  sessaoCotroler.execute,
);
export default router;
