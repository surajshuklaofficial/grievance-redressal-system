import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchComplaints, closeComplaint } from '../../actions/resolver.js'; // Import the action creators for forwarding and closing
import { FETCH_ALL_COMPLAINTS } from '../../constants/actionTypes.js';

const ComplaintList = () => {
  const dispatch = useDispatch();
  const complaints = useSelector((state) => state?.resolver?.complaints) || [];
  const [ isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
    dispatch(fetchComplaints('65037e0c8ae7b10f51d7603d'));
  }, [dispatch]);

  const handleForward = (complaintId) => {
    // Dispatch an action to forward the complaint based on the complaintId
    // dispatch(forwardComplaint(complaintId));
  };

  const handleClose = (complaintId) => {
    // Dispatch an action to close the complaint based on the complaintId
    dispatch(closeComplaint(complaintId));
  };

  return (
    <div className="mt-2 mx-2 p-2 bg-[#181818] text-white rounded-lg shadow-lg overflow-y-auto border-white border">
      <h2 className="text-xl font-semibold text-center">Complaint</h2>

      {complaints.map((complaint) => (
        <div key={complaint._id} className="mt-3 p-3 border border-white rounded-lg" onClick={() => setIsOpen((prevState) => !prevState)}>
          <p>Complaint ID: {complaint._id}</p>
          <p>Description: {complaint.complaintDescription}</p>
          
          { isOpen && (
            <>
            <p>Department: {complaint.department}</p>
            <p>Resolution Status: {complaint.resolutionStatus}</p>
            <p>Urgency: {complaint.urgency}</p>
              <div className='flex justify-between mt-2'>
                <button
                  onClick={() => handleForward(complaint._id)}
                  className="bg-[#FF6347] text-white rounded-md px-2 py-1 mr-2"
                >
                  Forward
                </button>
                <button
                  onClick={() => handleClose(complaint._id)}
                  className="bg-[#FF6347] text-white rounded-md px-2 py-1"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ComplaintList;
