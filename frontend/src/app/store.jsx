import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import adminInfoSlice from "../features/adminInfoSlice";
import contactFormSlice from "../features/contactFormSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    adminInfo: adminInfoSlice,
    contactForms:contactFormSlice   
  },
});
// "021111225229"