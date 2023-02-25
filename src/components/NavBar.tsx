import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  {
    label: 'home',
    to: '/',
  },
  {
    label: 'news',
    to: 'news',
  },
  {
    label: 'profile',
    to: 'profile',
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
  const { t } = useTranslation();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        {navItems.map((navItem) => (
          <ListItem key={navItem.to}>
            <Link to={navItem.to}>
              <Typography color="inherit">{t(navItem.label)}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Button color="inherit">{t('login')}</Button>
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
        <Button color="inherit">{t('login')}</Button>
        <LanguageSwitcher />
      </Box>
      <Drawer
        sx={{
          [theme.breakpoints.up('md')]: {
            flexShrink: 1,
          },
        }}
        variant="temporary"
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          {navItems.map((navItem) => (
            <ListItem key={navItem.to} button onClick={handleDrawerToggle}>
              <Link to={navItem.to}>
                <ListItemText primary={t(navItem.label)} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Toolbar>
  );

  return (
    <AppBar position="fixed">
      {isTablet ? renderTabletNav() : renderMobileNav()}
    </AppBar>
  );
};

export default NavBar;
