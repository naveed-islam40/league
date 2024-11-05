import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import { IoIosArrowForward } from "react-icons/io";

import Link from "next/link";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Details from "./component/cu-policy/detail";
import Content from "./component/manageUser/shareContent";
import PrintModal from "./component/cu-policy/PrintModal";
import Sidebar from "./component/cu-policy/sidebar";
import SidebarBcp from "./component/cu-policy/sidebar-bcp";
import Bot from "../../public/assets/png/bot.png";

const page = [ "June 12, 2022", "June 16, 2021"];

export default function RecoverOrganization() {

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
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          Model BCP
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link href={"/"} className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
          Chapter 1000: Administrative
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link href={"/"} className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
          Policy 1100: Credit Union Culture
        </Link>
      </div>

      <div className="md:flex gap-2 mt-8 md:mt-5 md:w-[95%] 2xl:w-[70%] mx-auto mb-5">
        <div className="hidden  md:block w-[35%] lg:w-[25%] xl:w-[20%] bg-white dark:bg-black rounded-[8px] p-[10px] shadow-sm h-full">
          <SidebarBcp />
        </div>

        <div className="md:w-[65%] lg:w-[60%] md:px-5">
          <div className="flex justify-between">
            <Link href={"/cu-bcp"}>
              <button className="hidden md:block font-semibold text-[14px] text-white bg-[#3076B1] dark:bg-[#4A9FE7] md:rounded-[6px] py-[14px] px-[10px] uppercase">
                import this policy
              </button>
            </Link>

            <div className="flex gap-4 pr-2 md:pr-0">
              <div className="self-center">
                <Content />
              </div>
              <div className="self-center hidden md:block">
                <PrintModal />
              </div>
              <Image
                src={"/assets/svg/print.svg"}
                alt=""
                title="Print"
                width={40}
                height={40}
                className="block md:hidden self-center "
              />
            </div>
          </div>

          <div className="bg-white dark:bg-black rounded-[4px] p-4 mt-5">
            <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16 px] border-b-[1px] border-[#D8D8D8] pb-2">
              1100: Introduction to Incident Management
            </p>
            <p className="nun font-normal text-[#8F8E8E] text-[12px] border-b-[1px] border-[#F5F5F5] py-2">
              Last Revised on: September 6, 2023
            </p>

            <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
              ITIL (the Information Technology Infrastructure Library) defines
              an Incident as “Any event which is not part of the standard
              operation of a service and which causes, or may cause, an
              interruption to or a reduction in, the quality of that service.”
              Incident Management, therefore, is the act of restoring normal
              operations as quickly as possible, with the least possible impact
              on either the business or the user, at a cost-effective price.
            </p>

            <div>
              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-5">
                The purpose of this section is to identify the roles and
                responsibilities, roadmap, and resources used in the Incident
                Management process at [[CUname]] (Credit Union). Because
                incidents can come in many different forms and in varying levels
                of impact, this section is designed only to provide information
                and process guidance to support the knowledge and expertise of
                the Incident Management team and NOT to act as a step-by-step
                instruction manual.
              </p>

              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-5">
                In this section, you will find high level Incident Process
                Flowcharts, Roles and Responsibilities for members of the Credit
                Union Incident Management team, key contact information,
                detailed guidance on critical portions of the overall Incident
                Management process, and resources used to support emergency
                operations at the Credit Union.
              </p>

              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-5">
                [[CUname]] is the owner of this document, which is reviewed and
                updated following exercises and actual incidents, to apply
                lessons learned towards the betterment and maturity of the
                Incident Management process. It is distributed to each member of
                the Incident Management team following each update.
              </p>

              <p className="flex gap-2 nun font-semibold text-[12px] text-[#121F2C] dark:text-white mt-5">
                Model Content Last Revised Date: 12/06/2021
              </p>

              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-5">
                This section includes model content outlining in more detail
                what users will find in this chapter. It reminds users that the
                plan must be reviewed and updated and that each member of the
                Incident Management Team should receive a new copy any time the
                content is updated. 
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-[25%] xl:w-[20%] mt-20">
          <div className="ml-5">
            <p className="text-sm font-semibold text-[#121F2C] dark:text-white">
              Model Policy Updates
            </p>
            <ol className="relative border-s border-[#D9D9D9] dark:border-gray-700 pb-5 ">
              {page.map((month) => (
                <li key={month} className="mt-5 mb-0 ms-4">
                  <span className="absolute flex items-center justify-center w-6 h-auto rounded-full -start-3 ring-8 ring-transparent ">
                    <Image
                      src={"/assets/svg/tl.svg"}
                      alt=""
                      width={12}
                      height={12}
                    />
                  </span>
                  <div className="flex items-center mb-2 font-normal text-[12px] text-[#3076B1]">
                    <p className="-mt-[2px]">{month}</p>
                  </div>
                </li>
              ))}
            </ol>

          </div>
          <Details />
        </div>

        <Link href={"/cu-bcp"} className="fixed bottom-0 w-full  z-20">
              <button className=" block  md:hidden font-semibold text-[14px] text-white dark:bg-[#4A9FE7] bg-[#3076B1] w-full md:rounded-[6px] py-[14px] px-[10px] uppercase">
                import this policy
              </button>
            </Link>
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
