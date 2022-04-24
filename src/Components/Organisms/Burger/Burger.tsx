import { Box } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';

import CloseFiltersButton from './CloseFiltersButton';
import DateFilter from './DateFilter';
import PriceFilter from './PriceFilter';
import RehabilitatorFilter from './RehabilitatorFilter';
import ServiceTypesFilter, { ServicesFilterType } from './ServiceTypesFilter';
import { serviceDataType } from '../../../Types/dbDataTypes';
import {
  setPrimaryFilteredTherapists,
  setPrimaryFilteredTypes,
} from '../../../Tools/burgerHelperTools';

export type BurgerProp = {
  handleFilter?: () => void;
  handleClose?: () => void;
  therapists?: string[];
  servicesData?: ServicesFilterType[];
  maxPrice?: number;
  setFiltered: Dispatch<SetStateAction<serviceDataType[]>>;
  services: serviceDataType[] | null;
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
  console.log(primaryTherapists);
  const [filteredTherapists, setFilteredTherapists] =
    useState(primaryTherapists);
  console.log(filteredTherapists);
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
          minValue={new Date()}
          maxValue={new Date(new Date().setDate(new Date().getDate() + 7))}
        />
      )}
    </Box>
  );
}

export default Burger;
