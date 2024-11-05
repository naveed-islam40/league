import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  IoMdArrowDropdown,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";

interface Item {
  id: number;
  filePath: string;
  title: string;
  author: string;
  date: string;
}

const data = [
  {
    id: 1,
    title: "1100.10: Organization",
    author: "Beth Elizabeth",
    date: "01/26/2024, 11:10 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 2,
    title: "1100.16: Landing Policies to Review",
    author: "John Doe",
    date: "01/27/2024, 09:15 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 3,
    title: "Policy 1600: Account Transaction",
    author: "Jane Smith",
    date: "01/28/2024, 02:20 PM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 4,
    title: "1100.10: Organization",
    author: "Beth Elizabeth",
    date: "01/26/2024, 11:10 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 5,
    title: "1100.16: Lending Policies to Review",
    author: "John Doe",
    date: "01/27/2024, 09:15 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 6,
    title: "Policy 1600: Account Transaction",
    author: "Jane Smith",
    date: "01/28/2024, 02:20 PM",
    filePath: "/assets/png/file.png",
  },
];

const dataTwo = [
  {
    id: 1,
    title: "1100.10: Organization",
    author: "Beth Elizabeth",
    date: "01/26/2024, 11:10 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 2,
    title: "1100.16: Landing Policies to Review",
    author: "John Doe",
    date: "01/27/2024, 09:15 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 3,
    title: "Policy 1600: Account Transaction",
    author: "Jane Smith",
    date: "01/28/2024, 02:20 PM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 4,
    title: "1100.10: Organization",
    author: "Beth Elizabeth",
    date: "01/26/2024, 11:10 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 5,
    title: "1100.16: Lending Policies to Review",
    author: "John Doe",
    date: "01/27/2024, 09:15 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 6,
    title: "Policy 1600: Account Transaction",
    author: "Jane Smith",
    date: "01/28/2024, 02:20 PM",
    filePath: "/assets/png/file.png",
  },
];

const dataThree = [
  {
    id: 1,
    title: "1100.10: Organization",
    author: "Beth Elizabeth",
    date: "01/26/2024, 11:10 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 2,
    title: "1100.16: Landing Policies to Review",
    author: "John Doe",
    date: "01/27/2024, 09:15 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 3,
    title: "Policy 1600: Account Transaction",
    author: "Jane Smith",
    date: "01/28/2024, 02:20 PM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 4,
    title: "1100.10: Organization",
    author: "Beth Elizabeth",
    date: "01/26/2024, 11:10 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 5,
    title: "1100.16: Lending Policies to Review",
    author: "John Doe",
    date: "01/27/2024, 09:15 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 6,
    title: "Policy 1600: Account Transaction",
    author: "Jane Smith",
    date: "01/28/2024, 02:20 PM",
    filePath: "/assets/png/file.png",
  },
];

export default function Section1() {
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [accordionOpen, setAccordionOpen] = useState(false); // Accordion state

  const toggleAccordion = () => {
    setAccordionOpen((prevState) => !prevState); // Toggle accordion state
  };

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to close dropdown when an item is selected
  const handleSelect = () => {
    setIsOpen(false);
  };

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* section 1    */}
      <div className="bg-white dark:bg-black md:dark:border-[1px] md:dark:border-white md:rounded-[7px] p-[15px] drop-shadow-sm md:mt-5 border-t-[1px] border-[#f2f2f2] md:border-transparent">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px] xl:text-[18px]">
              Recently Updated Content
            </p>
            <div className="relative self-center" ref={dropdownRef}>
              <p
                onClick={toggleDropdown}
                className=" nun font-normal text-[12px] dark:text-white hidden md:flex gap-1 self-center cursor-pointer"
              >
                View All
                <IoMdArrowDropdown className="text-[17px] self-center" />
              </p>

              {isOpen && (
                <div className="w-[150px] absolute left-0 z-10 bg-white dark:bg-black border-[1px] border-[#E2E2E2] shadow-sm mt-2">
                  <div
                    onClick={handleSelect}
                    className="cursor-pointer text-[#121F2C] dark:text-white dark:hover:text-[#121F2C] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-3"
                  >
                    <p className="font-normal  text-[12px]">Show All</p>
                  </div>
                  <div
                    onClick={handleSelect}
                    className="cursor-pointer text-[#121F2C] dark:text-white dark:hover:text-[#121F2C] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-3"
                  >
                    <p className="font-normal text-[12px]">Show My Updates</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Image
            src={"/assets/svg/dots.svg"}
            alt=""
            width={24}
            height={24}
            className="self-center cursor-pointer hidden md:block"
          />

          {!accordionOpen && (
            <IoIosArrowDown
              onClick={toggleAccordion}
              className="text-[#121F2C] dark:text-white text-[25px] block md:hidden"
            />
          )}
          {/* This will render the up arrow when the accordion is open */}
          {accordionOpen && (
            <IoIosArrowUp
              onClick={toggleAccordion}
              className="text-[#121F2C] dark:text-white text-[25px] block md:hidden"
            />
          )}
        </div>

        <p className="hidden md:block nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-1">
          Content recently updated by Affinity Plus Federal Credit Union
        </p>

        {/* Accordion for Mobile */}
        {accordionOpen && (
          <div className="md:hidden">
            <div className="my-5 flex gap-5">
              <button
                className={
                  activeTab === 1
                    ? "active tab nun bg-[#EEF5FF] font-semibold text-[14px] text-[#3076B1] border-[1px] border-[#3076B1] rounded-full py-[5px] w-full"
                    : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white border-[1px] border-[#3076B1] rounded-full py-[5px] w-full"
                }
                onClick={() => handleTabClick(1)}
              >
                All
              </button>
              <button
                className={
                  activeTab === 2
                    ? "active tab nun bg-[#f6f2fb] font-semibold text-[14px] text-[#AD7EFB] border-[1px] border-[#AD7EFB] rounded-full px-[10px] py-[5px] w-full"
                    : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white  border-[1px] border-[#AD7EFB] rounded-full px-[10px] py-[5px] w-full"
                }
                onClick={() => handleTabClick(2)}
              >
                Policies/Procedures
              </button>
              <button
                className={
                  activeTab === 3
                    ? "active tab nun bg-[#f8f6de] font-semibold text-[14px] text-[#FFDF36] border-[1px] border-[#FFDF36] rounded-full py-[5px] w-full"
                    : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white  border-[1px] border-[#FFDF36] rounded-full py-[5px] w-full"
                }
                onClick={() => handleTabClick(3)}
              >
                BCP
              </button>
            </div>

            {activeTab === 1 && (
              <div>
                {data.map((item, index) => (
                  <div
                    key={item.id}
                    className={`grid md:grid-cols-12 ${
                      index !== data.length - 1
                        ? "border-b-[1px] border-[#F5F5F5]"
                        : ""
                    } py-2`}
                  >
                    <div className="md:col-span-6 flex gap-2">
                      <button
                        className={`rounded-[3px] w-[30px] h-[30px] ${
                          index === 1 ? "bg-[#FFDF36]" : "bg-[#AD7EFB]"
                        }`}
                      >
                        <Image
                          src={item.filePath}
                          alt={item.title}
                          width={14}
                          height={18}
                          className="mx-auto"
                        />
                      </button>
                      <div>
                        <Link
                          href={"/organization"}
                          className="nun font-normal text-[#3076B1] text-[14px]  self-center"
                        >
                          {item.title}
                        </Link>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                          by{" "}
                          <span className="text-black dark:text-white">
                            {item.author}
                          </span>
                        </p>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] mt-1 ">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block md:col-span-3 self-center">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                        by{" "}
                        <span className="text-black dark:text-white">
                          {item.author}
                        </span>
                      </p>
                    </div>
                    <div className="hidden md:block md:col-span-3 self-center ml-auto">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <div>
                {dataTwo.map((item, index) => (
                  <div
                    key={item.id}
                    className={`grid md:grid-cols-12 ${
                      index !== data.length - 1
                        ? "border-b-[1px] border-[#F5F5F5]"
                        : ""
                    } py-2`}
                  >
                    <div className="md:col-span-6 flex gap-2">
                      <button className="rounded-[3px] w-[30px] h-[30px] bg-[#AD7EFB]  ">
                        <Image
                          src={item.filePath}
                          alt={item.title}
                          width={14}
                          height={18}
                          className="mx-auto"
                        />
                      </button>
                      <div>
                        <Link
                          href={"/organization"}
                          className="nun font-normal text-[#3076B1] text-[14px]  self-center"
                        >
                          {item.title}
                        </Link>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                          by{" "}
                          <span className="text-black dark:text-white">
                            {item.author}
                          </span>
                        </p>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] mt-1 ">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block md:col-span-3 self-center">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                        by{" "}
                        <span className="text-black dark:text-white">
                          {item.author}
                        </span>
                      </p>
                    </div>
                    <div className="hidden md:block md:col-span-3 self-center ml-auto">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 3 && (
              <div>
                {dataThree.map((item, index) => (
                  <div
                    key={item.id}
                    className={`grid md:grid-cols-12 ${
                      index !== data.length - 1
                        ? "border-b-[1px] border-[#F5F5F5]"
                        : ""
                    } py-2`}
                  >
                    <div className="md:col-span-6 flex gap-2">
                      <button className="rounded-[3px] w-[30px] h-[30px] bg-[#FFDF36]">
                        <Image
                          src={item.filePath}
                          alt={item.title}
                          width={14}
                          height={18}
                          className="mx-auto"
                        />
                      </button>
                      <div>
                        <Link
                          href={"/organization"}
                          className="nun font-normal text-[#3076B1] text-[14px]  self-center"
                        >
                          {item.title}
                        </Link>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                          by{" "}
                          <span className="text-black dark:text-white">
                            {item.author}
                          </span>
                        </p>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] mt-1 ">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block md:col-span-3 self-center">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                        by{" "}
                        <span className="text-black dark:text-white">
                          {item.author}
                        </span>
                      </p>
                    </div>
                    <div className="hidden md:block md:col-span-3 self-center ml-auto">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Desktop View (always visible on larger screens) */}
        <div className="hidden md:block">
          <div className="my-5 flex gap-5">
            <button
              className={
                activeTab === 1
                  ? "active tab nun bg-[#EEF5FF] font-semibold text-[14px] text-[#3076B1] border-[1px] border-[#3076B1] rounded-full py-[5px] w-full"
                  : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white border-[1px] border-[#3076B1] rounded-full py-[5px] w-full"
              }
              onClick={() => handleTabClick(1)}
            >
              All
            </button>
            <button
              className={
                activeTab === 2
                  ? "active tab nun bg-[#f6f2fb] font-semibold text-[14px] text-[#AD7EFB] border-[1px] border-[#AD7EFB] rounded-full py-[5px] w-full"
                  : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white  border-[1px] border-[#AD7EFB] rounded-full py-[5px] w-full"
              }
              onClick={() => handleTabClick(2)}
            >
              Policies/Procedures
            </button>
            <button
              className={
                activeTab === 3
                  ? "active tab nun bg-[#f8f6de] font-semibold text-[14px] text-[#FFDF36] border-[1px] border-[#FFDF36] rounded-full py-[5px] w-full"
                  : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white  border-[1px] border-[#FFDF36] rounded-full py-[5px] w-full"
              }
              onClick={() => handleTabClick(3)}
            >
              BCP
            </button>
          </div>

          {activeTab === 1 && (
            <div>
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className={`grid md:grid-cols-12 ${
                    index !== data.length - 1
                      ? "border-b-[1px] border-[#F5F5F5]"
                      : ""
                  } py-2`}
                >
                  <div className="md:col-span-6 flex gap-2">
                    <button
                      className={`rounded-[3px] w-[30px] h-[30px] ${
                        index === 1 ? "bg-[#FFDF36]" : "bg-[#AD7EFB]"
                      }`}
                    >
                      <Image
                        src={item.filePath}
                        alt={item.title}
                        width={14}
                        height={18}
                        className="mx-auto"
                      />
                    </button>
                    <div>
                      <Link
                        href={"/organization"}
                        className="nun font-normal text-[#3076B1] text-[14px]  self-center"
                      >
                        {item.title}
                      </Link>
                      <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                        by{" "}
                        <span className="text-black dark:text-white">
                          {item.author}
                        </span>
                      </p>
                      <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] mt-1 ">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:col-span-3 self-center">
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                      by{" "}
                      <span className="text-black dark:text-white">
                        {item.author}
                      </span>
                    </p>
                  </div>
                  <div className="hidden md:block md:col-span-3 self-center ml-auto">
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div>
              {dataTwo.map((item, index) => (
                <div
                  key={item.id}
                  className={`grid md:grid-cols-12 ${
                    index !== data.length - 1
                      ? "border-b-[1px] border-[#F5F5F5]"
                      : ""
                  } py-2`}
                >
                  <div className="md:col-span-6 flex gap-2">
                    <button className="rounded-[3px] w-[30px] h-[30px] bg-[#AD7EFB] ">
                      <Image
                        src={item.filePath}
                        alt={item.title}
                        width={14}
                        height={18}
                        className="mx-auto"
                      />
                    </button>
                    <div>
                      <Link
                        href={"/organization"}
                        className="nun font-normal text-[#3076B1] text-[14px]  self-center"
                      >
                        {item.title}
                      </Link>
                      <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                        by{" "}
                        <span className="text-black dark:text-white">
                          {item.author}
                        </span>
                      </p>
                      <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] mt-1 ">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:col-span-3 self-center">
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                      by{" "}
                      <span className="text-black dark:text-white">
                        {item.author}
                      </span>
                    </p>
                  </div>
                  <div className="hidden md:block md:col-span-3 self-center ml-auto">
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 3 && (
            <div>
              {dataThree.map((item, index) => (
                <div
                  key={item.id}
                  className={`grid md:grid-cols-12 ${
                    index !== data.length - 1
                      ? "border-b-[1px] border-[#F5F5F5]"
                      : ""
                  } py-2`}
                >
                  <div className="md:col-span-6 flex gap-2">
                    <button className="rounded-[3px] w-[30px] h-[30px] bg-[#FFDF36]">
                      <Image
                        src={item.filePath}
                        alt={item.title}
                        width={14}
                        height={18}
                        className="mx-auto"
                      />
                    </button>
                    <div>
                      <Link
                        href={"/organization"}
                        className="nun font-normal text-[#3076B1] text-[14px]  self-center"
                      >
                        {item.title}
                      </Link>
                      <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                        by{" "}
                        <span className="text-black dark:text-white">
                          {item.author}
                        </span>
                      </p>
                      <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] mt-1 ">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:col-span-3 self-center">
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                      by{" "}
                      <span className="text-black dark:text-white">
                        {item.author}
                      </span>
                    </p>
                  </div>
                  <div className="hidden md:block md:col-span-3 self-center ml-auto">
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
