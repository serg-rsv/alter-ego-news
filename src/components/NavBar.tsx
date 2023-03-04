import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Button,
  Box,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher';
import AuthModal from './AuthModal';
import { selectIsLoggedIn } from '../redux/authSlice';
import UnderConstructionWarning from './UnderConstructionWarning';

interface NavItem {
  label: string;
  to: string;
  private: boolean;
}

const navItems: NavItem[] = [
  {
    label: 'home',
    to: '/',
    private: false,
  },
  {
    label: 'news',
    to: 'news',
    private: false,
  },
  {
    label: 'profile',
    to: 'profile',
    private: true,
  },
];

const Link = styled(NavLink)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.up('md')]: {
    color: theme.palette.secondary.main,
  },
  textDecoration: 'none',
  '&:hover': {
    [theme.breakpoints.up('sm')]: {
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.up('md')]: {
      color: theme.palette.secondary.light,
    },
    textDecoration: 'underline',
  },
  '&.active': {
    [theme.breakpoints.up('sm')]: {
      color: theme.palette.primary.dark,
    },
    [theme.breakpoints.up('md')]: {
      color: theme.palette.secondary.dark,
    },
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
}));

const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { t } = useTranslation(['common', 'navigation']);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleAuthModalOpen = () => {
    setIsAuthModalOpen(true);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const renderTabletNav = () => (
    <Toolbar>
      <Typography
        variant="h6"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        AE News
      </Typography>
      <List sx={{ display: 'flex', gap: 2 }}>
        {navItems.map((navItem) => {
          if (!navItem.private || isLoggedIn) {
            return (
              <ListItem key={navItem.to}>
                <Link to={navItem.to}>
                  <Typography color="inherit">
                    {t(`navigation:${navItem.label}`)}
                  </Typography>
                </Link>
              </ListItem>
            );
          }
          return null;
        })}
      </List>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        {!isLoggedIn && (
          <Button onClick={handleAuthModalOpen} color="inherit">
            {t('common:login')}
          </Button>
        )}
        <LanguageSwitcher />
      </Box>
    </Toolbar>
  );

  const renderMobileNav = () => (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          [theme.breakpoints.up('md')]: {
            display: 'none',
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        AE News
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        {!isLoggedIn && (
          <Button onClick={handleAuthModalOpen} color="inherit">
            {t('common:login')}
          </Button>
        )}
        <LanguageSwitcher />
      </Box>
      <Drawer
        variant="temporary"
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
      >
        <List
          sx={{
            minWidth: '50vw',
            display: 'grid',
            justifyContent: 'center',
          }}
        >
          {navItems.map((navItem) => {
            if (!navItem.private || isLoggedIn) {
              return (
                <ListItem key={navItem.to}>
                  <Link to={navItem.to}>
                    <Typography color="inherit">
                      {t(`navigation:${navItem.label}`)}
                    </Typography>
                  </Link>
                </ListItem>
              );
            }
            return null;
          })}
        </List>
      </Drawer>
    </Toolbar>
  );

  return (
    <AppBar position="fixed">
      <UnderConstructionWarning />
      {isTablet ? renderTabletNav() : renderMobileNav()}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </AppBar>
  );
};

export default NavBar;
