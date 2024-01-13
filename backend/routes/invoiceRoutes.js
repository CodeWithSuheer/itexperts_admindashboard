
import express from 'express';
import { createInvoice, getAllInvoices } from '../controllers/invoiceController.js';

const invoiceRouter = express.Router();

invoiceRouter.post("/createInvoice",createInvoice);
invoiceRouter.post("/getAllInvoices",getAllInvoices);

export default invoiceRouter;