import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { BASE_URL } from "@/shared/api/constants";

export const updateUser = createAsyncThunk(
  'users/updateUser', 
  async (payload, thunkAPI) => {
    try {
      const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);