import { Router } from 'express';
import userRouter from '../../../../modules/domain/users/router/UserRouter';
import inventaryRouter from '../../../../modules/domain/inventary/inventary_itens/router/InventaryItens';
import passwordRouter from '../../../../modules/domain/users/router/passwordRoutes';
import customerRouter from '../../../../modules/domain/inventary/customer_itens/router/Customer';
import coinRouter from '../../../../modules/domain/inventary/coin_itens/router/CoinItem';

const router = Router();

router.use('/usuario', userRouter);
router.use('/password', passwordRouter);

router.use('/inventarioitens', inventaryRouter);
router.use('/customer', customerRouter);
router.use('/coin', coinRouter);

export default router;
