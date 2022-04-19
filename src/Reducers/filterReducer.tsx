// interface StateType {}

interface ActionType {
  type: string;
  payload: any;
}

export const filterReducer = (state: any, action: ActionType) => {
  switch (action.type) {
      case 'FILTER_SERVICES_TYPES':
          const filteredTypes = state.filter((service) => {
              return service.
          })
      break;

    case 'FILTER_PRICE':
      break;

    case 'FILTER_THERAPISTS':
      break;

    case 'FILTER_AVAILABILITY':
      break;

    default:
      break;
  }
};
