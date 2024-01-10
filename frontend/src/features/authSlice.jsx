import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

//API URL
const signupUrl = "http://localhost:8080/api/user/signup";
const getUserUrl = "http://localhost:3000/api/getUser";
const loginUrl = "http://localhost:8080/api/user/login";
const logoutUrl = "http://localhost:8080/api/user/logout";
const updateUserUrl = "http://localhost:3000/api/updateUser";
const forgotPasswordUrl = "http://localhost:3000/api/forgotPassword";
const resetPasswordUrl = "http://localhost:3000/api/resetPassword";
const authUserUrl = "http://localhost:8080/api/user/authUser";

//CREATE ASYNC THUNK
export const createuserAsync = createAsyncThunk(
  "user/create",
  async (formData) => {
    try {
      const response = await axios.post(signupUrl, formData);
      toast.success(response.data.msg);

      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
);

// lOGIN ASYNC THUNK
export const loginuserAsync = createAsyncThunk(
  "user/login",
  async (formData) => {
    try {
      const response = await axios.post(loginUrl, formData);
      toast.success("Login Up Succsessfull");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
);

// FORGET ASYNC THUNK
export const forgetuserAsync = createAsyncThunk(
  "user/forget",
  async (email) => {
    try {
      const response = await axios.post(forgotPasswordUrl, email);
      console.log(response.data);
      toast.success("Reset Password link sent");
      return response.data;
    } catch (error) {
      console.log("forget password failed", error.response);
      toast.error("forget password failed", error.response);
    }
  }
);

// RESET PASSWORD ASYNC THUNK
export const resetpasswordAsync = createAsyncThunk(
  "user/resetPassword",
  async (newPassword, confirmPassword, resetToken) => {
    try {
      const response = await axios.post(
        resetPasswordUrl,
        newPassword,
        confirmPassword,
        resetToken
      );
      //toast.success(response.data.msg)
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.message);
      // toast.error(error.response.data.msg);
    }
  }
);

export const authUserAsync = createAsyncThunk("users/authUser",async ()=>{
  try {
   const response = await axios.get(authUserUrl);
   return response.data;
  } catch (error) {
   throw new Error(error.message)
  }
});

export const logoutUserAsync = createAsyncThunk("users/logout",async ()=>{
  await axios.delete(logoutUrl);
});


// INITIAL STATE
const initialState = {
  createUser: null,
  user: null,
  loading: false,
  forgetPasswordEmail: null,
  resetPassword: null,
  validateToken: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    reset:(state)=>initialState 
  },
     extraReducers: (builder) => {
     builder

      // SIGN UP ADD CASE
      .addCase(createuserAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createuserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.createUser = action.payload;
      })

      // LOGIN ADD CASE
      .addCase(loginuserAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginuserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      // FORGET PASSWORD ADD CASE
      .addCase(forgetuserAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(forgetuserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.forgetPasswordEmail = action.payload;
        state.forgetPasswordEmail = null;
      })
       // AUTH USER ADD CASE
      .addCase(authUserAsync.pending,(state)=>{
        state.loading = true;
      })
      .addCase(authUserAsync.fulfilled,(state,action)=>{
        state.loading = false;
        state.user = action.payload;
    })

  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
