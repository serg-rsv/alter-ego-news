import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../redux/languageSlice';
import { Container, Grid, Typography } from '@mui/material';

import NewsList from '../components/NewsList';
import getNews, { NewsArticle } from '../services/newsService';

const NewsPage = () => {
  const language = useSelector(selectLanguage);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const fetchedArticles = await getNews({
        language,
        category: 'technology',
      });
      setArticles(fetchedArticles);
      setLoading(false);
    };
    fetchNews();
  }, [language]);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Latest Technology News
      </Typography>
      <Grid container spacing={2}>
        <NewsList articles={articles} loading={loading} />
      </Grid>
    </Container>
  );
};

export default NewsPage;
