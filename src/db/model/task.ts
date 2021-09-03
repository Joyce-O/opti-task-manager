import {model, Schema, Document, Types} from 'mongoose';
import {IUser} from '@src/db/model/user';

export interface ITask extends Document {
  user: IUser['_id'];
  title: string;
  description: string;
  completionTime: Date;
  notificationTime: Date;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema(
  {
    taskId: {
      type: Types.ObjectId,
      required: true,
      unique: true,
      default: () => new Types.ObjectId(),
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    title: {type: String},
    description: {type: String},
    completionTime: {type: Date},
    notificationTime: {type: Date},
    isCompleted: {type: Boolean, default: false},
  },
  {timestamps: true}
);

export const Task = model<ITask>('Task', TaskSchema);
