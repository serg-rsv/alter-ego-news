import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Menu, MenuItem } from '@mui/material';

import { useAppDispatch } from '../redux/store';
import { selectLanguage, setLanguage, Language } from '../redux/languageSlice';

const LanguageSwitcher = () => {
  const dispatch = useAppDispatch();
  const language = useSelector(selectLanguage);
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);

  const handleLanguageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: Language) => {
    dispatch(setLanguage(language));
    handleLanguageClose();
  };

  return (
    <div>
      <Button
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleLanguageClick}
      >
        {language === 'en' ? 'EN' : 'UK'}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleLanguageClose}
      >
        <MenuItem onClick={() => handleLanguageChange('en')}>EN</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('uk')}>UK</MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
