import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Bot from "../../public/assets/png/bot.png";

const data = [
  {
    version: "1.1.0",
    name: "Wayman",
    date: "01/26/2024, 10:11 AM",
    status: "Restored from Backup",
    note: "FinalFinal",
  },
  {
    version: "1.1.0",
    name: "Wayman",
    date: "01/26/2024, 10:11 AM",
    status: "Restored from Backup",
    note: "FinalFinal",
  },
  {
    version: "1.1.0",
    name: "Wayman",
    date: "01/26/2024, 10:11 AM",
    status: "Restored from Backup",
    note: "FinalFinal",
  },
  {
    version: "1.1.0",
    name: "Wayman",
    date: "01/26/2024, 10:11 AM",
    status: "Restored from Backup",
    note: "FinalFinal",
  },
  {
    version: "1.1.0",
    name: "Wayman",
    date: "01/26/2024, 10:11 AM",
    status: "Restored from Backup",
    note: "FinalFinal",
  },
];

export default function Revision() {
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
          CU Policies
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link
          href={"/compliance"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          Credit Union Culture and Governance
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link
          href={"/compliance"}
          className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
        >
          Version History
        </Link>
      </div>

      <div className="w-[95%] 2xl:w-[70%] mx-auto mb-5">
        <div className="mt-8 md:mt-5  flex justify-between">
          <Link
            href={"/editPolicy"}
            className=" nun font-semibold text-[#3076B1] text-[12px] flex gap-2"
          >
            <FaArrowLeft className="text-[14px] self-center text-[#7A7B7C]" />
            <p className="self-center">Back</p>
          </Link>

          <Link href={"/editPolicy"}>
            <Image
              src={"/assets/svg/bx-reset.svg"}
              alt=""
              width={24}
              height={24}
              className="self-center block md:hidden"
            />
          </Link>
        </div>

        <div className=" rounded-[6px] bg-white dark:bg-black dark:border-[1px]  shadow-sm mt-5">
          <div className="md:overflow-x-scroll">
            <div className="md:w-[1200px] xl:w-auto">
              <div className="p-[15px] hidden md:flex justify-between">
                <div className="flex gap-3 w-[250px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px]">
                    Revision Number
                  </p>
                  <Image
                    src={"/assets/svg/sort.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>

                <div className="flex gap-3 w-[260px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px]">
                    Modified By
                  </p>
                  <Image
                    src={"/assets/svg/sort.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>

                <div className="flex gap-3 w-[260px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px]">
                    Modified on
                  </p>
                  <Image
                    src={"/assets/svg/sort.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>

                <div className="flex gap-3 w-[200px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px]">
                    Action
                  </p>
                  <Image
                    src={"/assets/svg/sort.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>

                <div className="flex gap-3 w-[200px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px]">
                    Content Status
                  </p>
                  <Image
                    src={"/assets/svg/sort.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>

                <div className="w-[100px]"></div>
              </div>

              {data.map((item, index) => (
                <div key={index} className="hidden md:block group">
                  <div className="px-[15px] py-[25px] border-t-[1px] border-[#CCCCCC] group-hover:bg-[#EEEEEE] dark:hover:bg-[#242424] cursor-pointer   md:flex justify-between">
                    <div className="md:w-[250px]">
                      <p className="font-normal text-[#3076B1] text-[14px] mt-1 md:mt-0">
                        {item.version}
                      </p>
                    </div>
                    <div className="md:w-[260px]">
                      <p className="font-normal text-[#121212] dark:text-white text-[14px] mt-1 md:mt-0">
                        {item.name}
                      </p>
                    </div>
                    <div className="md:w-[260px]">
                      <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                        {item.date}
                      </p>
                    </div>
                    <div className="md:w-[200px]">
                      <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                        {item.status}
                      </p>
                    </div>
                    <div className="md:w-[200px]">
                      <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                        {item.note}
                      </p>
                    </div>
                    <div className="hidden md:block md:w-[100px]">
                      <Link href={"/cu-policiesView"}>
                        <Image
                          src={"/assets/svg/bx-reset.svg"}
                          alt=""
                          width={24}
                          height={24}
                          className="invisible group-hover:visible ml-auto"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {data.map((item, index) => (
                <div key={index} className="block md:hidden group">
                  <div className="px-[15px] py-[25px] border-t-[1px] border-[#CCCCCC] group-hover:bg-[#EEEEEE] dark:hover:bg-[#242424] cursor-pointer   md:flex justify-between">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="md:w-[250px]">
                        <p className="font-normal text-[#7A7B7C] text-[16px]">
                          Revision Number
                        </p>
                        <p className="font-normal text-[#3076B1] text-[14px] mt-1 md:mt-0">
                          {item.version}
                        </p>
                      </div>
                      <div className="md:w-[260px]">
                        <p className="font-normal text-[#7A7B7C] text-[16px]">
                          Modified By
                        </p>
                        <p className="font-normal text-[#121212] dark:text-white text-[14px] mt-1 md:mt-0">
                          {item.name}
                        </p>
                      </div>
                    <div className="md:w-[260px]">
                    <p className="font-normal text-[#7A7B7C] text-[16px]">
                          Modified on
                        </p>
                      <p className="font-normal text-[#121212] dark:text-white text-[14px] mt-1 md:mt-0">
                        {item.date}
                      </p>
                    </div>
                    <div className="md:w-[200px]">
                    <p className="font-normal text-[#7A7B7C] text-[16px]">
                          Action
                        </p>
                      <p className="font-normal text-[#121212] dark:text-white text-[14px] mt-1 md:mt-0">
                        {item.status}
                      </p>
                    </div>

                    <div className="md:w-[200px]">
                    <p className="font-normal text-[#7A7B7C] text-[16px]">
                    Content Status
                        </p>
                      <p className="font-normal text-[#121212] dark:text-white text-[14px] mt-1 md:mt-0">
                        {item.note}
                      </p>
                    </div>
                    </div>

                    <div className="hidden md:block md:w-[100px]">
                      <Link href={"/cu-policiesView"}>
                        <Image
                          src={"/assets/svg/bx-reset.svg"}
                          alt=""
                          width={24}
                          height={24}
                          className="invisible group-hover:visible ml-auto"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
