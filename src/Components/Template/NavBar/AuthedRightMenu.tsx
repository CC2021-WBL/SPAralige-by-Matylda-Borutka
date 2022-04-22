import { Menu, MenuItem } from '@mui/material';

import { HandleOnClickButtonType } from '../../../Types/EventFunctions';

type RightMenuType = {
  anchorElRight: null | HTMLElement;
  openRightMenu: boolean;
  handleCloseRight: HandleOnClickButtonType;
  handleReservationsClicked: HandleOnClickButtonType;
  handleYourAccountClicked: HandleOnClickButtonType;
  handleLogout: HandleOnClickButtonType;
};

function AuthedRightMenu(prop: RightMenuType) {
  return (
    <Menu
      id="rightMenu"
      anchorEl={prop.anchorElRight}
      open={prop.openRightMenu}
      onClose={prop.handleCloseRight}
      MenuListProps={{
        'aria-labelledby': 'rightMenu',
      }}
    >
      {' '}
      <MenuItem
        onClick={prop.handleReservationsClicked}
        aria-label="Link to your reservations"
      >
        Rezerwacje & Twój profil
      </MenuItem>
      {/* <MenuItem
        onClick={prop.handleYourAccountClicked}
        aria-label="Link to your account"
      >
        Twój Profil
      </MenuItem> */}
      <MenuItem onClick={prop.handleLogout} aria-label="Log out">
        Wyloguj
      </MenuItem>
    </Menu>
  );
}

export default AuthedRightMenu;
