import React, { useRef, useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Video from "../../public/assets/png/video.png";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Bot from "../../public/assets/png/bot.png";

const updates = [
  "2024 Q1 Compliance Update",
  "2024 Q2 Compliance Update",
  "2024 Q3 Compliance Update",
  "2024 Q4 Compliance Update",
];

const page = ["2021", "2022", "2023", "2024 (Current Year)"];

export default function Training() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };
  return (
    <>
<div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
         
      <div className="hidden md:flex gap-2 mt-5  w-[95%] 2xl:w-[70%] mx-auto">
        <Link
          href={"/"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          Admin
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link href={"/"} className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
          Compliance Videos
        </Link>
      </div>
      
      <div className="relative block md:hidden">
      <div className="mt-5 px-3 flex justify-end gap-2 cursor-pointer">
       <p className="font-semibold text-[14px] dark:text-white">2024 (Current Year)</p>
       <IoIosArrowDown className="self-center dark:text-white" />
      </div>
      {/* <div className="absolute right-0">
      <p className="font-semibold text-[14px]">2024 (Current Year)</p>
      <p className="font-semibold text-[14px]">2023 (Current Year)</p>
      <p className="font-semibold text-[14px]">2022 (Current Year)</p>
   
      </div> */}
      </div>

      <div className="lg:flex gap-10 md:w-[95%] 2xl:w-[70%] mx-auto mt-5 mb-10 ">
        <div className="lg:w-[80%]">
          <p className="font-semibold text-[18px] px-3 md:px-0 dark:text-white">{updates[activeIndex]}</p>

          <video
            ref={videoRef}
            controls
            className="mt-3 w-full"
            key={activeIndex}
            poster="/assets/png/video.png"
          >
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
              type="video/mp4"
              className="h-full"
            />
          </video>

          <div className="grid md:grid-cols-4 md:gap-5 mt-5 px-3 md:px-0">
            {updates.map((update, index) => (
              <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-0" key={index} onClick={() => handleClick(index)}>
                <Image
                  src={Video}
                  alt=""
                  className={`mt-3 cursor-pointer ${
                    activeIndex === index
                      ? "border-4 border-blue-500"
                      : "opacity-40"
                  }`}
                />
                <p
                  className={`font-semibold text-[14px] mt-3 self-center dark:text-white ${
                    activeIndex === index ? "" : "opacity-40"
                  }`}
                >
                  {update}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block lg:w-[20%] mt-10 lg:mt-0">
         <div className="hidden lg:block">
          <p className="nun font-semibold text-[16px] text-[#121F2C] dark:text-white ml-5">
            By Year
          </p>

          <ol className="hidden lg:block relative border-s border-[#D9D9D9] dark:border-gray-700 pb-5 ml-5">
            {page.map((month, index) => (
              <li
                key={month}
                className={`mt-5 mb-0 ms-4 ${
                  index === page.length - 1
                    ? "text-[#121F2C] dark:text-white font-semibold text-[14px]"
                    : ""
                }`}
              >
                <span className="absolute flex items-center justify-center w-6 h-auto rounded-full -start-3 ring-8 ring-transparent ">
                  <Image
                    src={"/assets/svg/tl.svg"}
                    alt=""
                    width={12}
                    height={12}
                  />
                </span>
                <div className="flex items-center mb-2 font-normal text-[12px] text-[#3076B1]">
                  <p
                    className={`-mt-[2px] ${
                      index === page.length - 1
                        ? "text-[#121F2C] dark:text-white font-semibold text-[14px]"
                        : ""
                    }`}
                  >
                    {month}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          </div>
          <div className="bg-white dark:bg-[#242424] rounded-[7px] p-[15px]">
            <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#F5F5F5] pb-3">
              Trainings
            </p>
            <p className="nun font-medium text-[#3076B1] text-[12px] mt-4">
              Required Compliance Training
            </p>
            <p className="nun font-medium text-[#3076B1] text-[12px] mt-2">
              CUNAs free Webinars{" "}
            </p>
            <p className="nun font-medium text-[#3076B1] text-[12px] mt-2">
              CUNA training, education and professional development
            </p>
            <p className="nun font-medium text-[#3076B1] text-[12px] mt-2">
              NCUAs Learning Management Service
            </p>
          </div>
        </div>
      </div>
      <Footer />
      </>
        ) : (
          <div className="w-full h-full flex justify-between px-3 mt-3 items-center">
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">All</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                Infosight
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                CU Policy Pro
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                RecoveryPro
              </p>
            </div>
          </div>
        )}

        <Link href={"/chat"}>
          <Image
            src={Bot}
            alt="Chatbot"
            className="fixed z-20 right-5 bottom-5 w-[82px] h-[87px] cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
