import { Box, Tab, Tabs } from '@mui/material';

import ReservationCard from '../../Organisms/ReservationCard/ReservationCard';
import TabPanel from '../../Organisms/ReservationCard/TabPanel';
import { useState } from 'react';

const ReservationsPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Box
          sx={{
            width: '20,5rem',
            '@media screen and (min-width: 600px)': {
              width: '35.875rem',
            },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{ height: '3rem' }}
            aria-label="tabs-to-choose"
          >
            <Tab label="REZERWACJE" />
            <Tab label="TWOJE KONTO" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <ReservationCard
                serviceName="Lewatywa z parafiny"
                serviceDate={new Date(2022, 6, 15)}
              />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            YOUR ACCOUNT
          </TabPanel>
        </Box>
      </Box>
    </main>
  );
};

export default ReservationsPage;
