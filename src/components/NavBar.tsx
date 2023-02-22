import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">{t('home')}</NavLink>
        </li>
        <li>
          <NavLink to="news">{t('news')}</NavLink>
        </li>
        <li>
          <NavLink to="login">{t('login')}</NavLink>
        </li>
        <li>
          <NavLink to="profile">{t('profile')}</NavLink>
        </li>
      </ul>
      <LanguageSwitcher />
    </>
  );
};

export default NavBar;
