import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import adminInfoSlice from "../features/adminInfoSlice";
import contactFormSlice from "../features/contactFormSlice";
import invoiceSlice from "../features/invoiceSlice";
import UsersSlice from "../features/UsersSlice";
import SupportSlice from "../features/SupportSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    adminInfo: adminInfoSlice,
    contactForms: contactFormSlice,
    invoice: invoiceSlice,
    users: UsersSlice,
    support: SupportSlice
  },
});
// "021111225229"
