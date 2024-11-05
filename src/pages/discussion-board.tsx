import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import { FaArrowLeft } from "react-icons/fa6";
import Banner from "../../public/assets/png/banner.png";
import Banner2 from "../../public/assets/png/banner2.png";
import Link from "next/link";
import Image from "next/image";
import Categore from "./component/discussion/categore";
import Footer from "./component/footer/footer";
import DropdownMenu from "./component/discussion/DropDown";
import Datepicker from "react-tailwindcss-datepicker";
import { DateValueType } from "react-tailwindcss-datepicker";
import Bot from "../../public/assets/png/bot.png";

export default function Board() {
  const [date, setDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  const sortOptions = [
    "Newest to Oldest",
    "Oldest to Newest",
    "Highest Rated",
    "Lowest Rated",
  ];
  const categoryOptions = [
    "All Categories",
    "Technology",
    "Health",
    "Finance",
    "Education",
  ];

  const [selectedSort, setSelectedSort] = useState<string>(sortOptions[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryOptions[0]
  );
  const [subscribed, setSubscribed] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };
  const handleDateChange = (newDate: DateValueType) => {
    setDate(newDate);
  };

  const handleClick = () => {
    setSubscribed(!subscribed); // Toggle the subscribed state
  };

  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
            <div className="w-[95%] 2xl:w-[70%] mx-auto ">
              <div className="flex gap-2 mt-5">
                <p className="nun font-normal text-[#121F2C] dark:text-white text-[16px]">
                  Discussion Board
                </p>
              </div>

              <Link href={"/discussion"} className="flex gap-2 mt-5">
                <FaArrowLeft className="self-center text-[16px] text-[#7A7B7C]  cursor-pointer" />
                <p className="font-semibold text-[#3076B1] text-[12px]">Back</p>
              </Link>
            </div>
            <div className="mt-3">
              <Image src={Banner} alt="" className="hidden md:block" />
              <Image src={Banner2} alt="" className="block md:hidden" />
            </div>

            <div className="md:w-[95%] 2xl:w-[70%] mx-auto -mt-20 md:-mt-16 xl:-mt-28 relative z-0 mb-5">
              <div className="bg-[#0A497E] px-5 md:px-10 xl:px-24 py-5 md:py-[48px] rounded-[16px] w-[95%] md:w-auto mx-auto">
                <div className="md:flex justify-between">
                  <div>
                    <p className="nun font-semibold  text-[20px] text-white">
                      Fraud
                    </p>
                    <p className="nun font-normal text-[14px] text-white mt-1 md:w-[90%] xl:w-auto">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Et nunc varius molestie at in ante purus non. Dictum
                      neque.
                    </p>
                  </div>
                  <button
                    className="hidden md:block self-center nun font-semibold text-[14px] text-[#ED4C5C] bg-white py-[14px] px-[14px] rounded-[6px]"
                    onClick={handleClick}
                  >
                    {subscribed ? "Subscribe" : "Unsubscribe"}
                  </button>
                </div>
                <div className="flex md:block justify-between mt-5">
                  <p className="nun font-semibold text-[12px] text-white mt-5">
                    523 Post
                  </p>
                  <button
                    onClick={handleClick}
                    className="block md:hidden self-center nun font-semibold text-[14px] text-[#ED4C5C] bg-white py-[14px] px-[14px] rounded-[6px]"
                  >
                    {subscribed ? "Subscribe" : "Unsubscribe"}
                  </button>
                </div>
              </div>

              <div className="xl:flex justify-between mt-8 w-[95%] md:w-auto mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Discussions Board"
                    className="w-full md:w-[300px] -mt-[1px] nun font-normal md:font-semibold text-[#7A7B7C] text-[16px] md:text-[16px] bg-[#AEE6F566]  py-[10px] pl-[40px] pr-[20px] rounded-[4px]"
                
                 />
                  <Image
                    src={"/assets/svg/bi_search.svg"}
                    alt="Search icon"
                    width={16}
                    height={16}
                    className="absolute top-[14px] left-3"
                  />
                </div>
                <div className="overflow-x-scroll lg:overflow-x-visible">
                  <div className="w-[800px] lg:w-auto flex lg:justify-end gap-3 mt-5 xl:mt-0">
                    <DropdownMenu
                      icon={"/assets/svg/fil.svg"}
                      options={sortOptions}
                      selectedOption={selectedSort}
                      onSelectOption={setSelectedSort}
                      title="Sort by:"
                    />
                    <DropdownMenu
                      icon={"/assets/svg/bx.svg"}
                      options={categoryOptions}
                      selectedOption={selectedCategory}
                      onSelectOption={setSelectedCategory}
                      title=""
                    />
                    <div className="w-72 border-[1px] border-[#D1D5DB] relative z-0 rounded-[6px] h-[42px]">
                      <div className="relative z-20">
                        <Datepicker
                          value={date}
                          onChange={handleDateChange}
                          placeholder="mm/dd/yyyy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-[1px] border-[#E5E7EB] rounded-[8px] p-[16px] bg-white dark:bg-black my-5 w-[95%] md:w-auto mx-auto">
                <div className=" md:flex border-b-[1px] border-[#CCCCCC] pb-2">
                  <p className=" font-semibold text-[#121212] dark:text-white text-[14px] ">
                    Created by:{" "}
                    <span className="font-normal">Keith Wayman</span>{" "}
                  </p>
                  <p className="font-normal text-[12px] text-[#7A7B7C]  md:ml-2 self-center mt-[1px]">
                    Jun 24, 2024, 9:22:30 AM
                  </p>
                </div>
                <div className="mt-5 md:flex justify-between">
                  <div>
                    <Link href={"/discussion-post"}>
                      <p className="nun font-semibold text-[#3076B1] dark:text-white text-[12px] mt-1">
                        Farmer’s Federal Credit Union Counterfeit Checks
                      </p>
                    </Link>
                    <p className="nun font-normal text-[#121212] dark:text-white text-[12px] mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Condimentum morbi nunc, aliquet vulputate. Cras nibh quis
                      placerat porttitor pharetra ipsum integer. Scelerisque dui
                      sit et mauris odio nullam.
                    </p>
                  </div>
                  <Image
                    src={"/assets/png/posts.png"}
                    alt="Post image"
                    width={100}
                    height={100}
                    className="mt-2 md:mt-0"
                  />
                </div>
                <div className="flex gap-10 mt-5">
                  <p className="nun font-semibold text-[12px] text-[#121212] dark:text-white flex gap-1">
                    <Image
                      src={"/assets/svg/bx-msg.svg"}
                      alt="Comments icon"
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />{" "}
                    72 Comments
                  </p>
                  <p className="nun font-semibold text-[12px] text-[#121212] dark:text-white flex gap-1">
                    <Image
                      src={"/assets/svg/bx-book.svg"}
                      alt="Bookmark icon"
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />
                    Bookmark
                  </p>
                </div>
              </div>

              <div className="border-[1px] border-[#E5E7EB] rounded-[8px] p-[16px] bg-white dark:bg-black my-5 w-[95%] md:w-auto mx-auto">
                <div className=" md:flex border-b-[1px] border-[#CCCCCC] pb-2">
                  <p className=" font-semibold text-[#121212] dark:text-white text-[14px] ">
                    Created by:{" "}
                    <span className="font-normal">Keith Wayman</span>{" "}
                  </p>
                  <p className="font-normal text-[12px] text-[#7A7B7C] md:ml-2 self-center mt-[1px]">
                    Jun 24, 2024, 9:22:30 AM
                  </p>
                </div>
                <div className="mt-5">
                  <Link href={"/discussion-post"}>
                    <p className="nun font-semibold text-[#3076B1] dark:text-white text-[12px] mt-1">
                      Farmer’s Federal Credit Union Counterfeit Checks
                    </p>
                  </Link>
                  <p className="nun font-normal text-[#121212] dark:text-white text-[12px] mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Condimentum morbi nunc, aliquet vulputate. Cras nibh quis
                    placerat porttitor pharetra ipsum integer. Scelerisque dui
                    sit et mauris odio nullam.
                  </p>

                  <div className="flex gap-5  mt-10">
                    <Image
                      src={"/assets/png/posts2.png"}
                      alt="Post image"
                      width={100}
                      height={100}
                    />
                    <Image
                      src={"/assets/png/posts2.png"}
                      alt="Post image"
                      width={100}
                      height={100}
                    />
                    <Image
                      src={"/assets/png/posts2.png"}
                      alt="Post image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex gap-10 mt-10">
                  <p className="nun font-semibold text-[12px] text-[#121212] dark:text-white flex gap-1">
                    <Image
                      src={"/assets/svg/bx-msg.svg"}
                      alt="Comments icon"
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />{" "}
                    72 Comments
                  </p>
                  <p className="nun font-semibold text-[12px] text-[#121212] dark:text-white flex gap-1">
                    <Image
                      src={"/assets/svg/bx-book.svg"}
                      alt="Bookmark icon"
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />
                    Bookmark
                  </p>
                </div>
              </div>

              <div className="border-[1px] border-[#E5E7EB] rounded-[8px] p-[16px] bg-white dark:bg-black my-5 w-[95%] md:w-auto mx-auto">
                <div className=" md:flex border-b-[1px] border-[#CCCCCC] pb-2">
                  <p className=" font-semibold text-[#121212] dark:text-white text-[14px] ">
                    Created by:{" "}
                    <span className="font-normal">Keith Wayman</span>{" "}
                  </p>
                  <p className="font-normal text-[12px] text-[#7A7B7C] md:ml-2 self-center mt-[1px]">
                    Jun 24, 2024, 9:22:30 AM
                  </p>
                </div>
                <div className="mt-5 md:flex justify-between">
                  <div>
                    <Link href={"/discussion-post"}>
                      <p className="nun font-semibold text-[#3076B1] dark:text-white text-[14px] mt-1">
                        Farmer’s Federal Credit Union Counterfeit Checks
                      </p>
                    </Link>
                    <p className="nun font-normal text-[#121212] dark:text-white text-[12px] mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Condimentum morbi nunc, aliquet vulputate. Cras nibh quis
                      placerat porttitor pharetra ipsum integer. Scelerisque dui
                      sit et mauris odio nullam.
                    </p>
                  </div>
                  <Image
                    src={"/assets/png/posts.png"}
                    alt="Post image"
                    width={100}
                    height={100}
                    className="mt-2 md:mt-0"
                  />
                </div>
                <div className="flex gap-10 mt-5">
                  <p className="nun font-semibold text-[12px] text-[#121212] dark:text-white flex gap-1">
                    <Image
                      src={"/assets/svg/bx-msg.svg"}
                      alt="Comments icon"
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />{" "}
                    72 Comments
                  </p>
                  <p className="nun font-semibold text-[12px] text-[#121212] dark:text-white flex gap-1">
                    <Image
                      src={"/assets/svg/bx-book.svg"}
                      alt="Bookmark icon"
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />
                    Bookmark
                  </p>
                </div>
              </div>

              <Categore />
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
            className="fixed right-5 bottom-5 w-[82px] h-[87px] cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
