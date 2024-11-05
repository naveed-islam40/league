import React, { useState, useEffect, useRef } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Recoder from "./component/cu-policy/recorder";
import ChapterList from "./component/cu-policy/chapter-list";
import SelectContent from "./component/cu-policy/selectContent";
import SelectContent2 from "./component/cu-policy/selectContent2";
import SelectContent3 from "./component/cu-policy/selectContent3";
import Bot from "../../public/assets/png/bot.png";
import SelectContent4 from "./component/cu-policy/selectContent4";
import SelectContent5 from "./component/cu-policy/selectContent5";
import ListDel from "./component/cu-policy/listDel";
import axios from "axios";
import { toast } from "sonner";
import useFetch from "@/hooks/useFetch";

export default function CuPolicies() {
  const [inputValue, setInputValue] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [moreDropdownVisible, setMoreDropdownVisible] =
    useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const moreDropdownRef = useRef<HTMLDivElement | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [cuPolicesList, setCuPolicesList] = useState([]);


  useEffect(() => {
   
    const fetchingCuPolicesList = async () => {
      try {
        const response = await axios.get(
          `/api/cupolices`, 
         {withCredentials: true}
        );
        console.log("response",response)
        setCuPolicesList(response?.data?.data)
      } catch (error: any) {
        toast.error(error?.response?.data.message, {
          position: "top-center",
          style: {
            color: "red",
          },
        });
      }
    };
    fetchingCuPolicesList();
  }, []);



 
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  const toggleMoreDropdown = () => {
    setMoreDropdownVisible(!moreDropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
            <div className="bg-[#AD7EFB] p-[5px] -mt-1 md:-mt-[12px] xl:-mt-[10px] fixed w-full"></div>

            <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
              <Link
                href={"/cu-policy"}
                className="nun font-semibold text-[#3076B1] text-[14px]"
              >
                CU PolicyPro
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/cu-policies"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                CU Policies
              </Link>
            </div>

            <div className=" mt-8 md:w-[95%] 2xl:w-[70%] mx-auto mb-5 md:mt-0">
              <div className="flex justify-between mt-5">
                <div className="relative px-3 md:px-0 md:w-[40%]">
                  <input
                    type="text"
                    value={inputValue}
                    placeholder="Search CU Policies"
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

                  <div
                    className="relative group self-center"
                    // ref={moreDropdownRef}
                  >
                    <Image
                      src={"/assets/svg/bx-more.svg"}
                      alt=""
                      title="Option"
                      height={24}
                      width={24}
                      className="cursor-pointer group "
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
              <div className="">
                <ChapterList />
              </div>
            </div>
            <Footer />
          </>
        ) : (
          <div className="w-full h-full flex justify-between px-3 mt-3 items-center">
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                All
              </p>
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
