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
exports.deleteTaskById = exports.createTask = exports.findById = exports.findAll = void 0;
const database_1 = __importDefault(require("../configs/database"));
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = "SELECT * FROM todolists";
    return yield database_1.default.execute(query);
});
exports.findAll = findAll;
const findById = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `SELECT * FROM todolists WHERE id = '${taskId}'`;
    return yield database_1.default.execute(query);
});
exports.findById = findById;
const createTask = (description, status) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `INSERT INTO todolists (description, status) VALUES ('${description}', ${status});`;
    return yield database_1.default.execute(query);
});
exports.createTask = createTask;
const deleteTaskById = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `DELETE FROM todolists WHERE id = ${taskId};`;
    return yield database_1.default.execute(query);
});
exports.deleteTaskById = deleteTaskById;
