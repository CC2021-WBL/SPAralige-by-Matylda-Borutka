import { FormControl, FormLabel, Stack } from '@mui/material';

type RangePropType<T> = {
  name: string;
  minValue: T;
  maxValue: T;
};

function FilterWithRange<T>(prop: RangePropType<T>) {
  return (
    <FormControl>
      <FormLabel>{prop.name}</FormLabel>
      <Stack direction={'row'}>od ... do ...</Stack>
    </FormControl>
  );
}

export default FilterWithRange;
