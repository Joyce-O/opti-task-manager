import {model, Schema, Document} from 'mongoose';
import {IUser} from '@src/db/model/user';

export interface ISession extends Document {
  user: IUser['_id'];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

const SessionSchema = new Schema(
  {
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userAgent: {type: String},
    valid: {type: Boolean, default: true},
  },
  {timestamps: true}
);

const Session = model<ISession>('Session', SessionSchema);

export default Session;
