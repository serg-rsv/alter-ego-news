import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation(['content']);

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h3" sx={{ my: 4 }}>
        {t('content:newsForAll')}
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {t('content:interestingNews')}
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {t('content:wideRangeOfTopics')}
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {t('content:joinUs')}
      </Typography>
    </Box>
  );
};

export default HomePage;
