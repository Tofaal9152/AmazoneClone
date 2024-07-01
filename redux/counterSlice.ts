import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface CounterState {
  cart: any;
}

const initialState: CounterState = {
  cart: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setcart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { setcart } = counterSlice.actions;
export const getCart = (state: RootState) => state.cart.cart;
export default counterSlice.reducer;
