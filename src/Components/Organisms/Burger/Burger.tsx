import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import CloseFiltersButton from './CloseFiltersButton';
import PriceFilter from './PriceFilter';
import RehabilitatorFilter from './RehabilitatorFilter';
import ServiceTypesFilter from './ServiceTypesFilter';
import { BurgerProp } from './BurgerTypes';
import {
  filterServices,
  setPrimaryFilteredTherapists,
  setPrimaryFilteredTypes,
} from '../../../Tools/burgerHelperTools';

function Burger(prop: BurgerProp) {
  const [filteredTypes, setFilteredTypes] = useState(
    setPrimaryFilteredTypes(prop.servicesData, true),
  );
  const [priceRange, setPriceRange] = useState({
    minValue: 0,
    maxValue: prop.maxPrice || 1500,
  });
  const [filteredTherapists, setFilteredTherapists] = useState(
    setPrimaryFilteredTherapists(prop.therapists, true),
  );

  useEffect(() => {
    if (prop.services) {
      const filteredServices = filterServices(
        prop.services,
        filteredTypes,
        filteredTherapists,
        priceRange,
      );
      prop.setFiltered(filteredServices);
    }
  }, [filteredTypes, filteredTherapists, priceRange]);

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
    </Box>
  );
}

export default Burger;
