import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { CardContent, Stack, Typography } from '@mui/material';

import { serviceData } from '../../PagesBody/LandingPage/LandingPage';

const styles = {
  '&.modal-service': {
    padding: '0.3125rem',
    '@media screen and (min-width: 1200px)': {
      fontSize: '2rem',
    },
  },
};

const ServiceCardContent = (prop: {
  serviceObject: serviceData;
  className?: string;
}) => {
  return (
    <CardContent className={prop.className} sx={styles}>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        className={prop.className}
        sx={styles}
      >
        {prop.serviceObject.name}
      </Typography>
      {prop.className === 'modal-service' && (
        <Typography gutterBottom color="text.disabled">
          {`Rodzaj zabiegu: ${prop.serviceObject.type}`}
        </Typography>
      )}
      <Stack direction="row" spacing={2} sx={{ paddingBottom: '0.625rem' }}>
        <Stack spacing={0.8} direction="row" sx={{ alignItems: 'center' }}>
          <AccessTimeIcon
            sx={{ color: 'text.disabled', height: 1 }}
            aria-hidden="true"
          />
          <Typography
            variant="subtitle2"
            component="div"
            color="text.disabled"
            sx={{ ...styles, alignSelf: 'end' }}
            className={prop.className}
          >
            {`${prop.serviceObject.duration} h`}
          </Typography>
        </Stack>
        <Stack spacing={0.4} direction="row">
          <AttachMoneyIcon
            sx={{ color: 'text.disabled', height: 1 }}
            aria-hidden="true"
          />
          <Typography
            variant="subtitle2"
            component="div"
            color="text.disabled"
            sx={{ ...styles, alignSelf: 'end' }}
            className={prop.className}
          >
            {`${prop.serviceObject.price} zł`}
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="body2" color="text.secondary">
        {prop.serviceObject.description}
      </Typography>
    </CardContent>
  );
};

export default ServiceCardContent;
