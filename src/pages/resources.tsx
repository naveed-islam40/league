import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar/navbar";
import { IoIosArrowForward } from "react-icons/io";
import Card from "./component/resources/card";
import Top from "./component/resources/top";
import Viewing from "./component/resources/viewing";
import Footer from "./component/footer/footer";
import DropdownMenu from "./component/discussion/DropDown";
import ResourceSlider from "./component/resources/slider";
import TopSlider from "./component/resources/topSlider";
import ViewingSlider from "./component/resources/viewingSlider";
import Link from "next/link";
import Image from "next/image";
import Bot from "../../public/assets/png/bot.png";

export default function Resources() {
  const sortOptions = [
    "Newest to Oldest",
    "Popular to Newest",
    "Highest Rated",
    "Lowest Rated",
  ];
  const categoryOptions = [
    "Global",
    "Technology",
    "Health",
    "Finance",
    "Education",
  ];

  const [selectedSort, setSelectedSort] = useState<string>(sortOptions[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryOptions[0]
  );

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
            <div className="w-[95%] 2xl:w-[70%] mx-auto">
              {loading ? (
                <div className="flex gap-2 mt-5 animate-pulse">
                  <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              ) : (
                <div className="flex gap-2 mt-5">
                  <p className="nun font-medium text-[#3076B1] text-[14px]">
                    Resources
                  </p>
                  <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
                  <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
                    News & Announcements
                  </p>
                </div>
              )}

              <div className="xl:flex justify-between mt-5">
                <div className=" overflow-x-auto self-center">
                  {loading ? (
                    <div className="flex gap-3 w-[900px] lg:w-auto animate-pulse">
                      <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-6 w-28 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-6 w-28 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                  ) : (
                    <div className="flex gap-3 w-[900px] lg:w-auto">
                      <p className="nun font-medium text-[#121F2C] dark:text-white text-[14px] md:text-[16px]">
                        Categories:
                      </p>
                      <p className="nun font-normal text-[#3076B1] text-[14px] md:text-[16px] border-r-[1px] border-[#CCCCCC] pr-3">
                        All
                      </p>
                      <p className="nun font-normal text-[#121212] dark:text-white text-[14px] md:text-[16px] border-r-[1px] border-[#CCCCCC] pr-3">
                        InfoSight
                      </p>
                      <p className="nun font-normal text-[#121212] dark:text-white text-[14px] md:text-[16px] border-r-[1px] border-[#CCCCCC] pr-3">
                        CU PolicyPro
                      </p>
                      <p className="nun font-normal text-[#121212] dark:text-white text-[14px] md:text-[16px] border-r-[1px] border-[#CCCCCC] pr-3">
                        RecoveryPro
                      </p>
                      <p className="nun font-normal text-[#121212] dark:text-white text-[14px] md:text-[16px] border-r-[1px] border-[#CCCCCC] pr-3">
                        State-Specific
                      </p>
                      <p className="nun font-normal text-[#121212] dark:text-white text-[14px] md:text-[16px] border-r-[1px] border-[#CCCCCC] pr-3">
                        Industry News
                      </p>
                      <p className="nun font-normal text-[#121212] dark:text-white text-[14px] md:text-[16px]">
                        Training
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-5 xl:mt-0 flex md:justify-end xl:justify-start gap-2 md:gap-4 ">
                  {loading ? (
                    <>
                      <div className="h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </>
                  ) : (
                    <>
                      <DropdownMenu
                        icon={"/assets/svg/fil.svg"}
                        options={sortOptions}
                        selectedOption={selectedSort}
                        onSelectOption={setSelectedSort}
                        title="Sort by:"
                      />
                      <DropdownMenu
                        icon={"/assets/svg/fil2.svg"}
                        options={categoryOptions}
                        selectedOption={selectedCategory}
                        onSelectOption={setSelectedCategory}
                        title="Type:"
                      />
                    </>
                  )}{" "}
                </div>
              </div>
              <Card />
              <ResourceSlider />
              <Top />
              <TopSlider />
              <Viewing />
              <ViewingSlider />
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
