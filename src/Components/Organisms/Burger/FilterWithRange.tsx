import {
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

// type RangeType = number | Date;
type RangePropType<RangeType> = {
  name: string;
  minValue: RangeType;
  maxValue: RangeType;
};

function genTypeOfInput(value: any) {
  if (typeof value === 'number') {
    return 'number';
  } else if (value instanceof Date) {
    return 'date';
  }
}

function FilterWithRange<RangeType>(prop: RangePropType<RangeType>) {
  const [valueRange, setValueRange] = useState({
    minValue: prop.minValue,
    maxValue: prop.maxValue,
  });

  function handleOnMinChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    // mock value at setValueRange to removed eslint warning
    setValueRange({
      minValue: prop.minValue,
      maxValue: prop.maxValue,
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
          type={genTypeOfInput(prop.minValue)}
          InputProps={{
            sx: { width: '95.5px', height: '24px' },
          }}
          inputProps={{
            min: prop.minValue,
            max: prop.maxValue,
          }}
          value={valueRange.minValue}
          onChange={handleOnMinChange}
        ></TextField>

        <Typography>do</Typography>
        <TextField
          type={genTypeOfInput(prop.minValue)}
          InputProps={{
            sx: { width: '95.5px', height: '24px' },
          }}
          inputProps={{
            min: prop.minValue,
            max: prop.maxValue,
          }}
          value={valueRange.maxValue}
        ></TextField>
      </Stack>
    </FormControl>
  );
}

export default FilterWithRange;
