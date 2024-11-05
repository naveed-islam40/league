import React, { useEffect, useRef, useState } from "react";
import Navbar from "./component/navbar/navbar";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Table from "./component/manageUser/table";
import Footer from "./component/footer/footer";
import Link from "next/link";
import Bot from "../../public/assets/png/bot.png";
import Add from "./component/manageUser/add";
import MobileTable from "./component/manageUser/manageUserMobile";

export default function ManageUser() {
  const filterRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleClick = () => {
    setIsSearching(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target as Node)
    ) {
      setFilter(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]);

  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchActive, setSearchActive] = useState(false);

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0);
  };



  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} />
        </div>

        {!searchActive ? ( 
          <>
      <div className="md:w-[95%] 2xl:w-[70%] mx-auto">
      
        <div className="hidden md:flex gap-2 mt-5">
          <p className="nun font-semibold text-[#3076B1] text-[14px]">Admin</p>
          <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
          <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">Users</p>
        </div>

        <div className="lg:flex justify-between mt-5">
          <div className="flex gap-3 px-3 md:px-0">
            <button className="hidden md:flex gap-2 opacity-45 bg-white dark:bg-[#242424]  uppercase  p-[10px]  nun font-semibold text-[14px] text-[#7A7B7C]  dark:text-white border-[1px] border-[#D6D8E7] rounded-[6px]">
              <p className="self-center"> Mark as Inactive</p>
            </button>

            <div className=" relative self-center" ref={filterRef}>
              {isSearching ? (
                <div className="flex gap-2">
                  <button
                    onClick={() => setFilter(!filter)}
                    className="self-center flex gap-3 nun font-normal text-[#121F2C] dark:text-white text-[12px] bg-[#DEDEDE] dark:bg-[#242424] rounded-full py-[5px] px-[5px] md:px-[10px]"
                  >
                    First Name: nor
                    <Image
                      src={"/assets/svg/x-circle.svg"}
                      alt=""
                      width={18}
                      height={18}
                    />
                  </button>

                  <button
                    onClick={() => setFilter(!filter)}
                    className="self-center flex gap-3 nun font-normal text-[#121F2C] dark:text-white text-[12px] bg-[#DEDEDE] dark:bg-[#242424] rounded-full py-[5px] px-[5px] md:px-[10px]"
                  >
                    User status: Active or inactive
                    <Image
                      src={"/assets/svg/x-circle.svg"}
                      alt=""
                      width={18}
                      height={18}
                    />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleClick}
                  className="uppercase dark:bg-black flex gap-1 py-[12px] px-4 nun font-semibold text-[14px] text-[#7A7B7C] border-[1px] border-[#D6D8E7] rounded-[6px] bg-white"
                >
                  <Image
                    src={"/assets/svg/plus.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p className="self-center mt-[1px] dark:text-white">Add a filter</p>
                </button>


              )}

              {filter && (
                <div className="absolute right-0 mt-2 w-[200px] bg-white dark:bg-black dark:border-[1px] dark:border-white shadow-lg z-20">
                  <div className="nun font-normal text-[#121F2C] dark:text-white text-[12px] cursor-pointer border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2]  p-3">
                    First Name
                  </div>
                  <div className="nun font-normal text-[#121F2C] dark:hover:text-[#121f2c] dark:text-white text-[12px] cursor-pointer border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-3">
                    Last Name
                  </div>
                  <div className="nun font-normal text-[#121F2C] dark:hover:text-[#121f2c] dark:text-white text-[12px] cursor-pointer border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-3">
                    User Type
                  </div>
                  <div className="nun font-normal text-[#121F2C] dark:hover:text-[#121f2c] dark:text-white text-[12px] cursor-pointer border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-3">
                    User Role
                  </div>
                  <div className="nun font-normal text-[#121F2C] dark:hover:text-[#121f2c] dark:text-white text-[12px] cursor-pointer border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-3">
                    Product
                  </div>
                  <div className="nun font-normal text-[#121F2C] dark:hover:text-[#121f2c] dark:text-white text-[12px] cursor-pointer border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-3">
                    Status
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="flex justify-end gap-3 mt-5 lg:mt-0 px-3 md:px-0">
            <Add />
            <Link href={"/manage-role"}>
              <button className="hidden md:block font-semibold text-white  text-[14px] bg-[#3076B1] dark:bg-[#4a9fe7] hover:bg-[#18459D] rounded-[6px] p-[12px] h-full uppercase">
                manage roles
              </button>
              <button className="block md:hidden font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4a9fe7] hover:bg-[#18459D] rounded-[6px] py-[12px] px-[25px] md:p-[12px] h-full uppercase">
                view roles
              </button>
            </Link>
          </div>
        </div>

        <Table />
        <MobileTable/>
      </div>

      <Footer />
      </>
        ) : (
          <div className="w-full h-full flex justify-between px-3 mt-3 items-center">
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">All</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
                Infosight
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
                CU Policy Pro
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
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
