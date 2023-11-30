import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui_slice";
import cartSlice from "./cart_slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice,
  },
});

export default store;
