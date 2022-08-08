import { Router } from 'express';
import BillboardFeefControllers from '../controllers/BillboardFeefControllers';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();

const billboardFeedController = new BillboardFeefControllers();

router.post('/create', billboardFeedController.create);

router.put(
  '/update/:IdBillBoardFeed',
  celebrate({
    [Segments.PARAMS]: {
      IdBillBoardFeed: Joi.string().required().uuid(),
    },
  }),
  billboardFeedController.update,
);

router.get('/list', billboardFeedController.list);

router.get(
  '/index/:IdBillBoardFeed',
  celebrate({
    [Segments.PARAMS]: {
      IdBillBoardFeed: Joi.string().required().uuid(),
    },
  }),
  billboardFeedController.index,
);

router.delete(
  '/delete/:IdBillBoardFeed',
  celebrate({
    [Segments.PARAMS]: {
      IdBillBoardFeed: Joi.string().required().uuid(),
    },
  }),
  billboardFeedController.delete,
);

export default router;
