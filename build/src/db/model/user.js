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
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const logger_1 = __importDefault(require("@src/utility/logger"));
exports.UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    name: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });
exports.UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        try {
            //hash the password only if it is new or has been modified
            if (!user.isModified('password'))
                return next();
            const salt = yield bcryptjs_1.default.genSaltSync(Number(process.env.SALT_ROUNDS));
            const hash = yield bcryptjs_1.default.hashSync(user.password, salt);
            user.password = hash;
            return next();
        }
        catch (error) {
            logger_1.default.error(error);
            return next(error);
        }
    });
});
exports.UserSchema.methods.comparePassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        return bcryptjs_1.default.compare(password, user.password).then((result) => {
            return result;
        });
    });
};
const User = (0, mongoose_1.model)('User', exports.UserSchema);
exports.default = User;
