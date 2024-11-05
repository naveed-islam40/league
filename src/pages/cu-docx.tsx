import React, { useRef, useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Assign from "./component/manageAssignment/assign";
import Bot from "../../public/assets/png/bot.png";
import CuAssign from "./component/manageAssignment/cu-assign";

const data = [
  {
    id: 1,
    icon: "/assets/svg/folder2.svg",
    title: "Content Updates",
    size: "702 KB",
    date: "6/23/2024, 1:16 AM",
  },
  {
    id: 2,
    icon: "/assets/svg/word.svg",
    title: "Content Updates",
    size: "702 KB",
    date: "6/23/2024, 1:16 AM",
  },
  {
    id: 3,
    icon: "/assets/svg/bxs-pdf.svg",
    title: "Content Updates",
    size: "702 KB",
    date: "6/23/2024, 1:16 AM",
  },
  {
    id: 4,
    icon: "/assets/svg/bxs-pdf.svg",
    title: "Content Updates",
    size: "702 KB",
    date: "6/23/2024, 1:16 AM",
  },
  {
    id: 5,
    icon: "/assets/svg/bxs-pdf.svg",
    title: "Content Updates",
    size: "702 KB",
    date: "6/23/2024, 1:16 AM",
  },
  {
    id: 6,
    icon: "/assets/svg/bxs-pdf.svg",
    title: "Content Updates",
    size: "702 KB",
    date: "6/23/2024, 1:16 AM",
  },
];

const file = [
  {
    id: 1,
    src: "/assets/svg/folder2.svg",
    date: "Dec 10, 2023 1:16 AM",
    items: "38 items",
    title: "Content Updates",
  },
  {
    id: 2,
    src: "/assets/svg/word.svg",
    date: "Dec 10, 2023 1:16 AM",
    items: "38 items",
    title: "Content Updates",
  },
  {
    id: 3,
    src: "/assets/svg/bxs-pdf.svg",
    date: "Dec 10, 2023 1:16 AM",
    items: "38 items",
    title: "Content Updates",
  },
  {
    id: 4,
    src: "/assets/svg/folder2.svg",
    date: "Dec 10, 2023 1:16 AM",
    items: "38 items",
    title: "Content Updates",
  },
  {
    id: 5,
    src: "/assets/svg/word.svg",
    date: "Dec 10, 2023 1:16 AM",
    items: "38 items",
    title: "Content Updates",
  },
  {
    id: 6,
    src: "/assets/svg/bxs-pdf.svg",
    date: "Dec 10, 2023 1:16 AM",
    items: "38 items",
    title: "Content Updates",
  },
  {
    id: 7,
    src: "/assets/svg/folder2.svg",
    date: "Dec 10, 2023 1:16 AM",
    items: "38 items",
    title: "Content Updates",
  },
  {
    id: 8,
    src: "/assets/svg/word.svg",
    date: "Dec 10, 2023 1:16 AM",
    items: "38 items",
    title: "Content Updates",
  },
];

export default function CuDocx() {
  const [activeTab, setActiveTab] = useState(1);
  const [files, setFiles] = useState(1);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log("Selected file:", files[0]);
    }
  };

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
            <div className=" mt-5 w-[95%] 2xl:w-[70%] mx-auto mb-10">
              <Link
                href={"/cu-policies"}
               className="hidden md:block nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                APFCU Documents
              </Link>
              <div className="mt-5 grid grid-cols-12 md:flex md:justify-between gap-5">
                <div className="col-span-8 relative lg:w-[30%]">
                  <input
                    type="text"
                    placeholder="Search CU Documents"
                    className="w-full nun font-normal text-[#7A7B7C] text-[16px] md:text-[14px] rounded-[6px] bg-[#AEE6F566] px-9 py-[15px]"
                  />
                  <Image
                    src={"/assets/svg/bi_searchs.svg"}
                    alt=""
                    width={16}
                    height={16}
                    className="absolute top-[18px] left-3"
                  />
                </div>
                <div className="col-span-4 flex gap-2">
              

                <div
                  className="cursor-pointer self-center mr-5 hidden md:block"
                  onClick={handleLog}
                >
                  <Image
                    src="/assets/svg/bx-cloud.svg"
                    alt="Upload"
                    title="Upload Documents"
                    width={28}
                    height={28}
                    className="mx-auto"
                  />

                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
              
                <CuAssign />
                
                  <div
                    className={
                      activeTab === 1
                        ? "active tab bg-[#EEEEEE] p-2 cursor-pointer self-center md:ml-5"
                        : "tab  p-2 cursor-pointer self-center"
                    }
                    onClick={() => handleTabClick(1)}
                  >
                    <Image
                    title="List View"
                      src={"/assets/svg/bx-ul.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div
                    className={
                      activeTab === 2
                        ? "active tab bg-[#EEEEEE] p-2 cursor-pointer self-center"
                        : "tab  p-2 cursor-pointer self-center"
                    }
                    onClick={() => handleTabClick(2)}
                  >
                    <Image
                    title="Tile View"
                      src={"/assets/svg/bx-grid.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>

              {activeTab === 1 && (
                <div className="rounded-[4px] bg-white dark:bg-black dark:border-[1px] shadow-sm mt-5">
                  <div className="p-[15px] hidden md:flex justify-between ">
                    <div className="w-[960px] flex gap-3">
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
                    <div className="w-[200px] flex gap-3">
                      <p className="font-semibold text-[#7A7B7C] text-[16px]">
                        Date
                      </p>
                      <Image
                        src={"/assets/svg/sort.svg"}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>

                  <div className="mt-3 md:mt-0">
                    {data.map((item) => (
                      <div
                        key={item.id}
                        className="border-t-[1px] border-[#EFEFEF99] p-[15px] md:flex justify-between"
                      >
                        <div className="hidden md:flex md:w-[960px]  gap-1 mt-1 md:mt-0">
                          <Image
                            src={item.icon}
                            alt=""
                            width={24}
                            height={24}
                          />
                          <p className="font-normal text-[#3076B1] text-[14px] self-center">
                            {item.title}
                          </p>
                        </div>

                        <div className="block md:hidden">
                          <p className="font-semibold text-[#7A7B7C]  text-[16px] block md:hidden">
                            Name
                          </p>

                          <div className="md:w-[960px] flex gap-1 mt-1 md:mt-0">
                            <Image
                              src={item.icon}
                              alt=""
                              width={24}
                              height={24}
                            />
                            <p className="font-normal text-[#3076B1] text-[14px] self-center">
                              {item.title}
                            </p>
                          </div>
                        </div>

                        <div className="hidden md:block md:w-[180px]">
                          <p className="font-normal text-[#121F2C] dark:text-white text-[14px] mt-1 md:mt-0">
                            {item.size}
                          </p>
                        </div>
                        <div className="hidden md:block md:w-[200px] ">
                          <p className="font-normal text-[#7A7B7C] dark:text-white text-[14px]">
                            {item.date}
                          </p>
                        </div>

                        <div className="grid md:hidden grid-cols-2 mt-2 md:mt-0">
                          <div className="md:w-[180px]">
                            <p className="font-semibold text-[#7A7B7C] text-[16px] block md:hidden">
                              Size
                            </p>

                            <p className="font-normal text-[#121F2C] dark:text-white text-[14px] mt-1 md:mt-0">
                              {item.size}
                            </p>
                          </div>
                          <div className="md:w-[200px] ">
                            <p className="font-semibold text-[#7A7B7C] text-[16px] block md:hidden mt-1 md:mt-0">
                              Date
                            </p>

                            <p className="font-normal text-[#7A7B7C] dark:text-white text-[14px]">
                              {item.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="bg-white dark:bg-black dark:border-[1px] p-[15px] shadow-sm rounded-[7px] mt-5">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                    {file.map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#F8F8F8] dark:bg-black dark:border-[1px] p-[20px] rounded-[6px]"
                      >
                        <div className="bg-white dark:bg-black  p-[20px]">
                          <Image
                            src={item.src}
                            alt=""
                            width={60}
                            height={60}
                            className="mx-auto"
                          />
                        </div>
                        <div className="md:flex justify-between mt-2">
                          <p className="nun font-normal text-[11px] text-[#7A7B7C] dark:text-white">
                            {item.date}
                          </p>
                          <p className="nun font-normal text-[11px] text-[#7A7B7C] dark:text-white">
                            {item.items}
                          </p>
                        </div>
                        <p className="nun font-semibold text-[12px] md:text-[14px] text-[#121212] dark:text-white">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
