import Burger, { BurgerProp } from '../../Organisms/Burger/Burger';
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ServiceCard from '../../Organisms/ServiceCard/ServiceCard';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { bodyPage } from '../../../Tools/htmlElements';
import { getAllServices } from '../../../Firebase/queries';
import { getDataForBurgerFromServices } from '../../../Tools/burgerHelperTools';
import { serviceDataType } from '../../../Types/dbDataTypes';

const drawerWidth = '22.5rem';

type ForBurgerTypes = Omit<BurgerProp, 'handleFilter' | 'handleClose'>;

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [services, setServices] = useState<serviceDataType[] | null>(null);
  const [serviceBurgerData, setServiceBurgerData] =
    useState<ForBurgerTypes | null>(null);

  console.log(window.innerWidth);

  useEffect(() => {
    const fetchData = async () => {
      const gettedServices = await getAllServices();
      setServices(gettedServices);
      if (gettedServices) {
        const dataForBurger = getDataForBurgerFromServices(gettedServices);
        setServiceBurgerData(dataForBurger);
      }
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
          <Burger
            handleClose={handleDrawerToggle}
            therapists={serviceBurgerData?.therapists}
            servicesData={serviceBurgerData?.servicesData}
            maxPrice={serviceBurgerData?.maxPrice}
          />
        </Drawer>
        {window.innerWidth > 600 && (
          <Box sx={{
            marginTop: '1rem'
          }}>
            <Burger
              therapists={serviceBurgerData?.therapists}
              servicesData={serviceBurgerData?.servicesData}
              maxPrice={serviceBurgerData?.maxPrice}
            />
          </Box>
        )}
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