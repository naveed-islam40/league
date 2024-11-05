import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Tables from "./component/manageAssignment/table";
import AddAssignment from "./component/manageAssignment/addAssignment";
import Footer from "./component/footer/footer";
import Bot from "../../public/assets/png/bot.png";

export default function ManageAssignments() {
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
      <div className="hidden md:flex gap-2 mt-5  w-[95%] 2xl:w-[70%] mx-auto">
        <Link
          href={"/"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          Admin
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link href={"/"} className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
          Assignments
        </Link>
      </div>
      <div className=" md:w-[95%] 2xl:w-[70%] mb-5 mx-auto">
        <div className="mt-5 lg:flex justify-between">
          <div className="md:flex gap-2 mx-3 md:mx-0">
            <AddAssignment />

            <div className="flex gap-2">
              <button className="self-center flex gap-3 nun font-normal text-[#121F2C] dark:text-white text-[12px] bg-[#DEDEDE] dark:bg-[#212121] rounded-full py-[5px] px-[10px]">
                Name: “Credit”
                <Image
                  src={"/assets/svg/x-circle.svg"}
                  alt=""
                  width={18}
                  height={18}
                />
              </button>
              <button className="self-center flex gap-3 nun font-normal text-[#121F2C] dark:text-white text-[12px] bg-[#DEDEDE] dark:bg-[#212121] rounded-full py-[5px] px-[10px]">
                Assigned to: “Ben”
                <Image
                  src={"/assets/svg/x-circle.svg"}
                  alt=""
                  width={18}
                  height={18}
                />
              </button>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <button className="self-center flex gap-3 nun font-normal text-[#121F2C] dark:text-white text-[12px] bg-[#DEDEDE] dark:bg-[#212121] rounded-full py-[5px] px-[10px]">
                Status: All
                <Image
                  src={"/assets/svg/x-circle.svg"}
                  alt=""
                  width={18}
                  height={18}
                />
              </button>
              <button className="self-center flex gap-3 nun font-normal text-[#121F2C] dark:text-white text-[12px] bg-[#DEDEDE] dark:bg-[#212121] rounded-full py-[5px] px-[10px]">
                All Products
                <Image
                  src={"/assets/svg/x-circle.svg"}
                  alt=""
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </div>
          <p className="mx-3 md:mx-0 text-[#3076B1] font-normal text-[12px] md:text-[14px] self-center cursor-pointer text-end mt-5 lg:mt-0">
            Clear Filters
          </p>
        </div>
        <Tables />
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
