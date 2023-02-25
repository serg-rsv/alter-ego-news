import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { NewsArticle } from '../services/newsService';
import placeHolderImg from '../assets/img/news-default-image.png';

interface NewsListItemProps {
  article: NewsArticle;
}

const NewsListItem = ({ article }: NewsListItemProps) => {
  const { title, description, url, urlToImage } = article;
  return (
    <Card
      sx={{
        maxWidth: 760,
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        // height: '100%',
      }}
    >
      <CardActionArea href={url} target="_blank" rel="noopener noreferrer">
        <CardMedia
          sx={{ height: 200, objectFit: 'cover' }}
          image={urlToImage ?? placeHolderImg}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsListItem;
