import { Box, Button, Card, Chip, Typography } from '@mui/material';
import {
  calcDaysToDate,
  getDateFormatDdMmYyyy,
} from '../../../Tools/timeFunctions';

type ReservationCardPropTypes = {
  serviceName: string;
  serviceDate: Date;
};

function ReservationCard(prop: ReservationCardPropTypes) {
  function generateDateProps() {
    const days = calcDaysToDate(prop.serviceDate);
    if (days < 0) {
      return {
        chipLabel: 'zrealizowana wizyta',
        styles: {
          backgroundColor: '#E0E0E0',
          color: '#263238',
        },
      };
    } else if (days === 0) {
      return {
        chipLabel: '1 dzień do zabiegu',
        styles: {
          backgroundColor: '#F1F8E9',
          color: '#33691E',
        },
      };
    } else if (days === 0 || days > 1) {
      return {
        chipLabel: `${days} dni do zabiegu`,
        styles: {
          backgroundColor: '#F1F8E9',
          color: '#33691E',
        },
      };
    }
    return {
      chipLabel: `Twój zabieg`,
      styles: {
        backgroundColor: '#F1F8E9',
        color: '#33691E',
      },
    };
  }
  const dateObj = generateDateProps();

  return (
    <Card sx={{ padding: '1rem' }}>
      <Box display="flex" justifyContent="space-between">
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
