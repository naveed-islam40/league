import React, { useState } from "react";
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
import Sidebar from "./component/cu-policy/sidebar";
import Accordion from "./component/cu-policy/accordion";
import SidebarMob from "./component/cu-policy/sidebarMob";
import Bot from "../../public/assets/png/bot.png";

export default function CuPolicy() {
  const [showPolicy, setShowPolicy] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };
  const handlePolicy = () => {
    setShowPolicy(true);
  };

  const handleBack = () => {
    setShowPolicy(false);
  };

  return (
    <>
<div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
      <div className="bg-[#AD7EFB] p-[5px]  -mt-1 md:-mt-[12px] xl:-mt-[10px] fixed w-full z-10 md:z-0"></div>

      <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
        <Link
          href={"/cu-policies"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          CU PolicyPro
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer " />
        <Link
          href={"/cu-policy"}
          className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
        >
          Model Policies
        </Link>
      </div>

      <div className="md:flex gap-2  md:mt-5 md:w-[95%] 2xl:w-[70%] mx-auto md:mb-20">
        <div className="hidden md:block w-[35%] lg:w-[25%] xl:w-[20%] bg-white dark:bg-black rounded-[8px] p-[10px] shadow-sm h-full">
          <Sidebar />
        </div>

        <div className="hidden md:block md:w-[65%] lg:w-[60%] md:px-5">
          <Accordion handleBack={handleBack} />
        </div>
        <div className="hidden lg:block w-[25%] xl:w-[20%]">
          <Details />
        </div>

        <div className="relative block md:hidden">
          {showPolicy ? (
            <Accordion handleBack={handleBack} />
          ) : (
            <SidebarMob handlePolicy={handlePolicy} />
          )}

          <Link href={"/model-content"} className="fixed bottom-0 w-full  z-20">
            <button className="absolute bottom-0 w-full block md:hidden font-semibold text-[14px] text-white bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] md:rounded-[6px] p-[14px]  uppercase">
              import policies
            </button>
          </Link>
        </div>
      </div>
      Manage Reviewed Date

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