import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../redux/store';
import { login } from '../redux/authSlice';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    if (username === 'admin' && password === '12345') {
      dispatch(login('admin'));
      navigate('profile');
      onClose();
    } else {
      setErrorMessage(`${t('error')}`);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{t('login')}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t('enterCredential')}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label={t('username')}
          type="text"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          margin="dense"
          id="password"
          label={t('password')}
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
        />
        {errorMessage && (
          <DialogContentText sx={{ color: 'red' }}>
            {errorMessage}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('cancel')}</Button>
        <Button onClick={handleLoginClick}>{t('submit')}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthModal;
