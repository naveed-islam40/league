import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Footer from "./component/footer/footer";
import PrintModal from "./component/cu-policy/PrintModal";
import Bot from "../../public/assets/png/bot.png";

export default function CheckListDetail() {
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
      <div className="bg-[#03E09E] p-[5px] -mt-1 md:-mt-[12px] xl:-mt-[10px] fixed w-full"></div>

      <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
        <Link
          href={"/infoSight"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          InfoSight
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white  self-center cursor-pointer" />
        <Link
          href={"/check-list"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          Checklists
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link href={"/"} className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
          Account Aggregation: Checklist
        </Link>
      </div>

      <div className=" md:w-[95%] 2xl:w-[70%] mx-auto mb-5 mt-3">
        <div className="flex justify-between px-3 md:px-0 ">
          <Link
            href={"/check-list"}
            className=" mt-5 nun font-semibold text-[#3076B1] text-[12px] flex gap-2"
          >
            <FaArrowLeft className="text-[14px] mt-[3px] md:self-center text-[#7A7B7C]" />
           <p className="self-center"> Back to Checklists</p>
          </Link>
          <div className="pt-3">
          <PrintModal />
          </div>
        </div>

        <div className="p-[15px] rounded-[5px] bg-white dark:bg-black shadow-sm mt-3">
          <p className="nun font-semibold text-[#121F2C] dark:text-white text-[18px]">
            To be in substantial compliance all answers should be Yes unless
            they are not applicable.
          </p>

          <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
            State law dealing with deposit accounts takes two forms. Statutes
            that govern how certain deposits work and what contract terms are
            and are not enforceable; and basic contract law which covers the
            contract existing between the credit union and its depositors. In
            general, a credit union may accept shares and deposits from members
            on terms and conditions agreed upon by both parties. Credit unions
            must take into consideration numerous laws and regulations regarding
            the opening, maintaining, and closing of deposit accounts.
          </p>

          <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
            1. Is the credit union going to offer account aggregation services
            themselves, or contract with a third-party vendor?
          </p>

          <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
            2. if the credit union contracts with a third-party vendor, does it:
            Verify that security standards are in place to its own security
            specifications? Verify that the third party is financially stable
            enough to continue to offer reliable service? Make sure the
            third-party account aggregation system is compatible with the credit
            unions system? Does the third-party operator have in place member
            authentication measures that satisfy the credit unions standards?
            Did the credit union examine the contract to determine what
            liability the credit union has compared to that of the vendor (i.e.,
            is there a hold harmless agreement)?
          </p>

          <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
            3. Did the credit union attempt to research what information members
            might expect to find and/or use in an account aggregation system?
          </p>

          <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
            4. Is the credit union going to offer account aggregation services
            themselves, or contract with a third-party vendor?
          </p>

          <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
            5. Does the credit union or third party have in place a plan to
            verify the accuracy and completeness of information on their system
            drawn from other sources?
          </p>

          <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
            6. Is the credit union going to offer account aggregation services
            themselves, or contract with a third-party vendor?
          </p>

          <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
            7. Is the credit union going to offer account aggregation services
            themselves, or contract with a third-party vendor?
          </p>
        </div>
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
