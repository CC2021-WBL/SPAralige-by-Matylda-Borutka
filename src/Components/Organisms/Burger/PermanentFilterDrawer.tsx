import { Drawer } from '@mui/material';

import Burger from './Burger';
import { bodyPage } from '../../../Tools/htmlElements';

function PermanentFilterDrawer() {
  return (
    <Drawer
      container={bodyPage()}
      variant="permanent"
      ModalProps={{
        container: bodyPage(),
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
