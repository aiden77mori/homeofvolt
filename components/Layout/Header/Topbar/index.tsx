import React from 'react';
import PhoneNumber from './PhoneNumber';
import Profile from './Profile';
import Welcome from './Welcome';

const Topbar = () => {
  return (
    <div className="hidden sm:flex justify-center h-10 bg-blue-700 text-white shadow-sm">
      <div className="sm:flex items-center justify-between w-full max-w-8xl px-5 sm:px-8 md:px-10">
        <PhoneNumber />
        <Welcome />
        <Profile />
      </div>
    </div>
  );
};

export default Topbar;
