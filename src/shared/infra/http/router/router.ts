import { Router } from 'express';
import userRouter from '../../../../modules/domain/users/router/UserRouter';
import inventaryRouter from '../../../../modules/domain/inventary/inventary_itens/router/InventaryItens';

const router = Router();

router.use('/usuario', userRouter);
router.use('/inventarioitens', inventaryRouter);

export default router;
