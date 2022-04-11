import { Drawer } from '@mui/material';

import Burger from './Burger';
import { bodyPage } from '../../../Tools/htmlElements';

type TemporaryFilterType = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

function TemporaryFilterDrawer(prop: TemporaryFilterType) {
  return (
    <Drawer
      container={bodyPage()}
      anchor="left"
      variant="temporary"
      open={prop.mobileOpen}
      onClose={prop.handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
        container: bodyPage(),
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
      }}
    >
      <Burger handleClose={prop.handleDrawerToggle} />
    </Drawer>
  );
}

export default TemporaryFilterDrawer;
