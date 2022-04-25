import { Box, Button, Card, Chip, Typography } from '@mui/material';

import { HandleOnClickButtonType } from '../../../Types/EventFunctions';
import { generateDateProps } from '../../../Tools/reservationTools';
import {
  getDateFormatDdMmYyyy,
  getDayName,
} from '../../../Tools/timeFunctions';

export type ReservationCardTypes = {
  serviceName: string;
  serviceDate: Date;
};

function ReservationCard(prop: ReservationCardTypes) {
  const dateObj = generateDateProps(prop.serviceDate);

  const onEditClick: HandleOnClickButtonType = (event) => {
    event.preventDefault();
    alert('EDIT CLICKED');
  };

  return (
    <Card
      sx={{
        padding: '1rem',
        '@media screen and (max-width: 600px)': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          '@media screen and (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: '1.25rem',
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
        {`Termin zabiegu: ${getDateFormatDdMmYyyy(
          prop.serviceDate,
        )} (${getDayName(prop.serviceDate)})`}
      </Typography>
      <Button
        variant="text"
        size="medium"
        color="primary"
        sx={{ fontWeight: 500 }}
        onClick={onEditClick}
      >
        EDYTUJ
      </Button>
    </Card>
  );
}

export default ReservationCard;
