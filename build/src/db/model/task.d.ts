import { Document } from 'mongoose';
import { IUser } from '@src/db/model/user';
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
export declare const Task: import("mongoose").Model<ITask, {}, {}>;
