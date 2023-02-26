import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  DiNodejs,
  DiReact,
  DiJavascript,
  DiCss3,
  DiHtml5,
} from 'react-icons/di';

const hardSkills = [
  {
    text: 'HTML',
    icon: <DiHtml5 size={24} />,
  },
  {
    text: 'CSS',
    icon: <DiCss3 size={24} />,
  },
  {
    text: 'JavaScript',
    icon: <DiJavascript size={24} />,
  },
  {
    text: 'React',
    icon: <DiReact size={24} />,
  },
  {
    text: 'Node.js',
    icon: <DiNodejs size={24} />,
  },
];

const SkillsCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Hard skills
        </Typography>
        <Divider />
        <List dense>
          {hardSkills.map(({ icon, text }) => (
            <ListItem key={text} sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 0, mr: '8px' }}>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default SkillsCard;
