import React, { useEffect, useRef, useState } from "react";
import { HiPlus } from "react-icons/hi2";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import EditPublish from "./component/cu-policy/editPublish";
import CreateNew from "./component/cu-policy/createNew";
import Delect from "./component/manageUser/delect";
import PrintModal from "./component/cu-policy/PrintModal";
import Assign from "./component/manageAssignment/assign";
import Bot from "../../public/assets/png/bot.png";

interface Document {
  id: number;
  isFav: boolean;
  title: string;
  status: string;
  editors: string;
  editorsCount: number;
  date: string;
  by: string;
}

export default function PublishDocx() {
  const filterRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3); // State for rows per page

  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 1,
      isFav: false,
      title: "Published Document 001",
      status: "Active",
      editors: "Moderators, Content Editors",
      editorsCount: 2,
      date: "-",
      by: "-",
    },
    {
      id: 2,
      isFav: false,
      title: "Published Document 002",
      status: "Inactive",
      editors: "Admin",
      editorsCount: 2,
      date: "01/26/2024",
      by: "Keith Wayman",
    },
    {
      id: 3,
      isFav: false,
      title: "Published Document 003",
      status: "Active",
      editors: "Content Editors",
      editorsCount: 2,
      date: "01/26/2024",
      by: "Keith Wayman",
    },
    {
      id: 4,
      isFav: false,
      title: "Published Document 004",
      status: "Inactive",
      editors: "Admin",
      editorsCount: 2,
      date: "01/27/2024",
      by: "John Doe",
    },
    {
      id: 5,
      isFav: false,
      title: "Published Document 005",
      status: "Active",
      editors: "Admin",
      editorsCount: 2,
      date: "01/28/2024",
      by: "Jane Doe",
    },
  ]);

  const handleClick = (id: number) => {
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc) =>
        doc.id === id ? { ...doc, isFav: !doc.isFav } : doc
      )
    );
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrentPage(1); // Reset to first page when changing rows per page
    setRowsPerPage(Number(event.target.value));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target as Node)
    ) {
      setFilter(false);
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Inactive" ? "text-red-500" : "text-[#0BA32D]";
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]);

  // Pagination logic
  const indexOfLastDocument = currentPage * rowsPerPage;
  const indexOfFirstDocument = indexOfLastDocument - rowsPerPage;
  const currentDocuments = documents.slice(
    indexOfFirstDocument,
    indexOfLastDocument
  );

  const totalPages = Math.ceil(documents.length / rowsPerPage);

  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
            <div className="bg-[#AD7EFB] p-[5px] -mt-1 md:-mt-[12px] xl:-mt-[10px] fixed w-full"></div>

            <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
              <Link
                href={"/cu-policies"}
                className="nun font-semibold text-[#3076B1] text-[14px]"
              >
                CU PolicyPro
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                Published Documents
              </Link>
              <div className="relative group">
                <Image
                  src={"/assets/svg/info.svg"}
                  alt=""
                  height={18}
                  width={18}
                  className="cursor-pointer"
                />

                <div className="invisible group-hover:visible flex absolute z-30 left-8 -top-2 w-[230px]  ">
                  <Image
                    src={"/assets/svg/tool.svg"}
                    alt=""
                    width={20}
                    height={20}
                    className="absolute top-2 -left-3"
                  />

                  <p className="font-normal text-[10px] bg-[#EEEDED]  text-[#121F2C] p-3">
                    Publishing is the process of selecting specific content
                    sections to be aggregated into one printable document.
                    Published documents can be used to distribute the credit
                    union policies and procedures, and/or the BCP Plan to staff,
                    board, or examiners.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:flex justify-between mt-8 md:mt-5 w-[95%] 2xl:w-[70%] mx-auto">
              <div className="hidden md:flex gap-4">
                <Image
                  src={"/assets/svg/bx-del.svg"}
                  alt=""
                  width={24}
                  height={24}
                />

                <CreateNew />
                <div className="relative " ref={filterRef}>
                  <button
                    onClick={() => setFilter(!filter)}
                    className="dark:bg-black dark:text-white uppercase flex gap-2 py-[12px] px-4 nun font-semibold text-[14px] text-[#7A7B7C] border-[1px] border-[#D6D8E7] rounded-[6px] bg-white"
                  >
                    <HiPlus className="text-[18px] self-center" />
                    Add a filter
                  </button>

                  {filter && (
                    <div className="dark:bg-black absolute z-10 left-0 mt-2 w-[200px] bg-white shadow-lg ">
                      <div className="nun font-normal dark:text-white text-[#121F2C] text-[14px] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] cursor-pointer  p-3">
                        Document Name
                      </div>
                      <div className="nun font-normal dark:text-white text-[#121F2C] text-[14px] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] cursor-pointer  p-3">
                        Status
                      </div>
                      <div className="nun font-normal dark:text-white text-[#121F2C] text-[14px] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] cursor-pointer  p-3">
                        Deleted Published
                      </div>
                      <div className="nun font-normal dark:text-white text-[#121F2C] text-[14px] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] cursor-pointer  p-3">
                        Published Date
                      </div>
                      <div className="nun font-normal dark:text-white text-[#121F2C] text-[14px] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] cursor-pointer  p-3">
                        Published by
                      </div>
                      <div className="nun font-normal dark:text-white text-[#121F2C] text-[14px] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] cursor-pointer  p-3">
                        Authorized Role
                      </div>
                    </div>
                  )}
                </div>
                <button className="dark:bg-[#212121] self-center flex gap-3 nun font-normal dark:text-white text-[#121F2C] text-[12px] bg-[#DEDEDE] rounded-full py-[5px] px-[10px]">
                  Deleted Published Documents
                  <Image
                    src={"/assets/svg/x-circle.svg"}
                    alt=""
                    width={18}
                    height={18}
                  />
                </button>
              </div>

              <button className="dark:bg-[#212121] self-center flex md:hidden gap-3 nun font-normal dark:text-white text-[#121F2C] text-[12px] bg-[#DEDEDE] rounded-full py-[5px] px-[10px]">
                Deleted Published Documents
                <Image
                  src={"/assets/svg/x-circle.svg"}
                  alt=""
                  width={18}
                  height={18}
                />
              </button>

              <div className="mt-3 flex md:hidden justify-between  border-b-[2px] border-[#CCCCCC]">
                <button
                  onClick={() => setFilter(!filter)}
                  className="dark:bg-black dark:text-white uppercase flex gap-2 py-[12px] md:px-4 nun font-semibold text-[14px] text-[#7A7B7C] md:border-[1px] border-[#D6D8E7] rounded-[6px] md:bg-white"
                >
                  <HiPlus className="text-[18px] self-center" />
                  Add a filter
                </button>

                <p className="font-normal text-[#3076B1] text-[14px] self-center">
                  Clear Filters
                </p>
              </div>
            </div>

            <div className="md:w-[95%] 2xl:w-[70%] mx-auto grid grid-cols-2 md:flex md:justify-end md:mr-12 mt-5 lg:-mt-8">
              <Link href={"/publishDocx"}>
                <button className="dark:bg-[#212121] dark:text-white w-full md:w-auto bg-white nun font-medium text-[14px] text-[#121212] rounded-tl-[4px] py-[15px] md:py-[10px] px-[30px]">
                  CU PolicyPro
                </button>
              </Link>

              <Link href={"/recover-publish"}>
                <button className="dark:bg-[#3c3c3c] dark:text-white w-full md:w-auto bg-[#E5E5E5] nun font-medium text-[14px] text-[#121212] rounded-tr-[4px] py-[15px] md:py-[10px] px-[30px]">
                  RecoveryPro
                </button>
              </Link>
            </div>

            <div className="  md:w-[95%] 2xl:w-[70%] mx-auto">
              <div className="md:overflow-x-scroll">
                <div className="md:w-[1500px] xl:w-auto dark:border-y-[1px] md:dark:border-[1px]">
                  <div className="hidden md:flex justify-between bg-white dark:bg-black  shadow-sm p-[15px]">
                    <div className="flex gap-3 w-[300px]">
                      <Image
                        src={"/assets/svg/fav.svg"}
                        className="-mt-[2px]"
                        alt=""
                        width={12}
                        height={12}
                      />
                      <input type="checkbox" className="mt-[2px]" />
                      <p className="font-normal text-[#7A7B7C] text-[14px] self-center">
                        Document Name
                      </p>
                      <Image
                        src={"/assets/svg/sort.svg"}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="w-[120px] flex gap-3">
                      <p className="font-normal text-[#7A7B7C] text-[14px] self-center">
                        Status
                      </p>
                      <Image
                        src={"/assets/svg/sort.svg"}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="w-[250px] flex gap-3">
                      <p className="font-normal text-[#7A7B7C] text-[14px] self-center">
                        Authorized Role
                      </p>
                      <Image
                        src={"/assets/svg/sort.svg"}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="w-[230px] flex gap-3">
                      <p className="font-normal text-[#7A7B7C] text-[14px] self-center">
                        Published Date
                      </p>
                      <Image
                        src={"/assets/svg/sort.svg"}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="w-[230px] flex gap-3">
                      <p className="font-normal text-[#7A7B7C] text-[14px] self-center">
                        Published by
                      </p>
                      <Image
                        src={"/assets/svg/sort.svg"}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="w-[300px] self-center">
                      <Image
                        src={"/assets/svg/settings.svg"}
                        alt=""
                        width={18}
                        height={18}
                        className="cursor-pointer ml-auto"
                      />
                    </div>
                  </div>

                  <div className="">
                    {currentDocuments.map((doc) => (
                      <div
                        key={doc.id}
                        className="group md:flex justify-between bg-white dark:bg-black dark:hover:bg-[#242424] hover:bg-[#EEEEEE] border-t-[1px] border-[#CCCCCC] shadow-sm p-[15px]"
                      >
                        <div className="relative flex gap-3 md:w-[300px]">
                          <div
                            onClick={() => handleClick(doc.id)}
                            className="md:self-center cursor-pointer mt-[5px] md:mt-0"
                          >
                            <Image
                              src={
                                doc.isFav
                                  ? "/assets/svg/fav2.svg"
                                  : "/assets/svg/fav.svg"
                              }
                              alt="Favorite"
                              width={12}
                              height={12}
                            />
                          </div>
                          <input
                            type="checkbox"
                            className="hidden md:self-center"
                          />

                          <div className="self-center">
                            <p className="font-normal text-[#7A7B7C] text-[14px] self-center md:hidden">
                              Document Name
                            </p>
                            <p className=" font-normal text-[#3076B1] text-[14px] self-center cursor-pointer">
                              {doc.title}
                            </p>
                          </div>

                          <p
                            className={` block md:hidden absolute top-0 right-3 font-normal text-[14px] ${getStatusColor(
                              doc.status
                            )}`}
                          >
                            {doc.status}
                          </p>
                        </div>
                        <div className="hidden md:block md:w-[120px] self-center">
                          <p
                            className={`font-normal text-[14px] ${getStatusColor(
                              doc.status
                            )}`}
                          >
                            {doc.status}
                          </p>
                        </div>

                        <div className="md:w-[250px] self-center mt-2 md:mt-0 ml-6 md:ml-0">
                          <p className="font-normal text-[#7A7B7C] text-[14px] self-center md:hidden">
                            Authorized Role
                          </p>
                          <p className="font-normal text-[14px] dark:text-white">
                            {doc.editors}{" "}
                            <span className="text-[#3076B1] cursor-pointer">
                              +{doc.editorsCount}
                            </span>
                          </p>
                        </div>
                        <div className="grid grid-cols-2 mt-2 md:mt-0 ml-6 md:ml-0">
                          <div className="md:w-[230px] self-center">
                            <p className="font-normal text-[#7A7B7C] text-[14px] self-center md:hidden">
                              Published Date
                            </p>
                            <p className="font-normal text-[14px] dark:text-white">
                              {doc.date}
                            </p>
                          </div>
                          <div className="md:w-[230px] self-center">
                            <p className="font-normal text-[#7A7B7C] text-[14px] self-center md:hidden">
                              Published By
                            </p>
                            <p className="font-normal text-[14px] dark:text-white">
                              {doc.by}
                            </p>
                          </div>
                        </div>
                        <div className="md:w-[300px] gap-4 justify-end self-center hidden md:flex invisible group-hover:visible">
                          <EditPublish />
                          <Assign />
                          <Image
                            src="/assets/svg/bx-word.svg"
                            alt="Word"
                            width={24}
                            height={24}
                            className="cursor-pointer"
                          />
                          <Image
                            src="/assets/svg/bx-pdf.svg"
                            alt="PDF"
                            width={24}
                            height={24}
                            className="cursor-pointer"
                          />
                          <PrintModal />
                          <Delect />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className=" hidden md:flex justify-between bg-white dark:bg-[#242424] p-3 my-5 rounded-[8px] shadow-sm">
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
                    onClick={() =>
                      currentPage > 1 && handlePageChange(currentPage - 1)
                    }
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
                      currentPage === totalPages
                        ? "text-[#CCCCCC]"
                        : "cursor-pointer"
                    }`}
                    onClick={() =>
                      currentPage < totalPages &&
                      handlePageChange(currentPage + 1)
                    }
                  >
                    Next
                  </p>
                </div>
              </div>
            </div>
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
