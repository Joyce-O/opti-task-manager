"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskIdSchema = exports.createTaskSchema = void 0;
const yup_1 = require("yup");
exports.createTaskSchema = (0, yup_1.object)({
    body: (0, yup_1.object)({
        title: (0, yup_1.string)().required('Title is required'),
        description: (0, yup_1.string)().required('Description is required'),
        completionTime: (0, yup_1.date)().required('Completion time is missing'),
        notificationTime: (0, yup_1.date)().required('Reminder notification time is missing'),
    }),
});
exports.taskIdSchema = (0, yup_1.object)({
    params: (0, yup_1.object)({
        taskId: (0, yup_1.string)().required('taskId is required'),
    }),
});
