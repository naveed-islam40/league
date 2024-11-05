import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import SearchFelid from "./component/home/searchFelid";
import Bot from "../../public/assets/png/bot.png";
import Link from "next/link";
import Image from "next/image";

export default function Help() {
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
            {loading ? (
              <div className="w-[95%] 2xl:w-[70%] flex gap-8 mx-auto animate-pulse">
                <div className="w-full">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 mt-5"></div>

                  <div className="bg-white dark:bg-black dark:border-[1px] dark:border-white rounded-[7px] shadow-sm p-4 my-5 md:h-[500px]">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-5"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-7"></div>

                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-3"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>

                    <div className="mt-7 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-[95%] 2xl:w-[70%] flex gap-8 mx-auto">
                <div className="w-full ">
                  <p className="nun font-bold text-[#121F2C] dark:text-white text-[16px] mt-5">
                    Compliance Help
                  </p>

                  <div className="bg-white dark:bg-black dark:border-[1px] dark:border-white rounded-[7px] shadow-sm p-4 my-5 md:h-[500px]">
                    <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                      For Compliance questions or assistance with InfoSight,
                      contact [Variable: Contact Person Information].
                    </p>
                    <p className="font-normal text-[#121212] dark:text-white text-[14px] mt-7 mb-5">
                      Need help with any other information relating to credit
                      union? Search a topic or ask any question below
                    </p>

                    <SearchFelid />
                  </div>
                </div>
              </div>
            )}
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
