import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";

const initialData = [
  {
    title: "1200 General Operations Policy",
    img: "/assets/svg/type.svg",
    type: "Model Content Update",
    product: "CU PolicyPro",
    time: "Jul 8, 2024, 3:36 PM",
    status: "Read",
  },
  {
    title: "1500 Emergency Powers",
    img: "/assets/svg/type2.svg",
    type: "New Assignment",
    product: "RecoveryPro",
    time: "Jul 8, 2024, 3:36 PM",
    status: "Unread",
  },
  {
    title: "Fair Lending Act",
    img: "/assets/svg/type3.svg",
    type: "Compliance Topic Update",
    product: "InfoSight",
    time: "Jul 8, 2024, 3:36 PM",
    status: "Read",
  },
  {
    title: "1200 General Operations Policy",
    img: "/assets/svg/type.svg",
    type: "Model Content Update",
    product: "CU PolicyPro",
    time: "Jul 8, 2024, 3:36 PM",
    status: "Read",
  },
  {
    title: "1500 Emergency Powers",
    img: "/assets/svg/type2.svg",
    type: "New Assignment",
    product: "RecoveryPro",
    time: "Jul 8, 2024, 3:36 PM",
    status: "Unread",
  },
  {
    title: "Fair Lending Act",
    img: "/assets/svg/type3.svg",
    type: "Compliance Topic Update",
    product: "InfoSight",
    time: "Jul 8, 2024, 3:36 PM",
    status: "Read",
  },
  {
    title: "1200 General Operations Policy",
    img: "/assets/svg/type.svg",
    type: "Model Content Update",
    product: "CU PolicyPro",
    time: "Jul 8, 2024, 3:36 PM",
    status: "Read",
  },
  {
    title: "1500 Emergency Powers",
    img: "/assets/svg/type2.svg",
    type: "New Assignment",
    product: "RecoveryPro",
    time: "Jul 8, 2024, 3:36 PM",
    status: "Unread",
  },
  {
    title: "Fair Lending Act",
    img: "/assets/svg/type3.svg",
    type: "Compliance Topic Update",
    product: "InfoSight",
    time: "Jul 8, 2024, 3:36 PM",
    status: "Read",
  },
  {
    title: "1200 General Operations Policy",
    img: "/assets/svg/type.svg",
    type: "Model Content Update",
    product: "CU PolicyPro",
    time: "Jul 8, 2024, 3:36 PM",
    status: "Read",
  },
  {
    title: "1500 Emergency Powers",
    img: "/assets/svg/type2.svg",
    type: "New Assignment",
    product: "RecoveryPro",
    time: "Jul 8, 2024, 3:36 PM",
    status: "Unread",
  },
  {
    title: "Fair Lending Act",
    img: "/assets/svg/type3.svg",
    type: "Compliance Topic Update",
    product: "InfoSight",
    time: "Jul 8, 2024, 3:36 PM",
    status: "Read",
  },
];

type Notification = {
  id: number;
  message: string;
  timestamp: string;
  read: boolean;
  time: string;
  dot: any;
  img: any;
};

export default function NotificationTable() {
  const [data, setData] = useState(initialData);
  const [optionDropdownOpen, setOptionDropdownOpen] = useState<number | null>(
    null
  );
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      dot: "/assets/svg/dot.svg",
      img: "/assets/svg/pu4.svg",
      message: "New Assignment - Policy Review",
      timestamp: "08/12/24",
      time: "3:36 PM",
      read: false,
    },
    {
      id: 2,
      dot: "/assets/svg/dot.svg",
      img: "/assets/svg/pu.svg",
      message: "An Assignment has been updated",
      timestamp: "08/12/24",
      time: "3:36 PM",
      read: false,
    },
    {
      id: 3,
      dot: "/assets/svg/dot.svg",
      img: "/assets/svg/pu2.svg",
      message: "Content has been shared with you",
      timestamp: "08/12/24",
      time: "3:36 PM",
      read: false,
    },
    {
      id: 4,
      dot: "/assets/svg/dot.svg",
      img: "/assets/svg/pu3.svg",
      message: "Content has been shared with you",
      timestamp: "08/12/24",
      time: "3:36 PM",
      read: false,
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [loading, setLoading] = useState(true); // State to handle loading
  const notificationDropdownRef = useRef<HTMLDivElement>(null);
  const optionDropdownRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const currentPageData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (event: any) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      notificationDropdownRef.current &&
      !notificationDropdownRef.current.contains(event.target as Node)
    ) {
      setOptionDropdownOpen(null);
    }

    if (
      optionDropdownRef.current &&
      !optionDropdownRef.current.contains(event.target as Node)
    ) {
      setOptionDropdownOpen(null);
    }
  };

  const markAsUnread = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: false,
              dot: "/assets/svg/green-dot.svg",
            }
          : notification
      )
    );
  };

  const toggleOptionDropdown = (id: number) => {
    setOptionDropdownOpen(optionDropdownOpen === id ? null : id);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Simulate a loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="hidden md:block bg-white dark:bg-black dark:border-[1px] dark:border-white rounded-[4px] shadow-sm mt-5 ">
        <div className="overflow-x-scroll">
          <div className="w-[1500px] xl:w-auto ">
            {loading ? (
              <div className="flex justify-between dark:border-b-[1px] dark:border-[#f2f2f2] p-[15px]">
                <div className="flex gap-3 w-[253px]">
                  <p className="skeleton h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded-full "></p>
                  <div className="skeleton h-6 w-6"></div>
                </div>
                <div className="flex gap-3 w-[220px]">
                  <p className="skeleton h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                  <div className="skeleton h-6 w-6"></div>
                </div>
                <div className="flex gap-3 w-[150px]">
                  <p className="skeleton h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                  <div className="skeleton h-6 w-6"></div>
                </div>
                <div className="flex gap-3 w-[170px]">
                  <p className="skeleton h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                  <div className="skeleton h-6 w-6"></div>
                </div>
                <div className="flex gap-3 w-[150px]">
                  <p className="skeleton h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                  <div className="skeleton h-6 w-6"></div>
                </div>
                <div className="w-[330px] bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              </div>
            ) : (
              <div className="flex justify-between dark:border-b-[1px] dark:border-[#f2f2f2] p-[15px] ">
                <div className="flex gap-3 w-[253px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px]">
                    Title
                  </p>
                  <Image
                    src={"/assets/svg/sort.svg"}
                    alt="sort"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex gap-3 w-[220px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px]">Type</p>
                  <Image
                    src={"/assets/svg/sort.svg"}
                    alt="sort"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex gap-3 w-[150px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px]">
                    Product
                  </p>
                  <Image
                    src={"/assets/svg/sort.svg"}
                    alt="sort"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex gap-3 w-[170px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px]">
                    Received on
                  </p>
                  <Image
                    src={"/assets/svg/sort.svg"}
                    alt="sort"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex gap-3 w-[150px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px]">
                    Status
                  </p>
                  <Image
                    src={"/assets/svg/sort.svg"}
                    alt="sort"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="w-[330px]"></div>
              </div>
            )}

            {loading ? (
              <>
                <div className="flex justify-between border-b-[1px] border-[#f2f2f2] p-[15px]">
                  <div className="flex gap-3 w-[253px]">
                    <p className="skeleton h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded-full "></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="flex gap-3 w-[220px]">
                    <p className="skeleton h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="flex gap-3 w-[150px]">
                    <p className="skeleton h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="flex gap-3 w-[170px]">
                    <p className="skeleton h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="flex gap-3 w-[150px]">
                    <p className="skeleton h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="w-[330px] bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                </div>
                <div className="flex justify-between border-b-[1px] border-[#f2f2f2] p-[15px]">
                  <div className="flex gap-3 w-[253px]">
                    <p className="skeleton h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded-full "></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="flex gap-3 w-[220px]">
                    <p className="skeleton h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="flex gap-3 w-[150px]">
                    <p className="skeleton h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="flex gap-3 w-[170px]">
                    <p className="skeleton h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="flex gap-3 w-[150px]">
                    <p className="skeleton h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="w-[330px] bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                </div>
                <div className="flex justify-between border-b-[1px] border-[#f2f2f2] p-[15px]">
                  <div className="flex gap-3 w-[253px]">
                    <p className="skeleton h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded-full "></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="flex gap-3 w-[220px]">
                    <p className="skeleton h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="flex gap-3 w-[150px]">
                    <p className="skeleton h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="flex gap-3 w-[170px]">
                    <p className="skeleton h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="flex gap-3 w-[150px]">
                    <p className="skeleton h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></p>
                    <div className="skeleton h-6 w-6"></div>
                  </div>
                  <div className="w-[330px] bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                </div>
              </>
            ) : (
              <div>
                {currentPageData.map((row, index) => (
                  <div
                    className="hover:bg-[#f5f5f5] dark:hover:bg-[#272727] flex group justify-between py-4 px-[15px] border-b-[1px] border-[#f5f5f5] cursor-pointer"
                    key={`${row.title}-${index}`}
                  >
                    <div
                      className={`flex gap-2 w-[253px] self-center text-[14px] ${
                        row.status === "Unread"
                          ? "font-semibold text-[#3076B1]"
                          : "font-normal text-[#3076B1]"
                      }`}
                    >
                      <div
                        className={`w-[5px] h-[5px] ${
                          row.status === "Unread"
                            ? "bg-green-500"
                            : "bg-[#C4C4C4]"
                        } rounded-full self-center`}
                      />
                      <p>{row.title}</p>
                    </div>
                    <div
                      className={`flex gap-2 w-[220px] self-center text-[14px] ${
                        row.status === "Unread"
                          ? "font-semibold text-[#121212] dark:text-white "
                          : "font-normal text-[#121212]  dark:text-white "
                      }`}
                    >
                      <Image src={row.img} alt="" width={16} height={16} />
                      <p>{row.type}</p>
                    </div>
                    <div
                      className={`w-[150px] self-center text-[14px] ${
                        row.status === "Unread"
                          ? "font-semibold text-[#121212] dark:text-white "
                          : "font-normal text-[#121212] dark:text-white "
                      }`}
                    >
                      {row.product}
                    </div>
                    <div
                      className={`w-[170px] self-center text-[14px] ${
                        row.status === "Unread"
                          ? "font-semibold text-[#121212] dark:text-white "
                          : "font-normal text-[#121212] dark:text-white "
                      }`}
                    >
                      {row.time}
                    </div>
                    <div
                      className={`w-[150px] self-center text-[14px] ${
                        row.status === "Unread"
                          ? "font-semibold text-[#121212] dark:text-white "
                          : "font-normal text-[#7A7B7C] dark:text-white "
                      }`}
                    >
                      {row.status}
                    </div>
                    <div className="invisible group-hover:visible flex gap-2 w-[330px]">
                      <div className="bg-white rounded-[6px] p-3 flex gap-2">
                        <Image
                          src={"/assets/svg/dtick.svg"}
                          alt="mark as unread"
                          width={15}
                          height={15}
                        />
                        <p className="font-normal text-[#121F2C]  text-[12px] cursor-pointer">
                          Mark as unread
                        </p>
                      </div>
                      <div className="bg-white rounded-[6px] p-3 flex gap-2">
                        <Image
                          src={"/assets/svg/dcross.svg"}
                          alt="remove notification"
                          width={12}
                          height={12}
                        />
                        <p className="font-normal text-[#121F2C] text-[12px]">
                          Remove this notification
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-between bg-white dark:bg-[#272727]  p-3 rounded-[8px] shadow-sm mt-5">
        {loading ? (
          <div className="flex justify-between animate-pulse w-full">
            {/* Skeleton for Rows per page */}
            <div className="flex gap-2 nun text-[#7A7B7C] dark:text-white text-[13px] self-center">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 w-20 rounded"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 w-12 rounded"></div>
            </div>

            {/* Skeleton for pagination buttons */}
            <div className="flex gap-2 mt-3">
              <div className="h-8 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-8 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex gap-2 nun font-semibold text-[#7A7B7C] dark:text-white text-[13px] self-center">
              Rows per page:
              <select
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
                className="font-semibold text-[#7A7B7C] dark:text-white text-[13px] dark:bg-transparent  rounded outline-none cursor-pointer"
                aria-label="Rows per page"
              >
                {[3, 5, 10, 15].map((size) => (
                  <option key={size} value={size} className="dark:bg-black">
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Pagination buttons */}
            <div className="flex gap-2">
              <p
                className={`self-center nun font-semibold text-[13px] dark:text-white ${
                  currentPage === 1 ? "text-[#CCCCCC]" : "cursor-pointer"
                }`}
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                aria-label="Previous page"
              >
                Prev
              </p>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`border-[1px] border-[#f2f2f2]  font-semibold text-[13px] rounded-[4px] py-1 px-3 ${
                    currentPage === i + 1
                      ? "bg-[#3076B1] text-white "
                      : " hover:bg-[#f2f2f2] dark:text-white  dark:bg-black"
                  }`}
                  aria-label={`Page ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
              <p
                className={`nun font-semibold text-[13px] self-center dark:text-white ${
                  currentPage === totalPages
                    ? "text-[#CCCCCC]"
                    : "cursor-pointer"
                }`}
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                aria-label="Next page"
              >
                Next
              </p>
            </div>
          </>
        )}
      </div>

      <div className="block md:hidden bg-white dark:bg-black border-t-[1px] border-[#CCCCCC] pt-3 mt-3">
        <div>
          <div className="mt-2 mb-5 px-3 flex gap-3">
            {loading ? (
              <div className=" w-full flex gap-3">
                <div className="animate-pulse h-8 w-[25%] bg-gray-200 dark:bg-gray-700 rounded-full" />
                <div className="animate-pulse h-8 w-[25%] bg-gray-200 dark:bg-gray-700 rounded-full" />
              </div>
            ) : (
              <div className=" w-full flex gap-3">
                <button
                  className={
                    activeTab === 1
                      ? "active nun font-semibold text-[#3076B1] border-[1px] border-[#3076B1] bg-[#EEF5FF] text-[12px] py-1 w-[25%] rounded-full"
                      : "tab text-[#121F2C] dark:text-white font-semibold text-[12px] py-1 w-[25%] border-[1px] border-[#CCCCCC] rounded-full"
                  }
                  onClick={() => handleTabClick(1)}
                >
                  All
                </button>
                <button
                  className={
                    activeTab === 2
                      ? "active nun font-semibold text-[#3076B1] border-[1px] border-[#3076B1] bg-[#EEF5FF] text-[12px] py-1 w-[25%] rounded-full"
                      : "tab text-[#121F2C] dark:text-white font-semibold text-[12px] py-1 w-[25%] border-[1px] border-[#CCCCCC] rounded-full"
                  }
                  onClick={() => handleTabClick(2)}
                >
                  Unread
                </button>
              </div>
            )}
          </div>

          {activeTab === 1 && (
            <div>
              {loading ? (
                <div className=" space-y-3 px-3">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="animate-pulse flex gap-2 p-3 bg-gray-200 dark:bg-gray-700 rounded-lg h-16"
                    />
                  ))}
                </div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`relative ${
                      optionDropdownOpen === notification.id
                        ? "bg-[#f0f0f0]"
                        : ""
                    }`}
                  >
                    <div className=" flex justify-between border-b-[1px] border-[#f2f2f2] group hover:bg-[#EEEEEE] p-3">
                      <div className="flex gap-2">
                        <div className="bg-[#C4C4C4] w-[5px] h-[5px] mt-2 rounded-full" />

                        <Image
                          src={notification.img}
                          alt=""
                          width={20}
                          height={20}
                          className="mx-auto self-start "
                        />

                        <div>
                          <p
                            className={`nun ${
                              !notification.read ? "font-bold" : "font-normal"
                            } text-[#121212] dark:text-white group-hover:text-[#121212] text-[13px]`}
                          >
                            {notification.message}
                          </p>
                          <p className="nun font-normal text-[#7A7B7C] dark:text-white group-hover:text-[#7A7B7C] text-[12px] mt-1">
                            by Christopher Charles
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="self-center">
                          <p className="nun font-normal text-[#7A7B7C] group-hover:text-[#7A7B7C] text-[12px]">
                            {notification.timestamp}
                          </p>
                          <p className="nun font-normal text-[#7A7B7C] group-hover:text-[#7A7B7C] text-[12px] mt-1 ">
                            {notification.time}
                          </p>
                        </div>
                        <div
                          className={`${
                            optionDropdownOpen === notification.id
                              ? "self-center"
                              : "self-center"
                          } group-hover:block cursor-pointer`}
                          onClick={() => toggleOptionDropdown(notification.id)}
                        >
                          <Image
                            src="/assets/svg/option.svg"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </div>
                      </div>
                    </div>

                    {optionDropdownOpen === notification.id && (
                      <div className="absolute right-0 mt-2 w-[240px] bg-white dark:bg-black shadow-lg z-20">
                        <div className="border-b-[1px] border-[#CCCCCC] p-3 flex gap-2">
                          <Image
                            src={"/assets/svg/dtick.svg"}
                            alt=""
                            width={15}
                            height={15}
                          />
                          <p
                            className="font-normal text-[#121F2C] dark:text-white text-[14px] cursor-pointer"
                            onClick={() => markAsUnread(notification.id)}
                          >
                            Mark as unread
                          </p>
                        </div>
                        <div className="p-3 flex gap-2 cursor-pointer">
                          <Image
                            src={"/assets/svg/dcross.svg"}
                            alt=""
                            width={12}
                            height={12}
                          />
                          <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                            Remove this notification
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 2 && (
            <div>
              {loading ? (
                <div className=" space-y-3 px-3">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="animate-pulse flex gap-2 p-3 bg-gray-200 dark:bg-gray-700 rounded-lg h-16"
                    />
                  ))}
                </div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`relative ${
                      optionDropdownOpen === notification.id
                        ? "bg-[#f0f0f0]"
                        : ""
                    }`}
                  >
                    <div className=" flex justify-between border-b-[1px] border-[#f2f2f2] group hover:bg-[#EEEEEE] p-3">
                      <div className="flex gap-2">
                        <div className="bg-[#C4C4C4] w-[5px] h-[5px] mt-2 rounded-full" />

                        <Image
                          src={notification.img}
                          alt=""
                          width={20}
                          height={20}
                          className="mx-auto self-start "
                        />

                        <div>
                          <p
                            className={`nun ${
                              !notification.read ? "font-bold" : "font-normal"
                            } text-[#121212] dark:text-white group-hover:text-[#121212] text-[13px]`}
                          >
                            {notification.message}
                          </p>
                          <p className="nun font-normal text-[#7A7B7C] dark:text-white group-hover:text-[#7A7B7C] text-[12px] mt-1">
                            by Christopher Charles
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="self-center">
                          <p className="nun font-normal text-[#7A7B7C] group-hover:text-[#7A7B7C] text-[12px]">
                            {notification.timestamp}
                          </p>
                          <p className="nun font-normal text-[#7A7B7C] group-hover:text-[#7A7B7C] text-[12px] mt-1 ">
                            {notification.time}
                          </p>
                        </div>
                        <div
                          className={`${
                            optionDropdownOpen === notification.id
                              ? "self-center"
                              : "self-center"
                          } group-hover:block cursor-pointer`}
                          onClick={() => toggleOptionDropdown(notification.id)}
                        >
                          <Image
                            src="/assets/svg/option.svg"
                            alt=""
                            width={30}
                            height={30}
                          />
                        </div>
                      </div>
                    </div>

                    {optionDropdownOpen === notification.id && (
                      <div className="absolute right-0 mt-2 w-[240px] bg-white dark:bg-black shadow-lg z-20">
                        <div className="border-b-[1px] border-[#CCCCCC] p-3 flex gap-2">
                          <Image
                            src={"/assets/svg/dtick.svg"}
                            alt=""
                            width={15}
                            height={15}
                          />
                          <p
                            className="font-normal text-[#121F2C] dark:text-white text-[14px] cursor-pointer"
                            onClick={() => markAsUnread(notification.id)}
                          >
                            Mark as unread
                          </p>
                        </div>
                        <div className="p-3 flex gap-2 cursor-pointer">
                          <Image
                            src={"/assets/svg/dcross.svg"}
                            alt=""
                            width={12}
                            height={12}
                          />
                          <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                            Remove this notification
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
