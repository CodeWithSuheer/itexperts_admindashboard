
import express from "express";
import { createProject, getAllProjects } from "../controllers/projectsController.js";


const projectsRouter = express.Router();

projectsRouter.post("/createProject",createProject);
projectsRouter.post("/getAllProjects",getAllProjects);

export default projectsRouter;