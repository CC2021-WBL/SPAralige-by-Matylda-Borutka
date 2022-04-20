import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { CardContent, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { contentContainerStyles, contentTextStyles } from './ServiceCardStyles';
import { serviceDataType } from '../../../Types/dbDataTypes';

const ServiceCardContent = (prop: {
  serviceObject: serviceDataType;
  className?: string;
}) => {
  const { i18n } = useTranslation('navFooter');

  console.log(prop.serviceObject);
  console.log(i18n.language);

  return (
    <CardContent className={prop.className} sx={contentContainerStyles}>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        className={prop.className}
        sx={contentContainerStyles}
      >
        {/* {prop.serviceObject.name} */}

        {localStorage.getItem('i18nextLng') === 'pl-PL' &&
          localStorage.setItem('i18nextLng', 'pl')}
        {i18n.language === 'pl-PL' && window.location.reload()}

        {prop.serviceObject.text2[i18n.language]}
      </Typography>
      {prop.className === 'modal-service' && (
        <Typography gutterBottom color="text.disabled">
          {/* {`Rodzaj zabiegu: ${prop.serviceObject.type}`} */}
          {i18n.language === 'pl' ? <p>aaa</p> : <p>fff</p>}
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
            sx={{ ...contentContainerStyles, alignSelf: 'end' }}
            className={prop.className}
          >
            {`${prop.serviceObject.durationInHours} h`}
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
            sx={{ ...contentContainerStyles, alignSelf: 'end' }}
            className={prop.className}
          >
            {`${prop.serviceObject.priceInZloty} zł`}
          </Typography>
        </Stack>
      </Stack>
      <Typography
        variant="body2"
        color="text.secondary"
        className={prop.className}
        sx={contentTextStyles}
      >
        {prop.serviceObject.description}
      </Typography>
    </CardContent>
  );
};

export default ServiceCardContent;
