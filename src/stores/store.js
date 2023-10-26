import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import snackbarSlice from "./snackbarSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    bookReducer: bookSlice,
    snackbarReducer: snackbarSlice,
    cartReducer: cartSlice,
  },
});

export default store;
