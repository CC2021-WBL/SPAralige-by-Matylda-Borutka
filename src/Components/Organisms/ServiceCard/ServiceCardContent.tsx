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
  const { t, i18n } = useTranslation('services');

  return (
    <CardContent className={prop.className} sx={contentContainerStyles}>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        className={prop.className}
        sx={contentContainerStyles}
      >
        {prop.serviceObject.name[i18n.language]}
      </Typography>

      {/* {t('footer.about')} */}
      {prop.className === 'modal-service' && (
        <Typography gutterBottom color="text.disabled">
          {`${t('type')}: ${prop.serviceObject.type2[i18n.language]}`}
        </Typography>
      )}
      <Stack direction="row" spacing={2} sx={{ paddingBottom: '0.625rem' }}>
        <Stack spacing={0.8} direction="row" sx={{ alignItems: 'center' }}>
          <AccessTimeIcon
            sx={{ color: '#616161', height: 1 }}
            aria-hidden="true"
          />
          <Typography
            variant="subtitle2"
            component="div"
            color="#616161"
            sx={{ ...contentContainerStyles, alignSelf: 'end' }}
            className={prop.className}
          >
            {`${prop.serviceObject.durationInHours} h`}
          </Typography>
        </Stack>
        <Stack spacing={0.4} direction="row">
          <AttachMoneyIcon
            sx={{ color: '#616161', height: 1 }}
            aria-hidden="true"
          />
          <Typography
            variant="subtitle2"
            component="div"
            color="#616161"
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
        {prop.serviceObject.description[i18n.language]}
      </Typography>
    </CardContent>
  );
};

export default ServiceCardContent;
