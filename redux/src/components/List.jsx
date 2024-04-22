import React, { useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../actions/detailActions';
import { deleteEmployee } from '../actions/employeeActions';

const List = () => {
  const data = useSelector((state) => state.emp?.employees);

  const dispatch = useDispatch();

  const setDetail = (id) => {
    dispatch(fetchDetails(id));
  };

  const deleteEmp = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <div className='list'>
      <div className='list-header'>Employee List</div>
      <div className='list-section'>
        {data.length > 0 &&
          data.map((emp) => (
            <div
              className='list-item'
              key={emp.userId}
              onClick={() => setDetail(emp.id)}
            >
              <div>{emp.firstName + ' ' + emp.lastName}</div>
              <div className='cross'>
                <RxCross2 onClick={() => deleteEmp(emp.id)} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
