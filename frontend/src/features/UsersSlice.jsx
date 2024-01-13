import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

//API URL
const getAllUsersUrl = "http://localhost:8080/api/user/getAllUsers";


//GET ALL USERS
export const getAllUsersDataAsync = createAsyncThunk("user/getAllUsersData", async () => {
    try {
        const response = await axios.post(getAllUsersUrl);
        console.log(response.data);
        return response.data;
    } catch (error) {
      throw error
    }
  });

// INITIAL STATE
const initialState = {
  userData: [],
  authorizedUser: null,
  loading: false,
};

const UsersSlice = createSlice({
  name: "UsersSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET ALL INVOICES
      .addCase(getAllUsersDataAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllUsersDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.users;
      });
  },
});

export default UsersSlice.reducer;
