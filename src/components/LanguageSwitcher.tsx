import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Menu, MenuItem } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    handleLanguageClose();
  };

  return (
    <div>
      <Button
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleLanguageClick}
      >
        {i18n.language === 'en' ? 'EN' : 'UA'}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleLanguageClose}
      >
        <MenuItem onClick={() => handleLanguageChange('en')}>EN</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('ua')}>UA</MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
