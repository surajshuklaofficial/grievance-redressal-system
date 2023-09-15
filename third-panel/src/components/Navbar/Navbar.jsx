import React, { useState } from 'react';

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-semibold">
          Greivance Redressal Field Officer
        </div>
        <button
          className="text-white block lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.293 4.293L12 11.586 4.707 4.293 3.293 5.707 12 14.414l8.707-8.707-1.414-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm0 7a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <ul className="mt-4">
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Services</li>
          <li className="text-white">Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default MobileNavbar;
