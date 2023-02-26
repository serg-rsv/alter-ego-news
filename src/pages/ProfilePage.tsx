import { Avatar, Box, IconButton } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

import { useAppDispatch } from '../redux/store';
import { logout } from '../redux/authSlice';

// Avatar img
import avatarImg from '../assets/img/avatar.png';

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box
      sx={{
        position: 'relative',
        pt: '24px',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
      }}
    >
      <Avatar
        variant="circular"
        src={avatarImg}
        alt="User Avatar"
        sx={{ mr: 'auto', width: 128, height: 128 }}
      />
      <IconButton
        onClick={handleLogout}
        sx={{
          position: 'absolute',
          top: 112,
          left: 88,
          // bgcolor: 'background.paper',
          color: 'primary.main',
          borderWidth: '1px',
          borderColor: 'primary.main',
          borderStyle: 'groove',
        }}
      >
        <ExitToApp />
      </IconButton>
    </Box>
  );
};

export default ProfilePage;
