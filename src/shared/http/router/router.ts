import { Router } from 'express';
import userRouter from '../../../modules/users/router/UserRouter';

const router = Router();

router.use('/usuario', userRouter);

export default router;
