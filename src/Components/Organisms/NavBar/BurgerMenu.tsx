import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import propTypes from 'prop-types';

const BurgerMenu = ({ open }) => {
  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {['Katalog zabiegów'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {['O nas'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div role="button" tabIndex={0}>
      <Button sx={{ color: 'primary.contrastText' }}></Button>
      <Drawer anchor="left" open={open}>
        {list()}
      </Drawer>
    </div>
  );
};

BurgerMenu.propTypes = {
  open: propTypes.bool,
};

export default BurgerMenu;
