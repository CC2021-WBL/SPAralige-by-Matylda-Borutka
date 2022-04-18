import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import PermanentFilterDrawer from '../../Organisms/Burger/PermanentFilterDrawer';
import ServiceCard from '../../Organisms/ServiceCard/ServiceCard';
import TemporaryFilterDrawer from '../../Organisms/Burger/TemporaryFilterDrawer';
import { getAllServices } from '../../../Firebase/queries';
import { serviceDataType } from '../../../Types/dbDataTypes';

const ServicesPage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [services, setServices] = useState<serviceDataType[] | null>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      const gettedServices = await getAllServices();
      setServices(gettedServices);
    };
    fetchData();
  }, []);
  console.log(services);
  return (
    <Box>
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
      <Box>
        <Typography variant="h4">TU BĘDZIE SEARCHBAR</Typography>
        {services &&
          services.map((service) => (
            <ServiceCard key={service.id} serviceObject={service} />
          ))}
      </Box>
    </Box>
  );
};

export default ServicesPage;
