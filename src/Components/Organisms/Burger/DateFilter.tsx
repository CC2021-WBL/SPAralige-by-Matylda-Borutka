import {
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { DateProp } from './BurgerTypes';

function DateFilter(prop: DateProp) {
  const [valueRange, setValueRange] = useState({
    minValue: prop.minValue.toISOString().split('T')[0],
    maxValue: prop.maxValue.toISOString().split('T')[0],
  });

  function handleOnMinChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    event.preventDefault();
    setValueRange({
      maxValue: valueRange.maxValue,
      minValue: event.target.value,
    });
    prop.setDateRange({
      maxValue: new Date(valueRange.maxValue),
      minValue: new Date(event.target.value),
    });
  }

  function handleOnMaxChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    event.preventDefault();
    setValueRange({
      maxValue: event.target.value,
      minValue: valueRange.minValue,
    });
    prop.setDateRange({
      minValue: new Date(valueRange.maxValue),
      maxValue: new Date(event.target.value),
    });
  }
  return (
    <FormControl sx={{ paddingTop: '1.5rem' }}>
      <FormLabel sx={{ fontSize: '20px', color: '#000000' }}>
        {prop.name}
      </FormLabel>
      <Stack
        direction={'row'}
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <Typography>od</Typography>

        <TextField
          type="date"
          InputProps={{
            sx: { width: '95.5px', height: '24px' },
          }}
          inputProps={{
            min: prop.minValue,
            max: prop.maxValue,
          }}
          value={valueRange.minValue}
          onChange={(event) => {
            handleOnMinChange(event);
          }}
        ></TextField>

        <Typography>do</Typography>
        <TextField
          type="date"
          InputProps={{
            sx: { width: '95.5px', height: '24px' },
          }}
          inputProps={{
            min: prop.minValue,
            max: prop.maxValue,
          }}
          value={valueRange.maxValue}
          onChange={(event) => {
            handleOnMaxChange(event);
          }}
        ></TextField>
      </Stack>
    </FormControl>
  );
}

export default DateFilter;
