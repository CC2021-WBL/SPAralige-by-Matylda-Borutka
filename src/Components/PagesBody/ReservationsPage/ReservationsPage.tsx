import { Box, Tab, Tabs } from '@mui/material';

import ReservationCard from '../../Organisms/ReservationCard/ReservationCard';

const ReservationsPage = () => {
  return (
    <main>
      <Tabs>
        <Tab label="REZERWACJE" />
        <Tab label="TWOJE KONTO" />
      </Tabs>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '35.875rem',
          minWidrh: '20.5rem',
        }}
      >
        <ReservationCard serviceName="Lewatywa z parafiny" />
      </Box>
    </main>
  );
};

export default ReservationsPage;
