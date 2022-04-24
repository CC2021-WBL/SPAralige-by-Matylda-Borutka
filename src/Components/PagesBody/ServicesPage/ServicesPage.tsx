/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Burger from '../../Organisms/Burger/Burger';
import ServiceCard from '../../Organisms/ServiceCard/ServiceCard';
import { BurgerProp } from '../../Organisms/Burger/BurgerTypes';
import { bodyPage } from '../../../Tools/htmlElements';
import { getAllServices } from '../../../Firebase/queries';
import { getDataForBurgerFromServices } from '../../../Tools/burgerHelperTools';
import { serviceDataType } from '../../../Types/dbDataTypes';

const drawerWidth = '21rem';

type ForBurgerTypes = Omit<
  BurgerProp,
  'handleFilter' | 'handleClose' | 'setFiltered' | 'services'
>;

export default function ServicesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [services, setServices] = useState<serviceDataType[] | null>(null);
  const [filtered, setFiltered] = useState<serviceDataType[]>([]);

  // const [filterState, filterDispatch] = useReducer(filterReducer, services);
  const [serviceBurgerData, setServiceBurgerData] =
    useState<Required<ForBurgerTypes> | null>(null);

  const { t, i18n } = useTranslation('services');

  useEffect(() => {
    const fetchData = async () => {
      const gettedServices = await getAllServices();
      setServices(gettedServices);
      if (gettedServices) {
        const dataForBurger = getDataForBurgerFromServices(
          gettedServices,
          i18n.language,
        );
        setServiceBurgerData(dataForBurger);
        setFiltered(gettedServices);
      }
    };
    fetchData();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = bodyPage();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{
          display: { sm: 'none', md: 'block' },
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
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
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Burger
            services={services}
            setFiltered={setFiltered}
            handleClose={handleDrawerToggle}
            therapists={serviceBurgerData?.therapists}
            servicesData={serviceBurgerData?.servicesData}
            maxPrice={serviceBurgerData?.maxPrice}
          />
        </Drawer>
        <Box
          sx={{
            position: 'relative',
            height: 'fit-content',
            zIndex: '0',
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'red',
              paddingTop: '5rem',
            },
          }}
        >
          <Burger
            services={services}
            setFiltered={setFiltered}
            therapists={serviceBurgerData?.therapists}
            servicesData={serviceBurgerData?.servicesData}
            maxPrice={serviceBurgerData?.maxPrice}
          />
        </Box>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: '1.5rem 0',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
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
