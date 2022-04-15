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

  return (
    <AppBar
      position="static"
      sx={{
        height: '80px',
        m: 0,
        p: 0,
        justifyContent: 'center',
      }}
    >
      <Toolbar variant="regular" sx={{ outline: '2px dotted blue' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'space-between',
            justifyItems: 'center',
            color: 'contrastText',
            outline: '2px dotted olive',
          }}
        >
          <Typography
            sx={{
              display: {
                xs: 'none',
                md: 'block',
                outline: '4px dotted tomato',
              },
            }}
          >
            Logo
          </Typography>
          <IconButton
            className="burger"
            edge="start"
            aria-label="burger menu"
            sx={{
              mr: 1,
              color: 'primary.contrastText',
              display: { md: 'none' },
              outline: '2px dotted red',
            }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="primary.contrastText"
            component="div"
            textAlign="center"
            sx={{
              width: '100%',
              userSelect: 'none',
              display: { md: 'none' },
              outline: '4px dotted tomato',
            }}
          >
            SPARALIGE
          </Typography>
          <Link
            color="primary.contrastText"
            target="_blank"
            underline="none"
            sx={{
              display: {
                xs: 'none',
                md: 'block',
                outline: '4px dotted tomato',
              },
            }}
          >
            Nasze zabiegi
          </Link>
          <Link
            color="primary.contrastText"
            target="_blank"
            underline="none"
            sx={{
              display: {
                xs: 'none',
                md: 'block',
                outline: '4px dotted tomato',
              },
            }}
          >
            O nas
          </Link>
          <IconButton
            className="rightMenu"
            onClick={handleClick}
            sx={{
              ml: 2,
              color: 'primary.contrastText',
              outline: '4px dotted tomato',
            }}
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
