import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

//API URL
const getAllProjects = "http://localhost:8080/api/projects/getAllProjects";

//GET ALL PROJECTS
export const getAllProjectsAsync = createAsyncThunk( "getAllProjects/Projects", async () => {
    try {
      const response = await axios.post(getAllProjects);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data.msg);
      throw error;
    }
  }
);

//PENDING REQUESTS ASYNC THUNK
export const deleteContactFormAsync = createAsyncThunk(
  "deleteContactForm/ContactForms",
  async (id) => {
    try {
      const response = await axios.post(deleteContactForm, { id });
      toast.success(response.data.message);

      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

// INITIAL STATE
const initialState = {
  allProjects: [],
  loading: false,
};

const ProjectSlice = createSlice({
  name: "ProjectSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET ALL PROJECTS
      .addCase(getAllProjectsAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllProjectsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allProjects = action.payload;
      });
  },
});

export default ProjectSlice.reducer;
