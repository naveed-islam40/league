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
import Bot from "../../public/assets/png/bot.png";

const page = ["Current Version", "June 12, 2022", "June 16, 2021"];

export default function CuPolicy() {

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
          href={"/compliance"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          Model Policies
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link
          href={"/compliance"}
          className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
        >
          Chapter 1000: Administrative
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C]  dark:text-white self-center cursor-pointer" />
        <Link
          href={"/compliance"}
          className=" nun font-normal text-[#121F2C] dark:text-white text-[14px]"
        >
          Policy 1100: Credit Union Culture
        </Link>
      </div>

      <div className="md:flex gap-2 mt-8 md:mt-5 md:w-[95%] 2xl:w-[70%] mx-auto mb-10 md:mb-5">
        <div className="hidden  md:block w-[35%] lg:w-[25%] xl:w-[20%] bg-white dark:bg-black rounded-[8px] p-[10px] shadow-sm h-full">
          <Sidebar />
        </div>

        <div className="md:w-[65%] lg:w-[60%] md:px-5">
          <div className="flex justify-between">
            <Link href={"/cu-policies"}>
              <button className="hidden md:block font-semibold text-[14px] text-white bg-[#3076B1] dark:bg-[#4A9FE7] rounded-[6px] py-[14px] px-[10px] uppercase">
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

          <div className="bg-white dark:bg-black md:rounded-[4px] p-4 md:mt-5">
            <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16 px] border-b-[1px] border-[#D8D8D8] pb-2">
              Organization (1100.10)
            </p>
            <p className="nun font-normal text-[#8F8E8E] dark:text-white text-[12px] border-b-[1px] border-[#F5F5F5] py-2">
              Last Revised on: September 6, 2023
            </p>

            <p className="nun font-semibold text-[12px] dark:text-white text-[#121F2C] mt-5">
              General Statement
            </p>
            <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-1">
              [[CUname]] (Credit Union) is managed by a Board of Directors
              assisted by committees as set forth in the Credit Unions bylaws
              and within governance documents (as applicable). 
            </p>
            <p className="nun font-semibold text-[12px] text-[#121F2C] dark:text-white mt-5">
              Guidelines:
            </p>

            <div>
              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                1. BOARD OF DIRECTORS
              </p>
              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                a.
                <p>
                  The Board of Directors consists of an odd number of directors,
                  at least five in number, who are elected by the Credit Union
                  members.
                </p>
              </p>

              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                b.
                <p>
                  The Board is ultimately responsible for all the operations of
                  the Credit Union. 
                </p>
              </p>

              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                c.
                <p>
                  The Board shall elect from their number the Board Officers
                  specified in the bylaws, and also shall elect from their
                  number a financial officer
                </p>
              </p>

              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                2. GOVERN2NCE.
              </p>

              <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white  mt-2">
                The Board of Directors is responsible for the general direction
                and control of the affairs of the Credit Union.
              </p>

              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                3. COMMITTEES
              </p>
              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                a.
                <p>
                  The Board shall appoint the following committees to assist it:
                </p>
              </p>

              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                i.
                <p>
                  A Supervisory Committee consisting of not less than three nor
                  more than five members.
                </p>
              </p>

              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                ii.
                <p>
                  Where the Bylaws so provide, an Executive Committee of not
                  less than three directors.
                </p>
              </p>

              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-8">
                b.
                <p>
                  The Board is ultimately responsible for all the operations of
                  the Credit Union. 
                </p>
              </p>
              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                i.
                <p>
                  Where the bylaws so provide, a Credit Committee consisting of
                  an odd number of members of the Credit Union, but which shall
                  not include more than one loan officer.
                </p>
              </p>

              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                ii.
                <p>An Asset/Liability Management Committee.</p>
              </p>

              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                iii.
                <p>An Investment Committee.</p>
              </p>

              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                iv.
                <p>A Nominating Committee</p>
              </p>

              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                v.
                <p>A Nominating Committee</p>
              </p>

              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                BY LAWS AND MEETING MINUTES
              </p>
              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                a.
                <p>
                  The Credit Union will keep a current set of bylaws and minutes
                  of the meetings of the Board and its committees.
                </p>
              </p>

              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                b.
                <p>
                  The Board is ultimately responsible for all the operations of
                  the Credit Union. 
                </p>
              </p>

              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                5. QUALIFICATIONS.
              </p>

              <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                Any member over the age of 18 may serve as a director or
                committee member subject to the approval of the Credit Unions
                examiners and bonding company. However, no person shall serve as
                a director, officer, committee member, or employee of the Credit
                Union who has been convicted of any criminal offense involving
                dishonesty or breach of trust.
              </p>

              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                6. ELECTIONS.
              </p>

              <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                The Credit Union will follow the election procedures in
                accordance with its bylaws as follows:[[1200-1]]
              </p>

              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                7. RECORD RETENTION.
              </p>

              <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                See Policy 10001, Table 1 for retention schedule of corporate
                records.
              </p>

              <p className="hidden md:block nun font-normal text-[#7A7B7C] dark:text-white text-[11px] border-t-[1px] border-[#CCCCCC] py-4 mt-4">
                This content is a resources to support Policy 1100 - Credit
                Union Culture and Governance.
                <br /> Organization is recommended.
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
              {page.map((month, index) => (
                <li
                  key={month}
                  className={`mt-5 mb-0 ms-4 ${
                    index === page.length - 1
                      ? "text-[#121F2C] font-semibold text-[14px]"
                      : ""
                  }`}
                >
                  <span className="absolute flex items-center justify-center w-6 h-auto rounded-full -start-3 ring-8 ring-transparent">
                    <Image
                      src={"/assets/svg/tl.svg"}
                      alt=""
                      width={12}
                      height={12}
                    />
                  </span>
                  <div className="flex items-center mb-2 font-normal text-[12px] text-[#3076B1]">
                    <p
                      className={`-mt-[2px] ${
                        index === page.length - 1
                          ? "text-[#121F2C] dark:text-white font-semibold text-[12px]"
                          : ""
                      }`}
                    >
                      {month}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <Details />
        </div>
        <Link href={"/cu-policies"} className="fixed bottom-0 w-full  z-20">
          <button className=" block  md:hidden font-semibold text-[14px] text-white bg-[#3076B1] dark:bg-[#4A9FE7] w-full md:rounded-[6px] py-[14px] px-[10px] uppercase">
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
