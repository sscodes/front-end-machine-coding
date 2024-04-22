import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../actions/employeeActions';

const Modal = ({ display, setDisplay }) => {
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    image: '',
    jobTitle: '',
    region: '',
    phoneNumber: '',
    email: '',
  });

  const dispatch = useDispatch();

  const addEmployeeFunc = () => {
    const data = {
      ...employeeData,
      preferredFullName: employeeData.firstName + ' ' + employeeData.lastName,
      userId: (employeeData.firstName[0] + employeeData.lastName).toLowerCase(),
    };
    dispatch(addEmployee(data));
    setDisplay((e) => !e);
    setEmployeeData({
      firstName: '',
      lastName: '',
      image: '',
      jobTitle: '',
      region: '',
      phoneNumber: '',
      email: '',
    });
  };

  return (
    <div className={`${display ? '' : 'hide'} modal`}>
      <div className='name-section'>
        <div className='input-section'>
          <label htmlFor='firstname'>Enter First Name</label>
          <input
            type='text'
            placeholder='First Name'
            id='firstname'
            onChange={(e) =>
              setEmployeeData({ ...employeeData, firstName: e.target.value })
            }
          />
        </div>
        <div className='input-section'>
          <label htmlFor='lastname'>Enter Last Name</label>
          <input
            type='text'
            placeholder='Last Name'
            id='lastname'
            onChange={(e) =>
              setEmployeeData({ ...employeeData, lastName: e.target.value })
            }
          />
        </div>
        <div className='input-section'>
          <label htmlFor='image'>Enter Image Link</label>
          <input
            type='text'
            placeholder='Enter Image Link'
            id='image'
            onChange={(e) =>
              setEmployeeData({ ...employeeData, image: e.target.value })
            }
          />
        </div>
      </div>
      <div className='input-section'>
        <label htmlFor='job-title'>Enter Job Title</label>
        <input
          type='text'
          placeholder='Enter Job Title'
          id='job-title'
          onChange={(e) =>
            setEmployeeData({ ...employeeData, jobTitle: e.target.value })
          }
        />
      </div>
      <div className='last-three-inputs'>
        <div className='input-section'>
          <label htmlFor='region'>Enter Region</label>
          <input
            type='text'
            placeholder='Enter Region'
            id='region'
            onChange={(e) =>
              setEmployeeData({ ...employeeData, region: e.target.value })
            }
          />
        </div>
        <div className='input-section'>
          <label htmlFor='phone-number'>Enter Phone Number</label>
          <input
            type='number'
            placeholder='Enter Phone Number'
            id='phone-number'
            onChange={(e) =>
              setEmployeeData({ ...employeeData, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className='input-section'>
          <label htmlFor='email'>Enter e-mail</label>
          <input
            type='enail'
            placeholder='Enter e-mail'
            id='email'
            onChange={(e) =>
              setEmployeeData({ ...employeeData, email: e.target.value })
            }
          />
        </div>
      </div>
      <div className='btn-section'>
        <button className='add-emp-btn' onClick={addEmployeeFunc}>
          Add Employee
        </button>
        <button className='add-emp-btn' onClick={() => setDisplay((e) => !e)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
