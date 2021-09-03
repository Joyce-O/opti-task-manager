import { LeanDocument, FilterQuery, UpdateQuery } from 'mongoose';
import 'dotenv/config';
import { IUser } from '@src/db/model/user';
import { ISession } from '@src/db/model/auth';
export declare function createSession(userId: string, userAgent: string): Promise<LeanDocument<ISession>>;
export declare function createAccessToken({ user, session, }: {
    user: Omit<IUser, 'password'> | LeanDocument<Omit<IUser, 'password'>>;
    session: Omit<ISession, 'password'> | LeanDocument<Omit<ISession, 'password'>>;
}): string;
export declare function reIssueAccessToken({ refreshToken, }: {
    refreshToken: string;
}): Promise<string | false>;
export declare function updateSession(query: FilterQuery<ISession>, update: UpdateQuery<ISession>): Promise<import("mongodb").UpdateResult>;
export declare function findSessions(query: FilterQuery<ISession>): Promise<LeanDocument<ISession>[]>;
