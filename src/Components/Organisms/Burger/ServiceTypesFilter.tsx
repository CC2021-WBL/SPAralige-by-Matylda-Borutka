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
    <FormControl sx={{ paddingTop: '1.5rem' }}>
      <FormLabel
        sx={{
          fontSize: '1.4375rem',
          color: '#000000',
          lineHeight: '2rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Typy zabiegów
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          label="Kosmetyka twarzy"
          sx={checkboxControlLabelStyle}
          control={<Checkbox value="Kosmetyka twarzy" sx={burgerCheckboxStyle} />}
        />
        <FormControlLabel
          label="Masaże relaksacyjne"
          sx={checkboxControlLabelStyle}
          control={<Checkbox value="Masaże relaksacyjne" sx={burgerCheckboxStyle} />}
        />
        <FormControlLabel
          label="Peelingi"
          sx={checkboxControlLabelStyle}
          control={<Checkbox value="peels" sx={burgerCheckboxStyle} />}
        />
        <FormControlLabel
          label="Medycyna estetyczna"
          sx={checkboxControlLabelStyle}
          control={<Checkbox value="Medycyna estetyczna" sx={burgerCheckboxStyle} />}
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
