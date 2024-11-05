import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Datepickers from "./date-picker";

// Define the type for the data items
interface PolicyData {
  no: string;
  name: string;
  last: string;
  action: string;
  date: string;
  view: string;
  approve: string;
  add: string;
}

const data: PolicyData[] = [
  {
    no: "1000",
    name: "Organization",
    last: "Keith Wayman",
    action: "Saved, Jun 12, 2024",
    date: "Jun 12, 2024",
    view: "Jun 12, 2024",
    approve: "Jun 12, 2024",
    add: "Jun 12, 2024",
  },
  {
    no: "1000",
    name: "Organization",
    last: "Keith Wayman",
    action: "Saved, Jun 12, 2024",
    date: "Jun 12, 2024",
    view: "Jun 12, 2024",
    approve: "Jun 12, 2024",
    add: "Jun 12, 2024",
  },
  {
    no: "1000",
    name: "Organization",
    last: "Keith Wayman",
    action: "Saved, Jun 12, 2024",
    date: "Jun 12, 2024",
    view: "Jun 12, 2024",
    approve: "Jun 12, 2024",
    add: "Jun 12, 2024",
  },
  {
    no: "1000",
    name: "Organization",
    last: "Keith Wayman",
    action: "Saved, Jun 12, 2024",
    date: "Jun 12, 2024",
    view: "Jun 12, 2024",
    approve: "Jun 12, 2024",
    add: "Jun 12, 2024",
  },
  {
    no: "1000",
    name: "Organization",
    last: "Keith Wayman",
    action: "Saved, Jun 12, 2024",
    date: "Jun 12, 2024",
    view: "Jun 12, 2024",
    approve: "Jun 12, 2024",
    add: "Jun 12, 2024",
  },
  // Add more data as needed
];

const CuPolicyContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 4;

  // Calculate the data to be displayed based on the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <>
      <div className="flex md:hidden gap-3 mx-3 ">
        <button className="[100%] w-full flex justify-center gap-1 py-[12px] px-4 nun font-semibold text-[16px] text-[#7A7B7C] border-[1px] border-[#D6D8E7] rounded-[10px] bg-white">
          <Image src={"/assets/svg/plus.svg"} alt="" width={24} height={24} />
          <p className="self-center mt-[1px]">Add a filter</p>
        </button>

        <button className="w-[60%] font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] p-[8px] uppercase">
          download csv
        </button>
      </div>

      <div className="hidden md:grid grid-cols-12  mt-5 ">
        <div className="flex gap-5 col-span-10 md:col-span-7 pl-3 md:pl-0">
          <div className="w-full md:w-auto relative">
            <input
              type="text"
              className="h-full bg-[#cfdde9] dark:bg-[#383838] md:bg-[#EFEFEF99] w-full md:w-auto lg:w-[400px] rounded-[6px] py-[10px] px-[15px] nun font-semibold text-[#7A7B7C] text-[16px] ps-[50px]"
            />
            <Image
              src={"/assets/svg/bi_search.svg"}
              alt="Search icon"
              width={16}
              height={16}
              className="absolute top-4 left-4"
            />
          </div>
        <button className="dark:bg-[#242424] dark:text-white flex justify-center gap-1 py-[10px] px-4 nun font-semibold text-[16px] text-[#7A7B7C] border-[1px] border-[#D6D8E7] rounded-[10px] bg-white">
          <Image src={"/assets/svg/plus.svg"} alt="" width={24} height={24} />
          <p className="self-center mt-[1px]">Add a filter</p>
        </button>

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

      <div className="overflow-x-auto mb-5 md:mb-0">
        <div className="bg-white dark:bg-black hidden md:flex justify-between shadow-sm p-[15px] md:rounded-t-[4px] mt-5 md:min-w-[1800px]">
          {/* Header */}
          <div className="hidden md:flex gap-3 w-[150px]">
            <p className="font-normal text-[#7A7B7C] text-[16px] self-center">
              Section No.
            </p>
            <Image src={"/assets/svg/sort.svg"} alt="" width={24} height={24} />
          </div>

          <div className="flex gap-3 w-[336px]">
            <p className="font-normal text-[#7A7B7C] text-[16px] self-center">
              Name
            </p>
            <Image src={"/assets/svg/sort.svg"} alt="" width={24} height={24} />
          </div>

          <div className="flex gap-3 w-[183px]">
            <p className="font-normal text-[#7A7B7C] text-[16px] self-center">
              Last Updated By
            </p>
            <Image src={"/assets/svg/sort.svg"} alt="" width={24} height={24} />
          </div>

          <div className="flex gap-3 w-[180px]">
            <p className="font-normal text-[#7A7B7C] text-[16px] self-center">
              Last Action
            </p>
            <Image src={"/assets/svg/sort.svg"} alt="" width={24} height={24} />
          </div>

          <div className="flex gap-3 w-[140px]">
            <p className="font-normal text-[#7A7B7C] text-[16px] self-center">
              Revised On
            </p>
            <Image src={"/assets/svg/sort.svg"} alt="" width={24} height={24} />
          </div>

          <div className="flex gap-3 w-[143px]">
            <p className="font-normal text-[#7A7B7C] text-[16px] self-center">
              Reviewed On
            </p>
            <Image src={"/assets/svg/sort.svg"} alt="" width={24} height={24} />
          </div>

          <div className="flex gap-3 w-[190px]">
            <p className="font-normal text-[#7A7B7C] text-[16px] self-center">
              Board Approved On
            </p>
            <Image src={"/assets/svg/sort.svg"} alt="" width={24} height={24} />
          </div>

          <div className="flex gap-3 w-[200px]">
            <p className="font-normal text-[#7A7B7C] text-[16px] self-center">
              Added to CU Policies
            </p>
            <Image src={"/assets/svg/sort.svg"} alt="" width={24} height={24} />
          </div>
        </div>

        <div className="mt-3 md:mt-0">
          {currentRows.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black md:flex justify-between shadow-sm p-[15px] border-t-[1px] border-[#CCCCCC] md:min-w-[1800px]"
            >
              <div className="grid md:flex grid-cols-2 gap-3 md:gap-0 ">
                <div className="md:w-[185px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] self-center block md:hidden">
                    Section No.
                  </p>
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.no}
                  </p>
                </div>

                <div className="md:w-[373px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] self-center block md:hidden">
                    Name
                  </p>
                  <p className="font-normal text-[#3076B1] text-[14px]">
                    {item.name}
                  </p>
                </div>

                <div className="md:w-[218px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] self-center block md:hidden">
                    Last Updated By
                  </p>
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.last}
                  </p>
                </div>

                <div className="md:w-[218px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] self-center block md:hidden">
                    Last Action
                  </p>
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.action}
                  </p>
                </div>

                <div className="md:w-[175px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] self-center block md:hidden">
                    Revised On
                  </p>
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.date}
                  </p>
                </div>

                <div className="md:w-[178px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] self-center block md:hidden">
                    Reviewed On
                  </p>
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.view}
                  </p>
                </div>

                <div className="md:w-[225px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] self-center block md:hidden">
                    Board Approved On
                  </p>
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.approve}
                  </p>
                </div>

                <div className="md:w-[200px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] self-center block md:hidden">
                    Added to CU Policies
                  </p>
                  <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                    {item.add}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="hidden md:flex justify-between bg-white dark:bg-[#242424] p-3 mb-5 shadow-sm mt-5">
        <p className="flex gap-2 nun font-semibold text-[13px] self-center dark:text-white">
          Rows per page: <span>{rowsPerPage}</span>{" "}
          <IoIosArrowDown className="self-center" />
        </p>

        <div className="flex gap-2">
          <p
            className={`self-center nun font-semibold text-[13px] cursor-pointer dark:text-white ${
              currentPage === 1 ? "text-[#CCCCCC]" : ""
            }`}
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            Prev
          </p>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`nun font-semibold text-[13px] rounded-[4px] py-1 px-3 w-[32px] h-[32px] ${
                currentPage === i + 1
                  ? "bg-[#3076B1] text-white"
                  : "border-[1px] border-[#f2f2f2] dark:bg-black dark:text-white"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <p
            className={`nun font-semibold text-[13px] self-center cursor-pointer dark:text-white ${
              currentPage === totalPages ? "text-[#CCCCCC]" : ""
            }`}
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
          >
            Next
          </p>
        </div>
      </div>
    </>
  );
};

export default CuPolicyContent;
