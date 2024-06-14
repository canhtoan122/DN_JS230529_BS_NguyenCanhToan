"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_controllers_1 = require("../controllers/tasks.controllers");
const userRouter = express_1.default.Router();
userRouter.get("/api/v1/tasks", tasks_controllers_1.findAllTasks);
userRouter.get("/api/v1/tasks/:id", tasks_controllers_1.findTaskId);
userRouter.post("/api/v1/task", tasks_controllers_1.postTask);
userRouter.delete("/api/v1/task/:id", tasks_controllers_1.deleteTask);
exports.default = userRouter;
