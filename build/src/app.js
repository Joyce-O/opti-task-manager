"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("@src/utility/logger"));
const connect_1 = __importDefault(require("@src/db/connect"));
const route_1 = __importDefault(require("@src/route"));
const port = Number(process.env.HTTP_PORT) || 5000;
const host = process.env.HTTP_HOST || '127.0.0.1';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('*', (req, res) => {
    return res.send({ Message: 'Hello, opti-task-manager' });
});
app.use(route_1.default);
app.listen(port, host, () => {
    logger_1.default.info(`Server listening on http://${host}:${port}`);
    (0, connect_1.default)();
});
