import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// Functional component definition for the SearchField component
export default function SearchFelid() {
  // Dropdown menu items
  const dropdownItems = ["All", "InfoSight", "CU PolicyPro", "RecoveryPro"];

  // State for managing the input field value
  const [inputValue, setInputValue] = useState<string>("");

  // State for managing search suggestions
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // State for managing dropdown menu visibility
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // Reference to the dropdown menu element
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Function to clear the input field
  const clearInput = () => {
    setInputValue("");
  };

  // Function to handle input changes and update suggestions
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);

    // Update suggestions based on input value
    if (value) {
      setSuggestions([`${value}`, ` ${value}`, ` ${value}`]);
    } else {
      setSuggestions([]);
    }
  };

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Prevent checkbox click from triggering dropdown close
  const handleCheckboxClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  // Close the dropdown if clicked outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  // Effect to handle clicks outside the dropdown menu to close it
  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <>
      <form>
        <div className="grid grid-cols-12 bg-[#AEE6F566] dark:bg-white rounded-[6px] px-[15px] gap-2 ">
          <div className="col-span-12 md:col-span-8 flex gap-2 self-center">
            <Image
              src={"/assets/svg/fil_search.svg"}
              alt=""
              width={16}
              height={16}
            />
            <input
              required
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type keyword or phrases or ask a question"
              className="nun h-[50px] w-[100%] font-normal text-[14px] text-[#121F2C] placeholder-[#121F2C] bg-transparent outline-none"
            />
            {inputValue && (
              <Image
                src={"/assets/svg/x-circle.svg"}
                alt="clear-icon"
                width={24}
                height={24}
                className=" cursor-pointer"
                onClick={clearInput}
              />
            )}
          </div>

          <div
            ref={dropdownRef}
            className="border-l-[2px] h-[30px] self-center md:border-[#8F8F8F] col-span-5  md:col-span-2 hidden md:flex justify-between"
            onClick={toggleDropdown}
          >
            <p className="nun font-normal text-[#121F2C] text-[14px] self-center ml-5">
              in All
            </p>
            <IoIosArrowDown className="text-[#8F8F8F] text-[15px] self-center cursor-pointer" />
            {dropdownOpen && (
              <ul className="absolute z-20 w-[20%] lg:w-[15%] xl:w-[11%] bg-white -ml-2 mt-10 shadow-sm">
                {dropdownItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-2 nun font-normal text-[#121F2C] text-[14px] py-[8px] px-[16px] border-b-[1px] border-[#F5F5F5] hover:bg-[#F5F5F5] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      required
                      className="self-center"
                      onClick={handleCheckboxClick}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="hidden md:block md:col-span-2 py-[8px]">
            <Link href={"/searchResult"}>
              <button
                type="submit"
                className="w-[90%] block ml-auto uppercase font-semibold text-white text-[12px] md:text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] py-4"
              >
                search
              </button>
            </Link>
          </div>
        </div>

        {suggestions.length > 0 && (
          <div className="absolute w-[90%] md:w-[71%] grid grid-cols-12 bg-white  mt-2 shadow-sm">
            <div className="col-span-12">
              <ul className="w-full">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="flex gap-2 nun font-semibold text-[#3E4451] text-[14px]  py-[8px] px-[16px] border-b-[1px] border-[#F5F5F5] hover:bg-[#F5F5F5] cursor-pointer"
                  >
                    <Image
                      src={
                        index === suggestions.length - 1
                          ? "/assets/svg/magni.svg"
                          : "/assets/svg/history.svg"
                      }
                      alt=""
                      width={20}
                      height={20}
                    />
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </form>
      <div className="py-[8px] block md:hidden">
        <Link href={"/searchResult"}>
          <button
            type="submit"
            className="mt-2 w-[100%] block  ml-auto uppercase font-semibold text-white text-[12px] md:text-[14px] bg-[#3076B1] hover:bg-[#18459D] rounded-[6px] py-4"
          >
            search
          </button>
        </Link>
      </div>
    </>
  );
}
