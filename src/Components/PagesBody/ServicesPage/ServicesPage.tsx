/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LinearProgress } from '@mui/material';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useReducer, useState } from 'react';

import ScrollButton from '../../Atoms/ScrollButton.tsx/ScrollButton';
import ServiceCard from '../../Organisms/ServiceCard/ServiceCard';
import Burger, { BurgerProp } from '../../Organisms/Burger/Burger';
import { auth } from '../../../Firebase/firebase';
import { bodyPage } from '../../../Tools/htmlElements';
import { filterReducer } from '../../../Reducers/filterReducer';
import { getAllServices } from '../../../Firebase/queries';
import { getDataForBurgerFromServices } from '../../../Tools/burgerHelperTools';
import { serviceDataType } from '../../../Types/dbDataTypes';

const drawerWidth = '21rem';

type ForBurgerTypes = Omit<BurgerProp, 'handleFilter' | 'handleClose'>;

export default function ServicesPage() {
  const [pending, setIsPending] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [services, setServices] = useState<serviceDataType[] | null>(null);

  const [filterState, filterDispatch] = useReducer(filterReducer, services);
  const [serviceBurgerData, setServiceBurgerData] =
    useState<ForBurgerTypes | null>(null);

  const [uid, setUid] = useState<string | null>(null);

  onAuthStateChanged(auth, async (currentUser) => {
    if (!currentUser) {
      setUid(null);
    } else if (currentUser.uid !== uid) {
      setUid(currentUser.uid);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gettedServices = await getAllServices();
        setServices(gettedServices);
        if (gettedServices) {
          const dataForBurger = getDataForBurgerFromServices(gettedServices);
          setServiceBurgerData(dataForBurger);
        }
      } catch (error) {
        alert('Oops, coś poszło nie tak, spróbuj jescze raz');
      }
      setIsPending(false);
    };
    fetchData();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = bodyPage();
  //window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <ScrollButton showBelow={250} />
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
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          p: '1.5rem 0',
          width: {
            sm: `calc(100% - ${drawerWidth})`,
          },
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
        {pending && <LinearProgress />}
        {!pending &&
          services &&
          services.map((service) => (
            <ServiceCard key={service.id} serviceObject={service} uid={uid} />
          ))}
      </Box>
    </Box>
  );
}
