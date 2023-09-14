import { useDispatch } from 'react-redux';

import {  AZADIKAMAHOTSAV, CARDCOVER, DIGITALINDIA2 } from '../../assets';
import { LOGOUT } from '../../constants/actionTypes';
const SubNavbar = ({setDepartment}) => {

  const dispatch = useDispatch();

  const logout = () => {
    setDepartment(null);
    dispatch({type: LOGOUT});
    window.location.href = '/';
  }

  return (
    <div className="w-full">
        <div className="flex justify-between items-center border-0 border-red-500 h-full py-[10px] overflow-hidden mx-20">
          <div className="gap-5 h-auto">
            <span className="flexStart gap-3 w-auto overflow-hidden flex items-center">
              <div className="flexCenter h-[12vh] w-[12vw] mx-4 p-1">
                <img src={DIGITALINDIA2} className="w-full h-full " />
              </div>
              <div className="border-l-2 border-gray-400 w-3 h-[7vh]" />
              <div className="flexCenter h-[6vh] w-[10vw] ">
                <img src={CARDCOVER} className="w-full h-full" />
              </div>
              <div className="border-l-2 border-gray-400 w-3 h-[7vh]" />
              <div className="flexCenter h-[11vh] w-[10vw] relative right-4">
                <img src={ AZADIKAMAHOTSAV} className="w-full h-full" />
              </div>
            </span>
          </div>
          <div className="font-bold p-2 ">
            <button className="text-white cursor-pointer bg-[#FA5F1E] w-[7vw] h-9 flexCenter rounded-[30px] shadow-md hover:text-[#FA5F1E] transition hover:bg-white hover:border-[1px] hover:border-[#FA5F1E] " onClick={() => logout()}>
              Logout
            </button>
          </div>
        </div>
    </div>
  )
}

export default SubNavbar