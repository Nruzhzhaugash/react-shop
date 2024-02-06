import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

import { BASE_URL } from "../../api/constants";
import { loginUser } from "@/features/authentication/login/model/login";

export const createUser = createAsyncThunk(
  'users/createUser', 
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    cart: [],
    isLoading: false,
    formType: 'signup',
    showForm: false
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id)

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id ? { ...item, quantity: payload.quantity || item.quantity + 1 } 
          : item;
        })
      } else newCart.push({ ...payload, quantity: 1 })

      state.cart = newCart;
    },
    toogleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toogleFormType: (state, { payload }) => {
      state.formType = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, addCurrentUser);
    builder.addCase(loginUser.fulfilled, addCurrentUser);
  },
});

export const { addItemToCart, toogleForm, toogleFormType } = userSlice.actions;

export default userSlice.reducer;