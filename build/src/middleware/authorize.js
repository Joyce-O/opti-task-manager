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
exports.authorize = void 0;
const lodash_1 = require("lodash");
const jwt_1 = require("@src/utility/jwt");
const authorize = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = (0, lodash_1.get)(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
    if (!token)
        return res.sendStatus(403);
    const { decoded } = (0, jwt_1.decode)(token);
    if (decoded) {
        return next();
    }
});
exports.authorize = authorize;
