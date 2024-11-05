import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Vline from "../../../../public/assets/png/vline.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

// Array of card data
const data = [
  {
    src: "/assets/png/puser.png",
    title: "My 360 View",
    description: "Customize your experience.",
    link: "/myView",
  },
  {
    src: "/assets/png/puser2.png",
    title: "Compliance Information",
    description: "(InfoSight resources, policies, account insurance estimator)",
    link: "/infoSight",
  },
  {
    src: "/assets/png/puser3.png",
    title: "Model Content",
    description: "Comprehensive suite of content templates",
  },
  {
    src: "/assets/png/puser4.png",
    title: "Published Documents",
    description: "Credit Union’s custom content prepared for review.",
  },
  {
    src: "/assets/png/puser5.png",
    title: "My Assignments",
    link: "/manage-assignments",
    description: "",
    extraContent: (
      <>
        <div>
          <p className="font-semibold text-[#CA9307] text-[16px] text-center">
            1
          </p>
          <p className="nun font-normal text-[#6E7191] text-[9px] text-center">
            In Progress
          </p>
        </div>
        <div>
          <Image
            src={Vline}
            alt="vertical line"
            className="h-[45px] w-[10px]"
          />
        </div>
        <div>
          <p className="font-semibold text-[#B40000] text-[16px] text-center">
            1
          </p>
          <p className="nun font-normal text-[#6E7191] text-[9px] text-center">
            Overdue
          </p>
        </div>
      </>
    ),
  },
  {
    src: "/assets/png/puser.png",
    title: "APFCU Documents",
    description: "Files and resources uploaded by the credit union",
    link: "/cu-docx",
  },
];

// Main Today component displaying the slider with cards
export default function Today() {
  const sliderRef = useRef<Slider>(null);
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const notificationDropdownRef = useRef<HTMLDivElement>(null);
  const [isLockHovered, setIsLockHovered] = useState(false); // State to track hover on lock icon
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Simulate data loading, e.g., fetching API data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as necessary
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      notificationDropdownRef.current &&
      !notificationDropdownRef.current.contains(event.target as Node)
    ) {
      setNotificationDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex justify-between mt-10 w-[95%] 2xl:w-[70%] mx-auto">
        <div className="flex gap-3">
          {/* Skeleton for the title and icon */}
          {isLoading ? (
            <>
              <div className="h-[24px] w-[200px] bg-gray-200 dark:bg-gray-700  animate-pulse"></div>{" "}
              {/* Skeleton for the text */}
              <div className="h-[18px] w-[18px] bg-gray-200 dark:bg-gray-700  animate-pulse rounded-full"></div>{" "}
              {/* Skeleton for the info icon */}
            </>
          ) : (
            <>
              <p className="nun font-bold text-[#121F2C] dark:text-white text-[16px] md:text-[24px]">
                What would you like to view today?
              </p>
              <div className="relative group ">
                <Image
                  src={"/assets/svg/info.svg"}
                  alt=""
                  height={18}
                  width={18}
                  className="self-center mt-1 md:mt-3 cursor-pointer"
                />
                <div className="invisible group-hover:visible hidden md:flex absolute z-30 left-8 top-0 w-[230px]">
                  <Image
                    src={"/assets/svg/tool.svg"}
                    alt=""
                    width={20}
                    height={20}
                    className="absolute top-2 -left-3"
                  />
                  <p className="font-normal text-[10px] bg-[#EEEDED]  text-[#121F2C] p-3">
                    Quickly access your most-used features and content. Click on
                    a tiles below to jump straight to what you need. The gear
                    icon to the right can be used to customize the order of the
                    tile on the screen.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="relative self-center">
          {/* Skeleton for the settings icon and dropdown */}
          {isLoading ? (
            <div className="h-[18px] w-[18px] bg-gray-200 dark:bg-gray-700   animate-pulse rounded-full"></div> // Skeleton for settings icon
          ) : (
            <>
              <Image
                onClick={() =>
                  setNotificationDropdownOpen(!notificationDropdownOpen)
                }
                src={"/assets/svg/bx-settings.svg"}
                alt=""
                title="Setting"
                width={18}
                height={18}
                className="cursor-pointer"
              />
              {notificationDropdownOpen && (
                <div className="w-[300px] absolute right-0 mt-2 bg-white border-[1px] border-white dark:bg-black rounded-[6px] shadow-lg z-20">
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b-[1px] border-[#f2f2f2]  hover:bg-[#f2f2f2]  py-4 px-3 cursor-pointer"
                    >
                      <div className="flex gap-3">
                        <input type="checkbox" className="self-center" />
                        <p className="font-normal text-[#121F2C] dark:text-white text-[16px]">
                          {item.title}
                        </p>
                      </div>
                      <Image
                        src={"/assets/svg/menus.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="hidden md:block  relative w-[98%] 2xl:w-[70%] mx-auto mt-5">
        {/* If loading, show skeletons */}
        {isLoading ? (
          <div className="grid grid-cols-4 gap-5 px-3">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse bg-gray-200 dark:bg-gray-600  rounded-[7px] py-5 shadow-sm h-[190px] mb-5"
                >
                  {/* Skeleton for Image */}
                  <div className="w-[40px] h-[40px] bg-gray-300 dark:bg-gray-700  rounded-full mx-auto"></div>

                  {/* Skeleton for Title */}
                  <div className="h-[14px] w-[60%] bg-gray-300 dark:bg-gray-700  rounded-full mx-auto mt-3"></div>

                  {/* Skeleton for Description */}
                  <div className="h-[12px] w-[80%] bg-gray-300 dark:bg-gray-700  rounded-full mx-auto mt-3"></div>

                  {/* Skeleton for extra content (if applicable) */}
                  <div className="h-[10px] w-[50%] bg-gray-300 dark:bg-gray-700  rounded-full mx-auto mt-4"></div>
                </div>
              ))}
          </div>
        ) : (
          <Slider ref={sliderRef} {...settings}>
            {data.map((item, index) => {
              const isLocked = index === 3;

              return (
                <div key={index} className="relative group">
                  <div className="relative px-4">
                    <Link href={item.link || "#"} passHref>
                      <div
                        className={`relative group bg-[#fbfbfb] dark:bg-black rounded-[7px] py-5 shadow-sm mb-5 h-[190px] cursor-pointer ${
                          isLocked ? "opacity-20" : ""
                        }`}
                      >
                        <Image
                          src={'/assets/png/puser.png'}
                          alt={item.title}
                          width={40}
                          height={40}
                          className="mx-auto"
                        />
                        <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px] text-center mt-3">
                          {item.title}
                        </p>
                        <p
                          className={`nun font-normal text-[#7A7B7C] text-[12px] xl:text-[13px] text-center mt-3 w-[90%] mx-auto ${
                            index === 2 ? "group-hover:hidden" : ""
                          }`}
                        >
                          {item.description}
                        </p>

                        {item.extraContent && (
                          <div className="flex gap-5 mt-4 justify-center">
                            {item.extraContent}
                          </div>
                        )}

                        {index == 2 && (
                          <div className="hidden group-hover:flex justify-center gap-5 rounded-[7px] p-4 shadow-t-xl shadow-white mt-5">
                            <Link href={"/cu-policies"}>
                              <p className="font-normal text-[#3076B1] text-[13px]">
                                CU PolicyPro
                              </p>
                            </Link>
                            <div className="border-l-[1px] border-[#CCCCCC]"></div>
                            <Link href={"/cu-bcp"}>
                              <p className="font-normal text-[#3076B1] text-[13px] ">
                                RecoveryPro
                              </p>
                            </Link>
                          </div>
                        )}

                        {isLocked && (
                          <Image
                            src={"/assets/svg/lock.svg"}
                            alt="Lock icon"
                            width={20}
                            height={20}
                            className="absolute top-5 right-10"
                            onMouseEnter={() => setIsLockHovered(true)}
                            onMouseLeave={() => setIsLockHovered(false)}
                          />
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}

        {isLockHovered && (
          <div className="flex bg-white w-[70%] rounded-[4px] p-3 gap-2 absolute right-0 top-12">
            <Image
              src={"/assets/svg/infos2.svg"}
              alt=""
              width={24}
              height={24}
              className="self-start"
            />
            <p className="font-normal text-[#121F2C] text-[14px] self-center">
              You do not have authorization to access this content. Contact your
              system admin if you need your access adjusted.
            </p>
          </div>
        )}
      </div>

      {/* mobile View */}
      <div className="block md:hidden group relative w-[95%] 2xl:w-[70%] mx-auto mt-5">
        <div className="grid grid-cols-2 gap-5">
          {isLoading
            ? // Render skeletons while loading
              Array(4)
                .fill("")
                .map((_, index) => (
                  <div key={index} className="relative group">
                    <div className="bg-gray-200 dark:bg-gray-700  rounded-[7px] animate-pulse h-[190px]"></div>{" "}
                    {/* Card skeleton */}
                  </div>
                ))
            : data.map((item, index) => {
                const isLocked = index === 3;

                return (
                  <div key={index} className="relative group">
                    <div className="relative">
                      <Link href={item.link || "#"} passHref>
                        <div
                          className={`relative group bg-[#fbfbfb] dark:bg-black rounded-[7px] py-5 shadow-sm h-[190px] cursor-pointer ${
                            isLocked ? "opacity-20" : ""
                          }`}
                        >
                          <Image
                            src={item.src}
                            alt={item.title}
                            width={40}
                            height={40}
                            className="mx-auto"
                          />
                          <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px] text-center mt-3">
                            {item.title}
                          </p>
                          <p className="nun font-normal text-[#7A7B7C] text-[12px] xl:text-[13px] text-center mt-3 w-[90%] mx-auto">
                            {item.description}
                          </p>
                          {item.extraContent && (
                            <div className="flex gap-5 mt-4 justify-center">
                              {item.extraContent}
                            </div>
                          )}
                          {isLocked && (
                            <Image
                              src={"/assets/svg/lock.svg"}
                              alt="Lock icon"
                              width={20}
                              height={20}
                              className="absolute top-5 right-0"
                              onMouseEnter={() => setIsLockHovered(true)}
                              onMouseLeave={() => setIsLockHovered(false)}
                            />
                          )}
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
        </div>

        {isLockHovered && (
          <div className="hidden md:flex bg-white w-[70%] rounded-[4px] p-3 gap-2 absolute right-0 top-12">
            <Image
              src={"/assets/svg/infos2.svg"}
              alt=""
              width={24}
              height={24}
              className="self-start"
            />
            <p className="font-normal text-[#121F2C] text-[14px] self-center">
              You do not have authorization to access this content. Contact your
              system admin if you need your access adjusted.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
