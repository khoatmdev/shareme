import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const SidebarMobile = ({ closeSidebar, children }) => {
  return (
    <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
      <div className="absolute w-full flex justify-end items-center p-2">
        <AiFillCloseCircle
          fontSize={30}
          className="cursor-pointer"
          onClick={() => closeSidebar(false)}
        />
      </div>
      {children}
    </div>
  );
};

export default SidebarMobile;
