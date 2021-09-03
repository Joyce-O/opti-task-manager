"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletetaskHandler = exports.updatetaskHandler = exports.gettaskHandler = exports.createTaskHandler = void 0;
const jwt_1 = require("@src/utility/jwt");
const lodash_1 = require("lodash");
const task_1 = require("@src/service/task");
function createTaskHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = (0, lodash_1.get)(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
        const { decoded } = (0, jwt_1.decode)(token);
        const userId = decoded._id;
        const body = req.body;
        const task = yield (0, task_1.createTask)(Object.assign(Object.assign({}, body), { user: userId }));
        return res.send(task);
    });
}
exports.createTaskHandler = createTaskHandler;
function gettaskHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const taskId = (0, lodash_1.get)(req, 'params.taskId');
        const task = yield (0, task_1.findTask)({ taskId });
        if (!task) {
            return res.sendStatus(404);
        }
        return res.send(task);
    });
}
exports.gettaskHandler = gettaskHandler;
function updatetaskHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const taskId = (0, lodash_1.get)(req, 'params.taskId');
        const userId = (0, lodash_1.get)(req, 'user._id');
        const update = req.body;
        const task = yield (0, task_1.findTask)({ taskId });
        if (!task) {
            return res.sendStatus(404);
        }
        if (String(task.user) !== userId) {
            return res.sendStatus(401);
        }
        const updatetask = yield (0, task_1.findAndUpdate)({ taskId }, update, { new: true });
        return res.send(updatetask);
    });
}
exports.updatetaskHandler = updatetaskHandler;
function deletetaskHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = (0, lodash_1.get)(req, 'user._id');
        const taskId = (0, lodash_1.get)(req, 'params.taskId');
        const task = yield (0, task_1.findTask)({ taskId });
        if (!task) {
            return res.sendStatus(404);
        }
        if (String(task.user) !== String(userId)) {
            return res.sendStatus(401);
        }
        yield (0, task_1.deleteTask)({ taskId });
        return res.sendStatus(200);
    });
}
exports.deletetaskHandler = deletetaskHandler;
