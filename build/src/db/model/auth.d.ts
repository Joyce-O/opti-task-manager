import { Document } from 'mongoose';
import { IUser } from '@src/db/model/user';
export interface ISession extends Document {
    user: IUser['_id'];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const Session: import("mongoose").Model<ISession, {}, {}>;
export default Session;
