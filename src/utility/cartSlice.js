import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    Addtocart: (state, action) => {
      state.items.push(action.payload);
    },
    Removefromcart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
    },
    clearcart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { Addtocart, Removefromcart, clearcart } = cartSlice.actions;
export default cartSlice.reducer;
