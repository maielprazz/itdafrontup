import axios from "axios";
import { GET_LEADS } from "../constants/leadsConstants";

// GET LEADS
export const getLeads = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
