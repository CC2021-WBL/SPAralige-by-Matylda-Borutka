import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';
import { useState } from 'react';

import { createTherapistsCheckboxesObj } from '../../../Tools/burgerHelperTools';
import { setStateType } from '../../../Types/hookTypes';

type PropType = {
  therapistNameArr: string[];
  setFilteredTherapists: setStateType;
};

function RehabilitatorFilter(prop: PropType) {
  const [therapistsChecks, setTherapistsChecks] = useState(
    createTherapistsCheckboxesObj(prop.therapistNameArr, false),
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    therapist: string,
  ) => {
    setTherapistsChecks({
      ...therapistsChecks,
      [therapist]: event.target.checked,
    });
    prop.setFilteredTherapists({
      ...therapistsChecks,
      [therapist]: event.target.checked,
    });
  };
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
            control={
              <Checkbox
                value={person}
                checked={therapistsChecks[person]}
                onChange={(event) => handleChange(event, person)}
              />
            }
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}

export default RehabilitatorFilter;
