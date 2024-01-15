import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

//API URL
const createInvoicesUrl = "http://localhost:8080/api/invoices/createInvoice";
const getAllInvoicesUrl = "http://localhost:8080/api/invoices/getAllInvoices";
const deleteInvoicesUrl = "http://localhost:8080/api/invoices/deleteInvoice";


// CREATE INVOICES ASYNC THUNK
export const createInvoicesAsync = createAsyncThunk( "create/invoices",  async () => {
    try {
      const response = await axios.post(createInvoicesUrl);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }
);

// GET ALL INVOICES ASYNC THUNK
export const getAllInvoicesAsync = createAsyncThunk( "allinvoice/invoices",  async () => {
    try {
      const response = await axios.post(getAllInvoicesUrl);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }
);

// DELETE INVOICES ASYNC THUNK
export const deleteInvoicesAsync = createAsyncThunk( "delete/invoices",  async (id) => {
    try {
      const response = await axios.post(deleteInvoicesUrl, {id});
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }
);

// INITIAL STATE
const initialState = {
  createInvoice:null,
  allInvoices: [],
  loading: false,
};

const invoiceSlice = createSlice({
  name: "invoiceSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // CREATE INVOICES
      .addCase(createInvoicesAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createInvoicesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.createInvoice = action.payload;
      })

      // GET ALL INVOICES
      .addCase(getAllInvoicesAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllInvoicesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allInvoices = action.payload;
      })
  },
});

export default invoiceSlice.reducer;
