import React, { useEffect, useRef, useState } from "react";
import Navbar from "./component/navbar/navbar";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Month from "./component/calendar/month";
import Footer from "./component/footer/footer";
import ToDo from "./component/calendar/to-do";
import Link from "next/link";
import MobileCalandar from "./component/calendar/mobileCalandar";
import Bot from "../../public/assets/png/bot.png";
import PrintModal from "./component/cu-policy/PrintModal";
import Print from "./component/editPolicy/print";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function EventCalendar() {
  const filterRef = useRef<HTMLDivElement>(null);
  const sponsRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState(false);
  const [spons, setSpons] = useState(false);
  const currentMonthIndex = new Date().getMonth();
  const [content, setContent] = useState(true);
  const [icon, setIcon] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("April");


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectMonth = (month: any) => {
    setSelectedMonth(month);
    setIsOpen(false); // Close the dropdown after selection
  };

  const handleClick = () => {
    setContent(!content);
  };

  const handleIcon = () => {
    setIcon(!icon);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target as Node)
    ) {
      setFilter(false);
    }
    if (sponsRef.current && !sponsRef.current.contains(event.target as Node)) {
      setSpons(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef, sponsRef]);

  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
            <div className="bg-white dark:bg-black block md:hidden pt-5 pb-3 px-3 md:px-0">
              <div className="self-center  nun font-semibold text-[#121212] dark:text-white text-[14px] flex gap-2">
                <Image
                  src={"/assets/svg/arrow-left.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
                Back
              </div>
            </div>

            <div className=" md:flex gap-16 md:w-[95%] 2xl:w-[70%] mx-auto mb-5">
              <div className="w-full lg:w-[80%]">
                <div className="border-t-[2px] md:border-t-0 border-[#f2f2f2] pt-3 md:pt-0 py-4 md:py-0">
                  <div className="hidden md:flex gap-2 mt-5">
                    <p className="nun font-semibold text-[#3076B1] text-[14px]">
                      Resources
                    </p>
                    <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
                    <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
                      Compliance Calendar
                    </p>
                  </div>

                  <div className="flex md:hidden justify-between px-3">
                    <p className="font-semibold text-[#121F2C] dark:text-white text-[16px]">
                      Calendar
                    </p>
                    <div className="relative">
                      <div
                        className="flex gap-1 cursor-pointer"
                        onClick={toggleDropdown}
                      >
                        <p className="font-[400] text-[14px] text-[#3076B1]">
                          {selectedMonth}
                        </p>
                        <IoIosArrowDown className="text-[16px] self-center text-[#292D32]" />
                      </div>
                      {isOpen && (
                        <div className="absolute right-0 top-full mt-1 bg-white dark:bg-black border rounded-md shadow-lg">
                          <ul className="list-none">
                            {months.map((month) => (
                              <li
                                key={month}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer dark:text-white"
                                onClick={() => selectMonth(month)}
                              >
                                {month}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-5 flex justify-between px-3 md:px-0">
                    <div className="relative" ref={filterRef}>
                      <button
                        onClick={() => setFilter(!filter)}
                        className="uppercase flex gap-1 py-[12px] px-4 nun font-semibold text-[14px] text-[#7A7B7C] border-[1px] border-[#D6D8E7] rounded-[10px] bg-white"
                      >
                        <Image
                          src={"/assets/svg/plus.svg"}
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="self-center mt-[1px]">Add a filter</p>
                      </button>

                      {filter && (
                        <div className="absolute left-0 mt-2 w-[200px] bg-white shadow-lg z-20">
                          <div className="nun font-normal text-[#121F2C] text-[12px] cursor-pointer border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2]  p-3">
                            Training Sessions
                          </div>
                          <div className="nun font-normal text-[#121F2C] text-[12px] cursor-pointer border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-3">
                            League Events
                          </div>
                          <div className="nun font-normal text-[#121F2C] text-[12px] cursor-pointer border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-3">
                            Compliance Effective Date
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-5 self-center">
                      <div onClick={handleIcon}>
                        {icon ? (
                          <Image
                            onClick={handleClick}
                            src={"/assets/svg/bx-icon.svg"}
                            alt=""
                            title="List View"
                            width={24}
                            height={24}
                            className="cursor-pointer -mt-[2px]"
                          />
                        ) : (
                          <Image
                            onClick={handleClick}
                            src={"/assets/svg/calendar.svg"}
                            alt=""
                            title="Calendar View"
                            width={24}
                            height={24}
                            className="cursor-pointer -mt-[2px]"
                          />
                        )}
                      </div>
                      <div className="relative hidden md:block" ref={sponsRef}>
                        <Image
                          onClick={() => setSpons(!spons)}
                          src={"/assets/svg/bx-icon2.svg"}
                          alt=""
                          title="Add to my calendar"
                          width={24}
                          height={24}
                          className="cursor-pointer hidden md:block"
                        />
                        {spons && (
                          <div className="absolute right-0 mt-2 w-[200px] bg-white  shadow-lg z-20">
                            <p className="font-medium text-[#121212] text-[14px] p-3 pb-0">
                              Select your Calendar
                            </p>
                            <div className="mt-1 cursor-pointer flex gap-3  nun font-normal text-[#121F2C] text-[14px] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-3">
                              <Image
                                src={"/assets/svg/bx-apple.svg"}
                                alt=""
                                width={24}
                                height={24}
                              />
                              <p className="self-center"> Apple</p>
                            </div>
                            <div className="cursor-pointer flex gap-3 nun font-normal text-[#121F2C] text-[14px] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-3">
                              <Image
                                src={"/assets/svg/bx-google.svg"}
                                alt=""
                                width={24}
                                height={24}
                              />
                              <p className="self-center"> Google</p>
                            </div>
                            <div className="cursor-pointer flex gap-3 nun font-normal text-[#121F2C] text-[14px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-3">
                              <Image
                                src={"/assets/svg/bx-out.svg"}
                                alt=""
                                width={24}
                                height={24}
                              />
                              <p className="self-center"> Outlook</p>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* <Image
                  src={"/assets/svg/bx-icon3.svg"}
                  alt=""
                  title="Print"
                  width={24}
                  height={24}
                  className="cursor-pointer hidden md:block"
                /> */}
                      <div className="cursor-pointer hidden md:block">
                        <Print />
                      </div>
                    </div>
                  </div>
                </div>

                {content ? (
                  <div>
                    {" "}
                    <Month /> <MobileCalandar />{" "}
                  </div>
                ) : (
                  <ToDo />
                )}

                {/* <ToDo /> */}
              </div>

              <div className="hidden lg:block w-[20%] mt-16">
                <p className="nun font-normal text-[#3076B1] text-[16px]">
                  2023
                </p>
                <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px] mt-5">
                  Current Year (2024)
                </p>

                {content && (
                  <ol className="relative border-s border-[#D9D9D9] dark:border-gray-700 pb-5">
                    {months.map((month, index) => (
                      <li key={month} className="mt-5 mb-0 ms-4">
                        <span className="absolute flex items-center justify-center w-6 h-auto rounded-full -start-3 ring-8 ring-transparent">
                          <Image
                            src={"/assets/svg/tl.svg"}
                            alt=""
                            width={12}
                            height={12}
                            // Apply the img-blue class conditionally
                            className={
                              index === currentMonthIndex ? "img-blue" : ""
                            }
                          />
                        </span>
                        <div
                          // Change the text color if it's the current month
                          className={`flex items-center mb-2 font-normal text-[12px] ${
                            index === currentMonthIndex
                              ? "text-[#3076B1] font-semibold"
                              : "text-[#121F2C] dark:text-white"
                          }`}
                        >
                          <p className="-mt-[2px]">{month}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
                <p className="nun font-normal text-[#3076B1] text-[14px] mt-5">
                  2025
                </p>
                <p className="nun font-normal text-[#3076B1] text-[14px] mt-5">
                  2026
                </p>
                <Link href={"/reminder"}>
                  <p className="nun font-normal text-[#3076B1] text-[14px] mt-5">
                    Other Important Reminders <br /> and Information
                  </p>
                </Link>
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
