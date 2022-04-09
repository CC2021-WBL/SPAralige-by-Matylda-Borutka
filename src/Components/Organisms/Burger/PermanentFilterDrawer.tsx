import { Drawer } from '@mui/material';

import Burger from './Burger';

function PermanentFilterDrawer() {
  return (
    <Drawer
      variant="permanent"
      ModalProps={{
        container: () => document.getElementById('body-page'),
      }}
      sx={{
        display: { xs: 'none', sm: 'block' },
      }}
      open
    >
      <Burger />
    </Drawer>
  );
}

export default PermanentFilterDrawer;
