import { Menu, MenuItem } from '@mui/material';

import { HandleOnClickButtonType } from '../../../Types/EventFunctions';

type RightMenuType = {
  anchorElRight: null | HTMLElement;
  openRightMenu: boolean;
  handleCloseRight: HandleOnClickButtonType;
  handleLogInClicked: HandleOnClickButtonType;
  handleRegisterClicked: HandleOnClickButtonType;
};

function LogoutRightMenu(prop: RightMenuType) {
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
      <MenuItem onClick={prop.handleLogInClicked} aria-label="Log in">
        Zaloguj
      </MenuItem>
      <MenuItem onClick={prop.handleRegisterClicked} aria-label="Register">
        Zarejestruj
      </MenuItem>
    </Menu>
  );
}

export default LogoutRightMenu;
