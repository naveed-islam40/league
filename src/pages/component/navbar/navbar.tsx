import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../../public/assets/png/logo.png";
import Line from "../../../../public/assets/svg/Line 3.svg";
import Notify from "../../../../public/assets/svg/notify.svg";
import Dp from "../../../../public/assets/svg/dp.svg";
import { IoSettingsSharp } from "react-icons/io5";
import Subnavbar from "./subnavbar";
import Link from "next/link";
import NavDrawer from "./drawer";
import Profile from "./profile";
import { MdOutlineWbSunny } from "react-icons/md";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Notification = {
  id: number;
  message: string;
  timestamp: string;
  read: boolean;
  time: string;
  dot: any;
  img: any;
};

const locations = [
  "California, CA",
  "Alabama, AL",
  "Alaska, AK",
  "Arizona, AZ",
  "Arkansas, AR",
  "Colorado, CO",
  "Connecticut, CT",
  "Delaware, DE",
  "Florida, FL",
  "Georgia, GA",
  "Hawaii, HI",
  "Idaho, ID",
  "Illinois, IL",
];

export default function Navbar({ onSearch }: any) {
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [optionDropdownOpen, setOptionDropdownOpen] = useState<number | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState("Your location");
  const locationDropdownRef = useRef<HTMLDivElement>(null);

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

  const [searchValue, setSearchValue] = useState("");
  const notificationDropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const optionDropdownRef = useRef<HTMLDivElement>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(newMode)); // Save to localStorage
  };

  // On component mount, check localStorage for the dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      const isDarkMode = JSON.parse(savedMode);
      setDarkMode(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.body.classList.remove("dark");
      }
    }
  }, []);

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  const handleInputChange = (e: any) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value); // Call the parent's onSearch function
  };

  const handleClick = () => {
    setIsSearching(true);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      notificationDropdownRef.current &&
      !notificationDropdownRef.current.contains(event.target as Node)
    ) {
      setOptionDropdownOpen(null);
    }
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target as Node)
    ) {
      setProfileDropdownOpen(false);
    }
    if (
      optionDropdownRef.current &&
      !optionDropdownRef.current.contains(event.target as Node)
    ) {
      setOptionDropdownOpen(null);
    }
    if (
      locationDropdownRef.current &&
      !locationDropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const router = useRouter()


  const handleLogout = () => {
    localStorage.removeItem("user")
    toast.success("Logged out successfully", {
      position: "top-center",
      style: {
        color: "green"
      }
    })
    router.push("/login")
  }
  return (
    <>
      <div className="hidden lg:block fixed top-0 w-full z-10 ">
        <div className=" bg-[#3076B1]">
          <div className="grid grid-cols-12 py-5 w-[95%] 2xl:w-[70%] mx-auto">
            <div className="flex gap-2 xl:gap-4 col-span-4 lg:col-span-5 xl:col-span-5 items-center">
              <Link href={"/"}>
                <Image
                  src={Logo}
                  alt="Main Logo"
                  className="w-[70%] lg:w-[40%] xl:w-[200px] cursor-pointer"
                />
              </Link>
              <Image
                src={Line}
                alt="Separator Line"
                className="hidden lg:block"
              />
              <p className="hidden lg:block font-semibold text-white text-[13px] xl:text-[16px]">
                Affinity Plus Federal Credit Union
              </p>
            </div>

            <div className="flex justify-end gap-5 col-span-8 lg:col-span-7 xl:col-span-7 items-center">
              <Link
                href="/help"
                className="hidden lg:block font-medium text-white text-[15px] cursor-pointer"
              >
                Compliance Help
              </Link>
              <Link
                href="/support"
                className="hidden lg:block font-medium text-white text-[15px] cursor-pointer"
              >
                Support
              </Link>

              <div>
                {isSearching ? (
                  <div className="relative">
                    <input
                      type="text"
                      className="font-medium text-white text-[16px] md:text-[15px] pl-6 pr-2 py-1 bg-transparent outline-none border-b-[1px] border-white placeholder:text-white "
                      placeholder="Search "
                      autoFocus
                    />

                    <Image
                      src="/assets/svg/search.svg"
                      alt="Search "
                      width={16}
                      height={16}
                      className="absolute top-[6px] w-[10px] xl:w-auto h-[10px] xl:h-auto"
                    />
                  </div>
                ) : (
                  <p
                    className="font-medium text-white text-[15px] flex gap-2 cursor-pointer items-center"
                    onClick={handleClick}
                  >
                    <Image
                      src="/assets/svg/search.svg"
                      alt="Search Icon"
                      width={16}
                      height={16}
                      className="w-[13px] xl:w-auto h-[13px] xl:h-auto"
                    />
                    Search
                  </p>
                )}
              </div>
              <div className="relative" ref={locationDropdownRef}>
                <p
                  onClick={toggleDropdown}
                  className="font-medium text-white  text-[15px] flex gap-2 cursor-pointer items-center"
                >
                  {selectedLocation}

                  <Image
                    src="/assets/svg/arrow.svg"
                    alt="Arrow Icon"
                    width={8}
                    height={8}
                  />
                </p>
                {isOpen && (
                  <div className="absolute z-30 mt-2 border-[1px] border-[#E2E2E2] bg-white dark:bg-black w-[230px] shadow-sm">
                    {locations.map((location) => (
                      <div
                        key={location}
                        className=" flex gap-2 border-b-[1px] border-[#F5F5F5] p-2 cursor-pointer"
                        onClick={() => handleLocationChange(location)}
                      >
                        <input
                          type="radio"
                          checked={selectedLocation === location}
                          readOnly
                        />
                        <p className="self-center nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                          {location}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative group">
                {/* // ref={notificationDropdownRef}> */}
                <Image
                  src={Notify}
                  alt="Notification Icon"
                  className="cursor-pointer mt-1 xl:-mt-1 h-[30px] xl:h-auto"
                  // onClick={() =>
                  //   setNotificationDropdownOpen(!notificationDropdownOpen)
                  // }
                />
                {/* {notificationDropdownOpen && ( */}
                <div className="absolute right-0 hidden group-hover:block w-[350px] bg-white dark:bg-black  rounded-md shadow-lg z-20">
                  <div className="flex justify-between p-3 pb-0">
                    <p className="nun font-bold text-[#14142B] dark:text-white text-[20px] ">
                      Notifications
                    </p>
                    <Link href={"/setting"} className="self-center">
                      <IoSettingsSharp className="cursor-pointer text-[20px] text-[#8F8F8F] self-center" />
                    </Link>
                  </div>
                  <div className="mt-2 mb-5 px-3">
                    <button
                      className={
                        activeTab === 1
                          ? "active nun font-normal text-[#3076B1] border-[1px] border-[#3076B1] bg-[#EEF5FF] text-[12px] py-1 px-8 rounded-full"
                          : "tab text-[#121F2C] font-normal text-[12px] py-1 px-8 dark:text-white"
                      }
                      onClick={() => handleTabClick(1)}
                    >
                      All
                    </button>
                    <button
                      className={
                        activeTab === 2
                          ? "active nun font-normal text-[#3076B1] border-[1px] border-[#3076B1] bg-[#EEF5FF] text-[12px] py-1 px-8 rounded-full"
                          : "tab text-[#121F2C] font-normal text-[12px] py-1 px-8 dark:text-white"
                      }
                      onClick={() => handleTabClick(2)}
                    >
                      Unread
                    </button>
                  </div>
                  {activeTab === 1 && (
                    <div>
                      {notifications.map((notification, index) => (
                        <div
                          key={notification.id}
                          className={`relative cursor-pointer ${
                            optionDropdownOpen === notification.id
                              ? "bg-[#f0f0f0]"
                              : ""
                          }`}
                        >
                          <Link
                            key={notification.id}
                            href={"/manage-assignments"}
                          >
                            <div className="flex justify-between group hover:bg-[#EEEEEE] p-3">
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
                                      index === 0 || index === 2
                                        ? "font-bold"
                                        : "font-normal"
                                    } text-[#121212] dark:group-hover:text-[#121212] dark:text-white text-[13px]`}
                                  >
                                    {notification.message}
                                  </p>
                                  <p className="nun font-normal dark:group-hover:text-[#7A7B7C] dark:text-white text-[#7A7B7C] text-[12px] mt-1">
                                    by Christopher Charles
                                  </p>
                                </div>
                              </div>
                              <div className="self-center group-hover:hidden">
                                <p
                                  className={`nun font-normal text-[#7A7B7C] dark:group-hover:text-[#7A7B7C] dark:text-white text-[12px]  ${
                                    optionDropdownOpen === notification.id
                                      ? "hidden"
                                      : ""
                                  }`}
                                >
                                  {notification.timestamp}
                                </p>
                                <p
                                  className={`nun font-normal text-[#7A7B7C] text-[12px] mt-1 ${
                                    optionDropdownOpen === notification.id
                                      ? "hidden"
                                      : ""
                                  }`}
                                >
                                  {notification.time}
                                </p>
                              </div>
                              <div
                                className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                                  optionDropdownOpen === notification.id
                                    ? "block"
                                    : "hidden"
                                } group-hover:block cursor-pointer`}
                                onClick={() =>
                                  toggleOptionDropdown(notification.id)
                                }
                              >
                                <Image
                                  src="/assets/svg/option.svg"
                                  alt=""
                                  width={30}
                                  height={30}
                                />
                              </div>
                            </div>
                          </Link>

                          {optionDropdownOpen === notification.id && (
                            <div
                              className="absolute -right-16 mt-2 w-[240px] bg-white dark:bg-black shadow-lg z-20"
                              ref={optionDropdownRef}
                            >
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
                      ))}
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div>
                      {notifications.map((notification, index) => (
                        <div
                          key={notification.id}
                          className={`relative cursor-pointer ${
                            optionDropdownOpen === notification.id
                              ? "bg-[#f0f0f0]"
                              : ""
                          }`}
                        >
                          <Link
                            key={notification.id}
                            href={"/manage-assignments"}
                          >
                            <div className="flex justify-between group hover:bg-[#EEEEEE] p-3">
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
                                      index === 0 || index === 2
                                        ? "font-bold"
                                        : "font-normal"
                                    } text-[#121212] dark:group-hover:text-[#121212] dark:text-white text-[13px]`}
                                  >
                                    {notification.message}
                                  </p>
                                  <p className="nun font-normal dark:group-hover:text-[#7A7B7C] dark:text-white text-[#7A7B7C] text-[12px] mt-1">
                                    by Christopher Charles
                                  </p>
                                </div>
                              </div>
                              <div className="self-center group-hover:hidden">
                                <p
                                  className={`nun font-normal text-[#7A7B7C] dark:group-hover:text-[#7A7B7C] dark:text-white text-[12px]  ${
                                    optionDropdownOpen === notification.id
                                      ? "hidden"
                                      : ""
                                  }`}
                                >
                                  {notification.timestamp}
                                </p>
                                <p
                                  className={`nun font-normal text-[#7A7B7C] text-[12px] mt-1 ${
                                    optionDropdownOpen === notification.id
                                      ? "hidden"
                                      : ""
                                  }`}
                                >
                                  {notification.time}
                                </p>
                              </div>
                              <div
                                className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                                  optionDropdownOpen === notification.id
                                    ? "block"
                                    : "hidden"
                                } group-hover:block cursor-pointer`}
                                onClick={() =>
                                  toggleOptionDropdown(notification.id)
                                }
                              >
                                <Image
                                  src="/assets/svg/option.svg"
                                  alt=""
                                  width={30}
                                  height={30}
                                />
                              </div>
                            </div>
                          </Link>

                          {optionDropdownOpen === notification.id && (
                            <div
                              className="absolute -right-16 mt-2 w-[240px] bg-white dark:bg-black shadow-lg z-20"
                              ref={optionDropdownRef}
                            >
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
                      ))}
                    </div>
                  )}

                  <Link href={"/notification"}>
                    <p className="nun font-semibold text-[12px] text-[#3076B1] text-center my-5 cursor-pointer">
                      View All
                    </p>
                  </Link>
                </div>
                {/* )} */}
              </div>

              <div className="relative" ref={profileDropdownRef}>
                <Image
                  src={Dp}
                  alt="Profile Picture"
                  className="cursor-pointer mt-1"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                />
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-black  shadow-lg z-20">
                    <Link href={"/my-account"}>
                      <div className="dark:text-white dark:hover:text-black border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2]  font-normal text-[12px] flex gap-2 px-2 py-4 cursor-pointer">
                        <Image
                          src={"/assets/svg/user.svg"}
                          alt=""
                          width={18}
                          height={18}
                        />
                        My Account
                      </div>
                    </Link>
                    <Link
                      href="/setting"
                      className="dark:text-white dark:hover:text-black border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2]  font-normal text-[12px] flex gap-2 px-2 py-4 cursor-pointer"
                    >
                      <Image
                        src={"/assets/svg/settings.svg"}
                        alt=""
                        width={18}
                        height={18}
                      />{" "}
                      Notification Settings
                    </Link>
                    <div
                      onClick={handleToggle}
                      className="dark:text-white dark:hover:text-black border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2]  font-normal text-[12px] flex gap-2 px-2 py-4 cursor-pointer"
                    >
                      {darkMode ? (
                        <MdOutlineWbSunny className="text-[18px]" />
                      ) : (
                        <Image
                          src={"/assets/svg/dark.svg"}
                          alt=""
                          width={18}
                          height={18}
                        />
                      )}

                      {darkMode ? "Light Mode" : "Dark Mode"}
                    </div>
                    <Link
                      href="/"
                      className="dark:text-white dark:hover:text-black border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2]  font-normal text-[12px] flex gap-2 px-2 py-4 cursor-pointer"
                      onClick={handleLogout}
                    >
                      <Image
                        src={"/assets/svg/logout.svg"}
                        alt=""
                        width={18}
                        height={18}
                      />{" "}
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Subnavbar />
      </div>

      <div className="block lg:hidden fixed top-0 w-full z-10 ">
        <div className=" bg-[#3076B1] py-5">
          <p className=" font-normal text-white text-[11px] text-center">
            Affinity Plus Federal Credit Union
          </p>
          <div className="w-[95%] mx-auto mt-3 flex gap-3">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={handleInputChange}
                className="w-full font-medium text-[16px] md:text-[14px] text-[#7A7B7C] bg-white rounded-[5px] py-4 pl-12 pr-14 outline-none"
              />

              <NavDrawer />

              <div className="absolute top-0 right-3 cursor-pointer">
                <div className="relative">
                  {/* Conditionally render either the cross button or the Profile component */}
                  {searchValue ? (
                    <div
                      onClick={() => setSearchValue("")} // Clear the input on click
                      className=" cursor-pointer"
                    >
                      <Image
                        src="/assets/svg/x-circle.svg"
                        alt="Clear"
                        width={24}
                        height={24}
                        className="w-[24px] h-[24px] mt-4"
                      />
                    </div>
                  ) : (
                    <Profile handleToggle={handleToggle} darkMode={darkMode} />
                  )}
                </div>
              </div>
            </div>

            <div className="relative self-center group">
              {/* // ref={notificationDropdownRef} */}
              <Image
                src={Notify}
                alt="Notification Icon"
                className="cursor-pointer mt-1 xl:-mt-1 h-[30px] xl:h-auto"
                // onClick={() =>
                //   setNotificationDropdownOpen(!notificationDropdownOpen)
                // }
              />
              {/* {notificationDropdownOpen && ( */}
              <div className="hidden group-hover:block absolute right-0 mt-2 w-[350px] bg-white  rounded-md shadow-lg z-20">
                <div className="flex justify-between p-3 pb-0">
                  <p className="nun font-bold text-[#14142B] text-[20px] ">
                    Notifications
                  </p>
                  <Link href={"/setting"} className="self-center">
                    <IoSettingsSharp className="cursor-pointer text-[20px] text-[#8F8F8F] self-center" />
                  </Link>
                </div>
                <div className="mt-2 mb-5 px-3">
                  <button
                    className={
                      activeTab === 1
                        ? "active nun font-normal text-[#3076B1] border-[1px] border-[#3076B1] bg-[#EEF5FF] text-[12px] py-1 px-8 rounded-full"
                        : "tab text-[#121F2C] font-normal text-[12px] py-1 px-8"
                    }
                    onClick={() => handleTabClick(1)}
                  >
                    All
                  </button>
                  <button
                    className={
                      activeTab === 2
                        ? "active nun font-normal text-[#3076B1] border-[1px] border-[#3076B1] bg-[#EEF5FF] text-[12px] py-1 px-8 rounded-full"
                        : "tab text-[#121F2C] font-normal text-[12px] py-1 px-8"
                    }
                    onClick={() => handleTabClick(2)}
                  >
                    Unread
                  </button>
                </div>
                {activeTab === 1 && (
                  <div>
                    {notifications.map((notification, index) => (
                      <div
                        key={notification.id}
                        className={`relative cursor-pointer ${
                          optionDropdownOpen === notification.id
                            ? "bg-[#f0f0f0]"
                            : ""
                        }`}
                      >
                        <div className=" flex justify-between  group hover:bg-[#EEEEEE] p-3">
                          <Link
                            key={notification.id}
                            href={"/manage-assignments"}
                          >
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
                                    index === 0 || index === 2
                                      ? "font-bold"
                                      : "font-normal"
                                  } text-[#121212] text-[13px]`}
                                >
                                  {notification.message}
                                </p>
                                <p className="nun font-normal text-[#7A7B7C] text-[12px] mt-1">
                                  by Christopher Charles
                                </p>
                              </div>
                            </div>
                          </Link>

                          <div className="self-center ">
                            <p
                              className={`nun font-normal text-[#7A7B7C] text-[12px]  ${
                                optionDropdownOpen === notification.id ? "" : ""
                              }`}
                            >
                              {notification.timestamp}
                            </p>
                            <p
                              className={`nun font-normal text-[#7A7B7C] text-[12px] mt-1 ${
                                optionDropdownOpen === notification.id ? "" : ""
                              }`}
                            >
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 2 && (
                  <div>
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`relative ${
                          optionDropdownOpen === notification.id
                            ? "bg-[#f0f0f0]"
                            : ""
                        }`}
                      >
                        <div className=" flex justify-between  group hover:bg-[#EEEEEE] p-3">
                          <Link
                            key={notification.id}
                            href={"/manage-assignments"}
                          >
                            <div className="flex gap-2">
                              <div className="bg-[#0BA32D] w-[5px] h-[5px] mt-2 rounded-full" />

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
                                    !notification.read
                                      ? "font-bold"
                                      : "font-normal"
                                  } text-[#121212] text-[13px]`}
                                >
                                  {notification.message}
                                </p>
                                <p className="nun font-normal text-[#7A7B7C] text-[12px] mt-1">
                                  by Christopher Charles
                                </p>
                              </div>
                            </div>
                          </Link>
                          <div className="self-center">
                            <p
                              className={`nun font-normal text-[#7A7B7C] text-[12px]  ${
                                optionDropdownOpen === notification.id ? "" : ""
                              }`}
                            >
                              {notification.timestamp}
                            </p>
                            <p
                              className={`nun font-normal text-[#7A7B7C] text-[12px] mt-1 ${
                                optionDropdownOpen === notification.id ? "" : ""
                              }`}
                            >
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Link href={"/notification"}>
                  <p className="nun font-semibold text-[12px] text-[#3076B1] text-center my-5 cursor-pointer">
                    View All
                  </p>
                </Link>
              </div>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
