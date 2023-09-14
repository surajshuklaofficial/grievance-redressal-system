import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { Complaints, ComplaintStatusTiles, ComplaintInfo } from "../../components";
import { fetchComplaintsByDepartment } from "../../actions/complaints";

const Home = ( { departmentID }) => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchComplaintsByDepartment(departmentID));    
  })

  return (
    <section className="flex justify-between">
        <div className="w-1/2 flex flex-col">
          <ComplaintStatusTiles />
          <ComplaintInfo />
        </div>
        <Complaints />
    </section>
  )
}

export default Home;