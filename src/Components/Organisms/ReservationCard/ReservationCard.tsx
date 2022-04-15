import { Box, Button, Card, Chip, Typography } from '@mui/material';

import { generateDateProps } from '../../../Tools/reservationCardTools';
import { getDateFormatDdMmYyyy } from '../../../Tools/timeFunctions';

type ReservationCardPropTypes = {
  serviceName: string;
  serviceDate: Date;
};

function ReservationCard(prop: ReservationCardPropTypes) {
  const dateObj = generateDateProps(prop.serviceDate);

  return (
    <Card sx={{ padding: '1rem' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          '@media screen and (max-width: 600px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '2rem',
            marginBottom: '1rem',
          }}
        >
          {prop.serviceName}
        </Typography>
        <Chip label={dateObj.chipLabel} sx={dateObj.styles} />
      </Box>
      <Typography
        variant="subtitle2"
        sx={{ fontSize: '0.875rem', fontWeight: 400, marginBottom: '1rem' }}
      >
        {`Termin zabiegu: ${getDateFormatDdMmYyyy(prop.serviceDate)}`}
      </Typography>
      <Button
        variant="text"
        size="medium"
        color="primary"
        sx={{ fontWeight: 500 }}
      >
        EDYTUJ
      </Button>
    </Card>
  );
}

export default ReservationCard;
