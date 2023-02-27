import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { selectLanguage } from '../redux/languageSlice';
import NewsList from '../components/NewsList';
import getNews, { NewsArticle } from '../services/mokapiService';

const NewsPage = () => {
  const { t } = useTranslation(['common', 'content']);
  const language = useSelector(selectLanguage);
  const [prevLanguage, setPrevLanguage] = useState(language);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [hasMore, setHasMore] = useState(false);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleDeleteNews = (newsToDelete: NewsArticle) => {
    const updatedNews = articles.filter(
      (newsItem) => newsItem.url !== newsToDelete.url
    );
    setArticles(updatedNews);
  };

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      let response: NewsArticle[];
      if (language === prevLanguage) {
        response = await getNews({
          language,
          page,
          limit,
        });
        setArticles((prevState) => [...prevState, ...response]);
        setHasMore(!(response.length < limit));
      } else {
        setArticles([]);
        setPage(1);
        setPrevLanguage(language);
      }
      setLoading(false);
    };
    fetchNews();
  }, [page, language, prevLanguage, limit]);

  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {t('content:latestTechNews')}
      </Typography>
      <NewsList
        articles={articles}
        loading={loading}
        handleDeleteNews={handleDeleteNews}
      />
      {hasMore && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleLoadMore}
          disabled={loading}
          sx={{ ml: 'auto', mr: 'auto', mt: '2rem' }}
        >
          {t('common:loadMore')}
        </Button>
      )}
    </Container>
  );
};

export default NewsPage;
