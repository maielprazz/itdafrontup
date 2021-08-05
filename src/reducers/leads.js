//actually a FUNCTION
import { GET_LEADS } from "../constants/leadsConstants";

export const leads = (state = { leads: [] }, { type, payload }) => {
  switch (type) {
    case GET_LEADS:
      return {
        ...state,
        leads: payload,
      };
    default:
      return state;
  }
};
