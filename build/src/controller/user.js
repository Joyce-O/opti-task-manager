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
exports.createUserHandler = void 0;
const user_1 = require("@src/service/user");
const logger_1 = __importDefault(require("@src/utility/logger"));
const user_2 = __importDefault(require("@src/db/model/user"));
function createUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email } = req.body;
            const userExist = yield user_2.default.findOne({ email });
            if (userExist !== null)
                return res.send({
                    error: true,
                    message: 'The email specified already exists',
                });
            yield (0, user_1.createUser)(req.body);
            return res.status(201).json({ Successful: true, email });
        }
        catch (err) {
            const error = err;
            logger_1.default.error(error);
            return res.status(500).json({ error: true, message: error.message });
        }
    });
}
exports.createUserHandler = createUserHandler;
