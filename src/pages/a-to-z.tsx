import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Details from "./component/cu-policy/detail";
import Bot from "../../public/assets/png/bot.png";

export default function AToZ() {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  const items = [
    { name: "Ability to Repay", link: "/ability" },
    { name: "Account Aggregation" },
    { name: "Account Insurance Estimator" },
    { name: "Account Types and Ownership" },
    { name: "Accounts" },
    { name: "Accounts Introduction" },
    { name: "ACH" },
    { name: "ACH / Electronic Payments" },
    { name: "Active Shooter" },
    { name: "Advertising" },
    { name: "Advertising Consumer Leases" },
    { name: "Advertising Deposit Accounts" },
    { name: "Advertising Loans" },
    { name: "Advertising Overdraft Programs" },
    { name: "Advertising Overview" },
    { name: "Advocacy Highlight" },
    { name: "Affordable Care Act" },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <div className="relative">
        <div className="pb-28 md:pb-40">
          <Navbar onSearch={handleSearch} />
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
            <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
              <Link
                href={"/infoSight"}
                className="nun font-medium text-[#3076B1] text-[14px]"
              >
                Resources
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/compliance"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                A to Z Listings
              </Link>
            </div>
            <div className="md:flex gap-5 md:w-[95%] 2xl:w-[70%] mx-auto mb-20 mt-5">
              <div className="relative px-3 block md:hidden">
                <input
                  type="text"
                  placeholder="A to Z Listings"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="bg-[#AEE6F566] font-normal text-[16px] md:text-[14px] rounded-[6px] py-[10px] px-[35px] w-full outline-none"
                />

                <Image
                  src={"/assets/svg/bi_search.svg"}
                  alt=""
                  width={16}
                  height={16}
                  className="absolute  top-[14px] left-5"
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

              <div className="md:w-[80%] bg-white dark:bg-black md:rounded-[8px] md:p-[10px] shadow-sm h-full mt-3  md:mt-0">
                <div className="hidden md:block relative">
                  <input
                    type="text"
                  placeholder="A to Z Listings"

                    value={inputValue}
                    onChange={handleInputChange}
                    className="bg-[#AEE6F566] mt-[2px] font-normal text-[16px] md:text-[14px] rounded-[6px] py-[10px] px-[35px] w-full outline-none"
                  />

                  <Image
                    src={"/assets/svg/bi_search.svg"}
                    alt=""
                    width={16}
                    height={16}
                    className="absolute  top-[14px] left-3"
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

                <div className=" md:mt-3">
                  {filteredItems.map((item, index) => (
                    <div
                      key={index}
                      className="border-b-[1px] md:border-b-0 border-[#f2f2f2]"
                    >
                      {item.link ? (
                        <Link href={item.link}>
                          <p className="font-normal dark:bg-[#242424] text-[#121F2C] dark:text-white text-[14px] py-[14px] md:py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] md:rounded-[8px]">
                            {item.name}
                          </p>
                        </Link>
                      ) : (
                        <p className="font-normal dark:bg-[#242424] mt-1 text-[#121F2C] dark:text-white text-[14px] py-[14px] md:py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] md:rounded-[8px]">
                          {item.name}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block w-[40%] xl:w-[20%]">
                <Details />
              </div>
            </div>
            <Footer />
          </>
        ) : (
          <div className="w-full h-full flex justify-between px-3 mt-5 items-center">
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
