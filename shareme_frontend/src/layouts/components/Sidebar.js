import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-auto min-w-[210px]">
      <div className="flex flex-col">
        <Link to={'/'} className="flex px-5 my-6 gap-2 pt-1 w-190 items-center">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
