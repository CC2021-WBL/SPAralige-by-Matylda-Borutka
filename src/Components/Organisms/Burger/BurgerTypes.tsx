/* eslint-disable no-unused-vars */

import { Dispatch, SetStateAction } from 'react';

import { serviceDataType } from '../../../Types/dbDataTypes';

export interface ServicesFilterType {
  serviceType: string;
  serviceFilterCat: string;
}

export type BurgerProp = {
  handleFilter?: () => void;
  handleClose?: () => void;
  therapists?: string[];
  servicesData?: ServicesFilterType[];
  maxPrice?: number;
  setFiltered: Dispatch<SetStateAction<serviceDataType[]>>;
  services: serviceDataType[] | null;
};

export type DateProp = {
  name: string;
  minValue: Date;
  maxValue: Date;
  setDateRange: Dispatch<SetStateAction<{ minValue: Date; maxValue: Date }>>;
};

export type UnionFromServiceKeys = keyof serviceDataType;

export type FilterServices = (
  services: serviceDataType[],
  filteredTypes: Record<string, unknown>,
  filteredTherapists: Record<string, unknown>,
  priceRange: {
    minValue: number;
    maxValue: number;
  },
) => serviceDataType[];
