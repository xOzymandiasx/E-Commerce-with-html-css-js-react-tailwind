import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
  name: "Fall Limited Edition Sneakers",
  price: 125.00,
  amount: 0,
  id: 0},
];

export const productSlice = createSlice({
  name: "productCount",
  initialState,
  reducers: {
    addCart: (state, action) => {
      return state += action.payload;
    },
    remCart: (state, action) => {
      return state -= action.payload;
    },
  },
});

export const { addCart, remCart } = productSlice.actions;
export default productSlice.reducer;
