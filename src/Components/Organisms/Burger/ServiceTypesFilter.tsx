import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';
import { burgerCheckboxStyle, checkboxControlLabelStyle } from './BurgerStyles';

export interface ServicesFilterType {
  serviceType: string;
  serviceFilterCat: string;
}

type propType = {
  servicesDataArr: ServicesFilterType[]
}

function ServiceTypesFilter(prop: propType) {
  return (
    <FormControl sx={{ paddingTop: '1.5rem' }}>
      <FormLabel
        sx={{
          fontSize: '1.25rem',
          color: '#000000',
          lineHeight: '2rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Typy zabiegów
      </FormLabel>
      <FormGroup>
        {prop.servicesDataArr.map((service, index) => (
          <FormControlLabel
            key={index}
            label={service.serviceType}
            sx={checkboxControlLabelStyle}
            control={
              <Checkbox
                value={service.serviceFilterCat}
                sx={burgerCheckboxStyle}
              />
            }
          />
        ))}
        <FormControlLabel
          label="Wszystkie zabiegi"
          sx={checkboxControlLabelStyle}
          control={<Checkbox value="all" sx={burgerCheckboxStyle} />}
        />
      </FormGroup>
    </FormControl>
  );
}

export default ServiceTypesFilter;
