"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("@src/route/auth"));
const task_1 = __importDefault(require("@src/route/task"));
const router = (0, express_1.Router)();
router.use('/api', auth_1.default);
router.use('/api', task_1.default);
exports.default = router;
