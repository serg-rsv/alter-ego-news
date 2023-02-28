import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import i18n from '../i18n/i18n';
import { RootState } from './store';
import { SET_LANGUAGES, getInitialLanguage } from '../utils/getInitialLanguage';

export type Language = typeof SET_LANGUAGES[number];

export interface LanguageState {
  language: Language;
}

const initialState: LanguageState = {
  language: getInitialLanguage(),
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
      i18n.changeLanguage(action.payload);
      localStorage.setItem('language', action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language.language;

export default languageSlice.reducer;
