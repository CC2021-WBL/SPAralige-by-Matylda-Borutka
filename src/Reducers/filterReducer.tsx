// interface StateType {}

import { serviceDataType } from '../Types/dbDataTypes';

interface ActionType {
  type: string;
  payload: {
    services: string[];
    maxPrice: number;
    minPrice: number;
    therapists: string[];
  };
}

export const filterReducer = (
  state: serviceDataType[] | null,
  action: ActionType,
): serviceDataType[] | null => {
  switch (action.type) {
    case 'FILTER_SERVICES_TYPES': {
      if (!state) {
        return null;
      }
      if ('services' in action.payload) {
        const filteredTypes = state.filter((service) => {
          action.payload.services.forEach((category) => {
            if (service.filterCategory === category) {
              return service;
            }
          });
        });
        return filteredTypes;
      } else {
        return state;
      }
    }

    case 'FILTER_PRICE': {
      if (!state) {
        return null;
      }
      if (action.payload.maxPrice && action.payload.minPrice) {
        const filteredTypes = state.filter((service) => {
          if (
            service.priceInZloty <= action.payload.maxPrice &&
            service.priceInZloty >= action.payload.minPrice
          )
            return service;
        });

        return filteredTypes;
      }
      return state;
    }

    case 'FILTER_THERAPISTS': {
      if (!state) {
        return null;
      }
      const filteredTypes = state.filter((service) => {
        action.payload.therapists.forEach((therapist) => {
          if (service.therapistFullName === therapist) {
            return service;
          }
        });
      });
      return filteredTypes;
    }

    case 'FILTER_AVAILABILITY':
      return state;

    case 'NO_FILTER':
      return state;

    default: {
      if (!state) {
        return null;
      }
      return state;
    }
  }
};
