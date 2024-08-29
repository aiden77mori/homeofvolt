import VideoCard from "@components/UI/Card/VideoCard";
import Image from "next/image";
import React from "react";

const VideoCourses = () => {
  const videoCourses = [
    {
      title: "Meet a Member :",
      comment: "Home of 12 Volt Northern",
      videoURL: "https://www.youtube.com/watch?v=wWgIAphfn2U",
    },
    {
      title: `Complete Off-Grid Landcruiser 79 Series`,
      comment: "Victron Energy System",
      videoURL: "https://www.youtube.com/watch?v=wWgIAphfn2U",
    },
    {
      title: `Full Brand Introduction`,
      comment: "MASTER MPEG 4",
      videoURL: "https://www.youtube.com/watch?v=wWgIAphfn2U",
    },
  ];
  return (
    <div className="flex flex-col max-w-8xl items-center px-5 py-8 xl:px-0 xl:py-20">
      <h2 className="font-bold text-xl text-center sm:text-2xl lg:text-3xl xl:text-4xl">
        Get Out Back and Stay There!{" "}
        <span className="text-blue-500">With Home of 12Volt</span>
      </h2>
      <span className="mt-2 mb-5">
        <Image
          src="/assets/icons/SectionTitleDecoration.svg"
          alt="Decoration"
          width={96}
          height={15}
        />
      </span>
      <div className="flex flex-col gap-y-5 sm:grid sm:grid-cols-3 sm:gap-y-0 sm:gap-x-8">
        {videoCourses.map((course) => (
          <VideoCard
            key={course.title}
            title={course.title}
            comment={course.comment}
            videoURL={course.videoURL}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCourses;
