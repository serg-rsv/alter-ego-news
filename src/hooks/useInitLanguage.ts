import { useEffect } from 'react';

import { useAppDispatch } from '../redux/store';
import { setLanguage } from '../redux/languageSlice';
import { getInitialLanguage } from '../utils/getInitialLanguage';

export function useInitLanguage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLanguage(getInitialLanguage()));
  }, [dispatch]);
}
