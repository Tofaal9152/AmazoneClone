"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store";
// persist
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);
export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {children}
      </PersistGate>
    </Provider>
  );
};
