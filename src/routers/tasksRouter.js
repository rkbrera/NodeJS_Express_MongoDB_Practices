import { Router } from "express";
import { newTask } from "../controllers/tasksController";

const tasksRouter = Router();

tasksRouter.route("/tasks")
.post(newTask);

tasksRouter.route("/tasks/:Id");

export default tasksRouter;
