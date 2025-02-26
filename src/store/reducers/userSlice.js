import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/baseUrl";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const getUser = createAsyncThunk(
    "users/getUser",
    async (_, { getState, rejectWithValue }) => {
      try {
        const token = getState().auth.token;
        const config = { headers: { "x-auth-token": `${token}` } };
        const response = await api.get(`/users/me`, config);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
  },
});

export default userSlice.reducer;