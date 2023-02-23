import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../redux/languageSlice';

// import getNews from '../services/getNews';

const NewsPage = () => {
  const language = useSelector(selectLanguage);
  useEffect(() => {
    // getNews({ language }).then(console.log);
  }, [language]);

  return <p>News page</p>;
};

export default NewsPage;
