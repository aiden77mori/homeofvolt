import React from "react";
import Image from "next/image";
import Button from "@components/UI/Button/Button";

const ContactForm = () => {
  return (
    <>
      <div className="hidden sm:block w-full md:bg-contactMap bg-mobileMapMd h-contactMapHeight bg-cover bg-center my-20">
        <div className="w-full h-full flex items-center justify-center relative max-w-8xl m-auto">
          <div className="flex flex-col max-w-479xl w-full bg-white absolute left-10 border-b-4 border-contactUsBorder shadow-md p-8">
            <h1 className="text-4xl text-center">
              Contact Us For A Free Quote
            </h1>
            <div className="relative mt-5">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Image
                  src="/assets/imgs/contact/fUser.svg"
                  alt="user"
                  width="20px"
                  height="20px"
                />
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="bg-gray-50 border border-gray-300 cGrayBorder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Name"
              />
            </div>
            <div className="relative mt-5">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Image
                  src="/assets/imgs/contact/fSms.svg"
                  alt="sms"
                  width="20px"
                  height="20px"
                />
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="bg-gray-50 border border-gray-300 cGrayBorder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Email address"
              />
            </div>
            <div className="relative mt-5">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Image
                  src="/assets/imgs/contact/fCalling.svg"
                  alt="calling"
                  width="20px"
                  height="20px"
                />
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="bg-gray-50 border border-gray-300 cGrayBorder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Phone number"
              />
            </div>
            <div className="relative mt-5">
              <div className="absolute inset-y-0 left-0 top-3 flex items-start pl-3 pointer-events-none">
                <Image
                  src="/assets/imgs/contact/fMessage.svg"
                  alt="message"
                  width="20px"
                  height="20px"
                />
              </div>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 pl-10"
                placeholder="Message"
              ></textarea>
            </div>
            <Button variant="fill" className="w-56 h-12 m-auto mt-7">
              Send Us Message
            </Button>
          </div>
        </div>
      </div>
      <div className="sm:hidden h-56 bg-mobileMapMd w-full min-h-mapMinHeight bg-cover bg-center mt-7"></div>
      <div className="sm:hidden w-full h-full flex items-center justify-center relative max-w-8xl m-auto">
        <div className="flex flex-col max-w-479xl w-full bg-white border-b-4 p-4">
          <h1 className="md:text-4xl text-2xl text-center">Contact Us For A Free Quote</h1>
          <div className="relative mt-5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Image
                src="/assets/imgs/contact/fUser.svg"
                alt="user"
                width="20px"
                height="20px"
              />
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 cGrayBorder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Name"
            />
          </div>
          <div className="relative mt-5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Image
                src="/assets/imgs/contact/fSms.svg"
                alt="sms"
                width="20px"
                height="20px"
              />
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 cGrayBorder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Email address"
            />
          </div>
          <div className="relative mt-5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Image
                src="/assets/imgs/contact/fCalling.svg"
                alt="calling"
                width="20px"
                height="20px"
              />
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 cGrayBorder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Phone number"
            />
          </div>
          <div className="relative mt-5">
            <div className="absolute inset-y-0 left-0 top-3 flex items-start pl-3 pointer-events-none">
              <Image
                src="/assets/imgs/contact/fMessage.svg"
                alt="message"
                width="20px"
                height="20px"
              />
            </div>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 pl-10"
              placeholder="Message"
            ></textarea>
          </div>
          <Button variant="fill" className="w-56 h-12 m-auto mt-7">
            Send Us Message
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
