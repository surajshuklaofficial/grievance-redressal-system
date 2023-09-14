import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { Complaints, ComplaintStatusTiles, ComplaintDetails } from "../../components";
import { fetchComplaintsByDepartmentAndStatus, fetchComplaintsCountByDepartment } from "../../actions/complaints";
import { HEROBG } from "../../assets";
import { RECEIVED } from '../../constants/actionTypes';

const Home = ({ departmentID }) => {
  const dispatch = useDispatch();

  const bg = {
    backgroundImage: `url(${HEROBG})`,
  }

  useEffect(() => {
    dispatch(fetchComplaintsByDepartmentAndStatus(departmentID, RECEIVED));
    dispatch(fetchComplaintsCountByDepartment(departmentID));
  }, [dispatch, departmentID]);

  return (
    <section className="flex justify-between object-cover pb-8" style={bg}>
      
      <div className="w-2/3 flex flex-col">
        <ComplaintStatusTiles />
        <ComplaintDetails />
      </div>
      <Complaints />
    </section>
  )
}

export default Home;
