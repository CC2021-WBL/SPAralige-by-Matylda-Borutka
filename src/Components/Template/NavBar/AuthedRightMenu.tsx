import { Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('navFooter');
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
        {t('account')}
      </MenuItem>
      {/* <MenuItem
        onClick={prop.handleYourAccountClicked}
        aria-label="Link to your account"
      >
        Twój Profil
      </MenuItem> */}
      <MenuItem onClick={prop.handleLogout} aria-label="Log out">
        {t('logout')}
      </MenuItem>
    </Menu>
  );
}

export default AuthedRightMenu;
