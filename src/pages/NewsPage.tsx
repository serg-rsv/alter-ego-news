import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { selectLanguage } from '../redux/languageSlice';
import NewsList from '../components/NewsList';
import getNews, { NewsArticle } from '../services/newsService';

const NewsPage = () => {
  const { t } = useTranslation('common');
  const language = useSelector(selectLanguage);
  const [prevLanguage, setPrevLanguage] = useState(language);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

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
      let response: any;
      if (language === prevLanguage) {
        response = await getNews({
          language,
          category: 'technology',
          page,
        });
        setArticles((prevState) => [...prevState, ...response.articles]);
        setTotalResults(response.totalResults);
      } else {
        setArticles([]);
        setPrevLanguage(language);
      }
      setLoading(false);
    };
    fetchNews();
  }, [page, language, prevLanguage]);

  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Latest Technology News
      </Typography>
      <NewsList
        articles={articles}
        loading={loading}
        handleDeleteNews={handleDeleteNews}
      />
      {articles.length < totalResults && (
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
