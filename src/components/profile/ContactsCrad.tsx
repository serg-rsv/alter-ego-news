import { Email, GitHub, LinkedIn, Phone, Telegram } from '@mui/icons-material';
import {
  Card,
  CardContent,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

const contacts = [
  {
    icon: <Email />,
    text: 'rybaksw@gmail.com',
    link: 'mailto:rybaksw@gmail.com',
  },
  {
    icon: <Phone />,
    text: '+380 67 443 6415',
    link: 'tel:+380674436415',
  },
  {
    icon: <GitHub />,
    text: 'serg-rsv',
    link: 'https://github.com/serg-rsv',
  },
  {
    icon: <LinkedIn />,
    text: 'Serhii Rybak',
    link: 'https://www.linkedin.com/in/serhii-rybak/',
  },
  {
    icon: <Telegram />,
    text: '@rsvjs',
    link: 'https://t.me/rsvjs',
  },
];

const ContactsCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Contacts
        </Typography>
        <Divider />
        <List dense>
          {contacts.map(({ icon, text, link }) => (
            <ListItem key={text} sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 0, mr: '8px' }}>
                {icon}
              </ListItemIcon>
              <ListItemText>
                <Link
                  href={link}
                  sx={{
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.dark',
                    },
                  }}
                  variant="body1"
                >
                  <Typography>{text}</Typography>
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ContactsCard;
