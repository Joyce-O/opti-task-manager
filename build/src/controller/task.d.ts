import { Request, Response } from 'express';
export declare function createTaskHandler(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function gettaskHandler(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updatetaskHandler(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deletetaskHandler(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
