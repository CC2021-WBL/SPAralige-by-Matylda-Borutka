import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';

import { burgerCheckboxStyle, checkboxControlLabelStyle } from './BurgerStyles';

function ServiceTypesFilter() {
  return (
    <FormControl>
      <FormLabel
        sx={{
          fontSize: '1.4375rem',
          lineHeight: '2rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Typy zabiegów
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          label="Masaże twarz"
          sx={checkboxControlLabelStyle}
          control={<Checkbox value="face-massage" sx={burgerCheckboxStyle} />}
        />
        <FormControlLabel
          label="Masaże ciała"
          sx={checkboxControlLabelStyle}
          control={<Checkbox value="body-massage" sx={burgerCheckboxStyle} />}
        />
        <FormControlLabel
          label="Peelingi"
          sx={checkboxControlLabelStyle}
          control={<Checkbox value="peels" sx={burgerCheckboxStyle} />}
        />
        <FormControlLabel
          label="Kąpiele"
          sx={checkboxControlLabelStyle}
          control={<Checkbox value="baths" sx={burgerCheckboxStyle} />}
        />
        <FormControlLabel
          label="Zabiegi rehabilitacyjne"
          sx={checkboxControlLabelStyle}
          control={<Checkbox value="rehabilitation" sx={burgerCheckboxStyle} />}
        />
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
