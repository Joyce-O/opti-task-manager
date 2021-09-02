"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const logger_1 = __importDefault(require("@src/logger"));
const connect = () => {
    const dbUri = process.env.MONGODB_URI;
    return mongoose_1.default
        .connect(dbUri)
        .then(result => {
        logger_1.default.info('Database connected', result);
    })
        .catch(error => {
        if (error.name === 'MongooseServerSelectionError') {
            logger_1.default.error({
                error: error,
                message: 'Make sure mongodb server is started',
            });
            return;
        }
        if (error.name === 'MongooseError') {
            logger_1.default.error({
                error: error,
                message: 'Make sure mongodb uri string is provided',
            });
            return;
        }
        logger_1.default.error({
            error: error,
            message: 'Error',
        });
    });
};
exports.default = connect;
