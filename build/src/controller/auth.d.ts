import { Request, Response } from 'express';
import 'dotenv/config';
export declare function loginHandler(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function invalidateUserSessionHandler(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getUserSessionsHandler(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
