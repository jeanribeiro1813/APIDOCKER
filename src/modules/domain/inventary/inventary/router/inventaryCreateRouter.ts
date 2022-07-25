import { Router } from 'express';
import InventaryController from '../controllers/InventaryController';

const router = Router();

const inventaryController = new InventaryController();

router.post('/create', inventaryController.create);

export default router;
