import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4169E1',
      light: '#6A7FFF',
      dark: '#0038A8',
    },
    secondary: {
      main: '#FF8C00',
      light: '#FFC947',
      dark: '#C65C00',
    },
    background: {
      default: '#F5F5F5',
      paper: '#F7D358',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
          alignItems: 'center',
          '@media (min-width: 1280px)': {
            paddingLeft: '80px',
            paddingRight: '80px',
          },
          '@media (max-width: 760px)': {
            paddingLeft: '20px',
            paddingRight: '20px',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 760,
      lg: 1280,
      xl: 1980,
    },
  },
});

export default theme;
