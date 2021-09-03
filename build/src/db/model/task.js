"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    taskId: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        unique: true,
        default: () => new mongoose_1.Types.ObjectId(),
    },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String },
    description: { type: String },
    completionTime: { type: Date },
    notificationTime: { type: Date },
    isCompleted: { type: Boolean, default: false },
}, { timestamps: true });
exports.Task = (0, mongoose_1.model)('Task', TaskSchema);
