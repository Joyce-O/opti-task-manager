"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const nanoid_1 = require("nanoid");
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    taskId: {
        type: String,
        required: true,
        unique: true,
        default: () => (0, nanoid_1.nanoid)(10),
    },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, default: true },
    description: { type: String, default: true },
    completionTime: { type: Date, default: true },
    notificationTime: { type: Date, default: true },
    isCompleted: { type: Boolean, default: true },
}, { timestamps: true });
exports.Task = (0, mongoose_1.model)('Task', TaskSchema);
