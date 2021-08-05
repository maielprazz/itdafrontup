import { combineReducers } from "redux";
import { leads } from "./leads";
import { userLoginReducer } from "./userReducers";

const initialState = {
  sidebarShow: "responsive",
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  leads: leads,
  userLogin: userLoginReducer,
  sidebarShow: changeState,
});
