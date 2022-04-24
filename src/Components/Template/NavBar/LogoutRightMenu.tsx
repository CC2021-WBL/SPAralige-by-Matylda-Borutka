import { Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { HandleOnClickButtonType } from '../../../Types/EventFunctions';

type RightMenuType = {
  anchorElRight: null | HTMLElement;
  openRightMenu: boolean;
  handleCloseRight: HandleOnClickButtonType;
  handleLogInClicked: HandleOnClickButtonType;
  handleRegisterClicked: HandleOnClickButtonType;
};

function LogoutRightMenu(prop: RightMenuType) {
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
      <MenuItem onClick={prop.handleLogInClicked} aria-label="Log in">
        {t('login')}
      </MenuItem>
      <MenuItem onClick={prop.handleRegisterClicked} aria-label="Register">
        {t('register')}
      </MenuItem>
    </Menu>
  );
}

export default LogoutRightMenu;
