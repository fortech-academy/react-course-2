import { createSlice } from "@reduxjs/toolkit";

const snackBarsSlice = createSlice({
  name: "snackbar",
  initialState: {
    isOpen: false,
    message: "",
  },
  reducers: {
    //payload = "message" => {message: "", severity: "success"}
    openSnackbar: (state, action) => {
      state.isOpen = true;
      state.message = action.payload.message;
    },

    closeSnackbar: (state) => {
      state.isOpen = false;
    },
  },
});

export default snackBarsSlice.reducer;
export const { openSnackbar, closeSnackbar } = snackBarsSlice.actions;
