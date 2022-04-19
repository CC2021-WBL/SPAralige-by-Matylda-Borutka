import ServiceTypesFilter, { ServicesFilterType } from './ServiceTypesFilter';

import { Box } from '@mui/material';
import CloseFiltersButton from './CloseFiltersButton';
import FilterWithRange from './FilterWithRange';
import RehabilitatorFilter from './RehabilitatorFilter';

export type BurgerProp = {
  handleFilter?: () => void;
  handleClose?: () => void;
  therapists?: string[];
  servicesData?: ServicesFilterType[];
  maxPrice?: number;
};

function Burger(prop: BurgerProp) {
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
      {prop.servicesData && (
        <ServiceTypesFilter servicesDataArr={prop.servicesData} />
      )}
      {prop.maxPrice && (
        <FilterWithRange<number> name="Cena" minValue={0} maxValue={1500} />
      )}

      {prop.therapists && (
        <RehabilitatorFilter therapistNameArr={prop.therapists} />
      )}
      {prop.servicesData && (
        <FilterWithRange<Date>
          name="Dostępność"
          minValue={new Date()}
          maxValue={new Date(new Date().setDate(new Date().getDate() + 7))}
        />
      )}
    </Box>
  );
}

export default Burger;
