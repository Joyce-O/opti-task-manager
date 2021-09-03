import {LeanDocument, FilterQuery, UpdateQuery} from 'mongoose';
import {get} from 'lodash';
import 'dotenv/config';
import {IUser} from '@src/db/model/user';
import Session, {ISession} from '@src/db/model/auth';
import {sign, decode} from '@src/utility/jwt';
import {findUser} from './user';

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({user: userId, userAgent});

  return session.toJSON();
}

export function createAccessToken({
  user,
  session,
}: {
  user: Omit<IUser, 'password'> | LeanDocument<Omit<IUser, 'password'>>;
  session:
    | Omit<ISession, 'password'>
    | LeanDocument<Omit<ISession, 'password'>>;
}) {
  const accessToken = sign(
    {...user, session: session._id},
    {expiresIn: process.env.ACCESS_TOKEN_EXP_TIME}
  );

  return accessToken;
}

export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  const result = decode(refreshToken);

  if (!result?.decoded || !get(result?.decoded, '_id')) return false;

  const session = await Session.findById(get(result?.decoded, '_id'));

  if (!session || !session?.valid) return false;

  const user = await findUser({_id: session.user});

  if (!user) return false;

  const accessToken = createAccessToken({user, session});

  return accessToken;
}

export async function updateSession(
  query: FilterQuery<ISession>,
  update: UpdateQuery<ISession>
) {
  return Session.updateOne(query, update);
}

export async function findSessions(query: FilterQuery<ISession>) {
  return Session.find(query).lean();
}
