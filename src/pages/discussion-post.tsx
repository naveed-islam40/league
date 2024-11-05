import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Image from "next/image";
import Footer from "./component/footer/footer";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Banner from "../../public/assets/png/banner.png";
import Banner2 from "../../public/assets/png/banner2.png";
import { FaMessage } from "react-icons/fa6";
import { BsFillBookmarkXFill } from "react-icons/bs";
import DropdownMenu from "./component/discussion/DropDown";
import Datepicker from "react-tailwindcss-datepicker";
import { DateValueType } from "react-tailwindcss-datepicker";
import Bot from "../../public/assets/png/bot.png";

export default function DiscussionPost() {
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
  const [selectedSort, setSelectedSort] = useState<string>(sortOptions[0]);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };
  const handleDateChange = (newDate: DateValueType) => {
    setDate(newDate);
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
                <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
                  Discussion Board
                </p>
              </div>

              <Link href={"/discussion-board"} className="flex gap-2 mt-5">
                <FaArrowLeft className="self-center text-[16px] text-[#7A7B7C] cursor-pointer" />
                <p className="font-semibold text-[#3076B1] text-[14px]">Back</p>
              </Link>
            </div>
            <div className="mt-3">
              <Image src={Banner} alt="" className="hidden md:block" />
              <Image src={Banner2} alt="" className="block md:hidden" />
            </div>

            <div className="w-[95%] 2xl:w-[70%] mx-auto -mt-20 md:-mt-16 xl:-mt-28 relative z-0 mb-5">
              <div className="bg-[#0A497E] py-5 md:py-[48px] rounded-[16px]">
                <div className="w-[90%] xl:w-[62%] mx-auto">
                  <p className="w-14 text-xs text-[#121212] bg-white rounded-lg py-1 text-center">
                    Fraud
                  </p>

                  <p className="text-[22px] font-semibold text-white pt-3">
                    Farmer’s Federal Credit Union Counterfeit Checks
                  </p>
                  <p className="text-[14px] md:text-lg text-white pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dictum ut risus id sed tincidunt a maecenas venenatis.
                    Elementum fermentum augue pulvinar arcu. At a pellentesque
                    tincidunt curabitur at nunc semper vitae. Proin diam nunc.
                  </p>
                  <div className="flex gap-3 pt-5 md:pt-10">
                    <p className="text-sm text-white">
                      <span className="font-semibold">Created by:</span>Keith
                      Wayman
                    </p>
                    <p className="text-xs text-white">
                      Jun 24, 2024, 9:22:30 AM
                    </p>
                  </div>

                  <div className="flex gap-10 pt-5 md:pt-10">
                    <div className="flex gap-2 items-center">
                      <FaMessage className="text-white text-base" />
                      <p className="text-xs font-semibold text-white">
                        72 Comments
                      </p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <BsFillBookmarkXFill className="text-white text-base" />
                      <p className="text-xs font-semibold text-white">
                        Unbookmark
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" xl:w-[70%] mx-auto lg:flex justify-between mt-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Discussions Board"
                    className="w-full lg:w-[300px] -mt-[1px] nun font-normal md:font-semibold text-[#7A7B7C] text-[16px] md:text-[16px] bg-[#AEE6F566]  py-[10px] pl-[40px] pr-[20px] rounded-[4px]"
                  />
                  <Image
                    src={"/assets/svg/bi_search.svg"}
                    alt="Search icon"
                    width={16}
                    height={16}
                    className="absolute top-3 left-3"
                  />
                </div>

                <div className="flex md:justify-end gap-3 mt-2  lg:mt-0">
                  <DropdownMenu
                    icon={"/assets/svg/users.svg"}
                    options={sortOptions}
                    selectedOption={selectedSort}
                    onSelectOption={setSelectedSort}
                    title=""
                  />

                  <div className="w-72 border-[1px] border-[#D1D5DB] rounded-[8px]">
                    <Datepicker
                      value={date}
                      onChange={handleDateChange}
                      placeholder="mm/dd/yyyy"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:w-[90%] xl:w-[70%] mx-auto border border-[#E5E7EB] rounded-lg bg-white dark:bg-black mt-5 mb-10">
                <div className="border-b-[1px] border-[#CCCCCC] p-2 md:p-5">
                  <div className="flex gap-2">
                    <div className="w-full relative">
                      <input
                        type="text"
                        placeholder="Reply to Keith Wayman"
                        className="outline-none border border-[#E5E7EB] rounded-[5px] bg-[#F9FAFB] dark:bg-black w-full px-4 md:px-5 py-4 text-[16px] md:text-xs text-[#7A7B7C] placeholder:text-[#7A7B7C]"
                      />
                      <Image
                        src={"/assets/svg/attach.svg"}
                        alt=""
                        width={18}
                        height={18}
                        className="absolute right-3 top-4 md:top-3.5"
                      />
                    </div>
                    <div className="self-center w-[40px] h-[40px] md:h-auto md:w-[50px] flex justify-center items-center opacity-40 bg-[#3076B1] rounded-full p-2 cursor-pointer">
                      <Image
                        src={"/assets/svg/send-msg.svg"}
                        alt=""
                        width={21}
                        height={24}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4">
                    <input type="checkbox" />
                    <p className="text-xs text-[#111827] dark:text-white">Post Anonymously</p>
                  </div>
                </div>

                <div className="">
                  <div className=" border-b-[1px] border-[#CCCCCC] p-2 md:p-5">
                    <div className="md:pl-6  mt-10">
                      <div className="flex gap-3 border-b border-b-[#E5E7EB] pb-2">
                        <p className="text-xs text-[#111827] dark:text-white font-semibold">
                          Jasmine Strandos
                        </p>
                        <p className="text-xs text-[#7A7B7C]">
                          Jul 18, 2024, 11:10:30 AM
                        </p>
                      </div>

                      <div className="md:flex justify-between pt-3">
                        <div className="w-[70%]">
                          <p className="text-xs text-[#111827] dark:text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Id semper odio velit bibendum amet. Ac ut odio
                            aenean sem nibh. Diam amet vitae neque auctor ipsum
                            sed quam varius sapien. Nec maecenas enim, cras
                            etiam. Vitae urna tincidunt vel elementum.
                            Pellentesque facilisi nulla blandit lectus feugiat
                            commodo ultrices enim faucibus.
                          </p>
                          <p className="text-xs text-[#111827] dark:text-white pt-5">
                            Malesuada diam fermentum a, nec. Nibh tellus a
                            eleifend elit molestie convallis neque. Vel
                            ullamcorper ligula in integer pretium quam. At
                            mattis habitasse dolor feugiat porttitor aliquet
                            erat ultricies nulla. Est, ut tellus justo, at quam.
                          </p>
                        </div>

                        <Image
                          src={"/assets/jpg/reply-1.jpg"}
                          alt=""
                          width={600}
                          height={600}
                          className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] mt-2 md:mt-0"
                        />
                      </div>

                      <div className="mt-5 md:w-[90%]">
                        <div className="flex gap-2">
                          <div className="w-full relative">
                            <input
                              type="text"
                              placeholder="Reply to Keith Wayman"
                              className="outline-none border border-[#E5E7EB] rounded-sm bg-[#F9FAFB] dark:bg-black w-full px-5 py-4 text-xs text-[#7A7B7C] placeholder:text-[#7A7B7C]"
                            />
                            <Image
                              src={"/assets/svg/attach.svg"}
                              alt=""
                              width={18}
                              height={18}
                              className="absolute right-3 top-3.5"
                            />
                          </div>
                          <div className="self-center w-[40px] h-[40px] md:h-auto md:w-[50px] flex justify-center items-center bg-[#3076B1] rounded-full p-2 cursor-pointer">
                            <Image
                              src={"/assets/svg/send-msg.svg"}
                              alt=""
                              width={21}
                              height={24}
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-4">
                          <input type="checkbox" />
                          <p className="text-xs text-[#111827] dark:text-white">
                            Post Anonymously
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="md:pl-6  w-[84%] flex gap-2 mt-5">
                      <div className="w-16 h-auto bg-[#EEEEEE] dark:bg-gray-800"></div>
                      <div>
                        <div className="flex gap-3">
                          <p className="text-xs text-[#111827] dark:text-white font-semibold">
                            Anonymous
                          </p>
                          <p className="text-xs text-[#7A7B7C]">
                            Jul 18, 2024, 11:10:30 AM
                          </p>
                        </div>

                        <p className="text-xs pt-3 border-b border-b-[#E7E8EC] pb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sem in at molestie sapien nunc platea. Ipsum
                          integer viverra lobortis vel laoreet enim pharetra.
                        </p>

                        <div className="flex gap-3 pt-3">
                          <p className="text-xs text-[#111827] dark:text-white font-semibold">
                            Jamie Wilson
                          </p>
                          <p className="text-xs text-[#7A7B7C]">
                            Jul 18, 2024, 11:10:30 AM
                          </p>
                        </div>

                        <p className="text-xs pt-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sem in at molestie sapien nunc platea. Ipsum
                          integer viverra lobortis vel laoreet enim pharetra.{" "}
                        </p>

                        <div className="flex gap-5 mt-5">
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

                        <div className="flex gap-3 mt-3 border-t border-t-[#E7E8EC]">
                          <p className="text-xs text-[#111827] dark:text-white font-semibold pt-3">
                            Jamie Wilson
                          </p>
                          <p className="text-xs text-[#7A7B7C] pt-3">
                            Jul 18, 2024, 11:10:30 AM
                          </p>
                        </div>

                        <p className="text-xs pt-2 dark:text-white">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sem in at molestie sapien nunc platea. Ipsum
                          integer viverra lobortis vel laoreet enim pharetra.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4  p-2 md:p-5">
                    <div className="md:pl-6 flex border-b gap-3 pt-5 pb-2">
                      <p className="text-xs text-[#111827] dark:text-white font-semibold">
                        You
                      </p>
                      <p className="text-xs text-[#7A7B7C]">
                        Jul 18, 2024, 11:10:30 AM
                      </p>
                    </div>

                    <p className="text-xs dark:text-white pt-4 font-semibold md:pl-6">
                      Discussion Board Post Sent in Error
                    </p>
                    <p className="text-xs text-[#111827] dark:text-white pt-3 md:pl-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Condimentum morbi nunc, aliquet vulputate. Cras nibh quis
                      placerat porttitor pharetra ipsum integer. Scelerisque dui
                      sit et mauris odio nullam.
                    </p>

                    <div className="flex gap-5 mt-5 md:pl-6">
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

                    <div className="mt-5 md:w-[90%] md:pl-6">
                      <div className="flex gap-2">
                        <div className="w-full relative">
                          <input
                            type="text"
                            placeholder="Reply to Keith Wayman"
                            className="border border-[#E5E7EB] rounded-sm bg-[#F9FAFB] dark:bg-black w-full px-5 py-4 text-xs text-[#7A7B7C] placeholder:text-[#7A7B7C]"
                          />
                          <Image
                            src={"/assets/svg/attach.svg"}
                            alt=""
                            width={24}
                            height={24}
                            className="absolute right-3 top-3.5"
                          />
                        </div>
                        <div className="self-center w-[40px] h-[40px] md:h-auto md:w-[50px] flex justify-center items-center bg-[#3076B1] rounded-full p-2 cursor-pointer">
                          <Image
                            src={"/assets/svg/send-msg.svg"}
                            alt=""
                            width={21}
                            height={24}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-4">
                        <input type="checkbox" />
                        <p className="text-xs text-[#111827] dark:text-white">
                          Post Anonymously
                        </p>
                      </div>
                    </div>
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
