import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const options = [
  "Accounts",
  "ACH/Electronic Payments",
  "Advertising",
  "Bank Secrecy Act",
  "Bankruptcy & Collections",
  "Board Responsibilities",
  "Employment",
  "Field of Membership",
  "Investment",
  "Loans and Leasing",
];

export default function News() {
  // Initialize with 4 default options
  const [icon, setIcon] = useState(true);
  const [content, setContent] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "Accounts",
    "ACH/Electronic Payments",
    "Advertising",
    "Bank Secrecy Act",
  ]);

  const [accordionOpen, setAccordionOpen] = useState(false); // Accordion state

  const toggleAccordion = () => {
    setAccordionOpen((prevState) => !prevState); // Toggle accordion state
  };

  useEffect(() => {
    // Retrieve the stored selections from localStorage, if any
    const storedSelections = localStorage.getItem("selectedOptions");
    if (storedSelections) {
      setSelectedOptions(JSON.parse(storedSelections));
    }
  }, []);

  const handleClick = () => {
    setContent(!content);
  };

  const handleIcon = () => {
    setIcon(!icon);
  };

  const handleCheckboxChange = (option: string) => {
    let updatedSelections = [...selectedOptions];
    if (updatedSelections.includes(option)) {
      updatedSelections = updatedSelections.filter((item) => item !== option);
    } else {
      if (updatedSelections.length < 7) {
        updatedSelections.push(option);
      } else {
        alert("You can only select up to 7 options.");
      }
    }
    setSelectedOptions(updatedSelections);
    // Store the updated selections in localStorage
    localStorage.setItem("selectedOptions", JSON.stringify(updatedSelections));
  };

  return (
    <>
      <div className="bg-white dark:bg-black md:dark:border-[1px] md:dark:border-white md:rounded-[7px] p-[15px] md:drop-shadow-sm border-t-[1px] border-[#f2f2f2] md:border-transparent  md:mt-5">
        <div className="flex justify-between">
          <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px] xl:text-[18px]">
            Topics of Interest
          </p>
          <div className="flex gap-4">
            <div onClick={handleIcon} className="self-center">
              {content ? (
                <Image
                  onClick={handleClick}
                  src={"/assets/svg/bx-edit.svg"}
                  alt="Edit"
                  title="Edit"
                  width={24}
                  height={24}
                  className="self-center cursor-pointer"
                />
              ) : (
                <Image
                  onClick={handleClick}
                  src={"/assets/svg/check.svg"}
                  alt="Check"
                  title="Check"
                  width={24}
                  height={24}
                  className="self-center cursor-pointer"
                />
              )}
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
        </div>

        {/* Accordion for Mobile */}
        {accordionOpen && (
          <div className="md:hidden">
            <div className="mt-5">
              {content ? (
                <div>
                  <div className="md:flex gap-3">
                    <div className="grid grid-cols-3 gap-3">
                      {selectedOptions.map((selectedOption, index) => (
                        <div key={index}>
                          <button className="truncate w-full nun font-normal text-[#121F2C]  text-[12px] py-[10px] px-[12px]  bg-[#3076B112] dark:bg-white  rounded-[7px]">
                            {selectedOption}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="px-3 pb-5">
                  <p className="nun font-medium text-[#121212]  dark:text-white text-[16px]">
                    Click on main topic to see sub-topics
                  </p>
                  <p className="nun font-medium text-[#121212] text-[16px]">
                    ( Choose up to 7 )
                  </p>
                  <div>
                    {options.map((option, index) => (
                      <div className="flex gap-2 mt-4" key={index}>
                        <input
                          type="checkbox"
                          checked={selectedOptions.includes(option)}
                          onChange={() => handleCheckboxChange(option)}
                          className=""
                        />
                        <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                          {option}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Desktop View (always visible on larger screens) */}
        <div className="hidden md:block">
          <div className="mt-5">
            {content ? (
              <div>
                <div className="grid grid-cols-3 lg:grid-cols-3 gap-3">
                  {selectedOptions.map((selectedOption, index) => (
                    <div key={index}>
                      <Link href={"/cu-bcp"}>
                        <button className="truncate w-full  nun font-normal text-[#121F2C] text-[12px] py-[10px] px-[12px]  bg-[#3076B112] dark:bg-white rounded-[7px]">
                          {selectedOption}
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="px-3 pb-5">
                <p className="nun font-medium text-[#121212] dark:text-white text-[16px]">
                  Click on main topic to see sub-topics
                </p>
                <p className="nun font-medium text-[#121212] dark:text-white text-[16px]">
                  ( Choose up to 7 )
                </p>
                <div>
                  {options.map((option, index) => (
                    <div className="flex gap-2 mt-4" key={index}>
                      <input
                        type="checkbox"
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                        className=""
                      />
                      <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                        {option}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
