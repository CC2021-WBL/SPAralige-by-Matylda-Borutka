import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';

function RehabilitatorFilter() {
  return (
    <FormControl>
      <FormLabel>Rehabilitant</FormLabel>
      <FormGroup>
        <FormControlLabel label="Matylda Borutka" control={<Checkbox />} />
        <FormControlLabel label="Zbigniew Żebro" control={<Checkbox />} />
      </FormGroup>
    </FormControl>
  );
}

export default RehabilitatorFilter;
