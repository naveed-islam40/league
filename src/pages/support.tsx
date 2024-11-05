import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Tab from "./component/support/tab";
import Tab2 from "./component/support/tab2";
import Tab3 from "./component/support/tab3";
import Tab7 from "./component/support/tab7";
import Tab4 from "./component/support/tab4";
import Tab5 from "./component/support/tab5";
import Tab6 from "./component/support/tab6";
import Image from "next/image";
import SupportDrawer from "./component/support/drawer";
import Bot from "../../public/assets/png/bot.png";
import Link from "next/link";

export default function Support() {
  const [activeTab, setActiveTab] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
    setIsDrawerOpen(false); // Optionally close the drawer upon selecting a tab
  };

  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  useEffect(() => {
    // Simulate a loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time
  }, []);

  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
            <div className="md:w-[95%] 2xl:w-[70%] md:flex gap-8 mx-auto mb-10">
              <div className="hidden md:block w-[30%] lg:w-[30%] xl:w-[20%]">
                <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px] mt-5">
                  Support
                </p>
                <div className="bg-white dark:bg-black dark:border-[1px] dark:border-white rounded-[7px] shadow-sm p-3 mt-5">
                  {isLoading
                    ? // Skeleton loader for loading state
                      [...Array(7)].map((_, index) => (
                        <div
                          key={index}
                          className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded-[7px] py-[12px] px-[16px] w-full mb-2"
                        ></div>
                      ))
                    : // Actual content once loading is complete
                      [...Array(7)].map((_, index) => (
                        <p
                          key={index}
                          className={
                            activeTab === index + 1
                              ? "active tab cursor-pointer nun font-normal text-[#121F2C] text-[14px] bg-[#3076B11A] dark:bg-white  rounded-[7px] py-[12px] px-[16px] w-full"
                              : "tab cursor-pointer nun font-normal text-[#121F2C] dark:text-white text-[14px] rounded-[7px] py-[12px] px-[16px] w-full"
                          }
                          onClick={() => handleTabClick(index + 1)}
                        >
                          {
                            [
                              "Overview",
                              "User Guides",
                              "FAQs",
                              "Content Updates",
                              "System Documentation",
                              "Training Videos",
                              "Contact Support",
                            ][index]
                          }
                        </p>
                      ))}
                </div>
              </div>

              <div className="w-[95%] mx-auto  md:w-[80%] mb-10">
                <div className="flex md:hidden gap-2  mt-5">
                  <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="flex gap-2"
                  >
                    <Image
                      src="/assets/svg/menuss.svg"
                      alt="Menu"
                      width={24}
                      height={24}
                    />
                    <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px] self-center">
                      Support
                    </p>
                  </button>
                  {isDrawerOpen && (
                    <SupportDrawer
                      activeTab={activeTab}
                      handleTabClick={handleTabClick}
                      closeDrawer={() => setIsDrawerOpen(false)}
                    />
                  )}
                </div>
                <div className=" md:rounded-[7px] mt-5 md:mt-16">
                  {activeTab === 1 && <Tab />}

                  {activeTab === 2 && <Tab2 />}

                  {activeTab === 3 && <Tab3 />}

                  {activeTab === 4 && <Tab4 />}

                  {activeTab === 5 && <Tab6 />}

                  {activeTab === 6 && <Tab5 />}

                  {activeTab === 7 && <Tab7 />}
                </div>
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
            className="fixed z-20 right-5 bottom-5 w-[82px] h-[87px] cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
