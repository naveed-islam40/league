import React, { useState, useEffect, useRef } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Recoder from "./component/cu-policy/recorder";
import DelectPolicy from "./component/cu-policy/delect-policy";
import RecoverList from "./component/cu-policy/recover-list";
import SelectContent from "./component/cu-policy/selectContent";
import Bot from "../../public/assets/png/bot.png";
import SelectContent2 from "./component/cu-policy/selectContent2";
import SelectContent3 from "./component/cu-policy/selectContent3";
import SelectContent4 from "./component/cu-policy/selectContent4";
import SelectContent5 from "./component/cu-policy/selectContent5";
import ListDel from "./component/cu-policy/listDel";

export default function CuPolicies() {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");
  const [moreDropdownVisible, setMoreDropdownVisible] =
    useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const moreDropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMoreDropdown = () => {
    setMoreDropdownVisible(!moreDropdownVisible);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
    if (
      moreDropdownRef.current &&
      !moreDropdownRef.current.contains(event.target as Node)
    ) {
      setMoreDropdownVisible(false);
    }
  };

  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
            <div className="bg-[#FFDF36] p-[5px] -mt-1 md:-mt-[12px] xl:-mt-[10px] fixed w-full"></div>

            <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
              <Link
                href={"/cu-bcp"}
                className="nun font-semibold text-[#3076B1] text-[14px]"
              >
                RecoveryPro
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/cu-bcp"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                CU BCP
              </Link>
            </div>

            <div className="mt-8 md:mt-5 md:w-[95%] 2xl:w-[70%] mx-auto mb-5">
              <div className="flex justify-between mt-5">
                <div className="relative px-3 md:px-0 md:w-[40%]">
                  <input
                    type="text"
                    placeholder="Search CU BCP"

                    value={inputValue}
                    onChange={handleInputChange}
                    className="bg-[#AEE6F566] mt-[2px] font-normal text-[16px] md:text-[14px] rounded-[6px] py-[10px] px-[35px] w-full outline-none"
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

                <div className="flex justify-end gap-5 px-3 md:px-0">
                  <Recoder />
                  {/* <DelectPolicy /> */}

                  <div className="relative group  self-center" >
                  {/* // ref={moreDropdownRef}> */}
                    <Image
                      src={"/assets/svg/bx-more.svg"}
                      alt=""
                      title="Option"
                      height={24}
                      width={24}
                      className="cursor-pointer group ml-auto"
                      // onClick={toggleMoreDropdown}
                    />

                    {/* {moreDropdownVisible && ( */}
                    <div className="absolute right-0 mt-0 w-[330px] hidden group-hover:block bg-white dark:bg-black  dark:border-[1px] shadow-lg ">
                        <SelectContent />
                        <SelectContent2 />
                        <SelectContent4 />
                        <SelectContent5 />
                        <SelectContent3 />

                        <ListDel />
                      </div>
                    {/* )} */}
                  </div>
                </div>
              </div>

              <RecoverList />
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
            className="fixed  right-5 bottom-5 w-[82px] h-[87px] cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
