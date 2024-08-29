import React from "react";
import { useState } from "react";
import Image from "next/image";

const Description = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showDownMore, setShowDownMore] = useState<boolean>(false);

  function handleView() {
    setShowMore(() => !showMore);
  }
  function handleDownView() {
    setShowDownMore(() => !showDownMore);
  }

  return (
    <>
      <div className="py-4">
        <span>SKU: </span>
        <span>Thumper Redback Extreme 100AH</span>
      </div>
      <div className="border-t-2 py-4 flex justify-between md:flex-none md:justify-start">
        <span className="w-3.5/12 md:w-auto">Categories:</span>
        <span className="w-8/12 md:w-auto md:ml-2">
          Absorbed Glass Mat, BATTERIES, Thumper Redback, Thumper Redback
          Extreme
        </span>
      </div>
      <div className="py-4">
        <div className="md:p-5 p-2.5 border-2 bg-cGray">
          <h1 className="text-lg">Maintenance Free</h1>
          <div className="flex md:flex-row flex-col items-start">
            <ul className="marker:text-gray-500 list-outside list-disc ml-6">
              <li>Leak Proof</li>
              <li>Rapid Recharge Rate Due To A Low Internal Resistance</li>
              <li>
                Can Reach Full Recharge Within 2 – 3 Hours From Alternator
              </li>
              <li>Excellent Standby Use</li>
              <li>Excellent long term storage</li>
              <li>Excellent long term storage</li>
              <li>Heat resistant</li>
              <li>Vibration resistant due to bonded element design</li>
            </ul>
            <div className="hidden md:block">
              <div className="flex">
                <div className="divider devider-horizontal bg-cGrayBorder w-0.5 h-48 mx-7 hidden md:block"></div>
                <ul className="marker:text-gray-500 list-outside list-disc ml-6">
                  <li>Completely sealed – can be mounted on any side</li>
                  <li>Can be mounted in sealed compartment</li>
                  <li>Under bonnet use</li>
                  <li>Superior discharge ability compared to a wet cell</li>
                  <li>High CA output</li>
                  <li>Up to 5 times faster recharge than a wet cell battery</li>
                  <li>Full 2 year manufacturer warranty!</li>
                </ul>
                <div className="divider devider-horizontal bg-cGrayBorder w-0.5 h-48 mx-7 hidden md:block"></div>
                <div className="divide-x bg-cGrayBorder w-full h-0.5 my-4 md:hidden"></div>
                <div className="flex">
                  <ul className="list-none list-outside">
                    <li className="mb-2">Discharge Rate</li>
                    <li className="mb-2">20 Hour Rate </li>
                    <li className="mb-2">10 Hour Rate</li>
                    <li className="mb-2">5 Hour Rate</li>
                    <li className="mb-2">1 Hour Rate</li>
                  </ul>
                  <ul className="list-none list-outside ml-10 font-bold">
                    <li className="mb-2 font-bold">Ah Capacity</li>
                    <li className="mb-2">105 Ah</li>
                    <li className="mb-2">100 Ah</li>
                    <li className="mb-2">94 Ah</li>
                    <li className="mb-2">73 Ah</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${showMore ? "block" : "hidden"}`}>
              <div className="divider devider-horizontal bg-cGrayBorder w-0.5 h-48 mx-7 hidden md:block"></div>
              <ul className="marker:text-gray-500 list-outside list-disc ml-6">
                <li>Completely sealed – can be mounted on any side</li>
                <li>Can be mounted in sealed compartment</li>
                <li>Under bonnet use</li>
                <li>Superior discharge ability compared to a wet cell</li>
                <li>High CA output</li>
                <li>Up to 5 times faster recharge than a wet cell battery</li>
                <li>Full 2 year manufacturer warranty!</li>
              </ul>
              <div className="divider devider-horizontal bg-cGrayBorder w-0.5 h-48 mx-7 hidden md:block"></div>
              <div className="divide-x bg-cGrayBorder w-full h-0.5 my-4 md:hidden"></div>
              <div className="flex">
                <ul className="list-none list-outside">
                  <li className="mb-2">Discharge Rate</li>
                  <li className="mb-2">20 Hour Rate </li>
                  <li className="mb-2">10 Hour Rate</li>
                  <li className="mb-2">5 Hour Rate</li>
                  <li className="mb-2">1 Hour Rate</li>
                </ul>
                <ul className="list-none list-outside ml-10 font-bold">
                  <li className="mb-2 font-bold">Ah Capacity</li>
                  <li className="mb-2">105 Ah</li>
                  <li className="mb-2">100 Ah</li>
                  <li className="mb-2">94 Ah</li>
                  <li className="mb-2">73 Ah</li>
                </ul>
              </div>
            </div>
            <p
              className="text-cBlue flex justify-end w-full mt-4 md:hidden"
              onClick={handleView}
            >
              {showMore ? "View Less" : "View More"}
            </p>
          </div>
          <div className="divide-x bg-cGrayBorder w-full h-0.5 md:mt-8 mt-4"></div>
          <div className="flex md:flex-row flex-col items-center justify-start mt-5">
            <div className="flex flex-col">
              <div className="check-sentence flex items-center mb-4">
                <Image
                  src="/assets/imgs/list/check.svg"
                  alt="check"
                  width="20px"
                  height="20px"
                />
                <span className="ml-2 w-11/12">
                  The Thumper Redback has a self discharge of less than 5 % per
                  year
                </span>
              </div>
              <div className="check-sentence flex items-center mb-4">
                <Image
                  src="/assets/imgs/list/check.svg"
                  alt="check"
                  width="20px"
                  height="20px"
                />
                <span className="ml-2 w-11/12">
                  (wet cell batteries discharge approx 3 – 4 % per week)
                </span>
              </div>
              <div className="check-sentence flex items-center mb-4">
                <Image
                  src="/assets/imgs/list/check.svg"
                  alt="check"
                  width="20px"
                  height="20px"
                />
                <span className="ml-2 w-11/12">
                  Maximum discharge current – 1100 Amp 5 seconds
                </span>
              </div>
            </div>
            <div className="divider devider-horizontal bg-cGrayBorder w-0.5 h-28 ml-28 mr-7 hidden md:block"></div>
            <div className="flex flex-col">
              <div className="check-sentence flex items-center mb-4">
                <Image
                  src="/assets/imgs/list/check.svg"
                  alt="check"
                  width="20px"
                  height="20px"
                />
                <span className="ml-2 w-11/12">
                  Maximum charging current – 30 Amps
                </span>
              </div>
              <div className="check-sentence flex items-center mb-4">
                <Image
                  src="/assets/imgs/list/check.svg"
                  alt="check"
                  width="20px"
                  height="20px"
                />
                <span className="ml-2 w-11/12">
                  Float charging voltage – 13.6 – 13.8 Volts @ 25⁰C
                </span>
              </div>
              <div className="check-sentence flex items-center mb-4">
                <Image
                  src="/assets/imgs/list/check.svg"
                  alt="check"
                  width="20px"
                  height="20px"
                />
                <span className="ml-2 w-11/12">
                  Heavy Duty ABS case suitable for under bonnet use
                </span>
              </div>
            </div>

            <div className={`${showDownMore ? "block" : "hidden"}`}>
              <div className="w-full md:hidden">
                <div className="check-sentence flex items-center mb-4">
                  <Image
                    src="/assets/imgs/list/check.svg"
                    alt="check"
                    width="20px"
                    height="20px"
                  />
                  <span className="ml-2 w-11/12">
                    If you are in the market for an Extreme deep cycle then look
                    no further then the Redback Extreme AGM!
                  </span>
                </div>
                <div className="check-sentence flex items-center mb-4">
                  <Image
                    src="/assets/imgs/list/check.svg"
                    alt="check"
                    width="20px"
                    height="20px"
                  />
                  <span className="ml-2 w-11/12">
                    This heavy duty AGM battery is the perfect option for the
                    use in Caravans, Motor homes, Camper trailers or even as a
                    second under bonnet battery.
                  </span>
                </div>
                <div className="check-sentence flex items-start mb-4">
                  <Image
                    src="/assets/imgs/list/check.svg"
                    alt="check"
                    width="20px"
                    height="20px"
                  />
                  <span className="ml-2 w-11/12">
                    The Redback Extreme takes the technology of an AGM battery
                    to a whole new level! Built with heavier internal lead
                    plates, this battery is designed for continual discharge for
                    heavy draw appliances. Its bonded element design allows for
                    strength against corrugated or rough terrain, making it
                    vibration resistant and the perfect choice for an off – road
                    battery!
                  </span>
                </div>
                <div className="check-sentence flex items-start mb-4">
                  <Image
                    src="/assets/imgs/list/check.svg"
                    alt="check"
                    width="20px"
                    height="20px"
                  />
                  <span className="ml-2 w-11/12">
                    Whilst the Redback Extreme is not designed as a primary
                    cranking battery (like the Thumper Redback hybrid), it does
                    still hold the capacity to start up to a 10Lt diesel engine.
                    The Extreme is designed as a secondary battery rather than a
                    primary starting battery. The perfect combination for an
                    under bonnet dual battery system would encompass the Thumper
                    Redback (either 105 Ah or 120 Ah) as the starter battery and
                    the Redback Extreme (either 105 Ah or 120 Ah) as the
                    secondary battery.
                  </span>
                </div>
                <div className="check-sentence flex items-start mb-4">
                  <Image
                    src="/assets/imgs/list/check.svg"
                    alt="check"
                    width="20px"
                    height="20px"
                  />
                  <span className="ml-2 w-11/12">
                    Due to design of the heavier internal plates within the
                    Extreme battery, it allows for rapid discharge and recharge
                    of heavy draw appliances to be continually used.
                  </span>
                </div>
                <div className="check-sentence flex items-center mb-4">
                  <Image
                    src="/assets/imgs/list/check.svg"
                    alt="check"
                    width="20px"
                    height="20px"
                  />
                  <span className="ml-2 w-11/12">
                    Due to the internal characteristics of the battery, the
                    Redback Extreme will allow for longer life over that of a
                    standard AGM battery.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p
            className="text-cBlue flex justify-end w-full mt-4 md:hidden"
            onClick={handleDownView}
          >
            {showDownMore ? "View Less" : "View More"}
          </p>
        </div>
      </div>
      <div className="py-4 w-full hidden md:block">
        <div className="check-sentence flex items-center mb-4">
          <Image
            src="/assets/imgs/list/check.svg"
            alt="check"
            width="20px"
            height="20px"
          />
          <span className="ml-2 w-11/12">
            If you are in the market for an Extreme deep cycle then look no
            further then the Redback Extreme AGM!
          </span>
        </div>
        <div className="check-sentence flex items-center mb-4">
          <Image
            src="/assets/imgs/list/check.svg"
            alt="check"
            width="20px"
            height="20px"
          />
          <span className="ml-2 w-11/12">
            This heavy duty AGM battery is the perfect option for the use in
            Caravans, Motor homes, Camper trailers or even as a second under
            bonnet battery.
          </span>
        </div>
        <div className="check-sentence flex items-start mb-4">
          <Image
            src="/assets/imgs/list/check.svg"
            alt="check"
            width="20px"
            height="20px"
          />
          <span className="ml-2 w-11/12">
            The Redback Extreme takes the technology of an AGM battery to a
            whole new level! Built with heavier internal lead plates, this
            battery is designed for continual discharge for heavy draw
            appliances. Its bonded element design allows for strength against
            corrugated or rough terrain, making it vibration resistant and the
            perfect choice for an off – road battery!
          </span>
        </div>
        <div className="check-sentence flex items-start mb-4">
          <Image
            src="/assets/imgs/list/check.svg"
            alt="check"
            width="20px"
            height="20px"
          />
          <span className="ml-2 w-11/12">
            Whilst the Redback Extreme is not designed as a primary cranking
            battery (like the Thumper Redback hybrid), it does still hold the
            capacity to start up to a 10Lt diesel engine. The Extreme is
            designed as a secondary battery rather than a primary starting
            battery. The perfect combination for an under bonnet dual battery
            system would encompass the Thumper Redback (either 105 Ah or 120 Ah)
            as the starter battery and the Redback Extreme (either 105 Ah or 120
            Ah) as the secondary battery.
          </span>
        </div>
        <div className="check-sentence flex items-start mb-4">
          <Image
            src="/assets/imgs/list/check.svg"
            alt="check"
            width="20px"
            height="20px"
          />
          <span className="ml-2 w-11/12">
            Due to design of the heavier internal plates within the Extreme
            battery, it allows for rapid discharge and recharge of heavy draw
            appliances to be continually used.
          </span>
        </div>
        <div className="check-sentence flex items-center mb-4">
          <Image
            src="/assets/imgs/list/check.svg"
            alt="check"
            width="20px"
            height="20px"
          />
          <span className="ml-2 w-11/12">
            Due to the internal characteristics of the battery, the Redback
            Extreme will allow for longer life over that of a standard AGM
            battery.
          </span>
        </div>
      </div>
    </>
  );
};

export default Description;
