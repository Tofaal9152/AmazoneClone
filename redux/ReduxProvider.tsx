"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store";
// persist
// step 6
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
// step 6
let persistor = persistStore(store);
export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {/* step 7 Thats all ! */}
      <PersistGate loading={null} persistor={persistor}>
      {children}
      </PersistGate>
    </Provider>
  );
};
