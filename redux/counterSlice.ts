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
      const isTrue = state.cart.find((item:any)=>{
        return item.id ==action.payload.id
      })
      if (isTrue) {
        state.cart = state.cart.map((item:any)=>{
          return item.id === action.payload.id ? { ...item, quantity:item.quantity+1 } : item;
        })
      }else{

        state.cart.push({...action.payload,quantity:1});
      }
    },
    setremove: (state, action) => {
      state.cart = state.cart.filter((item: any) => {
        return item.id !== action.payload;
      });
    },
    setQuantityIncreament:(state,action)=>{
      state.cart = state.cart.map((item: any) => {
        return item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    },
    setQuantityDecreament:(state,action)=>{
      state.cart = state.cart.map((item: any) => {
        return item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    }
  },
});

export const { setcart, setremove, setQuantityIncreament, setQuantityDecreament } =
  counterSlice.actions;
export const getCart = (state: RootState) => state.cart.cart;
export default counterSlice.reducer;
