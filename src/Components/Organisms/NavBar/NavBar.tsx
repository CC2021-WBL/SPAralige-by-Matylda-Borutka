import * as React from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  AppBar,
  Avatar,
  IconButton,
  Link,
  MenuItem,
  Toolbar,
} from '@mui/material';
import { Menu } from '@mui/material';
import { Typography } from '@mui/material';

import BurgerMenu from './BurgerMenu';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <AppBar
      position="static"
      sx={{ height: '80px', m: 0, p: 0, justifyContent: 'center' }}
    >
      <Toolbar variant="regular">
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            color: 'contrastText',
          }}
        >
          Logo
        </Box>
        <IconButton
          className="burger"
          edge="start"
          aria-label="burger menu"
          sx={{ mr: 1, color: 'primary.contrastText', display: { md: 'none' } }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
          <BurgerMenu open={openDrawer} />
        </IconButton>
        <Typography
          variant="h6"
          color="primary.contrastText"
          component="div"
          textAlign="center"
          sx={{ width: '100%', userSelect: 'none', display: { md: 'none' } }}
        >
          SPARALIGE
        </Typography>
        <Link>1</Link>
        <Link>2</Link>
        <IconButton
          className="rightMenu"
          onClick={handleClick}
          sx={{ ml: 2, color: 'primary.contrastText' }}
        >
          <MoreVertIcon sx={{ display: { sm: 'none' } }} />
          <Avatar
            sx={{ display: { xs: 'none', sm: 'flex', bgcolor: '#82B1FF' } }}
          >
            MB
          </Avatar>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Zaloguj</MenuItem>
          <MenuItem onClick={handleClose}>Zarejestruj</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
