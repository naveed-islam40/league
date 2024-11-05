import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Datepickers from "./date-picker";

const data = [
  {
    product: "InfoSight",
    no: "1100",
    name: "Introduction to Incident Management",
    date: "Jun 12, 2024",
    user: "Keith Wayman",
    note: "View",
  },
  {
    product: "InfoSight",
    no: "1100",
    name: "Introduction to Incident Management",
    date: "Jun 12, 2024",
    user: "Keith Wayman",
    note: "View",
  },
  {
    product: "InfoSight",
    no: "1100",
    name: "Introduction to Incident Management",
    date: "Jun 12, 2024",
    user: "Keith Wayman",
    note: "View",
  },
  {
    product: "InfoSight",
    no: "1100",
    name: "Introduction to Incident Management",
    date: "Jun 12, 2024",
    user: "Keith Wayman",
    note: "View",
  },
  {
    product: "InfoSight",
    no: "1100",
    name: "Introduction to Incident Management",
    date: "Jun 12, 2024",
    user: "Keith Wayman",
    note: "View",
  },
  {
    product: "InfoSight",
    no: "1100",
    name: "Introduction to Incident Management",
    date: "Jun 12, 2024",
    user: "Keith Wayman",
    note: "View",
  },
  {
    product: "InfoSight",
    no: "1100",
    name: "Introduction to Incident Management",
    date: "Jun 12, 2024",
    user: "Keith Wayman",
    note: "View",
  },
  {
    product: "InfoSight",
    no: "1100",
    name: "Introduction to Incident Management",
    date: "Jun 12, 2024",
    user: "Keith Wayman",
    note: "View",
  },
  {
    product: "InfoSight",
    no: "1100",
    name: "Introduction to Incident Management",
    date: "Jun 12, 2024",
    user: "Keith Wayman",
    note: "View",
  },
  {
    product: "InfoSight",
    no: "1100",
    name: "Introduction to Incident Management",
    date: "Jun 12, 2024",
    user: "Keith Wayman",
    note: "View",
  },
];

const ITEMS_PER_PAGE = 4;

export default function Auditing() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <div className="hidden md:grid grid-cols-12  mt-5 ">
        <div className="flex gap-5 col-span-10 md:col-span-7 pl-3 md:pl-0">
          <div className="w-full md:w-auto relative">
            <input
              type="text"
              className="bg-[#cfdde9] dark:bg-[#383838] md:bg-[#EFEFEF99] w-full md:w-auto lg:w-[400px] rounded-[6px] py-[10px] px-[15px] nun font-semibold text-[#7A7B7C] text-[16px] ps-[50px]"
            />
            <Image
              src={"/assets/svg/bi_search.svg"}
              alt="Search icon"
              width={16}
              height={16}
              className="absolute top-4 left-4"
            />
          </div>
          <div className="">
            <Datepickers />
          </div>
        </div>

        <div className="col-span-2 md:col-span-5 ml-auto pr-3 md:pr-0">
          <button className="hidden md:block font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] p-[10px] uppercase">
            download csv
          </button>
          <button className="block md:hidden font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] p-[10px] uppercase">
            <Image
              src={"/assets/svg/wdown.svg"}
              alt=""
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      <div className="flex md:hidden gap-3 mx-3 ">
        <div className="w-full">
          <Datepickers />
        </div>
        <button className="w-[60%] font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] p-[8px] uppercase">
          download csv
        </button>
      </div>

      <div className="md:overflow-x-scroll mb-5 md:mb-0 relative -z-10">
        <div className="md:w-[1200px] xl:w-auto">
          <div className="bg-white dark:bg-black hidden md:flex justify-between shadow-sm p-[15px] rounded-t-[4px] mt-5">
            <div className="flex gap-3 w-[200px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">Product</p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>

            <div className="flex gap-3 w-[160px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">
                Section No.
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>

            <div className="flex gap-3 w-[460px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">
                Section Name
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>

            <div className="flex gap-3 w-[180px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">Date</p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>

            <div className="w-[200px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">User</p>
            </div>

            <div className="w-[150px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">
                Auditing Note
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            {currentData.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black md:flex justify-between shadow-sm p-[15px] border-t-[1px] border-[#CCCCCC]"
              >
                <div className="md:w-[200px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                    Product
                  </p>

                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.product}
                  </p>
                </div>

                <div className="md:w-[160px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                    Section No
                  </p>

                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.no}
                  </p>
                </div>

                <div className="md:w-[460px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                    Section Name
                  </p>

                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.name}
                  </p>
                </div>

                <div className="md:w-[180px]">
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.date}
                  </p>
                </div>

                <div className="md:w-[200px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                    User
                  </p>

                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.user}
                  </p>
                </div>

                <div className="md:w-[150px] hidden md:block">
                  <p className="font-normal text-[#3076B1] text-[14px]">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="block md:hidden mt-3 md:mt-0">
            {currentData.map((item, index) => (
              <div
                key={index}
                className="mt-2 md:mt-0 relative bg-white dark:bg-black md:flex justify-between shadow-sm md:p-[15px] border-t-[1px] border-[#CCCCCC]"
              >
                <div className="grid grid-cols-2 gap-3 p-[15px] md:p-0">
                  <div className="md:w-[200px]">
                    <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                      Product
                    </p>

                    <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                      {item.product}
                    </p>
                  </div>

                  <div className="md:w-[160px]">
                    <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                      Section No
                    </p>

                    <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                      {item.no}
                    </p>
                  </div>

                  <div className="md:w-[460px]">
                    <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                      Section Name
                    </p>

                    <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                      {item.name}
                    </p>
                  </div>

                  <div className="bg-[#CCCCCC] py-1 px-2 rounded-bl-[8px] absolute top-0  right-0 md:w-[180px]">
                    <p className="font-normal text-[#121212] dark:text-white text-[12px]">
                      {item.date}
                    </p>
                  </div>

                  <div className="md:w-[200px]">
                    <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                      User
                    </p>

                    <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                      {item.user}
                    </p>
                  </div>
                </div>

                <div className="md:w-[150px] border-t-[1px] border-[#CCCCCC] ">
                  <p className="font-normal text-[#3076B1] text-[14px] py-2 text-center">
                    View Auditing Notes
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-between bg-white dark:bg-[#242424] p-3 mb-5 shadow-sm mt-5">
        <p className="flex gap-2 nun font-semibold text-[13px] self-center dark:text-white">
          Rows per page: <span className="">{ITEMS_PER_PAGE}</span>{" "}
          <IoIosArrowDown className="self-center" />
        </p>

        <div className="flex gap-2">
          <p
            className={`self-center nun font-semibold text-[13px] cursor-pointer dark:text-white ${
              currentPage === 1 ? "text-[#CCCCCC]" : ""
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </p>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`nun font-semibold text-[13px] rounded-[4px] py-1 px-3 w-[32px] h-[32px] ${
                currentPage === index + 1
                  ? "bg-[#3076B1] text-white"
                  : "border-[1px] border-[#f2f2f2] dark:text-white dark:bg-black"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <p
            className={`nun font-semibold text-[13px] self-center cursor-pointer dark:text-white ${
              currentPage === totalPages ? "text-[#CCCCCC]" : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </p>
        </div>
      </div>
    </>
  );
}
