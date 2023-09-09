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
    deleteitem(state, action) {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item,i) => i !== itemIdToRemove
      );
    },
  },
});

export const { addTocart, deleteitem } = cartslice.actions;
export default cartslice.reducer;
