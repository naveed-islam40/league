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
import Content from "./component/manageUser/shareContent";
import Assign from "./component/manageAssignment/assign";
import Details from "./component/cu-policy/detail";
import { Timeline } from "rsuite";
import Comp from "./component/cu-policy/compliane";
import Bot from "../../public/assets/png/bot.png";
import Cross from "../../public/assets/svg/cross.svg";

type AccordionItem = {
  index: number;
  title: string;
  content: string[];
  bgColor: string;
  border: string;
};

interface AccordionItems {
  title: string;
  content: string[];
}

const page = [
  "Accounts Introduction",
  "Definitions",
  "FAQs",
  "Additional Resources",
  "Checklists",
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

export default function Compliance() {
  const [isOpenDefinitions, setIsOpenDefinitions] = useState(true);
  const [isOpenFAQs, setIsOpenFAQs] = useState(true);
  const [isOpenResources, setIsOpenResources] = useState(true);
  const [isOpenChecklists, setIsOpenChecklists] = useState(true);
  const [activeSection, setActiveSection] = useState<string>(
    "accounts-introduction"
  ); // Set the first section as default active
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("California, CA");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const locationDropdownRef = useRef<HTMLDivElement>(null);
  const compDropdownRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [activeItem, setActiveItem] = useState("Accounts");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active
  const [showModal, setShowModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId); // Set active section to update font weight
    }
  };

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  // Handle checkbox change, allowing only two selections
  const handleCheckboxChange = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(
        selectedLocations.filter((item) => item !== location)
      );
    } else if (selectedLocations.length < 2) {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  // Handle the Apply button click
  const handleApplyClick = () => {
    if (selectedLocations.length > 2) {
      alert("You can only select up to two states.");
    } else {
      alert(`Selected locations: ${selectedLocations.join(", ")}`);
    }
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  const items = [
    { name: "Accounts", link: "/accountDetail" },
    { name: "ACH/Electronic Payments", link: "/accountDetail" },
    { name: "Bank Secrecy Act", link: "/accountDetail" },
    { name: "Bankruptcy and Collections", link: "/accountDetail" },
    { name: "Board Responsibilities", link: "/accountDetail" },
    { name: "Employment", link: "/accountDetail" },
    { name: "Field of Membership", link: "/accountDetail" },
    { name: "Investment", link: "/accountDetail" },
    { name: "Loans and Leasing", link: "/accountDetail" },
    { name: "Records Retention", link: "/accountDetail" },
    { name: "Security", link: "/accountDetail" },
    { name: "Tax Issues", link: "/accountDetail" },
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

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
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
            <div className="bg-[#03E09E] p-[5px] -mt-1 md:-mt-[12px] xl:-mt-[10px] fixed w-full"></div>

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
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/compliance"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                Account Introduction
              </Link>
            </div>

            <div className="flex md:hidden justify-between mx-3 mt-8">
              <Link
                href={"/accountDetail"}
                className="  nun font-semibold text-[#121212] dark:text-white text-[14px] flex gap-2"
              >
                <Image
                  src={"/assets/svg/arrow-left.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
                Back
              </Link>
              <Content />
            </div>
            <div className="md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto  mb-20">
          
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

              <div className="md:w-[65%] lg:w-[60%] md:px-5 lg:h-screen lg:pb-64 md:overflow-y-scroll ">
                <div className="flex justify-between border-b-[1px] border-[#CCCCCC] pb-3">
                  <div className="flex gap-1">
                    <p className="font-normal text-[#121212] dark:text-white text-[13px] self-center">
                      {selectedLocation}
                    </p>
                    <div className="relative" ref={locationDropdownRef}>
                      <p
                        onClick={toggleDropdown}
                        className="cursor-pointer mt-1 flex gap-1 font-normal text-[11px] text-[#3076B1] self-center"
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
                              <p className="self-center nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                                {location}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="hidden md:flex gap-5">
                    <div className="relative flex gap-4" ref={compDropdownRef}>
                      {/* Show the message or selected locations */}
                      {/* <div className="self-center">
                        {selectedLocations.length < 2 ? (
                          <p className="nun font-normal text-[#121212] dark:text-white text-[13px] px-2">
                            Please select two states to compare content for this
                            topic
                          </p>
                        ) : (
                          <p className="nun font-normal text-[#121212] dark:text-white text-[13px]">
                            {selectedLocations.join(", ")}
                          </p>
                        )}
                      </div> */}

                      {/* Dropdown toggle button */}
                      <Image
                        src={"/assets/svg/comp.svg"}
                        alt=""
                        title="Compare State Content"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                        onClick={handleDropdownToggle}
                      />

                      {isDropdownOpen && (
                        <div className="absolute top-5 right-0 z-0 mt-2 border-[1px] border-[#E2E2E2] bg-white dark:bg-black w-[230px] shadow-sm">
                          {/* Location checkboxes */}
                         
                         <div className="py-3">
                          {selectedLocations.length < 2 ? (
                          <p className="nun font-normal text-[#121212] dark:text-white text-[13px] px-2">
                            Please select two states to compare content for this
                            topic
                          </p>
                        ) : (
                          <p className="nun font-normal text-[#121212] dark:text-white text-[13px] px-3">
                            {selectedLocations.join(", ")}
                          </p>
                        )}
                        </div>
                         

                         
                          {locations.map((location) => (
                            <div
                              key={location}
                              className={`flex gap-2 border-b-[1px] border-[#F5F5F5] p-2 cursor-pointer hover:bg-[#f5f5f5] ${
                                selectedLocations.includes(location)
                                  ? "bg-[#f5f5f5]"
                                  : ""
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={selectedLocations.includes(location)}
                                onChange={() => handleCheckboxChange(location)}
                              />
                              <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                                {location}
                              </p>
                            </div>
                          ))}

                          {/* Apply button */}
                          <Link href={"/comparision"}>
                            <button
                              className="mx-2 my-3 ml-auto block font-semibold text-[14px] text-white bg-[#3076B1] dark:bg-[#4A9FE7] rounded-[6px] px-[15px] py-[8px] uppercase"
                              onClick={handleApplyClick}
                            >
                              Apply
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>

                    <Content />

                    <Assign />
                    <Comp />
                  </div>
                </div>

                <div id="accounts-introduction" className="mt-3">
                  <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px]">
                    Accounts Introduction
                  </p>
                  <p className="nun font-normal text-[#8F8E8E] text-[12px]">
                    Last Reviewed: September 2023
                  </p>
                  <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
                    State law dealing with deposit accounts takes two forms.
                    Statutes that govern how certain deposits work and what
                    contract terms are and are not enforceable; and basic
                    contract law which covers the contract existing between the
                    credit union and its depositors.
                  </p>
                </div>

                <div className="mt-8">
                  {/* Definitions Section */}
                  <div
                    id="definitions"
                    className="bg-white dark:bg-black dark:border-[1px] rounded-[4px] p-4 mt-3"
                  >
                    <div
                      className="flex justify-between cursor-pointer border-b-[1px] border-[#D8D8D8] pb-3"
                      onClick={() => setIsOpenDefinitions(!isOpenDefinitions)}
                    >
                      <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px]">
                        Definitions
                      </p>
                      {isOpenDefinitions ? (
                        <IoIosArrowUp className="text-[20px] text-[#121F2C] dark:text-white" />
                      ) : (
                        <IoIosArrowDown className="text-[20px] text-[#121F2C] dark:text-white" />
                      )}
                    </div>
                    {isOpenDefinitions && (
                      <div className="pt-3">
                        <li className="nun font-normal text-[12px] text-[#3076B1] mt-2">
                          Customer Identification Program
                        </li>
                        <li className="nun font-normal text-[12px] text-[#3076B1] mt-2">
                          Member Due Diligence
                        </li>
                      </div>
                    )}
                  </div>

                  {/* FAQs Section */}
                  <div
                    id="faqs"
                    className="bg-white dark:bg-black dark:border-[1px] rounded-[4px] p-4 mt-3"
                  >
                    <div
                      className="flex justify-between cursor-pointer border-b-[1px] border-[#D8D8D8] pb-3"
                      onClick={() => setIsOpenFAQs(!isOpenFAQs)}
                    >
                      <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px]">
                        FAQs
                      </p>
                      {isOpenFAQs ? (
                        <IoIosArrowUp className="text-[20px] text-[#121F2C] dark:text-white" />
                      ) : (
                        <IoIosArrowDown className="text-[20px] text-[#121F2C] dark:text-white" />
                      )}
                    </div>
                    {isOpenFAQs && (
                      <div className="pt-3">
                        <li className="nun font-normal text-[12px] text-[#3076B1] mt-2">
                          Customer Identification Program
                        </li>
                        <li className="nun font-normal text-[12px] text-[#3076B1] mt-2">
                          Member Due Diligence
                        </li>
                      </div>
                    )}
                  </div>

                  {/* Additional Resources Section */}
                  <div
                    id="additional-resources"
                    className="bg-white dark:bg-black dark:border-[1px] rounded-[4px] p-4 mt-3"
                  >
                    <div
                      className="flex justify-between cursor-pointer border-b-[1px] border-[#D8D8D8] pb-3"
                      onClick={() => setIsOpenResources(!isOpenResources)}
                    >
                      <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px]">
                        Additional Resources
                      </p>
                      {isOpenResources ? (
                        <IoIosArrowUp className="text-[20px] text-[#121F2C] dark:text-white" />
                      ) : (
                        <IoIosArrowDown className="text-[20px] text-[#121F2C] dark:text-white" />
                      )}
                    </div>
                    {isOpenResources && (
                      <div className="pt-3">
                        <li className="nun font-normal text-[12px] text-[#3076B1] mt-2">
                          Customer Identification Program
                        </li>
                        <li className="nun font-normal text-[12px] text-[#3076B1] mt-2">
                          Member Due Diligence
                        </li>
                      </div>
                    )}
                  </div>

                  {/* Checklists Section */}
                  <div
                    id="checklists"
                    className="bg-white dark:bg-black dark:border-[1px] rounded-[4px] p-4 mt-3"
                  >
                    <div
                      className="flex justify-between cursor-pointer border-b-[1px] border-[#D8D8D8] pb-3"
                      onClick={() => setIsOpenChecklists(!isOpenChecklists)}
                    >
                      <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px]">
                        Checklists
                      </p>
                      {isOpenChecklists ? (
                        <IoIosArrowUp className="text-[20px] text-[#121F2C] dark:text-white" />
                      ) : (
                        <IoIosArrowDown className="text-[20px] text-[#121F2C] dark:text-white" />
                      )}
                    </div>
                    {isOpenChecklists && (
                      <div className="pt-3">
                        <li className="nun font-normal text-[12px] text-[#3076B1] mt-2">
                          Customer Identification Program
                        </li>
                        <li className="nun font-normal text-[12px] text-[#3076B1] mt-2">
                          Member Due Diligence
                        </li>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-5 flex gap-2">
                  <p className="self-center mt-1 nun font-normal dark:text-white text-[12px]">
                    Have questions? Try our{" "}
                    <span className="text-[#3076B1]">
                      <Link href={"/chat"}>InfoSight360AI</Link>
                    </span>{" "}
                    Bot! Still have questions?
                  </p>

                  <div className="flex gap-3 ">
                  
                    <Image
                      src={"/assets/svg/like.svg"}
                      alt=""
                      width={20}
                      height={20}
                      className={`cursor-pointer w-[15px] h-[15px] md:w-[20px] md:h-[20px] ${
                        isClicked ? "filter-active" : ""
                      }`}
                      onClick={handleClick}
                      style={{
                        filter: isClicked
                          ? "invert(28%) sepia(73%) saturate(2454%) hue-rotate(179deg) brightness(92%) contrast(98%)"
                          : "none",
                      }}
                    />
                    <Image
                      onClick={() => setShowModal(true)}
                      src={"/assets/svg/dislike.svg"}
                      alt=""
                      width={20}
                      height={20}
                      className="cursor-pointer w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
                    />
                  </div>
                </div>
              </div>

              <div className="hidden lg:block w-[25%] xl:w-[20%] ">
                <div className="p-[15px] pb-0">
                  <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px]">
                    On This Page
                  </p>

                  {/* Scrollable sections list */}
                  <ol className="relative border-s  border-[#D9D9D9] dark:border-gray-700 pb-5">
                    {page.map((sectionTitle) => {
                      const sectionId = sectionTitle
                        .replace(/\s+/g, "-")
                        .toLowerCase(); // Ensure valid kebab-case section IDs
                      const isActive = activeSection === sectionId; // Check if the section is active

                      return (
                        <li key={sectionTitle} className="mt-5 mb-0 ms-4">
                          <span className="absolute -z-10 flex items-center justify-center w-6 h-auto rounded-full -start-3 ring-8 ring-transparent ">
                            <Image
                              src={"/assets/svg/tl.svg"}
                              alt=""
                              width={12}
                              height={12}
                            />
                          </span>
                          <div
                            className={`flex items-center mb-2 ${
                              isActive
                                ? "font-semibold text-[14px]"
                                : "font-normal text-[12px]"
                            } text-[#121F2C] dark:text-white`}
                          >
                            <p
                              onClick={() => scrollToSection(sectionId)}
                              className={`-mt-[2px] cursor-pointer ${
                                isActive
                                  ? "font-semibold text-[14px]"
                                  : "font-normal text-[12px]"
                              }`}
                            >
                              {sectionTitle}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
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

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[90%] md:w-[60%] xl:w-[40%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-black  outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex justify-between">
                    <p className="self-center nun font-bold text-[#14142B] dark:text-white text-[16px] md:text-[20px]">
                      We Value Your Feedback!
                    </p>
                    <Image
                      onClick={() => setShowModal(false)}
                      className="cursor-pointer"
                      src={Cross}
                      alt=""
                    />
                  </div>
                  <p className="nun font-normal text-[#14142B] dark:text-white text-[12px] md:text-[15px] mt-3">
                    Please share your thoughts to help us improve our content.
                  </p>
                  <textarea className="h-[200px] border-[1px] border-[#D9D9D9] bg-white dark:bg-black p-2 w-full rounded-[5px] mt-2"></textarea>

                  <div className="flex items-center justify-end  mt-5">
                    <button
                      className="text-[#3076B1] background-transparent font-semibold  px-6 py-2 text-[12px] md:text-[14px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Skip
                    </button>
                    <button
                      className="bg-[#3076B1] hover:bg-[#18459D] text-white active:bg-emerald-600 font-semibold uppercase text-[12px] md:text-sm px-4 py-4 rounded-[6px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
