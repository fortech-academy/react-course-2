import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },

    addItemToCart(state, action) {
      //action.payload = {book: {title: "book1"}, quantity: 1}
      if (state.cart.length > 0) {
        const index = state.cart.findIndex(
          (item) => item.book.id === action.payload.book.id
        );
        //index =>
        //-1 not found

        if (index !== -1) {
          state.cart[index].quantity += action.payload.quantity;
        } else {
          state.cart.push(action.payload);
        }
      } else {
        state.cart.push(action.payload);
      }
    },

    removeItemFromCart(state, action) {
      const index = state.cart.findIndex(
        (item) => item.book.id === action.payload.book.id
      );

      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },

    incrementQuantity(state, action) {
      const index = state.cart.findIndex(
        (item) => item.book.id === action.payload.book.id
      );

      if (index !== -1) {
        state.cart[index].quantity++;
      }
    },

    decrementQuantity(state, action) {
      const index = state.cart.findIndex(
        (item) => item.book.id === action.payload.book.id
      );

      if (index !== -1) {
        state.cart[index].quantity--;
      }
    },
  },
});

export default cartSlice.reducer;
export const { setCart, addItemToCart, removeItemFromCart } = cartSlice.actions;
