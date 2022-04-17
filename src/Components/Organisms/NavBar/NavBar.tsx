import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  AppBar,
  Avatar,
  Container,
  Grid,
  IconButton,
  Link,
  MenuItem,
  Toolbar,
} from '@mui/material';
import { Menu } from '@mui/material';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useState } from 'react';

import LoginModal from '../LoginForm/LoginModal';
import SPALogoNav from '../../../Assets/SPA-Logo-Nav.svg';

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
  //
  // const { state } = useContext(UserDataContext);
  // const { isAuthenticated } = state;
  //
  const isAuthenticated = ''; // temporary manually assigned const in order to simulate user not logged in
  const navigate = useNavigate();
  const [anchorElRight, setAnchorElRight] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElLeft, setAnchorElLeft] = React.useState<null | HTMLElement>(
    null,
  );
  const openRightMenu = Boolean(anchorElRight);
  const openLeftMenu = Boolean(anchorElLeft);
  const [modalOpen, setModalOpen] = useState('closed');

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
            variant="inherit"
            color="primary.contrastText"
            underline="none"
            sx={Object.assign(LinkStyle, LinkRespoStyle)}
            tabIndex={0}
            flexGrow="1"
          >
            <img src={SPALogoNav} alt="SPA logo for Nav" aria-hidden={true} />
          </Link>
          <IconButton
            className="burgerMenu"
            edge="start"
            aria-label="burger menu"
            sx={{
              mr: 1,
              color: 'primary.contrastText',
              display: { md: 'none' },
            }}
            onClick={handleClickLeft}
            tabIndex={0}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="primary.contrastText"
            component="p"
            textAlign="center"
            sx={{
              width: '100%',
              userSelect: 'none',
              display: { md: 'none' },
            }}
            tabIndex={0}
          >
            <img src={SPALogoNav} alt="SPA Logo Nav" />
          </Typography>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '5rem',
              justifyContent: 'center',
            }}
          >
            <Link
              component={RouterLink}
              to="/treatments"
              variant="inherit"
              color="primary.contrastText"
              underline="none"
              sx={Object.assign(LinkStyle, LinkRespoStyle)}
              tabIndex={0}
              ml="10rem"
            >
              NASZE ZABIEGI
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              color="primary.contrastText"
              underline="none"
              sx={Object.assign(LinkStyle, LinkRespoStyle)}
              tabIndex={0}
            >
              O NAS
            </Link>
          </Container>
          <IconButton
            className="rightMenu"
            onClick={handleClickRight}
            sx={{
              ml: 2,
              color: 'primary.contrastText',
            }}
            tabIndex={0}
          >
            {isAuthenticated ? (
              <Avatar sx={{ display: { xs: 'flex', sm: 'flex' } }}>
                {/* TODO: {userName[0], userSurname[0]} */}
                MB
              </Avatar>
            ) : (
              <MoreVertIcon />
            )}
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
            <MenuItem
              onClick={() => {
                handleCloseRight();
                setModalOpen('open');
              }}
            >
              Zaloguj
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseRight();
                navigate('/register');
              }}
            >
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
            <MenuItem
              onClick={() => {
                handleCloseLeft();
                navigate('/treatments');
              }}
            >
              Katalog zabiegów
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseLeft();
                navigate('/about');
              }}
            >
              O nas
            </MenuItem>
          </Menu>
          {modalOpen == 'open' && (
            <LoginModal
              open
              handleClose={() => {
                setModalOpen('closed');
              }}
            />
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
