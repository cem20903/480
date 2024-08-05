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
      console.log(action.payload, 'ESTO DE AQUI')
      state.isLogued = action.payload
    },
  },
});


export const { setIsLogued } = userSlice.actions;

export const isLogued = (state: RootState) => state.user.isLogued;



// export const selectPostList = (state: RootState) => state.post.postList;
// export const selectNotifications = (state: RootState) => state.post.notifications;
// export const selectIsLoading = (state: RootState) => state.post.isLoading;

export default userSlice.reducer;
