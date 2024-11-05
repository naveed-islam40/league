import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar/navbar";
import Image from "next/image";
import Document from "./component/myView/document";
import Footer from "./component/footer/footer";
import Link from "next/link";
import Bot from "../../public/assets/png/bot.png";
import RighSide from "./component/myView/rightSide";

export default function Myview() {
  const [loading, setLoading] = useState(true);

  // Simulate loading (you can remove this effect if you're loading actual data)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulates 2 seconds of loading time
  }, []);

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
            <div className="flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
              {loading ? (
                <div className="animate-pulse flex flex-col space-y-4 w-full">
                  <div className="h-4 bg-gray-200 rounded w-64"></div>
                </div>
              ) : (
                <>
                  <p className="nun font-bold text-[#121F2C] dark:text-white text-[18px] md:text-[26px]">
                    My 360 View
                  </p>
                  <div className="relative group">
                    <Image
                      src={"/assets/svg/info.svg"}
                      alt=""
                      height={18}
                      width={18}
                      className="self-center mt-1 md:mt-3 cursor-pointer"
                    />

                    <div className="invisible group-hover:visible flex absolute z-30 left-8 -top-2 w-[230px]">
                      <Image
                        src={"/assets/svg/tool.svg"}
                        alt=""
                        width={20}
                        height={20}
                        className="absolute top-2 -left-3"
                      />

                      <p className="font-normal text-[10px] bg-[#EEEDED]  text-[#121F2C] p-3">
                        The My 360 View page is an overview of important data at
                        a glance. You can add, remove, or rearrange widgets to
                        create a personalized experience that works best for
                        you.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="hidden lg:flex gap-14 w-[95%] 2xl:w-[70%] mx-auto mt-5">
              <div className="mt-3 self-center text-center xl:text-start">
                <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px]">
                  Quick Actions
                </p>
              </div>
              <div className="flex gap-5 mt-4 xl:mt-0">
                {loading ? (
                  // Skeleton Loader while loading
                  <div className="flex gap-5 ">
                    <div className="bg-gray-200 animate-pulse h-[40px] w-[150px] rounded-md py-[10px] px-[15px] flex gap-2">
                      <div className="bg-gray-300 rounded-full w-6 h-4 self-center"></div>
                      <div className="bg-gray-300 rounded-full w-32 h-4 self-center"></div>
                    </div>
                    <div className="bg-gray-200 animate-pulse h-[40px] w-[150px] rounded-md py-[10px] px-[15px] flex gap-2">
                      <div className="bg-gray-300 rounded-full w-6 h-4 self-center"></div>
                      <div className="bg-gray-300 rounded-full w-32 h-4 self-center"></div>
                    </div>
                    <div className="bg-gray-200 animate-pulse h-[40px] w-[150px] rounded-md py-[10px] px-[15px] flex gap-2">
                      <div className="bg-gray-300 rounded-full w-6 h-4 self-center"></div>
                      <div className="bg-gray-300 rounded-full w-32 h-4 self-center"></div>
                    </div>
                    <div className="bg-gray-200 animate-pulse h-[40px] w-[150px] rounded-md py-[10px] px-[15px] flex gap-2">
                      <div className="bg-gray-300 rounded-full w-6 h-4 self-center"></div>
                      <div className="bg-gray-300 rounded-full w-32 h-4 self-center"></div>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link href={"/manage-user"}>
                      <div className="bg-[#eef2eb] dark:bg-[#161a12] rounded-[7px] py-[10px] px-[15px] flex gap-2">
                        <Image
                          src={"/assets/png/prime.png"}
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                          Manage Users
                        </p>
                      </div>
                    </Link>

                    <Link href={"/cu-policies"}>
                      <div className="bg-[#faeff0] dark:bg-[#211617] dark:text-white rounded-[7px] py-[10px] px-[15px] flex gap-2">
                        <Image
                          src={"/assets/png/prime2.png"}
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                          Edit CU Policies
                        </p>
                      </div>
                    </Link>

                    <Link href={"/cu-bcp"}>
                      <div className="bg-[#eef5fa] dark:bg-[#151c21] rounded-[7px] py-[10px] px-[15px] flex gap-2">
                        <Image
                          src={"/assets/png/prime3.png"}
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                          Edit CU BCP
                        </p>
                      </div>
                    </Link>

                    <Link href={"/manage-assignments"}>
                      <div className="bg-[#fbfae2] dark:bg-[#35331b] rounded-[7px] py-[10px] px-[15px] flex gap-2">
                        <Image
                          src={"/assets/png/prime4.png"}
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                          Manage Assignments
                        </p>
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="hidden md:block lg:hidden mt-3 self-center text-center xl:text-start">
              <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px] ">
                Quick Actions
              </p>
            </div>

            <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 w-[60%] lg:w-[95%] 2xl:w-[70%] mx-auto mt-5">
              {loading ? (
                <>
                  {/* Skeleton loading effect for Quick Actions title */}
                  <div className="hidden lg:block mt-3 self-center text-center xl:text-start">
                    <div className="h-4 bg-gray-300 rounded-full w-24 animate-pulse"></div>
                  </div>

                  {/* Skeleton loading effect for the links */}
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 rounded-[7px] py-[10px] px-[15px] flex gap-2 animate-pulse"
                    >
                      <div className="bg-gray-300 rounded-full w-6 h-6"></div>
                      <div className="bg-gray-300 rounded-full w-32 h-4 self-center"></div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div className="hidden lg:block mt-3 self-center text-center xl:text-start">
                    <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px]">
                      Quick Actions
                    </p>
                  </div>

                  <Link href={"/manage-user"}>
                    <div className="bg-[#eef2eb] dark:bg-[#161a12] rounded-[7px] py-[10px] px-[15px] flex gap-2">
                      <Image
                        src={"/assets/png/prime.png"}
                        alt=""
                        width={24}
                        height={24}
                      />
                      <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                        Manage Users
                      </p>
                    </div>
                  </Link>

                  <Link href={"/cu-policies"}>
                    <div className="bg-[#faeff0] dark:bg-[#211617] rounded-[7px] py-[10px] px-[15px] flex gap-2">
                      <Image
                        src={"/assets/png/prime2.png"}
                        alt=""
                        width={24}
                        height={24}
                      />
                      <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                        Edit CU Policies
                      </p>
                    </div>
                  </Link>

                  <Link href={"/cu-bcp"}>
                    <div className="bg-[#eef5fa] dark:bg-[#151c21] rounded-[7px] py-[10px] px-[15px] flex gap-2">
                      <Image
                        src={"/assets/png/prime3.png"}
                        alt=""
                        width={24}
                        height={24}
                      />
                      <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                        Edit CU BCP
                      </p>
                    </div>
                  </Link>

                  <Link href={"/manage-assignments"}>
                    <div className="bg-[#fbfae2] dark:bg-[#35331b] rounded-[7px] py-[10px] px-[15px] flex gap-2">
                      <Image
                        src={"/assets/png/prime4.png"}
                        alt=""
                        width={24}
                        height={24}
                      />
                      <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                        Manage Assignments
                      </p>
                    </div>
                  </Link>
                </>
              )}
            </div>

            <div className="grid grid-cols-12 md:gap-5 md:w-[95%] 2xl:w-[70%]  mx-auto md:mb-10">
              <div className="col-span-12 lg:col-span-8">
                {/* <Analize /> */}
                <Document />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <RighSide />
              </div>
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
            className="fixed z-20  right-5 bottom-5 w-[82px] h-[87px] cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
