import React from 'react';

const ComplaintDetails = ({ complaint }) => {
  return (
    <div className="bg-[#181818] p-3 rounded-lg shadow-lg ml-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Complaint Details</h2>

      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <h3 className="text-xl font-semibold text-[#FF6347]">Complaint ID:</h3>
          <p className="text-gray-300">{complaint?._id}</p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <h3 className="text-xl font-semibold text-[#FF6347]">Complainant:</h3>
          <p className="text-gray-300">{complaint?.complainant?.firstname} {complaint?.complainant?.lastName}</p>
        </div>
      </div>

      <div className="p-2">
        <h3 className="text-xl font-semibold text-[#FF6347]">Complaint Description:</h3>
        <p className="text-gray-300">{complaint?.complaintDescription}</p>
      </div>

      <div className="p-2">
        <h3 className="text-xl font-semibold text-[#FF6347]">Complainant Details:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-300"><span className="font-semibold">Email:</span> {complaint?.complainant?.email}</p>
            <p className="text-gray-300"><span className="font-semibold">Contact Number:</span> {complaint?.complainant?.contactNumber}</p>
          </div>
          <div>
              { Object.entries(complaint?.complainantComplaintSpecificInfo || {}).map(([key, value]) => (
                  <p key={key} className="text-gray-300"><span className="font-semibold">{key}:</span> {value}</p>
              ))}
          </div>
        </div>
      </div>

      <div className="p-2">
        <h3 className="text-xl font-semibold text-[#FF6347]">Complaint Status:</h3>
        <p className="text-gray-300">{complaint?.resolutionStatus}</p>
      </div>

      <div className="p-2">
        <h3 className="text-xl font-semibold text-[#FF6347]">Urgency:</h3>
        <p className="text-gray-300">{complaint?.urgency}</p>
      </div>

      <div className="p-2">
        <h3 className="text-xl font-semibold text-[#FF6347]">Created At:</h3>
        <p className="text-gray-300">{complaint?.timestamps?.createdAt ? new Date(complaint?.timestamps?.createdAt).toLocaleString() : ''}</p>
      </div>
    </div>
  );
};

export default ComplaintDetails;
