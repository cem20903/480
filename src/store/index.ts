import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { Store } from "redux"

export const store: Store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
