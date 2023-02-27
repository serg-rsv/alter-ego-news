import axios from 'axios';

export interface NewsArticle {
  title: string;
  description: string | null;
  content: string | null;
  url: string;
  urlToImage: string | null;
}

interface NewsApiParams {
  language: string;
  page?: number;
  limit?: number;
}

const getNews = async (params: NewsApiParams): Promise<NewsArticle[]> => {
  const { language, page = 1, limit = 8 } = params;
  const url = `https://62ec100d818ab252b6f765e1.mockapi.io/api/v1/articles?language=${language}&limit=${limit}&page=${page}`;
  const response = await axios.get<NewsArticle[]>(url);

  return response.data;
};

export default getNews;
