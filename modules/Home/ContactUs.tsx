import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <div className="hidden sm:block h-56 bg-map-md w-full min-h-mapMinHeight bg-cover bg-center">
        <div className="w-full h-full flex items-center justify-center relative max-w-8xl m-auto">
          <div className="flex flex-col max-w-479xl w-full bg-white absolute left-0 -top-16 border-b-4 border-contactUsBorder shadow-md p-8">
            <h1 className="text-4xl">Contact Us</h1>
            <div className="flex items-start mt-5">
              <span className="mr-4">
                <Image
                  src="/assets/imgs/contact/contact1.svg"
                  alt="contact1"
                  width="35px"
                  height="35px"
                />
              </span>
              <div className="w-70per">
                <p className="text-lg">
                  Shop 1a, Montague Farm Shopping Centre Corner of Henderson Ave
                  and Montague Rd, Pooraka 5095,
                </p>
                <p className="text-lg">South Australia</p>
              </div>
            </div>
            <div className="flex mt-5">
              <span className="mr-4">
                <Image
                  src="/assets/imgs/contact/contact2.svg"
                  alt="contact2"
                  width="35px"
                  height="35px"
                  className="mr-4"
                />
              </span>
              <span className="text-lg">(08) 8262 6890</span>
            </div>
            <div className="flex items-start mt-5">
              <span className="mr-4">
                <Image
                  src="/assets/imgs/contact/contact3.svg"
                  alt="contact3"
                  width="35px"
                  height="35px"
                  className="mr-4"
                />
              </span>
              <div className="flex flex-col">
                <div>
                  <p className="text-lg">Mon - Fri</p>
                  <p className="text-lg">9:00 am - 5:00 pm</p>
                </div>
                <div className="mt-5">
                  <p className="text-lg">Sat</p>
                  <p className="text-lg"> 9:00 am - 12:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden h-56 bg-mobileMapMd w-full min-h-mapMinHeight bg-cover bg-center"></div>
      <div className="sm:hidden w-full h-full flex items-center justify-center relative max-w-8xl m-auto mb-8">
        <div className="flex flex-col max-w-479xl w-full bg-white border-b-4 border-contactUsBorder shadow-md p-8">
          <h1 className="text-4xl">Contact Us</h1>
          <div className="flex items-start mt-5">
            <span className="mr-4">
              <Image
                src="/assets/imgs/contact/contact1.svg"
                alt="contact1"
                width="35px"
                height="35px"
              />
            </span>
            <div className="w-70per">
              <p className="text-lg">
                Shop 1a, Montague Farm Shopping Centre Corner of Henderson Ave
                and Montague Rd, Pooraka 5095,
              </p>
              <p className="text-lg">South Australia</p>
            </div>
          </div>
          <div className="flex mt-5">
            <span className="mr-4">
              <Image
                src="/assets/imgs/contact/contact2.svg"
                alt="contact2"
                width="35px"
                height="35px"
                className="mr-4"
              />
            </span>
            <span className="text-lg">(08) 8262 6890</span>
          </div>
          <div className="flex items-start mt-5">
            <span className="mr-4">
              <Image
                src="/assets/imgs/contact/contact3.svg"
                alt="contact3"
                width="35px"
                height="35px"
                className="mr-4"
              />
            </span>
            <div className="flex flex-col">
              <div>
                <p className="text-lg">Mon - Fri</p>
                <p className="text-lg">9:00 am - 5:00 pm</p>
              </div>
              <div className="mt-5">
                <p className="text-lg">Sat</p>
                <p className="text-lg"> 9:00 am - 12:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
