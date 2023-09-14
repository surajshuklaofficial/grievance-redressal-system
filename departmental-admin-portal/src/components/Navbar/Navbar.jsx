import { useState } from 'react';
import { useSelector } from 'react-redux';

import { GOVERNMENTOFINDIA, USERLOGO } from '../../assets';

const Navbar = () => {

  const user = useSelector((state => state.auth));
  
  return (
    <nav className="bg-[#181818] text-white py-4 px-8 flex justify-between items-center">
      <div className='flex items-center gap-4'>
        <div className='border-r-2 border-[#555555] pr-4 h-8'>
          <img className='w-24' src={GOVERNMENTOFINDIA} alt='Government of India'/>
        </div>
        <div className='text-[#cecece]'>
          <h4 className='text-sm font-semibold'>आवास और शहरी मामलों का मंत्रालय</h4>
          <p className='text-xs'>Ministry of Housing and Urban Affairs</p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <img className='w-9' src={USERLOGO} alt='User Logo'/>
        <h3 className='text-lg font-semibold'>Grievance Admin Portal</h3>
      </div>
    </nav>
  )
}

export default Navbar;
