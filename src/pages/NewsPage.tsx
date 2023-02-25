import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { selectLanguage } from '../redux/languageSlice';
import NewsList from '../components/NewsList';
import getNews, { NewsArticle } from '../services/newsService';

const NewsPage = () => {
  const { t } = useTranslation();
  const language = useSelector(selectLanguage);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const response = await getNews({
        language,
        category: 'technology',
        page,
      });
      setArticles((prevState) => [...prevState, ...response.articles]);
      setTotalResults(response.totalResults);
      setLoading(false);
    };
    fetchNews();
  }, [language, page]);

  return (
    <Container sx={{ alignContent: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Latest Technology News
      </Typography>
      <NewsList articles={articles} loading={loading} />
      {articles.length < totalResults && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleLoadMore}
          disabled={loading}
        >
          {t('loadMore')}
        </Button>
      )}
    </Container>
  );
};

export default NewsPage;
