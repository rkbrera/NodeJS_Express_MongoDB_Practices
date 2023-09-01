import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById
} from "../controllers/userController";

const usersRouter = Router();

usersRouter.route("/users")
.get(getUsers)
.post(createUser);

usersRouter.route("/users/:id")
.get(getUserById)
.put(updateUserById)
.delete(deleteUserById)

export default usersRouter;
