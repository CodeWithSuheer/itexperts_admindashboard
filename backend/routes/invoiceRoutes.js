
import express from 'express';
import { createInvoice, getAllInvoices, updateInvoice } from '../controllers/invoiceController.js';

const invoiceRouter = express.Router();

invoiceRouter.post("/createInvoice",createInvoice);
invoiceRouter.post("/getAllInvoices",getAllInvoices);
invoiceRouter.post("/updateInvoice",updateInvoice);

export default invoiceRouter;