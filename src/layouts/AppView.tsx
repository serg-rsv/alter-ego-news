import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AppView = () => {
  return (
    <>
      <NavBar />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            padding: '24px',
            paddingTop: '64px',
            backgroundColor: '#fff',
            borderRadius: '8px',
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export default AppView;
