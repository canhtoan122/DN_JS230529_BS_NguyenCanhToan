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
exports.deleteTask = exports.postTask = exports.findTaskId = exports.findAllTasks = void 0;
const tasks_service_1 = require("../services/tasks.service");
const findAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield (0, tasks_service_1.findAll)();
        return res.status(200).json({
            data: tasks[0]
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.findAllTasks = findAllTasks;
const findTaskId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = req.params.id;
        const tasks = yield (0, tasks_service_1.findById)(taskId);
        return res.status(200).json({
            data: tasks[0]
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.findTaskId = findTaskId;
const postTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description, status } = req.body;
        const tasks = yield (0, tasks_service_1.createTask)(description, status);
        return res.status(200).json({
            data: "Create success!"
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.postTask = postTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = req.params.id;
        const tasks = yield (0, tasks_service_1.deleteTaskById)(taskId);
        return res.status(200).json({
            data: "Delete success!"
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteTask = deleteTask;
