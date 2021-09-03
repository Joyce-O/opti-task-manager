import {Request, Response, NextFunction} from 'express';
import {get} from 'lodash';
import {decode} from '@src/utility/jwt';

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = get(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
  if (!token) return res.sendStatus(403);

  const {decoded} = decode(token);

  if (decoded) {
    return next();
  }
};
