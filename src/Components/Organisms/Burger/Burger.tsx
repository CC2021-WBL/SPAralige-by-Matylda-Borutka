import { Box } from '@mui/material';
import CloseFiltersButton from './CloseFiltersButton';
import FilterWithRange from './FilterWithRange';
import RehabilitatorFilter from './RehabilitatorFilter';
import ServiceTypesFilter from './ServiceTypesFilter';

//import { useReducer } from 'react';

type burgerProp = {
  handleFilter?: () => void;
  handleClose?: () => void;
};

function Burger(prop: burgerProp) {
  //const [filterState, filterDispatch] = useReducer(filterReducer, {})
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: '#FFFFFF',
        boxSizing: 'border-box',
        marginLeft: '1.125rem',
        marginRight: '2.375rem',
      }}
    >
      {prop.handleClose && (
        <CloseFiltersButton handleClose={prop.handleClose} />
      )}
      <ServiceTypesFilter />
      <FilterWithRange<number> name="Cena" minValue={0} maxValue={1500} />
      <RehabilitatorFilter therapistNameArr={['Maja', 'Rosól']} />
      <FilterWithRange<Date>
        name="Dostępność"
        minValue={new Date()}
        maxValue={new Date(new Date().setDate(new Date().getDate() + 7))}
      />
    </Box>
  );
}

export default Burger;
