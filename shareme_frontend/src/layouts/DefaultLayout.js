import React from 'react';

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-all duration-75 ease-out">
      {/* Header */}
      {/* Sidebar */}

      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
