import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Burger from '../../Organisms/Burger/Burger';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import { FullServiceDataType } from '../../../Types/dbDataTypes';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ServiceCard from '../../Organisms/ServiceCard/ServiceCard';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { bodyPage } from '../../../Tools/htmlElements';
import { getAllServices } from '../../../Firebase/queries';

const drawerWidth = '22.5rem';

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [services, setServices] = useState<FullServiceDataType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const gettedServices = await getAllServices();
      setServices(gettedServices);
    };
    fetchData();
  }, []);
  console.log(services);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = bodyPage();
  //window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="services filters"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Burger handleClose={handleDrawerToggle} />
        </Drawer>
        <Drawer
          container={container}
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          <Burger />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4">SEARCH BAR</Typography>
        </Toolbar>
        {services &&
          services.map((service) => (
            <ServiceCard key={service.id} serviceObject={service} />
          ))}
      </Box>
    </Box>
  );
}
