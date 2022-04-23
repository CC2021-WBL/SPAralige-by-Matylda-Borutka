import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AuthedRightMenu from './AuthedRightMenu';
import LoginModal from '../../Organisms/LoginForm/LoginModal';
import LogoutRightMenu from './LogoutRightMenu';
import RegisterModal from '../../Organisms/RegisterModal/RegisterModal';
import SPALogoNav from '../../../Assets/SPA-Logo-Nav.svg';
import { HandleOnClickButtonType } from '../../../Types/EventFunctions';
import { auth } from '../../../Firebase/firebase';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setIsAuthenticated(true);
    }
  });

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
  const { t } = useTranslation('navFooter');
  const handleClickRight = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
    setAnchorElRight(event.currentTarget);
  };
  const handleClickLeft = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
    setAnchorElLeft(event.currentTarget);
  };
  const handleCloseLeft = () => {
    setAnchorElLeft(null);
  };
  const handleCloseRight = () => {
    setAnchorElRight(null);
  };

  const handleLoginClicked: HandleOnClickButtonType = (event) => {
    event.preventDefault();
    handleCloseRight();
    setLoginModalOpen('open');
  };

  const handleRegisterClicked: HandleOnClickButtonType = (event) => {
    event.preventDefault();
    handleCloseRight();
    setRegisterModalOpen('open');
  };

  const handleReservationsClicked: HandleOnClickButtonType = () => {
    handleCloseRight();
    console.log('reservaition clicked');
    console.log(navigate);
    navigate('/reservations');
  };

  const handleYourAccountClicked: HandleOnClickButtonType = () => {
    // event.preventDefault();
    handleCloseRight();
    navigate('/reservations');
    console.log('your account clicked');
  };

  async function handleLogout() {
    await signOut(auth);
    handleCloseRight();
    setIsAuthenticated(false);
  }
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
              {t('nav1').toUpperCase()}
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
              {t('nav2').toUpperCase()}
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
                <AccountCircleIcon fontSize="large" />
              </Avatar>
            ) : (
              <MoreVertIcon />
            )}
          </IconButton>
          {isAuthenticated ? (
            <AuthedRightMenu
              anchorElRight={anchorElRight}
              openRightMenu={openRightMenu}
              handleCloseRight={handleCloseRight}
              handleLogout={handleLogout}
              handleReservationsClicked={handleReservationsClicked}
              handleYourAccountClicked={handleYourAccountClicked}
            />
          ) : (
            <LogoutRightMenu
              anchorElRight={anchorElRight}
              openRightMenu={openRightMenu}
              handleCloseRight={handleCloseRight}
              handleLogInClicked={handleLoginClicked}
              handleRegisterClicked={handleRegisterClicked}
            />
          )}

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
              {t('nav1')}
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseLeft();
                navigate('/about');
              }}
              aria-label="About Us"
            >
              {t('nav2')}
            </MenuItem>
          </Menu>
          {loginModalOpen == 'open' && (
            <LoginModal
              open
              handleClose={() => {
                setLoginModalOpen('closed');
              }}
              handleFrogetPasswordTransfer={() => {
                setLoginModalOpen('closed');
              }}
              handleLoginOrRegisterTransfer={() => {
                setLoginModalOpen('closed');
                setRegisterModalOpen('open');
              }}
            />
          )}
          {registerModalOpen == 'open' && (
            <RegisterModal
              open
              handleClose={() => {
                setRegisterModalOpen('closed');
              }}
              handleLoginOrRegisterTransfer={() => {
                setRegisterModalOpen('closed');
                setLoginModalOpen('open');
              }}
              handleFrogetPasswordTransfer={() => {
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
