import {Request, Response} from 'express';
import {createUser} from '@src/service/user';
import logger from '@src/utility/logger';
import User from '@src/db/model/user';

interface ErrorObj extends Error {
  message: string;
}
export async function createUserHandler(req: Request, res: Response) {
  try {
    const {email} = req.body;

    const userExist = await User.findOne({email});
    if (userExist !== null)
      return res.send({
        error: true,
        message: 'The email specified already exists',
      });

    await createUser(req.body);
    return res.status(201).json({Successful: true, email});
  } catch (err: unknown) {
    const error = err as ErrorObj;
    logger.error(error);
    return res.status(500).json({error: true, message: error.message});
  }
}
