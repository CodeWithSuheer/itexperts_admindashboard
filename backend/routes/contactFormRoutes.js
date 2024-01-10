
import express from "express";
import { deleteContactForm, getAllForms } from "../controllers/contactFormsController";

const contactFormRouter = express.Router();

contactFormRouter.post("/getAllForms",getAllForms);
contactFormRouter.post("/deleteContactForm",deleteContactForm)


