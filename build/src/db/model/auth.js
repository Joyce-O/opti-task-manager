"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SessionSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    userAgent: { type: String },
    valid: { type: Boolean, default: true },
}, { timestamps: true });
const Session = (0, mongoose_1.model)('Session', SessionSchema);
exports.default = Session;
