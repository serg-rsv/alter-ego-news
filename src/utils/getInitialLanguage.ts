import { Language } from '../redux/languageSlice';

export const SET_LANGUAGES = ['en', 'uk'] as const;

export function getInitialLanguage(): Language {
  const savedLanguage = localStorage.getItem('language') as Language;
  if (savedLanguage && SET_LANGUAGES.includes(savedLanguage)) {
    return savedLanguage;
  }
  return 'en';
}
