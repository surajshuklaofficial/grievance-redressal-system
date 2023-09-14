import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { Complaints, ComplaintStatusTiles } from "../../components";
import { fetchComplaintsByDepartment } from "../../actions/complaints";

const Home = ( { departmentID }) => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchComplaintsByDepartment(departmentID));    
  })

  return (
    <section className="flex justify-between">
        <div className="w-1/2">
          <ComplaintStatusTiles />
        </div>
        <Complaints />
    </section>
  )
}

export default Home;