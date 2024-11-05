import React, { useEffect, useRef, useState } from "react";
import Navbar from "./component/navbar/navbar";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Details from "./component/cu-policy/detail";
import Bot from "../../public/assets/png/bot.png";

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

export default function InfoSight() {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState("California, CA");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const locationDropdownRef = useRef<HTMLDivElement>(null);
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
      <div className="bg-[#03E09E] p-[5px] -mt-1  md:-mt-[12px] xl:-mt-[10px] fixed w-full"></div>

      <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto ">
        <Link
          href={"/infoSight"}
          className="nun font-medium text-[#3076B1] text-[14px]"
        >
          InfoSight
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link
          href={"/compliance"}
          className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
        >
          Compliance Topics
        </Link>
      </div>

      <div className="md:flex gap-5 md:w-[95%] 2xl:w-[70%] mx-auto mb-20 mt-8">
        <div className="flex md:hidden ml-3 md:ml-0 gap-1">
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
                      placeholder="Search InfoSight"
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

        <div className="  mt-3 md:mt-0 md:w-[80%] bg-white dark:bg-black  md:rounded-[8px] p-[10px] px-0 md:p-[10px] pb-0 md:pb-[10px] shadow-sm h-full">
          <div className="relative   px-3 md:px-0">
            <input
              type="text"
              placeholder="Search InfoSight"
              value={inputValue}
              onChange={handleInputChange}
              className="bg-[#AEE6F566]  font-normal text-[16px] md:text-[14px] mt-[2px] rounded-[6px] py-[10px] px-[35px] w-full outline-none"
            />

            <Image
              src={"/assets/svg/bi_search.svg"}
              alt=""
              width={16}
              height={16}
              className="absolute  top-[14px] left-6 md:left-3"
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

          <div className="mt-3 ">
            {filteredItems.map((item, index) => (
              <Link
              href={'accountDetail'}
                key={index}
                className={`group flex dark:bg-[#242424] dark:mt-1 hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] cursor-pointer justify-between w-full px-3 md:px-0 ${
                  index !== filteredItems.length - 1 ? "border-b-[1px]" : ""
                } md:border-b-0 border-[#f2f2f2]`}
              >
                {item.link ? (
                  <Link href={item.link}>
                    <p className="font-normal text-[#3076B1] md:text-[#121F2C] group-hover:dark:text-white md:dark:text-white text-[14px] py-[12px] md:px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] rounded-[8px]">
                      {item.name}
                    </p>
                  </Link>
                ) : (
                  <p className="font-normal text-[#3076B1] md:text-[#121F2C] group-hover:dark:text-white md:dark:text-white text-[14px] py-[12px] md:px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] rounded-[8px]">
                    {item.name}
                  </p>
                )}

                <Image
                  src={"/assets/svg/detail.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="block md:hidden filter dark:invert"

                />
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:block md:w-[40%] xl:w-[20%]">
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
