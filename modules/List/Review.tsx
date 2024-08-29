import React from "react";

interface RatingIconProps {
  fill: string;
}

const RatingIcon = (props: RatingIconProps) => {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.5 0L12.674 4.63131L18.0595 6.21885L14.6357 10.6687L14.7901 16.2812L9.5 14.4L4.20993 16.2812L4.36429 10.6687L0.940492 6.21885L6.32596 4.63131L9.5 0Z" />
    </svg>
  );
};

const Review = () => {
  function handelViewReview() {
    alert("View More Review");
  }

  return (
    <>
      <div className="py-4 flex flex-col md:border-none border-2 px-4 md:px-0">
        <div className="flex flex-row w-full gap-2 py-1.5">
          {new Array(Math.floor(5)).fill("").map((item, i) => (
            <RatingIcon fill="#FBB605" key={i} />
          ))}
        </div>
        <p className="md:text-lg text-sm text-textColor py-1.5">
          Thumper Redback is Amazing
        </p>
        <p className="md:text-base text-sm text-grey py-1.5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="py-1.5 md:text-base text-sm">
          <span className="border-r-2 pr-2 text-textColor">Jhon Doe</span>
          <span className="pl-2 text-cBlue">Feb 08, 2021</span>
        </div>
      </div>
      <p className="md:hidden mt-4 float-right" onClick={handelViewReview}>
        View More Review
      </p>
    </>
  );
};

export default Review;
