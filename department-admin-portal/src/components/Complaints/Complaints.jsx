import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RECEIVED, SELECT_COMPLAINT } from '../../constants/actionTypes';

const ComplaintList = () => {

  const dispatch = useDispatch();
  const complaints = useSelector((state) => state?.complaints?.data) || [];
  const complaint_list = useSelector((state) => state?.complaints?.complaint_list) || 'Recieved';

  const selectComplaint = (complaint) => {
    dispatch({type: SELECT_COMPLAINT, data: complaint})
  }

  return (
    <div className="w-2/5 h-[777px] mt-6 mr-6 p-6 bg-[#181818] text-white rounded-lg shadow-lg overflow-y-auto">
      <h2 className="text-xl font-semibold text-center">Complaint - {complaint_list}</h2>

      {complaints.map((complaint, index) => (
        <div key={index} className="mt-3 p-3 border border-[#FF6347] rounded-lg" onClick={() => selectComplaint(complaint)}>
          <p>Complaint ID: {complaint?._id}</p>
          <p>Description: {complaint?.complaintDescription}</p>
          {/* Add more complaint details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ComplaintList;
