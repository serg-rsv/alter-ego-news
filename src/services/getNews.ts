import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

interface NewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

interface NewsApiResponse {
  articles: NewsArticle[];
}

interface NewsApiParams {
  language: string;
  category?: string;
  page?: number;
  pageSize?: number;
}

const getNews = async (params: NewsApiParams): Promise<NewsArticle[]> => {
  const { language, category = 'technology', page = 1, pageSize = 8 } = params;
  const url = `https://newsapi.org/v2/top-headlines?pageSize=${pageSize}&page=${page}&category=${category}&language=${language}`;
  const response = await axios.get<NewsApiResponse>(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return response.data.articles;
};

export default getNews;
