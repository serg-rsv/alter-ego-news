import { Box, CircularProgress, Grid } from '@mui/material';

import NewsListItem from './NewsListItem';
import { NewsArticle } from '../services/newsService';

interface NewsListProps {
  articles: NewsArticle[];
  loading: boolean;
}

const NewsList = ({ articles, loading }: NewsListProps) => {
  return (
    <>
      {articles.length > 0 && (
        <Grid container spacing={2}>
          {articles.map((article) => (
            <Grid key={article.url} item xs={12} md={6} lg={3}>
              <NewsListItem article={article} />
            </Grid>
          ))}
        </Grid>
      )}
      {loading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default NewsList;
