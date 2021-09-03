"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.findAndUpdate = exports.findTask = exports.createTask = void 0;
const task_1 = require("@src/db/model/task");
function createTask(input) {
    return task_1.Task.create(input);
}
exports.createTask = createTask;
function findTask(query, options = { lean: true }) {
    return task_1.Task.findOne(query, {}, options);
}
exports.findTask = findTask;
function findAndUpdate(query, update, options) {
    return task_1.Task.findOneAndUpdate(query, update, options);
}
exports.findAndUpdate = findAndUpdate;
function deleteTask(query) {
    return task_1.Task.deleteOne(query);
}
exports.deleteTask = deleteTask;
