import jwt, {TokenExpiredError} from 'jsonwebtoken';

const privateKey = process.env.JWT_SECRET_KEY as string;

export function sign(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, options);
}

export function decode(token: string) {
  try {
    const decoded = jwt.verify(token, privateKey);

    return {valid: true, expired: false, decoded};
  } catch (err: unknown) {
    const error = err as TokenExpiredError;
    return {
      valid: false,
      expired: error.message,
      decoded: null,
    };
  }
}
