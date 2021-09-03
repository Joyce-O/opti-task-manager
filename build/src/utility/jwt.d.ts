import jwt from 'jsonwebtoken';
export declare function sign(object: Object, options?: jwt.SignOptions | undefined): string;
export declare function decode(token: string): {
    valid: boolean;
    expired: boolean;
    decoded: string | jwt.JwtPayload;
} | {
    valid: boolean;
    expired: string;
    decoded: null;
};
