"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("@src/middleware/validateRequest"));
const user_1 = require("@src/db/schema/user");
const user_2 = require("@src/controller/user");
const auth_1 = require("@src/controller/auth");
const router = (0, express_1.Router)();
router.post('/login', (0, validateRequest_1.default)(user_1.loginUserSchema), auth_1.loginHandler);
router.post('/users', (0, validateRequest_1.default)(user_1.createUserSchema), user_2.createUserHandler);
exports.default = router;
