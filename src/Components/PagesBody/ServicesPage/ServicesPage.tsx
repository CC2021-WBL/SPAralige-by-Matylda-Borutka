import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { LinearProgress, Stack, Typography } from '@mui/material';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

import Burger from '../../Organisms/Burger/Burger';
import ScrollButton from '../../Atoms/ScrollButton.tsx/ScrollButton';
import SearchBar from '../../Atoms/SearchBar/SearchBar';
import ServiceCard from '../../Organisms/ServiceCard/ServiceCard';
import { BurgerProp } from '../../Organisms/Burger/BurgerTypes';
import { auth } from '../../../Firebase/firebase';
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
  const [pending, setIsPending] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [services, setServices] = useState<serviceDataType[] | null>(null);
  const [filtered, setFiltered] = useState<serviceDataType[]>(services || []);
  const [serviceBurgerData, setServiceBurgerData] =
    useState<Required<ForBurgerTypes> | null>(null);

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
          setFiltered(gettedServices);
        }
      } catch (error) {
        alert('Oops, co?? posz??o nie tak, spr??buj jescze raz');
      }
      setIsPending(false);
    };
    fetchData();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = bodyPage();

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
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          p: '1.5rem 0',
          width: {
            sm: `calc(100% - ${drawerWidth})`,
          },
        }}
      >
        <Toolbar
          sx={{
            margin: '0 0 1.25rem 0',
            padding: 0,
            '@media screen and (min-width: 600px)': {
              padding: 0,
            },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' }, color: '#1976d2' }}
          >
            <MenuIcon sx={{ color: '#6A6A6A' }} />
          </IconButton>
          <SearchBar />
        </Toolbar>
        {pending && <LinearProgress />}
        <Stack sx={{ gap: '1.25rem' }}>
          {!pending &&
            filtered &&
            filtered.map((service) => (
              <ServiceCard key={service.id} serviceObject={service} uid={uid} />
            ))}
        </Stack>
        {!pending && filtered.length === 0 && (
          <Typography>Nie znale??li??my zabiegu kt??rego potrzebujesz</Typography>
        )}
      </Box>
    </Box>
  );
}
