
import { getAllClients } from "../controllers/clientController.js";
import express from "express";

const clientRouter = express();

clientRouter.post("/getAllClients",getAllClients);

export default clientRouter;