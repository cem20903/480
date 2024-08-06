import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from './index'


type initialState = { isLogued: boolean }

const initialState: initialState = {
  isLogued: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogued: (state: any, action: PayloadAction<boolean>) => {
      state.isLogued = action.payload
    },
  },
});


export const { setIsLogued } = userSlice.actions;

export const isLogued = (state: RootState) => state.user.isLogued;

export default userSlice.reducer;
