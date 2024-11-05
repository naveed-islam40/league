import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "./component/navbar/navbar";
import Image from "next/image";
import Reminders from "./component/calendar/reminders";
import Footer from "./component/footer/footer";
import Link from "next/link";
import Bot from "../../public/assets/png/bot.png";
import Print from "./component/editPolicy/print";
import PrintModal from "./component/cu-policy/PrintModal";

export default function Reminder() {
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
      <div className="md:flex gap-16 w-[95%] 2xl:w-[70%] mx-auto mb-10">
        <div className="md:w-[80%]">
          <div className="flex gap-2 mt-5">
            <p className="nun font-semibold text-[#3076B1] text-[14px]">
              Resources
            </p>
            <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
            <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
              Compliance Calendar
            </p>
          </div>
        
          <div className="ml-auto mt-5 -mb-3">
          <PrintModal/>
          </div>
          <Reminders />
        </div>
        <div className="hidden md:block md:w-[20%] mt-16">
          <p className="nun font-normal text-[#3076B1] text-[14px]">2023</p>
          <Link href={"/event-calendar"}>
            <p className="nun font-normal text-[#3076B1] text-[14px] mt-5">
              Current Year (2024)
            </p>
          </Link>

          <p className="nun font-normal text-[#3076B1] text-[14px] mt-5">
            2025
          </p>
          <p className="nun font-normal text-[#3076B1] text-[14px] mt-5">
            2026
          </p>
          <p className="nun font-semibold text-[#121F2C] dark:text-white text-[12px] xl:text-[14px] mt-5">
            Other Important Reminders <br /> and Information
          </p>
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
            className="fixed z-20 right-5 bottom-5 w-[82px] h-[87px] cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
