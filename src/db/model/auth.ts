import mongoose from 'mongoose';
import {IUser} from '@src/db/model/user';

export interface ISession extends mongoose.Document {
  user: IUser['_id'];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

const SessionSchema = new mongoose.Schema(
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    userAgent: {type: String},
    valid: {type: Boolean, default: true},
  },
  {timestamps: true}
);

const Session = mongoose.model<ISession>('Session', SessionSchema);

export default Session;
