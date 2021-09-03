import {Router} from 'express';
import validateRequest from '@src/middleware/validateRequest';
import {createUserSchema, loginUserSchema} from '@src/db/schema/user';
import {createUserHandler} from '@src/controller/user';
import {loginHandler} from '@src/controller/auth';

const router = Router();

router.post('/login', validateRequest(loginUserSchema), loginHandler);

router.post('/users', validateRequest(createUserSchema), createUserHandler);

export default router;
