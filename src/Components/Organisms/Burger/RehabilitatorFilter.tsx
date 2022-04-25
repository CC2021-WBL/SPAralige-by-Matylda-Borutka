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
  const [isAllChecked, setIsAllChecked] = useState(false);
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

  const handleAllClicked = (event: React.ChangeEvent<HTMLInputElement>) => {
    for (const person in therapistsChecks) {
      if (Object.prototype.hasOwnProperty.call(therapistsChecks, person)) {
        therapistsChecks[person] = event.target.checked;
      }
    }
    setIsAllChecked(event.target.checked);
    prop.setFilteredTherapists(therapistsChecks);
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
        <FormControlLabel
          label="Wszyscy terapeuci"
          control={
            <Checkbox
              value="all"
              checked={isAllChecked}
              onChange={handleAllClicked}
            />
          }
        />
      </FormGroup>
    </FormControl>
  );
}

export default RehabilitatorFilter;
