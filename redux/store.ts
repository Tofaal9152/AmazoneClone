import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
  reducer: {
    cart:counterSlice
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
