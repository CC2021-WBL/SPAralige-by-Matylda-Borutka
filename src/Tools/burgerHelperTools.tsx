import { ServicesFilterType } from '../Components/Organisms/Burger/ServiceTypesFilter';
import { serviceDataType } from '../Types/dbDataTypes';

export function getDataForBurgerFromServices(services: serviceDataType[]) {
  const servicesSet = new Set<ServicesFilterType>();
  const therapistsSet = new Set<string>();
  let maxPrice = 0;
  services.forEach((service) => {
    servicesSet.add({
      serviceType: service.type,
      serviceFilterCat: service.filterCategory,
    });
    therapistsSet.add(`${service.therapistFullName}`);
    if (service.priceInZloty > maxPrice) {
      maxPrice = service.priceInZloty;
    }
  });

  return {
    servicesData: [...servicesSet],
    therapists: [...therapistsSet],
    maxPrice: maxPrice,
  };
}
