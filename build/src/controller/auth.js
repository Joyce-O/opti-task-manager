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
exports.getUserSessionsHandler = exports.invalidateUserSessionHandler = exports.loginHandler = void 0;
require("dotenv/config");
const lodash_1 = require("lodash");
const user_1 = require("@src/service/user");
const auth_1 = require("@src/service/auth");
const jwt_1 = require("@src/utility/jwt");
function loginHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield (0, user_1.validatePassword)(req.body);
        if (!user) {
            return res.status(401).send('username or password incorrect');
        }
        const session = yield (0, auth_1.createSession)(user._id, req.get('user-agent') || '');
        const accessToken = (0, auth_1.createAccessToken)({
            user,
            session,
        });
        const refreshToken = (0, jwt_1.sign)(session, {
            expiresIn: process.env.EXPIRES_IN,
        });
        return res.send({ accessToken, refreshToken });
    });
}
exports.loginHandler = loginHandler;
function invalidateUserSessionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionId = (0, lodash_1.get)(req, 'user.session');
        yield (0, auth_1.updateSession)({ _id: sessionId }, { valid: false });
        return res.sendStatus(200);
    });
}
exports.invalidateUserSessionHandler = invalidateUserSessionHandler;
function getUserSessionsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = (0, lodash_1.get)(req, 'user._id');
        const sessions = yield (0, auth_1.findSessions)({ user: userId, valid: true });
        return res.send(sessions);
    });
}
exports.getUserSessionsHandler = getUserSessionsHandler;
