import {
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

type RangePropType<T> = {
  name: string;
  minValue: T;
  maxValue: T;
};

function genTypeOfInput(value: any) {
  if (typeof value === 'number') {
    return 'number';
  } else if (value instanceof Date) {
    return 'date';
  }
  return 'text';
}

function FilterWithRange<T>(prop: RangePropType<T>) {
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
        ></TextField>
      </Stack>
    </FormControl>
  );
}

export default FilterWithRange;
