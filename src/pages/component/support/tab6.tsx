import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Tab6() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  // Set timeout to remove the skeleton after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds timeout for demo purpose

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <>
      <div className="">
        <div className="lg:flex justify-between">
          <div className="flex gap-2">
            <Image src={"/assets/svg/in.svg"} alt="" width={30} height={30} />
            <Image
              src={"/assets/svg/folder.svg"}
              alt=""
              width={24}
              height={24}
            />
            <p className="font-semibold text-[16px] text-[#121212] dark:text-white flex gap-2 cursor-pointer self-center">
              Forms and Documents
              <IoIosArrowDown className="text-[18px] self-center" />
            </p>
          </div>

          <div className="flex justify-end mt-5 lg:mt-0 mr-1 md:mr-10">
            <button
              className={
                activeTab === 1
                  ? "active tab nun font-semibold text-[#121212] dark:bg-[#242424]  dark:text-white text-[14px] lg:text-[16px] bg-white   py-[10px] lg:py-[10px] px-[20px] lg:px-[30px]"
                  : "tab nun font-semibold text-[#121212] dark:bg-[#3c3c3c] dark:text-white text-[14px] lg:text-[16px] bg-[#E5E5E5] py-[10px] lg:py-[10px] px-[20px] lg:px-[30px]"
              }
              onClick={() => handleTabClick(1)}
            >
              CU PolicyPro
            </button>
            <button
              className={
                activeTab === 2
                  ? "active tab nun font-semibold text-[#121212] dark:bg-[#242424]  dark:text-white text-[14px] lg:text-[16px] bg-white   py-[10px] lg:py-[10px] px-[20px] lg:px-[30px]"
                  : "tab nun font-semibold text-[#121212] dark:bg-[#3c3c3c] dark:text-white text-[14px] lg:text-[16px] bg-[#E5E5E5] py-[10px] lg:py-[10px] px-[20px] lg:px-[30px]"
              }
              onClick={() => handleTabClick(2)}
            >
              RecoveryPro
            </button>
          </div>
        </div>

        {isLoading ? (
          <>
            {activeTab === 1 && (
              <div className="p-4 bg-white dark:bg-black dark:border-[1px] dark:border-white rounded-[6px] shadow-sm animate-pulse">
                <div className="flex justify-between border-b-[3px] border-[#EFEFEF99] pb-2 px-5">
                  <div className="flex gap-3">
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>

                <div className="border-b-[1px] border-[#EFEFEF99] py-3 flex justify-between px-5">
                  <div className="flex gap-2">
                    <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded self-center"></div>
                </div>

                <div className="border-b-[1px] border-[#EFEFEF99] py-3 flex justify-between px-5">
                  <div className="flex gap-2">
                    <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded self-center"></div>
                </div>

                <div className="py-3 flex justify-between px-5">
                  <div className="flex gap-2">
                    <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded self-center"></div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="p-4 bg-white dark:bg-black dark:border-[1px] dark:border-white rounded-[6px] shadow-sm animate-pulse">
                <div className="flex justify-between border-b-[3px] border-[#EFEFEF99] pb-2 px-5">
                  <div className="flex gap-3">
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>

                <div className="border-b-[1px] border-[#EFEFEF99] py-3 flex justify-between px-5">
                  <div className="flex gap-2">
                    <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded self-center"></div>
                </div>

                <div className="border-b-[1px] border-[#EFEFEF99] py-3 flex justify-between px-5">
                  <div className="flex gap-2">
                    <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded self-center"></div>
                </div>

                <div className="py-3 flex justify-between px-5">
                  <div className="flex gap-2">
                    <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded self-center"></div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {activeTab === 1 && (
              <div className=" p-4 bg-white dark:bg-black dark:border-[1px] dark:border-white rounded-[6px] shadow-sm">
                <div className="flex justify-between border-b-[3px] border-[#EFEFEF99] pb-2 px-5">
                  <div className="flex gap-3">
                    <p className="font-normal text-[#7A7B7C]  text-[16px]">
                      Name
                    </p>
                    <Image
                      src={"/assets/svg/sort.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>

                  <div className="flex gap-3">
                    <p className="font-normal text-[#7A7B7C] text-[16px]">
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

                <div className="border-b-[1px] border-[#EFEFEF99] py-3  flex justify-between px-5">
                  <div className="flex gap-2 ">
                    <Image
                      src={"/assets/svg/folder2.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                    <p className="mt-1 font-normal text-[#3076B1] text-[12px]">
                      Content Update Archives
                    </p>
                  </div>
                  <p className="font-normal text-[#121212] dark:text-white text-[12px] self-center">
                    --
                  </p>
                </div>
                <div className="border-b-[1px] border-[#EFEFEF99] py-3  flex justify-between px-5">
                  <div className="flex gap-2 ">
                    <Image
                      src={"/assets/svg/folder2.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                    <p className="mt-1 font-normal text-[#3076B1] text-[12px]">
                      Sample Forms and Documents
                    </p>
                  </div>
                  <p className="font-normal text-[#121212] dark:text-white text-[12px] self-center">
                    --
                  </p>
                </div>
                <div className=" py-3  flex justify-between px-5">
                  <div className="flex gap-2 ">
                    <Image
                      src={"/assets/svg/folder2.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                    <p className="mt-1 font-normal text-[#3076B1] text-[12px]">
                      System Tools
                    </p>
                  </div>
                  <p className="font-normal text-[#121212] dark:text-white text-[15px] self-center">
                    --
                  </p>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className=" p-4 bg-white dark:bg-black dark:border-[1px] dark:border-white rounded-[6px] shadow-sm">
                <div className="flex justify-between border-b-[3px] border-[#EFEFEF99] pb-2 px-5">
                  <div className="flex gap-3">
                    <p className="font-normal text-[#7A7B7C]  text-[16px]">
                      Name
                    </p>
                    <Image
                      src={"/assets/svg/sort.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>

                  <div className="flex gap-3">
                    <p className="font-normal text-[#7A7B7C] text-[16px]">
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

                <div className="border-b-[1px] border-[#EFEFEF99] py-3  flex justify-between px-5">
                  <div className="flex gap-2 ">
                    <Image
                      src={"/assets/svg/folder2.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                    <p className="mt-1 font-normal text-[#3076B1] text-[12px]">
                      Content Update Archives
                    </p>
                  </div>
                  <p className="font-normal text-[#121212] dark:text-white text-[12px] self-center">
                    --
                  </p>
                </div>
                <div className="border-b-[1px] border-[#EFEFEF99] py-3  flex justify-between px-5">
                  <div className="flex gap-2 ">
                    <Image
                      src={"/assets/svg/folder2.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                    <p className="mt-1 font-normal text-[#3076B1] text-[12px]">
                      Sample Forms and Documents
                    </p>
                  </div>
                  <p className="font-normal text-[#121212] dark:text-white text-[12px] self-center">
                    --
                  </p>
                </div>
                <div className=" py-3  flex justify-between px-5">
                  <div className="flex gap-2 ">
                    <Image
                      src={"/assets/svg/folder2.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                    <p className="mt-1 font-normal text-[#3076B1] text-[12px]">
                      System Tools
                    </p>
                  </div>
                  <p className="font-normal text-[#121212] dark:text-white text-[15px] self-center">
                    --
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
