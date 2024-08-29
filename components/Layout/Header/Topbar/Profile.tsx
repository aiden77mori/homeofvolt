import React from 'react';
import Router from 'next/router';
import Image from 'next/image';

const Profile = () => {

  function goToAccount() {
    Router.push('/account');
  }

  return (
    <div className="flex group hover:cursor-pointer" onClick={goToAccount}>
      <Image
        src="/assets/icons/Profile.svg"
        alt="avatar"
        width={16}
        height={18}
      />
      <span className="mx-3">My Account</span>
      <a className="flex items-center duration-100 group-hover:transform group-hover:-rotate-90 ">
        <Image
          src="/assets/icons/ArrowDown.svg"
          alt="arrow-down"
          width={10}
          height={5}
        />
      </a>
    </div>
  );
};

export default Profile;
