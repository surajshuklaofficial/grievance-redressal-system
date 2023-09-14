import React from 'react';

const ComplaintList = () => {
  const complaints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace with your actual complaints data

  return (
    <div className="w-2/5 h-[660px] mt-6 p-6 bg-[#181818] text-white rounded-lg shadow-lg overflow-y-auto">
      <h2 className="text-xl font-semibold text-center">Complaint List</h2>

      {complaints.map((complaint) => (
        <div key={complaint} className="mt-3 p-3 border border-[#FF6347] rounded-lg">
          {/* Display complaint details here */}
          <p>Complaint ID: {complaint}</p>
          <p>Description: {`Description for complaint ${complaint}`}</p>
          {/* Add more complaint details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ComplaintList;
