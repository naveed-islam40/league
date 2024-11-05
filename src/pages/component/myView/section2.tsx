import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  IoMdArrowDropdown,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";

interface Item {
  id: number;
  filePath: string;
  title: string;
  author: string;
  date: string;
}

const data = [
  {
    id: 1,
    title: "1100.10: Organization",
    author: "Beth Elizabeth",
    date: "01/26/2024, 11:10 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 2,
    title: "1100.16: Landing Policies to Review",
    author: "John Doe",
    date: "01/27/2024, 09:15 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 3,
    title: "Policy 1600: Account Transaction",
    author: "Jane Smith",
    date: "01/28/2024, 02:20 PM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 4,
    title: "1100.10: Organization",
    author: "Beth Elizabeth",
    date: "01/26/2024, 11:10 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 5,
    title: "1100.16: Lending Policies to Review",
    author: "John Doe",
    date: "01/27/2024, 09:15 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 6,
    title: "Policy 1600: Account Transaction",
    author: "Jane Smith",
    date: "01/28/2024, 02:20 PM",
    filePath: "/assets/png/file.png",
  },
];

const dataTwo = [
  {
    id: 1,
    title: "1100.10: Organization",
    author: "Beth Elizabeth",
    date: "01/26/2024, 11:10 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 2,
    title: "1100.16: Landing Policies to Review",
    author: "John Doe",
    date: "01/27/2024, 09:15 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 3,
    title: "Policy 1600: Account Transaction",
    author: "Jane Smith",
    date: "01/28/2024, 02:20 PM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 4,
    title: "1100.10: Organization",
    author: "Beth Elizabeth",
    date: "01/26/2024, 11:10 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 5,
    title: "1100.16: Lending Policies to Review",
    author: "John Doe",
    date: "01/27/2024, 09:15 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 6,
    title: "Policy 1600: Account Transaction",
    author: "Jane Smith",
    date: "01/28/2024, 02:20 PM",
    filePath: "/assets/png/file.png",
  },
];

const dataThree = [
  {
    id: 1,
    title: "1100.10: Organization",
    author: "Beth Elizabeth",
    date: "01/26/2024, 11:10 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 2,
    title: "1100.16: Landing Policies to Review",
    author: "John Doe",
    date: "01/27/2024, 09:15 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 3,
    title: "Policy 1600: Account Transaction",
    author: "Jane Smith",
    date: "01/28/2024, 02:20 PM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 4,
    title: "1100.10: Organization",
    author: "Beth Elizabeth",
    date: "01/26/2024, 11:10 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 5,
    title: "1100.16: Lending Policies to Review",
    author: "John Doe",
    date: "01/27/2024, 09:15 AM",
    filePath: "/assets/png/file.png",
  },
  {
    id: 6,
    title: "Policy 1600: Account Transaction",
    author: "Jane Smith",
    date: "01/28/2024, 02:20 PM",
    filePath: "/assets/png/file.png",
  },
];

export default function Section2() {
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [content, setContent] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [accordionOpen, setAccordionOpen] = useState(false); // Accordion state

  const toggleAccordion = () => {
    setAccordionOpen((prevState) => !prevState); // Toggle accordion state
  };

  const handleUpdate = (tabIndex: any) => {
    setContent(tabIndex);
  };

  const handleImageClick = (id: number) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* section 2    */}

      <div className="bg-white dark:bg-black md:dark:border-[1px] md:dark:border-white md:rounded-[7px] p-[15px] drop-shadow-sm md:mt-5 border-t-[1px] border-[#f2f2f2] md:border-transparent">
        <div className="flex justify-between">
          <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px] xl:text-[18px]">
            Published Documents
          </p>

          <div className="hidden md:flex gap-5">
            <Link href={"/publishDocx"} className="self-center flex gap-2">
              <p className="nun font-semibold text-[12px] cursor-pointer text-[#3076B1]">
                See All
              </p>
              <FaArrowRight className="self-center text-[14px] text-[#3076B1] cursor-pointer" />
            </Link>

            <Image
              src={"/assets/svg/dots.svg"}
              alt=""
              width={24}
              height={24}
              className="self-center cursor-pointer"
            />
          </div>
          {!accordionOpen && (
            <IoIosArrowDown
              onClick={toggleAccordion}
              className="text-[#121F2C] dark:text-white text-[25px] block md:hidden"
            />
          )}
          {/* This will render the up arrow when the accordion is open */}
          {accordionOpen && (
            <IoIosArrowUp
              onClick={toggleAccordion}
              className="text-[#121F2C] dark:text-white text-[25px] block md:hidden"
            />
          )}
        </div>

        {/* Accordion for Mobile */}
        {accordionOpen && (
          <div className="md:hidden">
            <div className="my-5 flex gap-5">
              <button
                className={
                  content === 1
                    ? "active tab nun bg-[#EEF5FF] font-semibold text-[14px] text-[#3076B1] border-[1px] border-[#3076B1] rounded-full py-[5px] w-full"
                    : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white border-[1px] border-[#3076B1] rounded-full py-[5px] w-full"
                }
                onClick={() => handleUpdate(1)}
              >
                All
              </button>
              <button
                className={
                  content === 2
                    ? "active tab nun bg-[#f6f2fb] font-semibold text-[14px] text-[#AD7EFB] border-[1px] border-[#AD7EFB] rounded-full px-[10px] py-[5px] w-full"
                    : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white  border-[1px] border-[#AD7EFB] rounded-full px-[10px] py-[5px] w-full"
                }
                onClick={() => handleUpdate(2)}
              >
                Policies/Procedures
              </button>
              <button
                className={
                  content === 3
                    ? "active tab nun bg-[#f8f6de] font-semibold text-[14px] text-[#FFDF36] border-[1px] border-[#FFDF36] rounded-full py-[5px] w-full"
                    : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white  border-[1px] border-[#FFDF36] rounded-full py-[5px] w-full"
                }
                onClick={() => handleUpdate(3)}
              >
                BCP
              </button>
            </div>

            {content === 1 && (
              <div>
                {data.map((item, index) => (
                  <div
                    key={item.id}
                    className={`grid md:grid-cols-12 ${
                      index !== data.length - 1
                        ? "border-b-[1px] border-[#F5F5F5]"
                        : ""
                    } py-2`}
                  >
                    <div className="md:col-span-6 flex gap-2">
                      <button
                        className={`rounded-[3px] w-[30px] h-[30px] ${
                          index === 1 ? "bg-[#FFDF36]" : "bg-[#AD7EFB]"
                        }`}
                      >
                        <Image
                          src={item.filePath}
                          alt={item.title}
                          width={14}
                          height={18}
                          className="mx-auto"
                        />
                      </button>
                      <div>
                        <Link
                          href={"/organization"}
                          className="nun font-normal text-[#3076B1] text-[14px]  self-center"
                        >
                          {item.title}
                        </Link>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                          by <span className="text-black dark:text-white">{item.author}</span>
                        </p>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] mt-1 ">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block md:col-span-3 self-center">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                        by <span className="text-black dark:text-white">{item.author}</span>
                      </p>
                    </div>
                    <div className="hidden md:block md:col-span-3 self-center ml-auto">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {content === 2 && (
              <div>
                {dataTwo.map((item, index) => (
                  <div
                    key={item.id}
                    className={`grid md:grid-cols-12 ${
                      index !== data.length - 1
                        ? "border-b-[1px] border-[#F5F5F5]"
                        : ""
                    } py-2`}
                  >
                    <div className="md:col-span-6 flex gap-2">
                      <button className="rounded-[3px] w-[30px] h-[30px] bg-[#AD7EFB]  ">
                        <Image
                          src={item.filePath}
                          alt={item.title}
                          width={14}
                          height={18}
                          className="mx-auto"
                        />
                      </button>
                      <div>
                        <Link
                          href={"/organization"}
                          className="nun font-normal text-[#3076B1] text-[14px]  self-center"
                        >
                          {item.title}
                        </Link>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                          by <span className="text-black dark:text-white">{item.author}</span>
                        </p>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] mt-1 ">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block md:col-span-3 self-center">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                        by <span className="text-black dark:text-white">{item.author}</span>
                      </p>
                    </div>
                    <div className="hidden md:block md:col-span-3 self-center ml-auto">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {content === 3 && (
              <div>
                {dataThree.map((item, index) => (
                  <div
                    key={item.id}
                    className={`grid md:grid-cols-12 ${
                      index !== data.length - 1
                        ? "border-b-[1px] border-[#F5F5F5]"
                        : ""
                    } py-2`}
                  >
                    <div className="md:col-span-6 flex gap-2">
                      <button className="rounded-[3px] w-[30px] h-[30px] bg-[#FFDF36]">
                        <Image
                          src={item.filePath}
                          alt={item.title}
                          width={14}
                          height={18}
                          className="mx-auto"
                        />
                      </button>
                      <div>
                        <Link
                          href={"/organization"}
                          className="nun font-normal text-[#3076B1] text-[14px]  self-center"
                        >
                          {item.title}
                        </Link>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                          by <span className="text-black dark:text-white">{item.author}</span>
                        </p>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] mt-1 ">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block md:col-span-3 self-center">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                        by <span className="text-black dark:text-white">{item.author}</span>
                      </p>
                    </div>
                    <div className="hidden md:block md:col-span-3 self-center ml-auto">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Link
              href={"/publishDocx"}
              className="self-center flex justify-end md:hidden gap-2 mt-5"
            >
              <p className="nun font-semibold text-[12px] cursor-pointer text-[#3076B1]">
                See All
              </p>
              <FaArrowRight className="self-center text-[14px] text-[#3076B1] cursor-pointer" />
            </Link>
          </div>
        )}

        {/* Desktop View (always visible on larger screens) */}

        <div className="hidden md:block">
          <div className="my-5 flex gap-5">
            <button
              className={
                content === 1
                  ? "active tab nun bg-[#EEF5FF] font-semibold text-[14px] text-[#3076B1] border-[1px] border-[#3076B1] rounded-full py-[5px] w-full"
                  : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white border-[1px] border-[#3076B1] rounded-full py-[5px] w-full"
              }
              onClick={() => handleUpdate(1)}
            >
              All
            </button>
            <button
              className={
                content === 2
                  ? "active tab nun bg-[#f6f2fb] font-semibold text-[14px] text-[#AD7EFB] border-[1px] border-[#AD7EFB] rounded-full py-[5px] w-full"
                  : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white  border-[1px] border-[#AD7EFB] rounded-full py-[5px] w-full"
              }
              onClick={() => handleUpdate(2)}
            >
              Policies/Procedures
            </button>
            <button
              className={
                content === 3
                  ? "active tab nun bg-[#f8f6de] font-semibold text-[14px] text-[#FFDF36] border-[1px] border-[#FFDF36] rounded-full py-[5px] w-full"
                  : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white border-[1px] border-[#FFDF36] rounded-full py-[5px] w-full"
              }
              onClick={() => handleUpdate(3)}
            >
              BCP
            </button>
          </div>

          {content === 1 && (
            <div>
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className={`grid md:grid-cols-12 ${
                    index !== data.length - 1
                      ? "border-b-[1px] border-[#F5F5F5]"
                      : ""
                  } py-2`}
                >
                  <div className="md:col-span-6 flex gap-2">
                    <div
                      onClick={() => handleImageClick(item.id)}
                      className="cursor-pointer self-center"
                    >
                      {favorites[item.id] ? (
                        <Image
                          src={"/assets/svg/fav2.svg"}
                          alt="Favorite 2"
                          width={14}
                          height={14}
                          className="mr-2"
                        />
                      ) : (
                        <Image
                          src={"/assets/svg/fav.svg"}
                          alt="Favorite"
                          width={14}
                          height={14}
                          className="mr-2"
                        />
                      )}
                    </div>

                    <button
                      className={`rounded-[3px] w-[30px] h-[30px] ${
                        index === 1 ? "bg-[#FFDF36]" : "bg-[#AD7EFB]"
                      }`}
                    >
                      <Image
                        src={item.filePath}
                        alt={item.title}
                        width={14}
                        height={18}
                        className="mx-auto"
                      />
                    </button>
                    <div>
                      <Link
                        href={"/organization"}
                        className="nun font-normal text-[#3076B1] text-[14px]  self-center"
                      >
                        {item.title}
                      </Link>
                      <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                        by <span className="text-black dark:text-white">{item.author}</span>
                      </p>
                      <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] mt-1 ">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:col-span-3 self-center">
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                      by <span className="text-black dark:text-white">{item.author}</span>
                    </p>
                  </div>
                  <div className="hidden md:block md:col-span-3 self-center ml-auto">
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {content === 2 && (
            <div>
              {dataTwo.map((item, index) => (
                <div
                  key={item.id}
                  className={`grid md:grid-cols-12 ${
                    index !== data.length - 1
                      ? "border-b-[1px] border-[#F5F5F5]"
                      : ""
                  } py-2`}
                >
                  <div className="md:col-span-6 flex gap-2">
                    <button className="rounded-[3px] w-[30px] h-[30px] bg-[#AD7EFB] ">
                      <Image
                        src={item.filePath}
                        alt={item.title}
                        width={14}
                        height={18}
                        className="mx-auto"
                      />
                    </button>
                    <div>
                      <Link
                        href={"/organization"}
                        className="nun font-normal text-[#3076B1] text-[14px]  self-center"
                      >
                        {item.title}
                      </Link>
                      <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                        by <span className="text-black dark:text-white">{item.author}</span>
                      </p>
                      <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] mt-1 ">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:col-span-3 self-center">
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                      by <span className="text-black dark:text-white">{item.author}</span>
                    </p>
                  </div>
                  <div className="hidden md:block md:col-span-3 self-center ml-auto">
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {content === 3 && (
            <div>
              {dataThree.map((item, index) => (
                <div
                  key={item.id}
                  className={`grid md:grid-cols-12 ${
                    index !== data.length - 1
                      ? "border-b-[1px] border-[#F5F5F5]"
                      : ""
                  } py-2`}
                >
                  <div className="md:col-span-6 flex gap-2">
                    <button className="rounded-[3px] w-[30px] h-[30px] bg-[#FFDF36]">
                      <Image
                        src={item.filePath}
                        alt={item.title}
                        width={14}
                        height={18}
                        className="mx-auto"
                      />
                    </button>
                    <div>
                      <Link
                        href={"/organization"}
                        className="nun font-normal text-[#3076B1] text-[14px]  self-center"
                      >
                        {item.title}
                      </Link>
                      <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                        by <span className="text-black">{item.author}</span>
                      </p>
                      <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] mt-1 ">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:col-span-3 self-center">
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[14px] ">
                      by <span className="text-black dark:text-white">{item.author}</span>
                    </p>
                  </div>
                  <div className="hidden md:block md:col-span-3 self-center ml-auto">
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
