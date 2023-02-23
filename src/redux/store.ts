import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';

import authSlice, { AuthState } from './authSlice';
import languageSlice, { ILanguageState } from './languageSlice';

export interface RootState {
  auth: AuthState;
  language: ILanguageState;
}

const rootReducer = combineReducers({
  auth: authSlice,
  language: languageSlice,
  // news: newsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
