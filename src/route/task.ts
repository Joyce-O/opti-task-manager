import {Router} from 'express';
import {authorize} from '@src/middleware/authorize';
import validateRequest from '@src/middleware/validateRequest';
import {createTaskSchema, taskIdSchema} from '@src/db/schema/task';
import {
  createTaskHandler,
  gettaskHandler,
  updatetaskHandler,
  deletetaskHandler,
} from '@src/controller/task';

const router = Router();

router.post(
  '/tasks',
  authorize,
  validateRequest(createTaskSchema),
  createTaskHandler
);

router.get(
  '/tasks/:taskId',
  authorize,
  validateRequest(taskIdSchema),
  gettaskHandler
);

router.put('/tasks', authorize, updatetaskHandler);

router.delete(
  '/tasks/taskId:',
  authorize,
  validateRequest(taskIdSchema),
  deletetaskHandler
);

export default router;
