import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

//API URL
const pendingRequestsUrl = "http://localhost:3000/api/signup";
const pendingRequestsStatusUpdateUrl = "http://localhost:3000/api/signup";
const approvedRequestsUrl = "http://localhost:3000/api/signup";
const getUserUrl = "http://localhost:3000/api/getUser";
const loginUrl = "http://localhost:3000/api/login";

//PENDING REQUESTS ASYNC THUNK
export const pendingRequestsAsync = createAsyncThunk("admininfo/pending", async () => {
  try {
    const response = await axios.post(pendingRequestsUrl);
    console.log("Pending Req..", response.data);
    return response.data;
  } catch (error) {
    console.log("Pending Req..", error.response);
    toast.error("Pending Req.. failed", error.response);
  }
});


//PENDING REQUESTS STATUS UPDATE ASYNC THUNK
export const pendingRequestStatusUpdateAsync = createAsyncThunk("admininfo/pendingStatus", async () => {
  try {
    const response = await axios.post(pendingRequestsStatusUpdateUrl);
    console.log("Pending Req.. status", response.data);
    return response.data;
  } catch (error) {
    console.log("Pending Req.. status", error.response);
    toast.error("Pending Req.. status failed", error.response);
  }
});



//APPROVED REQUESTS ASYNC THUNK
export const approvedRequestsAsync = createAsyncThunk("admininfo/approved", async () => {
  try {
    const response = await axios.post(approvedRequestsUrl);
    console.log("Approved Req..", response.data);
    return response.data;
  } catch (error) {
    console.log("Approved Req..", error.response);
    toast.error("Approved Req.. failed", error.response);
  }
});


// INITIAL STATE
const initialState = {
  pendingRequests: [],
  approvedRequests: [],
  loading: false,
};

const adminInfoSlice = createSlice({
  name: "adminInfoSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // PENDING REQUESTS ADD CASE
      .addCase(pendingRequestsAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(pendingRequestsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingRequests = action.payload;
      })


      // PENDING REQUESTS UPDATE STATUS ADD CASE
      .addCase(pendingRequestStatusUpdateAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(pendingRequestStatusUpdateAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingRequests = action.payload;
      })


      // APPROVED REQUESTS ADD CASE
      .addCase(approvedRequestsAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(approvedRequestsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.approvedRequests = action.payload;
      });
  },
});

export default adminInfoSlice.reducer;
