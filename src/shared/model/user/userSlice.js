import { createSlice } from "@reduxjs/toolkit"

import { loginUser } from "@/features/authentication/login/model/login";
import { updateUser } from "@/widgets/Profile/model/updateUser";
import { createUser } from "@/features/authentication/SignUpForm/model/signup";

const addCurrentUser = (state, { payload }) => {
  if (payload instanceof Error) {
    // Если payload - объект ошибки, сохраняем только текст ошибки
    state.error = payload.message;
  } else {
    // Иначе сохраняем payload как обычное значение
    state.currentUser = payload;
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    cart: [],
    isLoading: false,
    formType: "signup",
    showForm: false,
    error: null
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
    builder.addCase(updateUser.fulfilled, addCurrentUser);
  },
});

export const { addItemToCart, toogleForm, toogleFormType } = userSlice.actions;

export default userSlice.reducer;