import express from "express";
import { findAllTasks, findTaskId, postTask, deleteTask } from "../controllers/tasks.controllers";
const userRouter= express.Router();

userRouter.get("/api/v1/tasks", findAllTasks);
userRouter.get("/api/v1/tasks/:id", findTaskId);
userRouter.post("/api/v1/task", postTask);
userRouter.delete("/api/v1/task/:id", deleteTask);

export default userRouter;