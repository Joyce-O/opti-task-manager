import {Request, Response} from 'express';
import 'dotenv/config';
import {get} from 'lodash';
import {validatePassword} from '@src/service/user';
import {
  createSession,
  createAccessToken,
  updateSession,
  findSessions,
} from '@src/service/auth';
import {sign} from '@src/utility/jwt';

export async function loginHandler(req: Request, res: Response) {
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send('username or password incorrect');
  }

  const session = await createSession(user._id, req.get('user-agent') || '');

  const accessToken = createAccessToken({
    user,
    session,
  });

  const refreshToken = sign(session, {
    expiresIn: process.env.EXPIRES_IN,
  });

  return res.send({accessToken, refreshToken});
}

export async function invalidateUserSessionHandler(
  req: Request,
  res: Response
) {
  const sessionId = get(req, 'user.session');

  await updateSession({_id: sessionId}, {valid: false});

  return res.sendStatus(200);
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = get(req, 'user._id');

  const sessions = await findSessions({user: userId, valid: true});

  return res.send(sessions);
}
