import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
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
  const { t } = useTranslation('common');
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
      setErrorMessage(`${t('common:error')}`);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLoginClick();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{t('common:login')}</DialogTitle>
      <DialogContent>
        <FormControl component="form" onSubmit={handleFormSubmit}>
          <DialogContentText>{t('common:enterCredential')}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label={t('common:username')}
            type="text"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            margin="dense"
            id="password"
            label={t('common:password')}
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
          <DialogActions>
            <Button onClick={onClose}>{t('common:cancel')}</Button>
            <Button type="submit">{t('common:submit')}</Button>
          </DialogActions>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
