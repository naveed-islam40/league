import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "./component/footer/footer";
import { IoIosArrowForward } from "react-icons/io";
import Bot from "../../public/assets/png/bot.png";

const data = [
  {
    id: 1,
    icon: "/assets/svg/bxs-pdf.svg",
    title: "February 2024 - MFA.pdf",
    size: "702 KB",
  },
  {
    id: 2,
    icon: "/assets/svg/bxs-pdf.svg",

    title: "March 2024 - Controls Testing.pdf",
    size: "702 KB",
  },
  {
    id: 3,
    icon: "/assets/svg/bxs-pdf.svg",
    title: "April 2024 - Product Combination.pdf",
    size: "702 KB",
  },
  {
    id: 4,
    icon: "/assets/svg/bxs-pdf.svg",
    title: "May 2024 - Content Updates.pdf",
    size: "702 KB",
  },
  {
    id: 5,
    icon: "/assets/svg/bxs-pdf.svg",
    title: "CUPP RP News July 2024.pdf",
    size: "702 KB",
  },
  {
    id: 6,
    icon: "/assets/svg/bxs-pdf.svg",
    title: "July 2024 - Upcoming Training.pdf",
    size: "702 KB",
  },
];

const file = [
  {
    id: 1,
    src: "/assets/svg/bxs-pdf.svg",

    title: "February 2024 - MFA.pdf",
  },
  {
    id: 2,
    src: "/assets/svg/bxs-pdf.svg",

    title: "March 2024 - Controls Testing.pdf",
  },
  {
    id: 3,
    src: "/assets/svg/bxs-pdf.svg",
    title: "April 2024 - Product Combination.pdf",
  },
  {
    id: 4,
    src: "/assets/svg/bxs-pdf.svg",

    title: "May 2024 - Content Updates.pdf",
  },
  {
    id: 5,
    src: "/assets/svg/bxs-pdf.svg",

    title: "CUPP RP News July 2024.pdf",
  },
  {
    id: 6,
    src: "/assets/svg/bxs-pdf.svg",
    title: "July 2024 - Upcoming Training.pdf",
  },
];

export default function NewsLetter() {
  const [activeTab, setActiveTab] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  const page = ["2023", "Current Year (2024)"];

  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
      <div className="flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
        <Link
          href={"/cu-policy"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          Admin
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link
          href={"/newsletter"}
          className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
        >
          Newsletter
        </Link>
      </div>

      <div className="grid grid-cols-12 mt-5 w-[95%] 2xl:w-[70%] mx-auto mb-10">
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          <div className="mt-5 md:flex justify-between gap-5">
            <div className="relative ">
              <input
                type="text"
                placeholder="Search"
                className="w-full md:w-[300px] mt-[1px] nun font-normal text-[#7A7B7C] text-[16px] md:text-[14px] rounded-[6px] bg-[#AEE6F566] px-9 py-[15px]"
              />
              <Image
                src={"/assets/svg/bi_searchs.svg"}
                alt=""
                width={16}
                height={16}
                className="absolute top-[18px] left-3"
              />
            </div>
            <div className="flex justify-end mt-5 md:mt-0 gap-2">
              <div
                className={
                  activeTab === 1
                    ? "active tab bg-[#EEEEEE] dark:bg-white  p-2 cursor-pointer self-center"
                    : "tab  p-2 cursor-pointer self-center"
                }
                onClick={() => handleTabClick(1)}
              >
                <Image
                  src={"/assets/svg/bx-ul.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <div
                className={
                  activeTab === 2
                    ? "active tab bg-[#EEEEEE] dark:bg-white p-2 cursor-pointer self-center"
                    : "tab  p-2 cursor-pointer self-center"
                }
                onClick={() => handleTabClick(2)}
              >
                <Image
                  src={"/assets/svg/bx-grid.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>

          {activeTab === 1 && (
            <div className="rounded-[4px] bg-white dark:bg-black dark:border-[1px] dark:border-white mt-2 shadow-sm ">
              <div className="p-[15px] flex justify-between mt-0">
                <div className="w-[830px] flex gap-3">
                  <p className="font-semibold text-[#7A7B7C] text-[16px]">
                    Name
                  </p>
                  <Image
                    src={"/assets/svg/sort.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
                <div className="w-[180px] flex gap-3">
                  <p className="font-semibold text-[#7A7B7C] text-[16px]">
                    Size
                  </p>
                  <Image
                    src={"/assets/svg/sort.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              </div>

              <div>
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="border-t-[1px] border-[#EFEFEF99] p-[15px] flex justify-between"
                  >
                    <div className="w-[830px] flex gap-1">
                      <Image src={item.icon} alt="" width={24} height={24} />
                      <p className="truncate w-48 md:w-auto font-medium text-[#121212] dark:text-white text-[14px] self-center">
                        {item.title}
                      </p>
                    </div>
                    <div className="w-[180px]">
                      <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                        {item.size}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="bg-white dark:bg-black dark:border-[1px] dark:border-white p-[15px] shadow-sm rounded-[7px] mt-2">
              <div className="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-5">
                {file.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#F8F8F8] dark:bg-black dark:border-[1px] dark:border-white p-[20px] rounded-[6px]"
                  >
                    <div className="bg-white dark:bg-black p-[20px]">
                      <Image
                        src={item.src}
                        alt=""
                        width={60}
                        height={60}
                        className="mx-auto"
                      />
                    </div>

                    <p className="nun font-semibold text-[14px] text-[#121212] dark:text-white mt-3">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:block col-span-4 xl:col-span-3 mt-20 w-[60%] mx-auto">
          <ol className="relative border-s border-[#D9D9D9] dark:border-gray-700 ">
            <li className="mt-5 mb-0 ms-4">
              <span className="absolute flex items-center justify-center w-6 h-auto rounded-full -start-3 ring-8 ring-transparent">
                <Image
                  src={"/assets/svg/tl.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
              </span>
              <div className="flex items-center mb-2 font-normal text-[14px] text-[#3076B1]">
                <p className="-mt-[4px]">2023</p>
              </div>
            </li>
            <li className="mt-5 mb-0 ms-4">
              <span className="absolute  pt-0 flex items-center justify-center w-6 h-auto rounded-full -start-3 ring-8 ring-transparent">
                <Image
                  src={"/assets/svg/tl.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
              </span>
              <div className="relative flex items-center h-3 mb-2 font-semibold text-[14px] text-[#121F2C] dark:text-white ">
                <p className="">Current Year (2024)</p>
              </div>
            </li>
          </ol>

          
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
