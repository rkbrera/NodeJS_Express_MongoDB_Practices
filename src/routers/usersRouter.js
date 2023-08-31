import { Router } from "express";
import { newUser } from "../controllers/userController";

const usersRouter = Router();

usersRouter.route("/users")
.post(newUser);

usersRouter.route("/users/:taskId");

export default usersRouter;