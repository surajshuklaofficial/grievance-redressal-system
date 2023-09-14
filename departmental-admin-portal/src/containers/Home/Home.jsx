import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Complaints, ComplaintStatusTiles, ComplaintDetails } from "../../components";
import { fetchComplaintsByDepartment } from "../../actions/complaints";

const Home = ({ departmentID }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.complaints.data) || [1];

  useEffect(() => {
    dispatch(fetchComplaintsByDepartment(departmentID));
  }, [dispatch, departmentID]);

  return (
    <section className="flex justify-between">
      <div className="w-1/2 flex flex-col">
        <ComplaintStatusTiles data={data}/>
        <ComplaintDetails complaint={data[0]}/>
      </div>
      <Complaints data={data} />
    </section>
  )
}

export default Home;
