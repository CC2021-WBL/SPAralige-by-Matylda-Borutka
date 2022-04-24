import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';

import { ServicesFilterType } from './BurgerTypes';
import { burgerCheckboxStyle, checkboxControlLabelStyle } from './BurgerStyles';
import { createServicesCheckboxesObj } from '../../../Tools/burgerHelperTools';
import { setStateType } from '../../../Types/hookTypes';

type propType = {
  servicesDataArr: ServicesFilterType[];
  setFilteredTypes: setStateType;
};

function ServiceTypesFilter(prop: propType) {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [servicesTypes, setServicesTypes] = useState(
    createServicesCheckboxesObj(prop.servicesDataArr, false),
  );
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    category: string,
  ) => {
    setServicesTypes({ ...servicesTypes, [category]: event.target.checked });
    prop.setFilteredTypes({
      ...servicesTypes,
      [category]: event.target.checked,
    });
  };

  const handleAllClicked = (event: React.ChangeEvent<HTMLInputElement>) => {
    for (const type in servicesTypes) {
      if (Object.prototype.hasOwnProperty.call(servicesTypes, type)) {
        servicesTypes[type] = event.target.checked;
      }
    }
    setIsAllChecked(event.target.checked);
    prop.setFilteredTypes(servicesTypes);
  };
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
                checked={servicesTypes[service.serviceType]}
                onChange={(event) =>
                  handleChange(event, service.serviceFilterCat)
                }
              />
            }
          />
        ))}
        <FormControlLabel
          label="Wszystkie zabiegi"
          sx={checkboxControlLabelStyle}
          control={
            <Checkbox
              value="all"
              sx={burgerCheckboxStyle}
              checked={isAllChecked}
              onChange={handleAllClicked}
            />
          }
        />
      </FormGroup>
    </FormControl>
  );
}

export default ServiceTypesFilter;
