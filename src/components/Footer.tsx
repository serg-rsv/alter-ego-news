import { IconButton, Typography, useTheme } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  return (
    <footer
      style={{
        width: '100vw',
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} Serhii Rybak
        <IconButton
          sx={{ mr: theme.spacing(1) }}
          aria-label="Linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </IconButton>
      </Typography>
    </footer>
  );
};

export default Footer;
