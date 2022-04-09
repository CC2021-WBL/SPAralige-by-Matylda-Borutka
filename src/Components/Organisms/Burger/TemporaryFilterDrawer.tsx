import { Drawer } from '@mui/material';
import { boolean } from 'yup';

import Burger from './Burger';

type TemporaryFilterType = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

function TemporaryFilterDrawer(prop: TemporaryFilterType) {
  return (
    <Drawer
      anchor="left"
      variant="temporary"
      open={prop.mobileOpen}
      onClose={prop.handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
        container: () => document.getElementById('body-page'),
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
