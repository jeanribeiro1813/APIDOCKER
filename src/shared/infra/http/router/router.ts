import { Router } from 'express';
import userRouter from '../../../../modules/domain/users/router/UserRouter';
import inventoryItemRouter from '../../../../modules/domain/inventary/inventary_itens/router/InventaryItens';
import passwordRouter from '../../../../modules/domain/users/router/passwordRoutes';
import customerRouter from '../../../../modules/domain/inventary/customer_itens/router/Customer';
import coinRouter from '../../../../modules/domain/inventary/coin_itens/router/CoinItem';
import InventaryRouter from '../../../../modules/domain/inventary/inventary/router/InventaryRouter';
import InventaryCreateRouter from '../../../../modules/domain/inventary/inventary/router/inventaryCreateRouter';
import billboardRouter from '../../../../modules/domain/inventary/billboard/router/BillboardRouter';
import billboardfeedRouter from '../../../../modules/domain/inventary/billboardfeed/router/BillboardFeedRouter';
import messages from '../../../../modules/domain/messages/router/MessageRouter';
import friends from '../../../../modules/domain/friends/router/FriendsRouter';
import punicao from '../../../../modules/domain/punicao/router/PunicaoRouter';
import fichas from '../../../../modules/domain/fichas/router/FichasRouter';

const router = Router();

router.use('/usuario', userRouter);
router.use('/password', passwordRouter);

router.use('/inventarioitens', inventoryItemRouter);
router.use('/customer', customerRouter);
router.use('/coin', coinRouter);
router.use('/inventory', InventaryRouter);
router.use('/inventorycreate', InventaryCreateRouter);
router.use('/billboard', billboardRouter);
router.use('/billboardfeed', billboardfeedRouter);
router.use('/messages', messages);
router.use('/friends', friends);
router.use('/fichas', fichas);
router.use('/punicao', punicao);

export default router;
