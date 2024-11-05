import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Footer from "./component/footer/footer";
import PrintModal from "./component/cu-policy/PrintModal";
import Bot from "../../public/assets/png/bot.png";

const checklists = [
  {
    title: "Accounts Aggregation: Checklist",
    textColor: "#3076B1",
    iconColor: "#121F2C",
    iconSize: 16,
    textSize: 14,
  },
  {
    title: "ACH: Origination Checklist",
    textColor: "#3076B1",
    iconColor: "#121F2C",
    iconSize: 16,
    textSize: 14,
  },
  {
    title: "Advertising Deposit Accounts: Checklist",
    textColor: "#3076B1",
    iconColor: "#121F2C",
    iconSize: 16,
    textSize: 14,
  },
  {
    title:
      "Advertising Loans: Checklist - Closed-End Consumer Loan Advertising",
    textColor: "#3076B1",
    iconColor: "#121F2C",
    iconSize: 16,
    textSize: 14,
  },
  {
    title:
      "Advertising Loans: Checklist - Closed-End Consumer Real Estate Loans Advertising",
    textColor: "#3076B1",
    iconColor: "#121F2C",
    iconSize: 16,
    textSize: 14,
  },
  {
    title: "Advertising Loans: Checklist - Credit Card Loans Advertising",
    textColor: "#3076B1",
    iconColor: "#121F2C",
    iconSize: 16,
    textSize: 14,
  },
  {
    title:
      "Advertising Loans: Checklist - Home Equity Line of Credit Advertising",
    textColor: "#3076B1",
    iconColor: "#121F2C",
    iconSize: 16,
    textSize: 14,
  },
  {
    title: "Advertising Loans: Checklist - Open-End Consumer Loans Advertising",
    textColor: "#3076B1",
    iconColor: "#121F2C",
    iconSize: 16,
    textSize: 14,
  },
  {
    title: "Allowance for Loan and Lease Losses: Checklist",
    textColor: "#3076B1",
    iconColor: "#121F2C",
    iconSize: 16,
    textSize: 14,
  },
  {
    title: "Americans with Disabilities Act: Checklist",
    textColor: "#3076B1",
    iconColor: "#121F2C",
    iconSize: 16,
    textSize: 14,
  },
  {
    title: "Appraisals: Checklist",
    textColor: "#3076B1",
    iconColor: "#121F2C",
    iconSize: 16,
    textSize: 14,
  },
];

export default function CheckList() {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active
  const [isSorted, setIsSorted] = useState(false); // State to track sorting order

  // Update searchQuery and check if it's active
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  // Toggle sort order and sort checklists A to Z or Z to A
  const handleSort = () => {
    setIsSorted(!isSorted);
  };

  // Sort checklists based on the title
  const sortedChecklists = [...checklists].sort((a, b) =>
    isSorted
      ? b.title.localeCompare(a.title) // Z to A when isSorted is true
      : a.title.localeCompare(b.title) // A to Z when isSorted is false
  );

  // Filtered list based on search query
  const filteredChecklists = sortedChecklists.filter((checklist) =>
    checklist.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                Checklists
              </Link>
            </div>

            <div className="md:w-[95%] 2xl:w-[70%] mx-auto mb-5 mt-8 md:mt-5">
              <div className="flex md:justify-between gap-4 px-3 md:px-0 pb-3 md:pb-0">
                <div className="relative w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Search Checklists"
                    className="bg-[#AEE6F566] rounded-[6px] py-[10px] px-[35px] w-full outline-none"
                  />

                  <Image
                    src={"/assets/svg/bi_search.svg"}
                    alt=""
                    width={16}
                    height={16}
                    className="absolute  top-[14px] left-3"
                  />
                  <Image
                    src={"/assets/svg/x-circle.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="absolute  top-[10px] right-3 cursor-pointer"
                  />
                </div>
                <div className="self-center">
                  <Image
                  onClick={handleSort}
                    src={"/assets/svg/bx-sort.svg"}
                    alt=""
                    title="A to Z"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              {filteredChecklists.map((item, index) => (
                <Link key={index} href={"/check-list-detail"}>
                  <div className="flex justify-between bg-white dark:bg-black border-b-[1px] dark:border-[1px] border-[#f2f2f2] md:rounded-[5px] p-[15px] shadow-sm md:mt-3">
                    <p
                      className="nun font-semibold"
                      style={{
                        fontSize: `${item.textSize}px`,
                        color: item.textColor,
                      }}
                    >
                      {item.title}
                    </p>
                    <div className="self-center">
                      <IoIosArrowForward
                        className="self-center cursor-pointer dark:!text-white"
                        style={{
                          fontSize: `${item.iconSize}px`,
                          color: item.iconColor,
                        }}
                      />
                    </div>
                  </div>
                </Link>
              ))}

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
            className="fixed right-5 bottom-5 w-[82px] h-[87px] cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
