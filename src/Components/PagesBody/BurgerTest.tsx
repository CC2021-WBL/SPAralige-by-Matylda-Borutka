import { Box, Button } from '@mui/material';
import { useState } from 'react';

import PermanentFilterDrawer from '../Organisms/Burger/PermanentFilterDrawer';
import TemporaryFilterDrawer from '../Organisms/Burger/TemporaryFilterDrawer';

function BurgerTest() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Button variant="contained" onClick={handleDrawerToggle}>
        FILTER
      </Button>
      <TemporaryFilterDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <PermanentFilterDrawer />
    </Box>
  );
}

export default BurgerTest;
