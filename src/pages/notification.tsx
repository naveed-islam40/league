import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "./component/footer/footer";
import NotificationTable from "./component/manageUser/notification-table";
import Bot from "../../public/assets/png/bot.png";

export default function Notification() {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active
  const [loading, setLoading] = useState(true);

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
            <div className="flex gap-2 mt-5  w-[95%] 2xl:w-[70%] mx-auto">
              {loading ? (
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
              ) : (
                <Link
                  href={"/"}
                  className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
                >
                  Notifications
                </Link>
              )}
            </div>
            <div className=" md:w-[95%] 2xl:w-[70%] mb-5 mx-auto">
              {loading ? (
                <div className="px-3 md:flex justify-between mt-5">
                  <div className="flex gap-3">
                  <div className="hidden md:flex animate-pulse gap-1 py-[12px] px-4 bg-gray-300 dark:bg-gray-700 rounded-[6px] w-[150px] h-[48px]" />
                  <div className="self-center animate-pulse flex gap-3 bg-gray-300 dark:bg-gray-700 rounded-full py-[5px] px-[10px] w-[120px] h-[30px]" />
                  <div className="self-center animate-pulse flex gap-3 bg-gray-300 dark:bg-gray-700 rounded-full py-[5px] px-[10px] w-[100px] h-[30px]" />
                  </div>
                  <div className=" animate-pulse w-[100px] h-[12px] bg-gray-300 dark:bg-gray-700 rounded-full mt-5 self-center" />
                </div>
              ) : (
                <div className="px-3 md:flex justify-between">
                  <div className="mt-5 flex gap-5">
                    <button className="uppercase hidden md:flex gap-1 py-[12px] px-4 nun font-semibold text-[14px] text-[#7A7B7C]  border-[1px] border-[#D6D8E7] rounded-[6px] bg-white dark:bg-black">
                      <Image
                        src={"/assets/svg/plus.svg"}
                        alt=""
                        width={24}
                        height={24}
                      />
                      <p className="self-center mt-[1px]">Add a filter</p>
                    </button>

                    <button className="self-center flex gap-3 nun font-normal text-[#121F2C] dark:text-white text-[12px] bg-[#DEDEDE] dark:bg-[#242424] rounded-full py-[5px] px-[10px]">
                      Status: “Read”or “Unread”
                      <Image
                        src={"/assets/svg/x-circle.svg"}
                        alt=""
                        width={18}
                        height={18}
                      />
                    </button>
                    <button className="self-center flex gap-3 nun font-normal text-[#121F2C] dark:text-white text-[12px] bg-[#DEDEDE] dark:bg-[#242424] rounded-full py-[5px] px-[10px]">
                      Product: “All”
                      <Image
                        src={"/assets/svg/x-circle.svg"}
                        alt=""
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                  <p className="font-normal text-[12px] text-[#3076B1] self-center mt-5 text-end">
                    Clear Filters
                  </p>
                </div>
              )}

              <NotificationTable />
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
