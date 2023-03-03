import {
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
  CardMedia,
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const FakeNews = () => {
  const { t } = useTranslation(['content']);

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', mt: 4 }}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardMedia
          sx={{ height: 200, objectFit: 'cover', mb: 2 }}
          image="https://techbldrs.com/wp-content/uploads/2017/11/passwords-460x250.jpg"
          title="password"
        />
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            dangerouslySetInnerHTML={{ __html: t('login_warning_title') }}
          />
          <Alert severity="warning">
            <AlertTitle>{t('login_warning')}</AlertTitle>
            <Typography
              dangerouslySetInnerHTML={{ __html: t('login_warning_title') }}
            />
          </Alert>
          <Typography sx={{ mt: 4 }}>{t('data_leakage')}</Typography>
          <Typography sx={{ mt: 2 }}>{t('protect_yourself')}</Typography>
          <Typography sx={{ mt: 2 }}>
            {t('avoid_obvious_combinations')}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FakeNews;
