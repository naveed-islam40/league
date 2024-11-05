import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Footer from "./component/footer/footer";
import PrintModal from "./component/cu-policy/PrintModal";
import Bot from "../../public/assets/png/bot.png";

const data = [
  { letter: "A", parts: "Parts 200 - 299", system: "Federal Reserve System" },
  {
    letter: "B",
    parts: "Parts 300 - 399",
    system: "Social Security Administration",
  },
  {
    letter: "C",
    parts: "Parts 400 - 499",
    system: "Environmental Protection Agency",
  },
];

export default function Fedral() {
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
            <div className="flex gap-2 mt-5  w-[95%] 2xl:w-[70%] mx-auto">
              <Link
                href={"/"}
                className="nun font-semibold text-[#3076B1] text-[14px]"
              >
                Resources
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                Collaborative Partners
              </Link>
            </div>
            <div className=" mt-5  w-[95%] 2xl:w-[70%] mx-auto">
              <PrintModal />
            </div>

            <div className="w-[95%] 2xl:w-[70%] mx-auto shadow-sm mt-0 mb-5 rounded-[7px] p-[20px] pb-0 bg-white dark:bg-black dark:border-[1px]">
              <p className="nun font-normal text-[12px] dark:text-white">
                This page lists federal regulations that are generally
                applicable to all credit unions. The federal regulatory agency
                indicated with the “x” is the entity that has oversight of that
                particular regulation.
              </p>

              <div className="overflow-x-scroll">
                <div className="w-[700px] lg:w-auto">
                  <div className="flex justify-between bg-[#EFEFEF99] mt-5 p-[10px] rounded-t-[5px]">
                    <div className="w-[200px] lg:w-[140px]">
                      <p className="nun font-semibold text-[14px] text-[#121212] dark:text-white ">
                        Regulation
                      </p>
                    </div>
                    <div className="w-[300px] lg:w-[200px]">
                      <p className="nun font-semibold text-[14px] text-[#121212]  dark:text-white">
                        12 CFR
                      </p>
                    </div>
                    <div className="w-[560px]">
                      <p className="nun font-semibold text-[14px] text-[#121212]  dark:text-white">
                        Name
                      </p>
                    </div>
                    <div className="w-[150px]">
                      <p className="nun font-semibold text-[14px] text-[#121212]  dark:text-white">
                        CFPB
                      </p>
                    </div>
                    <div className="w-[150px]">
                      <p className="nun font-semibold text-[14px] text-[#121212]  dark:text-white">
                        FED
                      </p>
                    </div>
                    <div className="w-[150px]">
                      <p className="nun font-semibold text-[14px] text-[#121212]  dark:text-white">
                        NCUA
                      </p>
                    </div>
                  </div>
                  <div>
                    {data.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between border-t-[1px] border-[#CCCCCC] p-[15px] rounded-b-[5px]"
                      >
                        <div className="w-[200px] lg:w-[140px] self-center">
                          <p className="nun font-normal text-[14px] text-[#121212] dark:text-white">
                            {item.letter}
                          </p>
                        </div>
                        <div className="w-[300px] lg:w-[200px] self-center">
                          <p className="nun font-normal text-[14px] text-[#121212] dark:text-white">
                            {item.parts}
                          </p>
                        </div>
                        <div className="w-[560px] self-center">
                          <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                            {item.system}
                          </p>
                        </div>
                        <div className="w-[150px]">
                          {index === 0 && (
                            <Image
                              src={"/assets/svg/check.svg"}
                              alt=""
                              width={28}
                              height={28}
                            />
                          )}
                        </div>
                        <div className="w-[150px]">
                          {index === 1 && (
                            <Image
                              src={"/assets/svg/check.svg"}
                              alt=""
                              width={28}
                              height={28}
                            />
                          )}
                        </div>
                        <div className="w-[150px]">
                          {index === 2 && (
                            <Image
                              src={"/assets/svg/check.svg"}
                              alt=""
                              width={28}
                              height={28}
                            />
                          )}
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
