import { Router } from "express";
import {getTask, newTask } from "../controllers/tasksController";

const tasksRouter = Router();

tasksRouter.route("/tasks")
.get(getTask)
.post(newTask);

tasksRouter.route("/tasks/:Id");

export default tasksRouter;
