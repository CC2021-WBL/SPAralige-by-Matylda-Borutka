import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';

type PropType = {
  therapistNameArr: string[];
};

function RehabilitatorFilter(prop: PropType) {
  return (
    <FormControl sx={{ paddingTop: '1.5rem' }}>
      <FormLabel sx={{ fontSize: '20px', color: '#000000' }}>
        Rehabilitant
      </FormLabel>
      <FormGroup>
        {prop.therapistNameArr.map((person) => (
          <FormControlLabel
            key={person}
            label={person}
            control={<Checkbox />}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}

export default RehabilitatorFilter;
