import { Box, Button, Card, Chip, Typography } from '@mui/material';

type ReservationCardPropTypes = {
  serviceName: string;
};

function ReservationCard(prop: ReservationCardPropTypes) {
  return (
    <Card sx={{ padding: '1rem' }}>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h5"
          sx={{ fontSize: '20px', fontWeight: 500, lineHeight: '2rem' }}
        >
          {prop.serviceName}
        </Typography>
        <Chip
          label="7 dni do wizyty"
          sx={{ backgroundColor: '#F1F8E9', color: '#33691E' }}
        />
      </Box>
      <Typography
        variant="subtitle2"
        sx={{ fontSize: '0.875rem', fontWeight: 400 }}
      >
        Termin zabiegu: 04.05.2023
      </Typography>
      <Button variant="text" size='medium' color='primary'>EDYTUJ</Button>
    </Card>
  );
}

export default ReservationCard;
