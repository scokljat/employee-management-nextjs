import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";
import listenerMiddeware from "./listener";

export const store = configureStore({
  reducer: {
    app: Reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddeware.middleware),
});
