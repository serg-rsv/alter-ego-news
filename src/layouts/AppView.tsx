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
          pt: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            width: '100%',
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
