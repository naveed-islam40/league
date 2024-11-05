import React, { useEffect, useRef, useState } from "react";
import Navbar from "./component/navbar/navbar";
import {
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";

import Link from "next/link";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Details from "./component/cu-policy/detail";
import StateModel from "./component/cu-policy/stateModel";
import Bot from "../../public/assets/png/bot.png";

interface AccordionItems {
  title: string;
  content: string[];
}

const accordionDatas: AccordionItems[] = [
  {
    title: "Accounts Introduction",
    content: ["Customer Identification Program", "Member Due Diligence"],
  },
  {
    title: "Account Types and Ownership",
    content: ["Customer Identification Program", "Member Due Diligence"],
  },
  {
    title: "Backup Withholding",
    content: ["Customer Identification Program", "Member Due Diligence"],
  },
  {
    title: "Charitable  Donation Accounts",
    content: ["Customer Identification Program", "Member Due Diligence"],
  },
  {
    title: "Check 21",
    content: ["Customer Identification Program", "Member Due Diligence"],
  },
  {
    title: "Check and Share Draft Laws/UCC Articles 3 and 4",
    content: ["Customer Identification Program", "Member Due Diligence"],
  },
  {
    title: "Deceased Member  Issues",
    content: ["Customer Identification Program", "Member Due Diligence"],
  },
  {
    title: "Electronic Fund Transfers - Regulation E",
    content: ["Customer Identification Program", "Member Due Diligence"],
  },
  {
    title: "Expedited Funds Availability - Regulation CC",
    content: ["Customer Identification Program", "Member Due Diligence"],
  },
  {
    title: "Fiduciary Accounts",
    content: ["Customer Identification Program", "Member Due Diligence"],
  },
  {
    title: "Garnishment of Federal Benefit Payments",
    content: ["Customer Identification Program", "Member Due Diligence"],
  },
];

const locations = [
  "California, CA",
  "Alabama, AL",
  "Alaska, AK",
  "Arizona, AZ",
  "Arkansas, AR",
  "Colorado, CO",
  "Connecticut, CT",
  "Delaware, DE",
  "Florida, FL",
  "Georgia, GA",
  "Hawaii, HI",
  "Idaho, ID",
  "Illinois, IL",
];

export default function AccountDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("California, CA");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const locationDropdownRef = useRef<HTMLDivElement>(null);
  const compDropdownRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [activeItem, setActiveItem] = useState("Accounts");
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  const items = [
    { name: "Accounts", link: "/accountDetail" },
    { name: "ACH/Electronic Payments" },
    { name: "Bank Secrecy Act" },
    { name: "Bankruptcy and Collections" },
    { name: "Board Responsibilities" },
    { name: "Employment" },
    { name: "Field of Membership" },
    { name: "Investment" },
    { name: "Loans and Leasing" },
    { name: "Records Retention" },
    { name: "Security" },
    { name: "Tax Issues" },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      locationDropdownRef.current &&
      !locationDropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
    if (
      compDropdownRef.current &&
      !compDropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen || isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, isDropdownOpen]);

  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
            <div className="bg-[#03E09E] p-[5px] mt-2 md:-mt-[12px] xl:-mt-[10px] fixed w-full"></div>

            <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
              <Link
                href={"/infoSight"}
                className="nun font-semibold text-[#3076B1] text-[14px]"
              >
                InfoSight
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/compliance"}
                className="nun font-semibold text-[#3076B1] text-[14px]"
              >
                Compliance Topics
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/compliance"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                Accounts
              </Link>
            </div>

            <Link
              href={"/infoSight"}
              className="md:hidden ml-3 mt-8 nun font-semibold text-[#121212] dark:text-white text-[14px] flex gap-2"
            >
              <Image
                src={"/assets/svg/arrow-left.svg"}
                alt=""
                width={24}
                height={24}
              />
              Accounts
            </Link>

            <div className="md:flex gap-2 mt-5 md:w-[95%] 2xl:w-[70%] mx-auto mb-5">
              <div className="hidden md:block w-[35%] lg:w-[25%] xl:w-[20%] bg-white dark:bg-black  rounded-[8px] p-[10px] shadow-sm h-full">
                <div className="relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Search InfoSight"
                    className="bg-[#AEE6F566] text-[14px] mt-[2px] self-center rounded-[6px] py-[10px] px-[35px] w-full outline-none"
                  />

                  <Image
                    src={"/assets/svg/bi_search.svg"}
                    alt=""
                    width={16}
                    height={16}
                    className="absolute top-[14px] left-3"
                  />
                  {inputValue && (
                    <Image
                      src={"/assets/svg/x-circle.svg"}
                      alt="clear-icon"
                      width={24}
                      height={24}
                      className="absolute top-[10px] right-3 cursor-pointer"
                      onClick={clearInput}
                    />
                  )}
                </div>
                <div className="mt-3">
                  {/* Apply the filtering logic */}
                  {items.filter((item) =>
                    item.name.toLowerCase().includes(inputValue.toLowerCase())
                  ).length > 0 ? (
                    items
                      .filter((item) =>
                        item.name
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                      )
                      .map((filteredItem, index) => (
                        <div key={index}>
                          <Link href={filteredItem.link || "#"}>
                            <p
                              className={`font-normal text-[#121F2C]    text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42]  rounded-[8px] ${
                                activeItem === filteredItem.name
                                  ? "bg-[#eaf1f7] dark:bg-[#0F2B42] dark:text-white"
                                  : "dark:bg-[#242424] dark:mt-1 dark:text-white dark:hover:text-white"
                              }`}
                              onClick={() => setActiveItem(filteredItem.name)}
                            >
                              {filteredItem.name}
                            </p>
                          </Link>
                        </div>
                      ))
                  ) : (
                    // 'No results found' displayed if the filter returns no matches
                    <p className="text-[#121F2C] dark:text-white text-[14px] py-[12px] px-[16px]">
                      No results found
                    </p>
                  )}
                </div>
              </div>

              <div className="md:w-[65%] lg:w-[60%] md:px-5">
                <div className="flex ml-3 md:ml-0 gap-1">
                  <p className="font-normal text-[#121212] dark:text-white text-[13px] self-center">
                    {selectedLocation}
                  </p>
                  <div className="relative" ref={locationDropdownRef}>
                    <p
                      onClick={toggleDropdown}
                      className="cursor-pointer mt-[2px] flex gap-1 font-normal text-[11px] text-[#3076B1] self-center"
                    >
                      Change
                      <IoIosArrowDown className="text-[#121212] dark:text-white text-[10px] self-center cursor-pointer" />
                    </p>

                    {isOpen && (
                      <div className="absolute mt-2 border-[1px] border-[#E2E2E2] bg-white dark:bg-black w-[230px] shadow-sm">
                        {locations.map((location) => (
                          <div
                            key={location}
                            className=" flex gap-2 border-b-[1px] border-[#F5F5F5] p-2 cursor-pointer"
                            onClick={() => handleLocationChange(location)}
                          >
                            <input
                              type="radio"
                              checked={selectedLocation === location}
                              readOnly
                            />
                            <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
                              {location}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-3">
                  <div className="mt-3">
                    {accordionDatas.map((item, index) => (
                      <Link 
                      key={index}
                      
                      href={"/compliance"}>
                        <div
                          key={index}
                          className="bg-white dark:bg-black hover:bg-[#eeeeee] border-b-[1px] dark:border-[1px] border-[#f2f2f2]  md:rounded-[4px] p-4 md:mt-3"
                        >
                          <div className="flex justify-between cursor-pointer">
                            <Link
                              key={index}
                              href={"/compliance"}
                              className="self-center"
                            >
                              <p className="nun font-semibold text-[#3076B1] text-[14px] self-center">
                                {item.title}
                              </p>
                            </Link>

                            {/* Show the flex div only for the first four indices */}
                            {/* <div className="">
                              {index < 5 && <StateModel />}

                            </div> */}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden lg:block w-[25%] xl:w-[20%]">
                <Details />
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
            className="fixed right-5 bottom-5 w-[82px] h-[87px] cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
