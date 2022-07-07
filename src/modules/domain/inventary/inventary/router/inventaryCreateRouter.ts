import { Router } from 'express';
import InventaryController from '../controllers/InventaryController';
import isAutentication from '../../../../../shared/middlewares/isAutentication';

const router = Router();

// router.use(isAutenticationInventory);

const inventaryController = new InventaryController();

router.post('/create', isAutentication, inventaryController.create);

export default router;
