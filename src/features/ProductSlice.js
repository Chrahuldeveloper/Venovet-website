import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartLength: 0,
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addTocart } = cartslice.actions;
export default cartslice.reducer;
