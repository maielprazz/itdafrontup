import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  sidebarShow: "responsive",
  userLogin: { userInfo: userInfoFromStorage },
  leads: [],
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// import { createStore } from 'redux'

// const initialState = {
//   sidebarShow: 'responsive'
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return {...state, ...rest }
//     default:
//       return state
//   }
// }

// const store = createStore(changeState)
// export default store
