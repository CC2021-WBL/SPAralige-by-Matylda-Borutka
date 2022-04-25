import { Dispatch, SetStateAction, useState } from 'react';
import {
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

type PricePropType = {
  name: string;
  minValue: number;
  maxValue: number;
  setPriceRange: Dispatch<
    SetStateAction<{ minValue: number; maxValue: number }>
  >;
};

function PriceFilter(prop: PricePropType) {
  const [valueRange, setValueRange] = useState({
    minValue: prop.minValue,
    maxValue: prop.maxValue,
  });

  function handleOnMinChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    event.preventDefault();
    setValueRange({
      maxValue: valueRange.maxValue,
      minValue: parseInt(event.target.value),
    });
    prop.setPriceRange({
      maxValue: valueRange.maxValue,
      minValue: parseInt(event.target.value),
    })
  }

  function handleOnMaxChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    event.preventDefault();
    setValueRange({
      maxValue: parseInt(event.target.value),
      minValue: valueRange.minValue,
    });
    prop.setPriceRange({
      maxValue: parseInt(event.target.value),
      minValue: valueRange.minValue,
    })
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
          type="number"
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
          type="number"
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

export default PriceFilter;
