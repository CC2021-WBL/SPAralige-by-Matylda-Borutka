import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';

function RehabilitatorFilter() {
  return (
    <FormControl sx={{ paddingTop: '1.5rem' }}>
      <FormLabel sx={{ fontSize: '20px', color: '#000000' }}>
        Rehabilitant
      </FormLabel>
      <FormGroup>
        <FormControlLabel label="Matylda Borutka" control={<Checkbox />} />
        <FormControlLabel label="Zbigniew Żebro" control={<Checkbox />} />
      </FormGroup>
    </FormControl>
  );
}

export default RehabilitatorFilter;
