import mongoose from "mongoose";
import { Invoices, MainDocument } from "../models/invoiceModel.js";

function setMongoose() {
  return mongoose.set("toJSON", {
    virtuals: true,
    transform: (doc, returnValue) => {
      delete returnValue._id;
      delete returnValue.__v;
    },
  });
}

export const createInvoice = async (req, res, next) => {
  try {
   const invoiceData = req.body;

    if (invoiceData.invoiceType === 'half') {
        const invoice1 = new Invoices({
          to: invoiceData.to,
          service: invoiceData.service,
          paymentStatus: invoiceData.paymentStatus,
          amount: invoiceData.amount / 2, 
          discount: invoiceData.discount,
          customerId: invoiceData.customerId,
          orderId: invoiceData.orderId,
          invoiceType: 'half',
          dueDate: invoiceData.dueDate
        });
  
        const invoice2 = new Invoices({
          to: invoiceData.to,
          service: invoiceData.service,
          paymentStatus: invoiceData.paymentStatus,
          amount: invoiceData.amount / 2,
          discount: invoiceData.discount,
          customerId: invoiceData.customerId,
          orderId: invoiceData.orderId,
          invoiceType: 'half',
          secondInvoiceDueDate: invoiceData.secondInvoiceDueDate,
        });
  
        const mainDocument = new MainDocument({
            to: invoiceData.to,
            customerId: invoiceData.customerId,
            paymentStatus: invoiceData.paymentStatus,
            orderId: invoiceData.orderId,
            halfInvoices: [
                invoice1,
                invoice2
            ],
        });
        await mainDocument.save();
      } else {
        const mainDocument = new MainDocument({
            customerId: invoiceData.customerId,
            to: invoiceData.to,
            paymentStatus: invoiceData.paymentStatus,
            orderId: invoiceData.orderId,
            invoice: new Invoices(invoiceData)
        });
         mainDocument.halfInvoices = undefined;
        await mainDocument.save();
    }
  
    res.status(201).json({ msg: "Invoice Generated" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getAllInvoices = async (req, res, next) => {
  try {
    const getAllInvoices = await MainDocument.find({})
    .sort({createdAt: -1})
    setMongoose();
    res.status(200).json(getAllInvoices);
  } catch (error) {
    res.status(500).json({ msg:error.message});
  }
};


