import { DocumentDefinition, FilterQuery } from 'mongoose';
import { IUser } from '@src/db/model/user';
export declare function createUser(input: DocumentDefinition<IUser>): Promise<unknown>;
export declare function findUser(query: FilterQuery<IUser>): Promise<import("mongoose").LeanDocument<IUser> | null>;
export declare function validatePassword({ email, password, }: {
    email: IUser['email'];
    password: string;
}): Promise<false | Pick<import("mongoose").LeanDocument<IUser>, "name" | "email" | "_id" | "__v" | "id" | "comparePassword" | "createdAt" | "updatedAt">>;
