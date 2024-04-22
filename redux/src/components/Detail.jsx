import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
  const details = useSelector((state) => state.details.details);

  return (
    <div className='detail-section'>
      {details.id !== undefined ? (
        <div className='detail-container'>
          <div className='detail-header'>Employee Information</div>
          <div className='details'>
            <div>
              <img src={details.image} alt='profile-picture' />
            </div>
            <div>
              <h2>
                {details.preferredFullName + ' (' + details.employeeCode + ')'}
              </h2>
            </div>
            <div className='contact'>
              <div>{details.emailAddress}</div>
              <div>{details.phoneNumber}</div>
            </div>
            <div>
              <div>Region: {details.region}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className='no-user-selected'>Select a user to see details</div>
      )}
    </div>
  );
};

export default Detail;
