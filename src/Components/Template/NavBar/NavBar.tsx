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
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import LoginModal from '../../Organisms/LoginForm/LoginModal';
import RegisterModal from '../../PagesBody/RegisterPage/RegisterModal';
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
  const [loginModalOpen, setLoginModalOpen] = useState('closed');
  const [registerModalOpen, setRegisterModalOpen] = useState('closed');
  const openRightMenu = Boolean(anchorElRight);
  const openLeftMenu = Boolean(anchorElLeft);

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
        height: '5rem',
        m: 0,
        p: 0,
        justifyContent: 'center',
        boxShadow: 'none',
      }}
    >
      <Toolbar variant="regular" sx={{ bgcolor: 'none' }}>
        {/* // note no color stated */}
        <Container
          style={{ padding: '0', maxWidth: '72rem' }}
          sx={{
            m: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            className="burgerMenu"
            edge="start"
            sx={{
              color: 'primary.contrastText',
              display: { md: 'none' },
            }}
            onClick={handleClickLeft}
            tabIndex={0}
            aria-label="burger menu"
          >
            <MenuIcon />
          </IconButton>
          <Link
            component={RouterLink}
            to="/"
            variant="inherit"
            color="primary.contrastText"
            sx={{
              display: 'inline-block',
              justifyItems: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              width: { xs: '100%', md: 'auto' },
              textAlign: { xs: 'center', md: 'left' },
            }}
            tabIndex={0}
            aria-label="Landing Page"
          >
            <img src={SPALogoNav} alt="SPA logo for Nav" aria-hidden={true} />
          </Link>
          <Container
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row',
              gap: '5rem',
              margin: '0 8.4375rem 0 0',
              width: 'auto',
            }}
          >
            <Link
              component={RouterLink}
              to="services"
              variant="inherit"
              color="primary.contrastText"
              underline="none"
              sx={Object.assign(LinkStyle, LinkRespoStyle)}
              tabIndex={0}
              aria-label="services"
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
              aria-label="about"
            >
              O NAS
            </Link>
          </Container>
          <IconButton
            className="rightMenu"
            onClick={handleClickRight}
            sx={{
              color: 'primary.contrastText',
            }}
            tabIndex={0}
            aria-label="Right Menu"
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
                setLoginModalOpen('open');
              }}
              aria-label="Log in"
            >
              Zaloguj
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseRight();
                setRegisterModalOpen('open');
              }}
              aria-label="Register"
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
                navigate('/services');
              }}
              aria-label="Services Catalogue"
            >
              Katalog zabiegów
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseLeft();
                navigate('/about');
              }}
              aria-label="About Us"
            >
              O nas
            </MenuItem>
          </Menu>
          {loginModalOpen == 'open' && (
            <LoginModal
              open
              handleClose={() => {
                setLoginModalOpen('closed');
              }}
            />
          )}
          {registerModalOpen == 'open' && (
            <RegisterModal
              open
              handleClose={() => {
                setRegisterModalOpen('closed');
              }}
            />
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
