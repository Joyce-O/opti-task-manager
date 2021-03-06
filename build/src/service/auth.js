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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSessions = exports.updateSession = exports.reIssueAccessToken = exports.createAccessToken = exports.createSession = void 0;
const lodash_1 = require("lodash");
require("dotenv/config");
const auth_1 = __importDefault(require("@src/db/model/auth"));
const jwt_1 = require("@src/utility/jwt");
const user_1 = require("./user");
function createSession(userId, userAgent) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = yield auth_1.default.create({ user: userId, userAgent });
        return session.toJSON();
    });
}
exports.createSession = createSession;
function createAccessToken({ user, session, }) {
    const accessToken = (0, jwt_1.sign)(Object.assign(Object.assign({}, user), { session: session._id }), { expiresIn: process.env.ACCESS_TOKEN_EXP_TIME });
    return accessToken;
}
exports.createAccessToken = createAccessToken;
function reIssueAccessToken({ refreshToken, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = (0, jwt_1.decode)(refreshToken);
        if (!(result === null || result === void 0 ? void 0 : result.decoded) || !(0, lodash_1.get)(result === null || result === void 0 ? void 0 : result.decoded, '_id'))
            return false;
        const session = yield auth_1.default.findById((0, lodash_1.get)(result === null || result === void 0 ? void 0 : result.decoded, '_id'));
        if (!session || !(session === null || session === void 0 ? void 0 : session.valid))
            return false;
        const user = yield (0, user_1.findUser)({ _id: session.user });
        if (!user)
            return false;
        const accessToken = createAccessToken({ user, session });
        return accessToken;
    });
}
exports.reIssueAccessToken = reIssueAccessToken;
function updateSession(query, update) {
    return __awaiter(this, void 0, void 0, function* () {
        return auth_1.default.updateOne(query, update);
    });
}
exports.updateSession = updateSession;
function findSessions(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return auth_1.default.find(query).lean();
    });
}
exports.findSessions = findSessions;
