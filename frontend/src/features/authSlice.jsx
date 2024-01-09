import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

//API URL
const signupUrl = "http://localhost:3000/api/signup";
const getUserUrl = "http://localhost:3000/api/getUser";
const loginUrl = "http://localhost:3000/api/login";
const logoutUrl = "http://localhost:3000/api/logout";
const updateUserUrl = "http://localhost:3000/api/updateUser";
const forgotPasswordUrl = "http://localhost:3000/api/forgotPassword";
const resetPasswordUrl = "http://localhost:3000/api/resetPassword";
const validateTokenUrl = "http://localhost:3000/api/validateToken";

//CREATE ASYNC THUNK
export const createuserAsync = createAsyncThunk(
  "user/create",
  async (formData) => {
    try {
      const response = await axios.post(signupUrl, formData);
      console.log("create user", response.data);
      toast.success("Sign Up Succsessfull");
      return response.data;
    } catch (error) {
      console.log("create user", error.response);
      toast.error("Signup failed", error.response);
    }
  }
);

// lOGIN ASYNC THUNK
export const loginuserAsync = createAsyncThunk(
  "user/login",
  async (formData) => {
    try {
      const response = await axios.post(loginUrl, formData);
      console.log(response.data);
      toast.success("Login Up Succsessfull");
      return response;
    } catch (error) {
      console.log("login failed", error.response);
      toast.error("login failed", error.response);
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

// INITIAL STATE
const initialState = {
  createUser: null,
  user: null,
  isAuthenticated: false,
  loading: false,
  logoutUser: null,
  clearUser: null,
  forgetPasswordEmail: null,
  resetPassword: null,
  validateToken: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
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
        state.user = action.payload.data;
        state.isAuthenticated = true;
      })

      // FORGET PASSWORD ADD CASE
      .addCase(forgetuserAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(forgetuserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.forgetPasswordEmail = action.payload;
        state.forgetPasswordEmail = null;
      });
  },
});

export const { clearUser } = authSlice.actions;

export default authSlice.reducer;
