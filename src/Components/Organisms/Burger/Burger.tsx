import { Box } from '@mui/material';
import { useState } from 'react';

import CloseFiltersButton from './CloseFiltersButton';
import DateFilter from './DateFilter';
import PriceFilter from './PriceFilter';
import RehabilitatorFilter from './RehabilitatorFilter';
import ServiceTypesFilter from './ServiceTypesFilter';
import { BurgerProp } from './BurgerTypes';
import {
  setPrimaryFilteredTherapists,
  setPrimaryFilteredTypes,
} from '../../../Tools/burgerHelperTools';

const primaryDateRange = {
  minValue: new Date(),
  maxValue: new Date(new Date().setDate(new Date().getDate() + 14)),
};

function Burger(prop: BurgerProp) {
  const [filteredTypes, setFilteredTypes] = useState(
    setPrimaryFilteredTypes(prop.servicesData, true),
  );
  const [priceRange, setPriceRange] = useState({
    minValue: 0,
    maxValue: prop.maxPrice || 1500,
  });
  const primaryTherapists = setPrimaryFilteredTherapists(prop.therapists, true);
  const [filteredTherapists, setFilteredTherapists] =
    useState(primaryTherapists);
  const [dateRange, setDateRange] = useState(primaryDateRange);
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
        <ServiceTypesFilter
          servicesDataArr={prop.servicesData}
          setFilteredTypes={setFilteredTypes}
        />
      )}
      {prop.maxPrice && (
        <PriceFilter
          name="Cena"
          minValue={0}
          maxValue={prop.maxPrice}
          setPriceRange={setPriceRange}
        />
      )}

      {prop.therapists && (
        <RehabilitatorFilter
          therapistNameArr={prop.therapists}
          setFilteredTherapists={setFilteredTherapists}
        />
      )}
      {prop.servicesData && (
        <DateFilter
          name="Dostępność"
          minValue={primaryDateRange.minValue}
          maxValue={primaryDateRange.maxValue}
          setDateRange={setDateRange}
        />
      )}
    </Box>
  );
}

export default Burger;
