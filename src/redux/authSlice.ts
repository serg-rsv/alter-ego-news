import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

export interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
}

const initialState: AuthState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  username: localStorage.getItem('username'),
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.username = action.payload;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', action.payload);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = null;
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectUsername = (state: RootState) => state.auth.username;

export default authSlice.reducer;
