import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

//API URL
const getAllInvoicesUrl = "http://localhost:8080/api/user/getAllUsers";
const authorizeUserUrl = "http://localhost:8080/api/user/approveUser";
const rejectUserUrl = "http://localhost:8080/api/user/rejectUser";
const updateRoleUrl = "http://localhost:8080/api/user/updateRole";


//GET ALL INVOICES ASYNC THUNK
export const getAllInvoicesAsync = createAsyncThunk( "allinvoice/invoices",  async (id) => {
    try {
      const response = await axios.post(getAllInvoicesUrl, { id });
      console.log(response.data.msg);
      toast.success(response.data.msg);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
      console.log(response.data.msg);
    }
  }
);

// INITIAL STATE
const initialState = {
  allInvoices: [],
  authorizedUser: null,
  loading: false,
};

const invoiceSlice = createSlice({
  name: "invoiceSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET ALL INVOICES
      .addCase(getAllInvoicesAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllInvoicesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allInvoices = action.payload.users;
      });
  },
});

export default invoiceSlice.reducer;
