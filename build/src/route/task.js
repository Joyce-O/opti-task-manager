"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorize_1 = require("@src/middleware/authorize");
const validateRequest_1 = __importDefault(require("@src/middleware/validateRequest"));
const task_1 = require("@src/db/schema/task");
const task_2 = require("@src/controller/task");
const router = (0, express_1.Router)();
router.post('/tasks', authorize_1.authorize, (0, validateRequest_1.default)(task_1.createTaskSchema), task_2.createTaskHandler);
router.get('/tasks/:taskId', authorize_1.authorize, (0, validateRequest_1.default)(task_1.taskIdSchema), task_2.gettaskHandler);
router.put('/tasks', authorize_1.authorize, task_2.updatetaskHandler);
router.delete('/tasks/taskId:', authorize_1.authorize, (0, validateRequest_1.default)(task_1.taskIdSchema), task_2.deletetaskHandler);
exports.default = router;
