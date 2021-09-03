import {Request, Response} from 'express';
import {JwtPayload} from 'jsonwebtoken';
import {decode} from '@src/utility/jwt';
import {get} from 'lodash';
import {
  createTask,
  findTask,
  findAndUpdate,
  deleteTask,
} from '@src/service/task';

export async function createTaskHandler(req: Request, res: Response) {
  const token = get(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
  const {decoded} = decode(token) as JwtPayload;
  const userId = decoded._id;
  const body = req.body;

  const task = await createTask({...body, user: userId});

  return res.send(task);
}

export async function gettaskHandler(req: Request, res: Response) {
  const taskId = get(req, 'params.taskId');
  const task = await findTask({taskId});

  if (!task) {
    return res.sendStatus(404);
  }

  return res.send(task);
}

export async function updatetaskHandler(req: Request, res: Response) {
  const taskId = get(req, 'params.taskId');
  const userId = get(req, 'user._id');
  const update = req.body;

  const task = await findTask({taskId});

  if (!task) {
    return res.sendStatus(404);
  }

  if (String(task.user) !== userId) {
    return res.sendStatus(401);
  }

  const updatetask = await findAndUpdate({taskId}, update, {new: true});

  return res.send(updatetask);
}

export async function deletetaskHandler(req: Request, res: Response) {
  const userId = get(req, 'user._id');
  const taskId = get(req, 'params.taskId');

  const task = await findTask({taskId});

  if (!task) {
    return res.sendStatus(404);
  }

  if (String(task.user) !== String(userId)) {
    return res.sendStatus(401);
  }

  await deleteTask({taskId});

  return res.sendStatus(200);
}
