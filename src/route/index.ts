import {Router} from 'express';
import authRouter from '@src/route/auth';
import taskRouter from '@src/route/task';

const router = Router();

router.use('/api', authRouter);
router.use('/api', taskRouter);

export default router;
