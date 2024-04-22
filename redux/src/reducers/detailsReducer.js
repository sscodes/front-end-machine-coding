import { DETAILS_CONSTANTS } from '../actions/constants';

const inistate = {
  details: {},
};

const detailsReducer = (state = inistate, action) => {
  switch (action.type) {
    case DETAILS_CONSTANTS.FETCH_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default detailsReducer;
