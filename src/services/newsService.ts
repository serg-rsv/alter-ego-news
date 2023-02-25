import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export interface NewsArticle {
  title: string;
  description: string | null;
  content: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}

interface NewsApiResponse {
  articles: NewsArticle[];
  totalResults: number;
}

interface NewsApiParams {
  language: string;
  category?: string;
  page?: number;
  pageSize?: number;
}

const getNews = async (params: NewsApiParams): Promise<NewsApiResponse> => {
  const { language, category = 'technology', page = 1, pageSize = 8 } = params;
  const url = `https://newsapi.org/v2/top-headlines?pageSize=${pageSize}&page=${page}&category=${category}&language=${language}`;
  const response = await axios.get<NewsApiResponse>(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return response.data;
};

export default getNews;
