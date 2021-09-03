import {model, Schema, Document} from 'mongoose';
import bcrypt from 'bcryptjs';
import logger from '../../utility/logger';

export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

export const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {type: String, required: true},
    password: {type: String, required: true},
  },
  {timestamps: true}
);

UserSchema.pre('save', async function (next) {
  const user = this as IUser;
  try {
    //hash the password only if it is new or has been modified
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS));

    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;
    return next();
  } catch (error: any) {
    logger.error(error);
    return next(error);
  }
});

UserSchema.methods.comparePassword = async function (password: string) {
  const user = this as IUser;
  return bcrypt.compare(password, user.password).then((result: boolean) => {
    return result;
  });
};

const User = model<IUser>('User', UserSchema);

export default User;
