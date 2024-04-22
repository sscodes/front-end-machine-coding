import { EMPLOYEES_CONSTANTS } from '../actions/constants';

const inistate = {
  employees: {},
};

const employeeReducer = (state = inistate, action) => {
  switch (action.type) {
    case EMPLOYEES_CONSTANTS.FETCH_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case EMPLOYEES_CONSTANTS.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case EMPLOYEES_CONSTANTS.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => emp.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default employeeReducer;
