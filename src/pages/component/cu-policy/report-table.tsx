import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Datepickers from "./date-picker";

const data = [
  {
    name: "Keith Wayman",
    email: "keith.wayman@example.org",
    date: "Jul 19, 2024, 10:17:30 AM",
    value: 15,
    status: "Active",
  },
  {
    name: "Keith Wayman",
    email: "keith.wayman@example.org",
    date: "Jul 19, 2024, 10:17:30 AM",
    value: 15,
    status: "Active",
  },
  {
    name: "Keith Wayman",
    email: "keith.wayman@example.org",
    date: "Jul 19, 2024, 10:17:30 AM",
    value: 15,
    status: "Active",
  },
  {
    name: "Keith Wayman",
    email: "keith.wayman@example.org",
    date: "Jul 19, 2024, 10:17:30 AM",
    value: 15,
    status: "Active",
  },
  {
    name: "Keith Wayman",
    email: "keith.wayman@example.org",
    date: "Jul 19, 2024, 10:17:30 AM",
    value: 15,
    status: "Active",
  },
  {
    name: "Keith Wayman",
    email: "keith.wayman@example.org",
    date: "Jul 19, 2024, 10:17:30 AM",
    value: 15,
    status: "Active",
  },
];

export default function Reportable() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  // Calculate the indices for slicing the data array
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <>
      <div className="block md:hidden px-3 md:px-0 -mt-7">
        <Datepickers />
      </div>

      <div className="grid grid-cols-12  mt-5 relative -z-10 md:z-0">
        <div className="md:flex gap-5 col-span-10 md:col-span-7 pl-3 md:pl-0">
          <div className="w-full md:w-auto relative">
            <input
              type="text"
              className="bg-[#cfdde9] md:bg-[#EFEFEF99] dark:bg-[#383838] dark:text-white w-full md:w-auto lg:w-[400px] rounded-[6px] py-[10px] px-[15px] nun font-semibold text-[#7A7B7C] text-[16px] ps-[50px]"
            />
            <Image
              src={"/assets/svg/bi_search.svg"}
              alt="Search icon"
              width={16}
              height={16}
              className="absolute filter dark:invert top-4 left-4"
            />
          </div>
          <div className="hidden md:block">
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

      <div className="md:overflow-x-scroll my-5 md:my-0 relative -z-10 md:z-0">
        <div className="md:w-[1200px] xl:w-auto">
          <div className="bg-white dark:bg-black hidden md:flex justify-between shadow-sm p-[15px] rounded-t-[4px] mt-5">
            <div className="flex gap-3 w-[375px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">Name</p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>

            <div className="flex gap-3 w-[375px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">
                Email Address
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>

            <div className="flex gap-3 w-[250px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">
                Last Login Date
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>

            <div className="flex gap-3 w-[250px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">
                Total Logins
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>

            <div className="w-[100px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">Status</p>
            </div>
          </div>

          <div>
            {currentData.map((item, index) => (
              <div
                key={index}
                className=" relative bg-white dark:bg-black dark:hover:bg-[#242424] cursor-pointer md:flex justify-between shadow-sm p-[15px] border-b-[1px] md:border-b-0  md:border-t-[1px] border-[#CCCCCC]"
              >
                <div className="md:w-[375px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                    Name
                  </p>

                  <p className="font-normal text-[#3076B1] text-[14px]">
                    {item.name}
                  </p>
                </div>

                <div className="md:w-[375px] mt-2 md:mt-0">
                  <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                    Email
                  </p>

                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.email}
                  </p>
                </div>

                <div className="grid grid-cols-2 mt-2 md:mt-0">
                  <div className="md:w-[250px]">
                    <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                      Last Login Date
                    </p>

                    <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                      {item.date}
                    </p>
                  </div>

                  <div className="md:w-[250px]">
                    <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                      Total Logins
                    </p>

                    <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                      {item.value}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block md:w-[100px]">
                  <p className="font-normal text-[#0BA32D] text-[14px]">
                    {item.status}
                  </p>
                </div>
                <div className="block md:hidden absolute top-4 right-3 md:w-[100px]">
                  <p className="font-normal text-[#0BA32D] text-[14px]">
                    {item.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  
  
      <div className="hidden md:flex justify-between bg-white dark:bg-[#242424] p-3 mb-5 shadow-sm mt-5">
        <p className="flex gap-2 nun font-semibold text-[13px] self-center dark:text-white">
          Rows per page: <span>{rowsPerPage}</span>{" "}
          <IoIosArrowDown className="self-center" />
        </p>

        <div className="flex gap-2">
          <p
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`self-center nun font-semibold text-[13px] cursor-pointer dark:text-white ${
              currentPage === 1 ? "text-[#CCCCCC]" : ""
            }`}
          >
            Prev
          </p>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`nun font-semibold text-[13px] rounded-[4px] py-1 px-3 w-[32px] h-[32px] ${
                currentPage === i + 1
                  ? "bg-[#3076B1] text-white"
                  : "border-[1px] border-[#f2f2f2] dark:bg-black dark:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <p
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className={`nun font-semibold text-[13px] self-center cursor-pointer dark:text-white ${
              currentPage === totalPages ? "text-[#CCCCCC]" : ""
            }`}
          >
            Next
          </p>
        </div>
      </div>
    </>
  );
}
