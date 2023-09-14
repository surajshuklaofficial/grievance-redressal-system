import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ComplaintList = ({data}) => {

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Update the complaints state when data changes
    setComplaints(data);
  }, [data]); // Add data as a dependency for the useEffect

  return (
    <div className="w-2/5 h-[660px] mt-6 mr-6 p-6 bg-[#181818] text-white rounded-lg shadow-lg overflow-y-auto">
      <h2 className="text-xl font-semibold text-center">Complaint List</h2>

      {complaints.map((complaint, index) => (
        <div key={index} className="mt-3 p-3 border border-[#FF6347] rounded-lg">
          <p>Complaint ID: {complaint?._id}</p>
          <p>Description: {complaint?.complaintDescription}</p>
          {/* Add more complaint details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ComplaintList;
