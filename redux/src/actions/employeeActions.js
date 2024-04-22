import { EMPLOYEES_CONSTANTS } from './constants';

export const fetchEmployees = () => (dispatch) => {
  fetch('http://localhost:3000/employees')
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: EMPLOYEES_CONSTANTS.FETCH_EMPLOYEES,
        payload: data,
      })
    )
    .catch((err) => console.error(err));
};

export const addEmployee = (newEmp) => (dispatch) => {
  fetch('http://localhost:3000/employees', {
    method: 'POST',
    body: JSON.stringify(newEmp),
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: EMPLOYEES_CONSTANTS.ADD_EMPLOYEE,
        payload: data,
      })
    )
    .catch((err) => console.error(err));
};

export const deleteEmployee = (id) => (dispatch) => {
  fetch(`http://localhost:3000/employees/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: EMPLOYEES_CONSTANTS.DELETE_EMPLOYEE,
        payload: data,
      })
    )
    .catch((err) => console.error(err));
};
