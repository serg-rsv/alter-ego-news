import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import FakeNews from '../components/FakeNews';

const HomePage = () => {
  const { t } = useTranslation(['content']);

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h3" sx={{ mb: 4 }}>
        {t('content:newsForAll')}
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {t('content:interestingNews')}
      </Typography>
      <FakeNews />
    </Box>
  );
};

export default HomePage;
