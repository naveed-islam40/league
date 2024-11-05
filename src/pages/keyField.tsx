import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Bot from "../../public/assets/png/bot.png";

const data = [
  {
    id: "1120-1",
    inputValue: "",
    description: "Insert entire Credit Union Mission Statement.",
  },
  {
    id: "1120-1",
    inputValue: "",
    description: "Insert entire Credit Union Mission Statement.",
  },
  {
    id: "1120-1",
    inputValue: "",
    description: "Insert entire Credit Union Mission Statement.",
  },
  {
    id: "1120-1",
    inputValue: "",
    description: "Insert entire Credit Union Mission Statement.",
  },
  {
    id: "1120-1",
    inputValue: "",
    description: "Insert entire Credit Union Mission Statement.",
  },
];

export default function KeyField() {
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
            <div className="bg-[#AD7EFB] p-[5px] -mt-1 md:-mt-[12px] xl:-mt-[10px] fixed w-full "></div>

            <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
              <Link
                href={"/cu-policies"}
                className="nun font-semibold text-[#3076B1] text-[14px]"
              >
                CU PolicyPro
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white  self-center cursor-pointer" />
              <Link
                href={"/"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                Key Fields
              </Link>
            </div>

            <div className="mt-5 md:w-[95%] 2xl:w-[70%] mx-auto mb-24 md:mb-0">
              <button className=" my-5 uppercase bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] font-semibold text-[14px] text-white px-[18px] py-[14px] rounded-[6px] hidden md:block ml-auto">
                Save
              </button>

              <div className=" block md:hidden relative -z-10 mx-3 md:mx-0 mt-8">
                <input
                  type="text"
                  placeholder="Search Key Field ID, Descriptions, or Values"
                  className="bg-[#f2f2f2] outline-none  w-full py-4 px-8 nun font-normal text-[16px] md:text-[14px] rounded-[6px] text-[#7A7B7C]"
                />
                <Image
                  src={"/assets/svg/bi_searchs.svg"}
                  alt=""
                  width={16}
                  height={16}
                  className="absolute top-[19px] left-2"
                />
              </div>

              <div className="block md:hidden px-3 md:px-0">
                <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-5">
                  Define or edit your Key Fields by changing the content in the
                  Value field, then Save all changes using the SAVE button at
                  the bottom of the screen. Please note - if you make changes
                  and do not click the SAVE button, your changes will be lost.
                </p>
                <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-5 md:border-b-[1px] border-[#EFEFEF99] pb-3">
                  This listing includes Key Fields currently available in CU
                  Policies and may change as content is added or deleted.
                </p>
              </div>

              <div className="mb-5 relative md:-z-10 bg-white dark:bg-black dark:border-[1px] shadow-sm md:rounded-[7px] px-[15px] pb-0 pt-[5px] md:p-[15px] mt-5">
                <div className="relative hidden md:block ">
                  <input
                    type="text"
                    placeholder="Search Key Field ID, Descriptions, or Values"
                    className="dark:bg-black outline-none pb-2 border-b-[1px] border-[#CCCCCC] w-full px-8 nun font-semibold text-[16px] text-[#7A7B7C]"
                  />
                  <Image
                    src={"/assets/svg/bi_searchs.svg"}
                    alt=""
                    width={16}
                    height={16}
                    className="absolute top-1 left-1 filter dark:invert"
                  />
                </div>
                <p className="hidden md:block nun font-normal text-[14px] dark:text-white text-[#121F2C] mt-5">
                  Define or edit your Key Fields by changing the content in the
                  Value field, then Save all changes using the SAVE button at
                  the bottom of the screen. Please note - if you make changes
                  and do not click the SAVE button, your changes will be lost.
                </p>
                <p className="hidden md:block nun font-normal text-[14px] dark:text-white text-[#121F2C] mt-5 border-b-[1px] border-[#EFEFEF99] pb-3">
                  This listing includes Key Fields currently available in CU
                  Policies and may change as content is added or deleted.
                </p>

                <div className="md:overflow-x-scroll">
                  <div className="md:w-[1400px] xl:w-auto">
                    <div className="mt-5 hidden md:flex justify-between gap-5">
                      <div className="flex gap-3 w-[132px]">
                        <p className="font-normal text-[#7A7B7C] text-[16px]">
                          Key Field ID
                        </p>
                        <Image
                          src={"/assets/svg/sort.svg"}
                          alt=""
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="w-[450px]">
                        <p className="font-normal text-[#7A7B7C] text-[16px]">
                          Value
                        </p>
                      </div>
                      <div className="w-[660px]">
                        <p className="font-normal text-[#7A7B7C] text-[16px]">
                          Description
                        </p>
                      </div>
                    </div>

                    <div>
                      {data.map((item, index) => (
                        <div
                          key={index}
                          className="mt-5 md:flex justify-between gap-5 border-b-[1px] md:border-b-0 pb-5 border-[#f2f2f2]"
                        >
                          <div className="md:w-[132px] self-center">
                            <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                              Key Field ID
                            </p>
                            <p className="font-normal text-[#121212] dark:text-white text-[14px] mt-1 md:mt-0">
                              {item.id}
                            </p>
                          </div>
                          <div className="md:w-[450px] mt-2 md:mt-0">
                            <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                              Value
                            </p>
                            <input
                              type="text"
                              className="mt-1 md:mt-0 w-full font-normal text-[#121212] text-[16px] md:text-[14px] rounded-[5px] py-[5px] border-[1px] border-[#D9D9D9]"
                            />
                          </div>
                          <div className="md:w-[660px] self-center mt-2 md:mt-0">
                            <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                              Description
                            </p>
                            <p className="font-normal text-[#121212] dark:text-white text-[14px] mt-1 md:mt-0">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <button className="fixed bottom-0  md:hidden  z-20 w-full md:w-auto  md:my-5 uppercase dark:bg-[#4A9FE7] bg-[#3076B1] hover:bg-[#18459D] font-semibold text-[14px] text-white px-[18px] py-[14px] md:rounded-[6px] block md:ml-auto">
                Save
              </button>
            </div>
            <Footer />
          </>
        ) : (
          <div className="w-full h-full flex justify-between px-3 mt-3 items-center">
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                All
              </p>
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
