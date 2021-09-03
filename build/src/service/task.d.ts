import { DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import { ITask } from '@src/db/model/task';
export declare function createTask(input: DocumentDefinition<ITask>): Promise<ITask>;
export declare function findTask(query: FilterQuery<ITask>, options?: QueryOptions): import("mongoose").Query<ITask | null, ITask, {}, ITask>;
export declare function findAndUpdate(query: FilterQuery<ITask>, update: UpdateQuery<ITask>, options: QueryOptions): import("mongoose").Query<ITask | null, ITask, ITask, ITask>;
export declare function deleteTask(query: FilterQuery<ITask>): import("mongoose").Query<import("mongodb").DeleteResult, ITask, {}, ITask>;
