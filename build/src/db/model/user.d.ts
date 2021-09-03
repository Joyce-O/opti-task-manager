import { Schema, Document } from 'mongoose';
export interface IUser extends Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(password: string): Promise<boolean>;
}
export declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any>, {}>;
declare const User: import("mongoose").Model<IUser, {}, {}>;
export default User;
