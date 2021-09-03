import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from 'mongoose';
import {Task, ITask} from '@src/db/model/task';

export function createTask(input: DocumentDefinition<ITask>) {
  return Task.create(input);
}

export function findTask(
  query: FilterQuery<ITask>,
  options: QueryOptions = {lean: true}
) {
  return Task.findOne(query, {}, options);
}

export function findAndUpdate(
  query: FilterQuery<ITask>,
  update: UpdateQuery<ITask>,
  options: QueryOptions
) {
  return Task.findOneAndUpdate(query, update, options);
}

export function deleteTask(query: FilterQuery<ITask>) {
  return Task.deleteOne(query);
}
