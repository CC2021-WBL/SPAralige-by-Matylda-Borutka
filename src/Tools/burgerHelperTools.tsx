import {
  FilterServices,
  ServicesFilterType,
} from '../Components/Organisms/Burger/BurgerTypes';
import { serviceDataType } from '../Types/dbDataTypes';

export function getDataForBurgerFromServices(services: serviceDataType[]) {
  const servicesArr: ServicesFilterType[] = [];
  const servicesSet = new Set<string>();
  const therapistsSet = new Set<string>();
  let maxPrice = 0;
  services.forEach((service) => {
    if (!servicesSet.has(service.filterCategory)) {
      servicesSet.add(service.filterCategory);
      servicesArr.push({
        serviceType: service.type,
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
}

export const filterServices: FilterServices = (
  services,
  filteredTypes,
  filteredTherapists,
  priceRange,
) => {
  let filteredArr: serviceDataType[] = [];

  filteredArr = filterPriceRange(services, priceRange);
  if (Object.entries(filteredTypes).length > 0 && filteredArr.length > 0) {
    filteredArr = filterWithObjects(services, filteredTypes, 'filterCategory');
  }

  if (filteredArr.length > 0 && Object.entries(filteredTherapists).length > 0) {
    filteredArr = filterWithObjects(
      filteredArr,
      filteredTherapists,
      'therapistFullName',
    );
  }
  return filteredArr;
};

const filterWithObjects = (
  services: serviceDataType[],
  filtersObj: Record<string, unknown>,
  filteredField: string,
) => {
  if (checkIfIsAnyTrue(filtersObj)) {
    const filters = getKeysByValue(filtersObj, true);
    const filteredServices: serviceDataType[] = [];
    services.forEach((service) => {
      if (filters.includes(service[filteredField])) {
        filteredServices.push(service);
      }
    });
    return filteredServices;
  }
  return services;
};

const filterPriceRange = (
  services: serviceDataType[],
  range: {
    minValue: number;
    maxValue: number;
  },
) => {
  const filteredServices: serviceDataType[] = [];
  services.forEach((service) => {
    if (
      service.priceInZloty <= range.maxValue &&
      service.priceInZloty >= range.minValue
    ) {
      filteredServices.push(service);
    }
  });

  return filteredServices;
};

const getKeysByValue = (obj: Record<string, unknown>, value: any) => {
  return Object.keys(obj).filter((key) => obj[key] === value);
};

const checkIfIsAnyTrue = (object: Record<string, unknown>) => {
  const set = new Set<unknown>();
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const element = object[key];
      set.add(element);
    }
  }
  if (set.has(true)) {
    return true;
  }
  return false;
};
