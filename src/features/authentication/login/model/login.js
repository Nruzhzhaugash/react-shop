import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { BASE_URL } from "@/shared/api/constants";

export const loginUser = createAsyncThunk(
  'users/loginUser', 
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, payload);
      const login = await axios.get(`${BASE_URL}/auth/profile`, {
        headers: {
          "Authorization": `Bearer ${res.data.access_token}`
        }
      });
      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
