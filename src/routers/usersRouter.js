import { Router } from "express";
import { 
    getUsers, 
    createUser,
    getUserById } from "../controllers/userController";

const usersRouter = Router();

usersRouter.route("/users")
.get(getUsers)
.post(createUser);

usersRouter.route("/users/:id")
.get(getUserById)

export default usersRouter;