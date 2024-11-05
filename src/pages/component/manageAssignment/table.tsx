import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Detail from "./detail";
import EditAssignment from "./editAssignment";
import Additional from "./additional";
import Delect from "../manageUser/delect";

type RowData = {
  id: number;
  isSelected: boolean;
  title: string;
  company: string;
  users: string;
  time: string;
  date: string;
  status: string;
};

const initialData: RowData[] = [
  {
    id: 1,
    isSelected: false,
    title: "Credit Union Members review",
    company: "RecoveryPro",
    users: "Beverly Naya",
    time: "01/26/2024, 11:10 AM",
    date: "01/26/2024",
    status: "In Progress",
  },
  {
    id: 2,
    isSelected: false,
    title: "Credit Union Members review",
    company: "RecoveryPro",
    users: "Beverly Naya",
    time: "01/26/2024, 11:10 AM",
    date: "01/26/2024",
    status: "Completed",
  },
  {
    id: 3,
    isSelected: false,
    title: "Credit Union Members review",
    company: "RecoveryPro",
    users: "Beverly Naya",
    time: "01/26/2024, 11:10 AM",
    date: "01/26/2024",
    status: "Overdue",
  },
  {
    id: 4,
    isSelected: false,
    title: "Credit Union Members review",
    company: "RecoveryPro",
    users: "Beverly Naya",
    time: "01/26/2024, 11:10 AM",
    date: "01/26/2024",
    status: "Overdue",
  },
  {
    id: 5,
    isSelected: false,
    title: "Credit Union Members review",
    company: "RecoveryPro",
    users: "Beverly Naya",
    time: "01/26/2024, 11:10 AM",
    date: "01/26/2024",
    status: "Overdue",
  },
  {
    id: 6,
    isSelected: false,
    title: "Credit Union Members review",
    company: "RecoveryPro",
    users: "Beverly Naya",
    time: "01/26/2024, 11:10 AM",
    date: "01/26/2024",
    status: "Overdue",
  },
  {
    id: 7,
    isSelected: false,
    title: "Credit Union Members review",
    company: "RecoveryPro",
    users: "Beverly Naya",
    time: "01/26/2024, 11:10 AM",
    date: "01/26/2024",
    status: "Overdue",
  },
];

export default function Tables() {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [complete, setComplete] = useState<number | null>(null);
  const [dropdownVisibleId, setDropdownVisibleId] = useState<number | null>(
    null
  );
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string;
  }>({});
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const completeRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const currentPageData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleRowClick = (id: number) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, isSelected: !row.isSelected } : row
    );
    setData(updatedData);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to first page on rows per page change
  };

  const toggleDropdown = (id: number) => {
    setDropdownVisibleId((prevId) => (prevId === id ? null : id));
  };

  const toggleOpen = (id: number) => {
    setComplete((prevId) => (prevId === id ? null : id));
  };

  const selectOption = (id: number, option: string) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [id]: option }));
    setDropdownVisibleId(null);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisibleId(null);
    }

    if (
      completeRef.current &&
      !completeRef.current.contains(event.target as Node)
    ) {
      setComplete(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-black md:dark:border-[1px] md:rounded-[4px] md:shadow-sm mt-3 md:mt-5">
        <div className="md:overflow-x-scroll">
          <div className="md:w-[1500px] xl:w-auto ">
            <div className="hidden md:flex justify-between p-[15px] ">
              <div className="flex gap-3 w-[300px]">
                <p className="font-normal text-[#7A7B7C] text-[16px]">
                  Assignment Name
                </p>
                <Image
                  src={"/assets/svg/sort.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex gap-3 w-[140px]">
                <p className="font-normal text-[#7A7B7C] text-[16px]">
                  Product
                </p>
                <Image
                  src={"/assets/svg/sort.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex gap-3 w-[180px]">
                <p className="font-normal text-[#7A7B7C] text-[16px]">
                  Assigned To
                </p>
                <Image
                  src={"/assets/svg/sort.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex gap-3 w-[180px]">
                <p className="font-normal text-[#7A7B7C] text-[16px]">
                  Date Added
                </p>
                <Image
                  src={"/assets/svg/sort.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex gap-3 w-[130px]">
                <p className="font-normal text-[#7A7B7C] text-[16px]">
                  Due Date
                </p>
                <Image
                  src={"/assets/svg/sort.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <div className="w-[440px] self-center">
                <Image
                  src={"/assets/svg/settings.svg"}
                  alt=""
                  title="Setting"
                  width={18}
                  height={18}
                  className="ml-auto cursor-pointer"
                />
              </div>
            </div>

            <div>
              {currentPageData.map((row) => (
                <div
                  key={row.id}
                  className={`md:hover:bg-[#f5f5f5] md:dark:hover:bg-[#272727] flex group justify-between py-4 px-[15px] border-b-[1px] border-[#f5f5f5] dark:border-transparent cursor-pointer ${
                    row.isSelected ? "bg-[#f5f5f5] dark:bg-[#272727]" : ""
                  }`}
                  onClick={() => handleRowClick(row.id)}
                >
                  <div className="flex gap-2 md:w-[300px]">
                    <Image
                      src={"/assets/svg/tick.svg"}
                      alt=""
                      width={20}
                      height={20}
                    />

                    <p className="block md:hidden font-normal text-[#3076B1] text-[14px] self-center">
                      {row.title}
                    </p>

                    <div className="hidden md:block self-center">
                      <Detail row={row.title} />
                    </div>
                  </div>
                  <div
                    className={`hidden md:block w-[140px] dark:text-white self-center font-normal text-[14px] ${
                      row.isSelected ? "text-[#7A7B7C] " : "text-[#121212]"
                    }`}
                  >
                    {row.company}
                  </div>
                  <div
                    className={`hidden md:block w-[180px] dark:text-white self-center font-normal text-[14px] ${
                      row.isSelected ? "text-[#7A7B7C]" : "text-[#121212]"
                    }`}
                  >
                    {row.users} <span className="text-[#3076B1]">+5</span>
                  </div>
                  <div
                    className={`hidden md:block w-[180px] dark:text-white  self-center font-normal text-[14px] ${
                      row.isSelected ? "text-[#7A7B7C]" : "text-[#121212]"
                    }`}
                  >
                    {row.time}
                  </div>
                  <div
                    className={`hidden md:block w-[130px] dark:text-white self-center font-normal text-[14px] ${
                      row.isSelected ? "text-[#7A7B7C]" : "text-[#121212]"
                    }`}
                  >
                    {row.date}
                  </div>
                  <div className=" md:w-[440px] flex gap-3 ">
                    <div className="hidden md:block relative">
                      <p
                        className={`self-center font-normal dark:text-white text-[12px] mt-2 ${
                          row.isSelected ? "text-[#7A7B7C]" : "text-[#3076B1]"
                        }`}
                        onClick={() => toggleOpen(row.id)}
                      >
                        3/5 completed
                      </p>

                      {complete === row.id && (
                        <div
                          ref={completeRef}
                          className="bg-white dark:bg-black shadow-sm w-[300px] p-[15px] absolute z-20 right-0"
                        >
                          <div className="flex justify-between py-2 border-b-[1px] border-[##f2f2f2]">
                            <p className="font-normal text-[12px] text-[#121F2C] dark:text-white">
                              Beverly Naya
                            </p>
                            <li className="font-normal text-[12px] text-[#0BA32D]">
                              Completed on Jul 2, 2024
                            </li>
                          </div>
                          <div className="flex justify-between py-2 border-b-[1px] border-[##f2f2f2]">
                            <p className="font-normal text-[12px] text-[#121F2C] dark:text-white">
                              Me
                            </p>
                            <li className="font-normal text-[12px] text-[#0BA32D]">
                              Completed on Jul 2, 2024
                            </li>
                          </div>
                          <div className="flex justify-between py-2 border-b-[1px] border-[##f2f2f2]">
                            <p className="font-normal text-[12px] text-[#121F2C] dark:text-white">
                              Morgan Freeman
                            </p>
                            <li className="font-normal text-[12px] text-[#ED4C5C]">
                              Completed on Jul 2, 2024
                            </li>
                          </div>
                          <div className="flex justify-between pt-2">
                            <p className="font-normal text-[12px] text-[#121F2C] dark:text-white">
                              Morgan Freeman
                            </p>
                            <li className="font-normal text-[12px] text-[#ED4C5C]">
                              Completed on Jul 2, 2024
                            </li>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <div
                        onClick={() => toggleDropdown(row.id)}
                        className="flex gap-2 md:col-span-2"
                      >
                        <button
                          className={`${
                            selectedOptions[row.id] === "In Progress"
                              ? "bg-[#CA930712] text-[#CA9307]"
                              : selectedOptions[row.id] === "Completed"
                              ? "bg-[#487F1812] text-[#487F18]"
                              : selectedOptions[row.id] === "Overdue"
                              ? "bg-[#B30000] text-white"
                              : selectedOptions[row.id] === "Not Started"
                              ? "bg-[#5D5C5C12] text-[#5D5C5C]"
                              : "bg-[#CA930712] text-[#CA9307]"
                          } nun font-normal text-[11px] xl:text-[14px] py-[5px] md:py-[8px] px-3 md:px-[15px] rounded-full md:w-[110px]`}
                        >
                          {selectedOptions[row.id] || "In Progress"}
                        </button>
                        <IoIosArrowDown className="hidden md:block text-[#7A7B7C] text-[22px] cursor-pointer self-center" />
                      </div>

                      {dropdownVisibleId === row.id && (
                        <div
                          ref={dropdownRef}
                          className="absolute right-0 z-30 bg-white mt-1 w-[140px]"
                        >
                          <div className="hover:bg-[#f2f2f2] p-2">
                            <button
                              onClick={() =>
                                selectOption(row.id, "In Progress")
                              }
                              className="bg-[#CA930712] text-[#CA9307] nun font-normal text-[11px] xl:text-[14px] py-[8px] px-[15px]  rounded-full w-[110px]"
                            >
                              In Progress
                            </button>
                          </div>
                          <div className="hover:bg-[#f2f2f2] p-2">
                            <button
                              onClick={() => selectOption(row.id, "Completed")}
                              className="bg-[#487F1812] text-[#487F18] nun font-normal text-[11px] xl:text-[14px] py-[8px] px-[15px]  rounded-full w-[110px]"
                            >
                              Completed
                            </button>
                          </div>
                          <div className="hover:bg-[#f2f2f2] p-2">
                            <button
                              onClick={() => selectOption(row.id, "Overdue")}
                              className="bg-[#B30000] text-white nun font-normal text-[11px] xl:text-[14px] py-[8px] px-[15px]  rounded-full w-[110px]"
                            >
                              Overdue
                            </button>
                          </div>
                          <div className="hover:bg-[#f2f2f2] p-2">
                            <button
                              onClick={() =>
                                selectOption(row.id, "Not Started")
                              }
                              className="bg-[#5D5C5C12] text-[#5D5C5C] nun font-normal text-[11px] xl:text-[14px] py-[8px] px-[15px]  rounded-full w-[110px]"
                            >
                              Not Started
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="gap-3 hidden group-hover:hidden md:group-hover:flex">
                      <EditAssignment />
                      <Image
                        src="/assets/svg/bx-rep.svg"
                        alt="User Settings"
                        title="Reload"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                      <Additional />
                      <Image
                        src="/assets/svg/bx-dup.svg"
                        alt="Duplicate"
                        title="Duplicate"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />

                      <Delect />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Pagination Controls */}
      <div className="hidden md:flex justify-between bg-white dark:bg-[#272727] p-3 my-5 rounded-[8px] shadow-sm">
        <div className="flex gap-2 nun font-semibold text-[13px] dark:text-white self-center">
          Rows per page:
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="outline-none rounded cursor-pointer dark:bg-transparent"
          >
            {[3, 5, 10, 15].map((size) => (
              <option key={size} value={size} className="dark:bg-black">
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Page navigation */}
        <div className="flex gap-2">
          <p
            className={`self-center nun font-semibold text-[13px] text-[#121F2C] dark:text-white ${
              currentPage === 1 ? "text-[#CCCCCC]" : "cursor-pointer"
            }`}
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          >
            Prev
          </p>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`border-[1px] border-[#f2f2f2] font-semibold text-[13px] rounded-[4px] py-1 px-3 ${
                currentPage === i + 1
                  ? "bg-[#3076B1] text-white"
                  : "hover:bg-[#f2f2f2] dark:bg-black dark:text-white"
              }`}
              aria-label={`Page ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
          <p
            className={`nun font-semibold text-[13px] self-center text-[#121F2C] dark:text-white ${
              currentPage === totalPages ? "text-[#CCCCCC]" : "cursor-pointer"
            }`}
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
          >
            Next
          </p>
        </div>
      </div>
    </>
  );
}
