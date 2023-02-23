import { useEffect } from 'react';

import { useAppDispatch } from '../redux/store';
import { Language, setLanguage } from '../redux/languageSlice';

export function useInitLanguage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage) {
      dispatch(setLanguage(storedLanguage));
    }
  }, [dispatch]);
}
