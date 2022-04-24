import { ServicesFilterType } from '../Components/Organisms/Burger/BurgerTypes';
import { serviceDataType } from '../Types/dbDataTypes';

export function getDataForBurgerFromServices(
  services: serviceDataType[],
  language: string,
) {
  const servicesArr: ServicesFilterType[] = [];
  const servicesSet = new Set<string>();
  const therapistsSet = new Set<string>();
  let maxPrice = 0;
  services.forEach((service) => {
    if (!servicesSet.has(service.filterCategory)) {
      servicesSet.add(service.filterCategory);
      servicesArr.push({
        serviceType: service.type2[language],
        serviceFilterCat: service.filterCategory,
      });
    }

    therapistsSet.add(`${service.therapistFullName}`);
    if (service.priceInZloty > maxPrice) {
      maxPrice = service.priceInZloty;
    }
  });

  return {
    servicesData: servicesArr,
    therapists: [...therapistsSet],
    maxPrice: maxPrice,
  };
}

export function createServicesCheckboxesObj(
  servicesDataArr: ServicesFilterType[],
  primaryValue: boolean,
) {
  const checkboxesObj = {};
  servicesDataArr.forEach((service) => {
    checkboxesObj[service.serviceFilterCat] = primaryValue;
  });

  return checkboxesObj;
}

export function createTherapistsCheckboxesObj(
  dataArr: string[],
  primaryValue: boolean,
) {
  const checkboxesObj = {};
  dataArr.forEach((person) => {
    checkboxesObj[person] = primaryValue;
  });

  return checkboxesObj;
}

export function setPrimaryFilteredTypes(
  servicesArr: ServicesFilterType[] | undefined,
  primaryValue: boolean,
) {
  if (servicesArr) {
    return createServicesCheckboxesObj(servicesArr, primaryValue);
  } else {
    return {};
  }
}

export function setPrimaryFilteredTherapists(
  dataArr: string[] | undefined,
  primaryValue: boolean,
) {
  if (dataArr) {
    return createTherapistsCheckboxesObj(dataArr, primaryValue);
  } else {
    return {};
  }
};

type FilterServices = (
  filteredTypes: Record<string, unknown>,
  filteredTherapists: Record<string, unknown>,
  priceRange: {
    minValue: number;
    maxValue: number;
  },
  dateRange: {
    minValue: Date;
    maxValue: Date;
  },
) => void;

export const filterServices: FilterServices = () =>  {
  
}