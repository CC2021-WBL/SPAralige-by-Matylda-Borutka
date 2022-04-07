import { Box } from '@mui/material';

import FilterWithRange from './FilterWithRange';
import RehabilitatorFilter from './RehabilitatorFilter';
import ServiceTypesFilter from './ServiceTypesFilter';

function Burger() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: '#FFFFFF',
        boxSizing: 'border-box',
        borderRadius: '20px',
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.18)',
        borderWidth: '1px',
        padding: ['5.75rem', '2.375rem', '6.4375rem', '1.125rem'],
      }}
    >
      <ServiceTypesFilter />
      <FilterWithRange<number> name="Cena" minValue={0} maxValue={1500} />
      <RehabilitatorFilter />
      <FilterWithRange<Date>
        name="Dostępność"
        minValue={new Date()}
        maxValue={new Date(new Date().setDate(new Date().getDate() + 7))}
      />
    </Box>
  );
}

export default Burger;
