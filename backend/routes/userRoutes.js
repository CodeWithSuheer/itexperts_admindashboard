import express from "express";
import {
  authUser,
  authenticateUser,
  forgotPassword,
  login,
  logout,
  resetPassword,
  signUp,
  updateUser,
} from "../controllers/userController.js";
import { adminOnly, verifyUser } from "../middleware/AuthUser.js";

const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", login);
userRouter.delete("/logout",verifyUser,logout);
userRouter.post("/authenticateUser",verifyUser,adminOnly,authenticateUser);
userRouter.post("/updateRole", verifyUser,adminOnly,updateUser);
userRouter.post("/forgotPassword", forgotPassword);
userRouter.post("/resetPassword", resetPassword);
userRouter.get("/authUser",authUser);

export default userRouter;
