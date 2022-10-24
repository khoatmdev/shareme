import React, { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import {
  // Routes, Route,
  Link,
} from 'react-router-dom';

import { Sidebar, SidebarMobile } from './components';
import logo from '../assets/logo.png';
import { userQuery } from '../utils/data';
import { client } from '../client';

const DefaultLayout = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);

  const userInfo =
    localStorage.getItem('user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then(res => setUser(res[0]));
  }, [userInfo]);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-all duration-75 ease-out">
      {/* Sidebar */}
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>

      {/* Header */}
      <div className="flex md:hidden flex-row items-center justify-between">
        <HiMenu
          fontSize={40}
          className="cursor-pointer"
          onClick={() => setToggleSidebar(true)}
        />
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-28" />
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img src={user?.image} alt="logo" className="w-28" />
        </Link>
      </div>

      {toggleSidebar && (
        <SidebarMobile closeSidebar={setToggleSidebar}>
          <Sidebar />
        </SidebarMobile>
      )}

      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
