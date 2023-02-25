import { Box, CircularProgress } from '@mui/material';

import NewsListItem from './NewsListItem';
import { NewsArticle } from '../services/newsService';

interface NewsListProps {
  articles: NewsArticle[];
  loading: boolean;
}

const NewsList = ({ articles, loading }: NewsListProps) => {
  return (
    <>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        articles.map((article) => (
          <NewsListItem key={article.url} article={article} />
        ))
      )}
    </>
  );
};

export default NewsList;
