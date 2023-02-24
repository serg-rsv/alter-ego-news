import { IconButton, Link, Typography, useTheme } from '@mui/material';
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
        <Link href="https://www.linkedin.com/" color="inherit">
          <IconButton
            sx={{ marginRight: theme.spacing(1) }}
            aria-label="Linkedin"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </IconButton>
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
