import React from "react";
import Router from "next/router";

const MobileProfile = () => {
  function goToAccount() {
    Router.push("/account");
  }

  return (
    <div className="flex sm:hidden ml-4" onClick={goToAccount}>
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.7312 10C11.2165 10 13.2312 7.98528 13.2312 5.5C13.2312 3.01472 11.2165 1 8.7312 1C6.24592 1 4.2312 3.01472 4.2312 5.5C4.2312 7.98528 6.24592 10 8.7312 10Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.462 19C16.462 15.517 12.997 12.7 8.731 12.7C4.465 12.7 1 15.517 1 19"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default MobileProfile;
