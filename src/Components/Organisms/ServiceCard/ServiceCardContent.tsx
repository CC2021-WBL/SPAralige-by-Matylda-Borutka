import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { CardContent, Stack, Typography } from '@mui/material';

import { serviceData } from '../../PagesBody/LandingPage/LandingPage';

const ServiceCardContent = (prop: { serviceObject: serviceData }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {prop.serviceObject.name}
      </Typography>
      <Stack direction="row" spacing={2} sx={{ paddingBottom: '10px' }}>
        <Stack spacing={0.8} direction="row" sx={{ alignItems: 'center' }}>
          <AccessTimeIcon sx={{ color: 'text.disabled' }} aria-hidden="true" />
          <Typography
            variant="subtitle2"
            component="div"
            color="text.disabled"
            sx={{ alignSelf: 'end' }}
          >
            {`${prop.serviceObject.duration} h`}
          </Typography>
        </Stack>
        <Stack spacing={0.4} direction="row">
          <AttachMoneyIcon sx={{ color: 'text.disabled' }} aria-hidden="true" />
          <Typography
            variant="subtitle2"
            component="div"
            color="text.disabled"
            sx={{ alignSelf: 'end' }}
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
