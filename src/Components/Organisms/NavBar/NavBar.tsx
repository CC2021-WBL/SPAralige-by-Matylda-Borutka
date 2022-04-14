import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AppBar, IconButton, MenuItem, Toolbar } from '@mui/material';
import { Menu } from '@mui/material';
import { Typography } from '@mui/material';

import TemporaryDrawer from './BurgerMenuL';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ height: '80px', m: 0, p: 0, justifyContent: 'center' }}
    >
      <Toolbar variant="regular">
        <IconButton
          className="IconButton"
          edge="start"
          aria-label="burger menu"
          sx={{ mr: 1, color: 'primary.contrastText' }}
        >
          <MenuIcon />
          <TemporaryDrawer />
        </IconButton>
        <Typography
          variant="h6"
          color="primary.contrastText"
          component="div"
          textAlign="center"
          sx={{ width: '100%', userSelect: 'none' }}
        >
          SPARALIGE
        </Typography>
        <IconButton
          onClick={handleClick}
          sx={{ ml: 2, color: 'primary.contrastText' }}
        >
          <MoreVertIcon />
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
