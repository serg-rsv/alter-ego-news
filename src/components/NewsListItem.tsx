import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material/';

import { NewsArticle } from '../services/newsService';
import placeHolderImg from '../assets/img/news-default-image.png';

interface NewsListItemProps {
  article: NewsArticle;
  handleDeleteNews: Function;
}

const NewsListItem = ({ article, handleDeleteNews }: NewsListItemProps) => {
  const { title, description, url, urlToImage } = article;

  const handleDeleteClick = () => {
    handleDeleteNews(article);
  };

  return (
    <Card
      sx={{
        maxWidth: 760,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
      <CardActions>
        <IconButton
          aria-label="delete"
          onClick={handleDeleteClick}
          sx={{ ml: 'auto' }}
        >
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default NewsListItem;
