import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  Link,
  MenuItem,
  Toolbar,
} from '@mui/material';
import { Menu } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { Typography } from '@mui/material';

const LinkStyle = {
  userSelect: 'none',
  '&.active': {
    fontWeight: 'bold',
  },
};

const LinkRespoStyle = {
  display: {
    xs: 'none',
    md: 'flex',
  },
};

const NavBar = () => {
  const [anchorElRight, setAnchorElRight] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElLeft, setAnchorElLeft] = React.useState<null | HTMLElement>(
    null,
  );
  const openRightMenu = Boolean(anchorElRight);
  const openLeftMenu = Boolean(anchorElLeft);

  // TODO: in order to close the menu after clicking MenuItem there I need to add second command to onClick
  const handleClickRight = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElRight(event.currentTarget);
  };
  const handleClickLeft = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElLeft(event.currentTarget);
  };
  const handleCloseLeft = () => {
    setAnchorElLeft(null);
  };
  const handleCloseRight = () => {
    setAnchorElRight(null);
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
      <Toolbar variant="regular" sx={{ bgcolor: 'none' }}>
        <Container
          style={{ padding: '0' }}
          sx={{
            m: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            component={RouterLink}
            to="/"
            variant="button"
            color="primary.contrastText"
            underline="none"
            sx={Object.assign(LinkStyle, LinkRespoStyle)}
          >
            LOGO
          </Link>
          <IconButton
            className="burger"
            edge="start"
            aria-label="burger menu"
            sx={{
              mr: 1,
              color: 'primary.contrastText',
              display: { md: 'none' },
            }}
            onClick={handleClickLeft}
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
            }}
          >
            SPARALIGE
          </Typography>

          <Link
            component={RouterLink}
            to="/treatments"
            variant="button"
            color="primary.contrastText"
            underline="none"
            sx={Object.assign(LinkStyle, LinkRespoStyle)}
          >
            NASZE ZABIEGI
          </Link>
          <Link
            component={RouterLink}
            to="/about"
            color="primary.contrastText"
            underline="none"
            sx={Object.assign(LinkStyle, LinkRespoStyle)}
          >
            O NAS
          </Link>
          <IconButton
            className="rightMenu"
            onClick={handleClickRight}
            sx={{
              ml: 2,
              color: 'primary.contrastText',
            }}
          >
            <MoreVertIcon sx={{ display: { sm: 'none' } }} />
            <Avatar sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {/* TODO: {userName[0], userSurname[0]} */}
              MB
            </Avatar>
          </IconButton>
          <Menu
            id="rightMenu"
            anchorEl={anchorElRight}
            open={openRightMenu}
            onClose={handleCloseRight}
            MenuListProps={{
              'aria-labelledby': 'rightMenu',
            }}
          >
            <MenuItem component={RouterLink} to="/login">
              Zaloguj
            </MenuItem>
            <MenuItem component={RouterLink} to="/register">
              Zarejestruj
            </MenuItem>
          </Menu>
          <Menu
            id="leftMenu"
            anchorEl={anchorElLeft}
            open={openLeftMenu}
            onClose={handleCloseLeft}
            MenuListProps={{
              'aria-labelledby': 'leftMenu',
            }}
          >
            <MenuItem component={RouterLink} to="/treatments">
              Katalog zabiegów
            </MenuItem>
            <MenuItem component={RouterLink} to="/about">
              O nas
            </MenuItem>
          </Menu>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
