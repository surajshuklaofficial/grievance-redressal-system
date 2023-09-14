import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { fetchComplaintsByDepartmentAndStatus } from '../../actions/complaints';
import { UPDATE_COMPLAINT_LIST } from '../../constants/actionTypes';

const Tile = ({ color, text, count }) => {
  const dispatch = useDispatch();
  const departmentID = JSON.parse(localStorage.getItem('profile'))?.departmentID || 0;

  const handleClick = (departmentID, status) => {
    dispatch(fetchComplaintsByDepartmentAndStatus(departmentID, status.toUpperCase()));
    dispatch({type:UPDATE_COMPLAINT_LIST, status});
  }

  return (
    <div
      className={`h-56 w-56 rounded-md ${color} flex flex-col justify-center items-center text-white font-semibold shadow-md`}
      style={{ background: `linear-gradient(0deg, ${color} 0%, ${color} 100%)` }}
      onClick={() => handleClick(departmentID, text)}
    >
      {text}
      <p>No of Complaints: {count}</p>
    </div>
  )};
  
  const ComplaintStatusTiles = () => {

    const recieved_count = useSelector((state) => state?.complaints?.RECEIVED_COUNT || 0);
    const inProgress_count = useSelector((state) => state?.complaints?.INPROGRESS_COUNT || 0);
    const closed_count = useSelector((state) => state?.complaints?.CLOSED_COUNT || 0);

    return (
      <div className="m-6 flex gap-6">
        <Tile color="bg-[#d85217]" text="Received" count={recieved_count}/>
        <Tile color="bg-[#17a2b8]" text="In Progress" count={inProgress_count}/>
        <Tile color="bg-[#28a745]" text="Closed" count={closed_count}/>
      </div>
    );
  };
  
  export default ComplaintStatusTiles;
  