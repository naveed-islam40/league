import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Auditing from "../cu-policy/auditing";
import Datepickers from "../cu-policy/date-picker";

const data = [
  {
    name: "InfoSight",
    email: "Account Introduction Editing and Review",
    assign: "Keith Wayman",
    type: "Published Manual Review",
    date: "Jun 12, 2024",
    due: "Jun 12, 2024",
    status: "Not Completed",
  },
  {
    name: "CU PolicyPro",
    email: "Account Introduction Editing and Review",
    assign: "Keith Wayman",
    type: "Document Review",
    date: "Jun 12, 2024",
    due: "Jun 12, 2024",
    status: "Completed",
  },
  {
    name: "RecoveryPro",
    email: "Account Introduction Editing and Review",
    assign: "Keith Wayman",
    type: "Risk Assessment",
    date: "Jun 12, 2024",
    due: "Jun 12, 2024",
    status: "In Progress",
  },
  // Add more data items here for testing pagination
  {
    name: "Test Product 1",
    email: "Account Introduction Editing and Review",
    assign: "John Doe",
    type: "Type 1",
    date: "Jun 13, 2024",
    due: "Jun 14, 2024",
    status: "Not Completed",
  },
  {
    name: "Test Product 2",
    email: "Account Introduction Editing and Review",
    assign: "Jane Doe",
    type: "Type 2",
    date: "Jun 15, 2024",
    due: "Jun 16, 2024",
    status: "Completed",
  },
  {
    name: "Test Product 3",
    email: "Account Introduction Editing and Review",
    assign: "John Smith",
    type: "Type 3",
    date: "Jun 17, 2024",
    due: "Jun 18, 2024",
    status: "In Progress",
  },
  {
    name: "Test Product 4",
    email: "Account Introduction Editing and Review",
    assign: "Jane Smith",
    type: "Type 4",
    date: "Jun 19, 2024",
    due: "Jun 20, 2024",
    status: "Completed",
  },
  // Continue adding items as needed
];

export default function AssginmentTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="hidden md:grid grid-cols-12  mt-5 ">
        <div className="flex gap-5 col-span-10 md:col-span-7 pl-3 md:pl-0">
          <div className="w-full md:w-auto relative">
            <input
              type="text"
              className="bg-[#cfdde9] dark:bg-[#242424] md:bg-[#EFEFEF99] w-full md:w-auto lg:w-[400px] rounded-[6px] py-[10px] px-[15px] nun font-semibold text-[#7A7B7C] text-[16px] ps-[50px]"
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

      <div className="hidden md:block md:overflow-x-scroll">
        <div className="w-[1500px] xl:w-auto">
          <div className="bg-white dark:bg-black flex justify-between shadow-sm p-[15px] rounded-t-[4px] mt-5">
            <div className="flex gap-3 w-[160px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">Product</p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>

            <div className="w-[330px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">
                Assignment Name
              </p>
            </div>

            <div className="flex gap-3 w-[200px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">
                User Assigned
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>

            <div className="flex gap-3 w-[200px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">Type</p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>

            <div className="flex gap-3 w-[180px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">
                Assigned Date
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>

            <div className="flex gap-3 w-[180px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">Due Date</p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>

            <div className="flex gap-3 w-[150px]">
              <p className="font-normal text-[#7A7B7C] text-[16px]">Status</p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>
          <div>
            {currentRows.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black flex justify-between shadow-sm p-[15px] border-t-[1px] border-[#CCCCCC]"
              >
                <div className="w-[160px]">
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.name}
                  </p>
                </div>

                <div className="w-[330px]">
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.email}
                  </p>
                </div>

                <div className="w-[200px]">
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.assign}
                  </p>
                </div>

                <div className="w-[200px]">
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.type}
                  </p>
                </div>

                <div className="w-[180px]">
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.date}
                  </p>
                </div>
                <div className="w-[180px]">
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.due}
                  </p>
                </div>
                <div className="w-[150px]">
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative -z-10 hidden md:flex justify-between bg-white dark:bg-[#242424] p-3 mb-5 shadow-sm mt-5">
        <p className="flex gap-2 nun font-semibold text-[13px] self-center dark:text-white">
          Rows per page: <span className="">4</span>{" "}
          <IoIosArrowDown className="self-center" />
        </p>

        <div className="flex gap-2">
          <p
            className="self-center nun font-semibold text-[13px] cursor-pointer dark:text-white"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </p>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`nun font-semibold text-[13px] rounded-[4px] py-1 px-3 w-[32px] h-[32px] ${
                index + 1 === currentPage
                  ? "bg-[#3076B1] text-white"
                  : "bg-white text-[#3076B1] dark:text-white dark:bg-black"
              } border-[1px] border-[#f2f2f2] `}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <p
            className="nun font-semibold text-[13px] self-center cursor-pointer text-[#CCCCCC] dark:text-white   "
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </p>
        </div>
      </div>

      <div className="block md:hidden">
        <Auditing />
      </div>
    </>
  );
}
