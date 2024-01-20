
import express from "express";
import { createProject, getAllProjects } from "../controllers/projectsController.js";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });
const projectsRouter = express.Router();

projectsRouter.post("/createProject",upload.single("filename"),createProject);
projectsRouter.post("/getAllProjects",getAllProjects);

export default projectsRouter;