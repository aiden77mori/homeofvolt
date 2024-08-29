import React from "react";
import Image from "next/image";

const ContactBox = () => {
  return (
    <div className="w-full flex flex-col max-w-8xl md:mt-20 mt-7 md:px-10 px-5">
      <h1 className="font-bold text-xl text-center sm:text-2xl lg:text-3xl xl:text-4xl">
        Contact Us
      </h1>
      <p className="text-xl mt-3 text-center">
        Please Get in Touch With Us Via Email Here Or Via Mobile: 0422 698 393
      </p>
      <div className="mt-7 w-full border-2 rounded-md md:py-7 py-5 md:px-8 px-3 flex md:flex-row flex-col shadow-md">
        <div className="flex flex-col md:w-1/3 w-full">
          <h3 className="font-bold font-2xl mb-4">Location</h3>
          <div className="flex items-start">
            <span className="mr-4">
              <Image
                src="/assets/imgs/contact/cLocation.svg"
                alt="contact1"
                width="35px"
                height="35px"
              />
            </span>
            <span className="text-lg md:text-xl w-11/12">
              Corner of Henderson Ave and Montague Rd, Pooraka 5095, South
              Australia
            </span>
          </div>
        </div>
        <div className="divider devider-horizontal bg-cGrayBorder md:w-0.5 w-full md:h-32 h-0.5 md:mx-20 my-5"></div>
        <div className="flex flex-col md:w-1/3 w-full">
          <h3 className="font-bold font-2xl mb-4">Trading Hours</h3>
          <div className="flex items-start">
            <span className="mr-4">
              <Image
                src="/assets/imgs/contact/cTrading.svg"
                alt="contact1"
                width="35px"
                height="35px"
              />
            </span>
            <div className="flex md:flex-row flex-col">
              <div className="flex flex-col mr-4 text-lg md:text-xl">
                <span>Mon - Fri</span>
                <span>9:00am – 5:00pm</span>
              </div>
              <div className="flex flex-col mt-2 md:mt-0 md:text-xl">
                <span>Sat</span>
                <span>9:00am – 12:00pm</span>
              </div>
            </div>
          </div>
        </div>
        <div className="divider devider-horizontal bg-cGrayBorder md:w-0.5 w-full md:h-32 h-0.5 md:mx-20 my-5"></div>
        <div className="flex flex-col md:w-1/3 w-full">
          <h3 className="font-bold font-2xl mb-4">Contact</h3>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="mr-4">
                <Image
                  src="/assets/imgs/contact/cPhone.svg"
                  alt="contact1"
                  width="35px"
                  height="35px"
                />
              </span>
              <span className="md:text-xl">0422 698 393</span>
            </div>
            <div className="flex items-center">
              <span className="mr-4">
                <Image
                  src="/assets/imgs/contact/cPhone.svg"
                  alt="contact1"
                  width="35px"
                  height="35px"
                />
              </span>
              <span className="md:text-xl">(08) 8262 6890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
