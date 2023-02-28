import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { CheckCircle, ExitToApp } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../redux/store';
import { logout } from '../redux/authSlice';

import avatarImg from '../assets/img/avatar.png';
import SkillsCard from '../components/profile/SkillsCard';
import ContactsCard from '../components/profile/ContactsCrad';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['common']);
  const theme = useTheme();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent
            sx={{
              [theme.breakpoints.up('md')]: {
                display: 'flex',
                gap: '16px',
              },
            }}
          >
            <Avatar
              sx={{
                width: 128,
                height: 128,
              }}
              alt="User Avatar"
              src={avatarImg}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h4" component='h2' gutterBottom>
                Serhii Rybak
              </Typography>
              <Typography variant="h6" component='h3' gutterBottom>
                Front-end developer
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Joined on: 08/10/2021
              </Typography>
              <Typography variant="body1" gutterBottom>
                Junior Frontend Developer with knowledge of HTML, CSS,
                JavaScript, React, Redux, and Node. Proficient in creating
                responsive web design and developing user-friendly interfaces.
                Skilled in debugging and troubleshooting code. Passionate about
                learning new technologies and techniques to improve software
                development skills. Excellent communication skills in English
                and Ukrainian.
              </Typography>
              <Button
                onClick={handleLogout}
                variant="contained"
                color="primary"
                sx={{ ml: 'auto' }}
              >
                <ExitToApp />
                {t('common:logout')}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <ContactsCard />
      </Grid>
      <Grid item xs={12} md={3} order={{ md: 4 }}>
        <SkillsCard />
      </Grid>
      <Grid item xs={12} md={9} order={{ md: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Work Expirience
            </Typography>
            <Divider />
            <Typography variant="subtitle1" gutterBottom>
              Projects:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Developed a responsive e-commerce website using React and Redux" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Built a Node.js server to handle data requests from a front-end application" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle />
                </ListItemIcon>
                <ListItemText primary="Designed and implemented a user-friendly interface for a social media platform using HTML, CSS, and JavaScript" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
