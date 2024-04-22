import { DETAILS_CONSTANTS } from './constants';

export const fetchDetails = (id) => (dispatch) => {
  fetch(`http://localhost:3000/employees/${id}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: DETAILS_CONSTANTS.FETCH_DETAILS,
        payload: data,
      })
    )
    .catch((err) => console.error(err));
};
