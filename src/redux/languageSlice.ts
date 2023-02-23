import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import i18n from '../i18n/i18n';
import { RootState } from './store';

export type Language = 'en' | 'uk';

export interface ILanguageState {
  language: Language;
}

const initialState: ILanguageState = {
  language: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
      i18n.changeLanguage(action.payload); // set the language for i18n library
      localStorage.setItem('language', action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language.language;

export default languageSlice.reducer;
