import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import AddRole from "./component/manageUser/addRole";
import Footer from "./component/footer/footer";
import Delect from "./component/manageUser/delect";
import EditRole from "./component/manageUser/editRole";
import Cross from "../../public/assets/svg/cross.svg";
import { FaArrowLeft } from "react-icons/fa";
import Bot from "../../public/assets/png/bot.png";

const data = [
  { id: 1, role: "Editor", score: 11 },
  { id: 2, role: "Moderator", score: 11 },
  { id: 3, role: "Content Creator", score: 11 },
  { id: 4, role: "Viewer", score: 0 },
];

const peopleData = [
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john_doe@email.com",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john_doe@email.com",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john_doe@email.com",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john_doe@email.com",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john_doe@email.com",
  },
];

export default function ManageRole() {
  const [showModal, setShowModal] = useState(false);
  const [visibleDropdownIndex, setVisibleDropdownIndex] = useState(null);

  const toggleMoreDropdown = (index: any) => {
    setVisibleDropdownIndex(visibleDropdownIndex === index ? null : index);
  };

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
      <div className="md:w-[95%] 2xl:w-[70%] mx-auto mb-20">
        <div className="hidden md:flex gap-2 mt-5">
          <p className="nun font-semibold text-[#3076B1] text-[14px]">Admin</p>
          <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
          <Link
            href={"/manage-user"}
            className="nun font-normal text-[#3076B1] text-[14px]"
          >
            Users
          </Link>
          <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
          <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
            Manage Roles
          </p>
        </div>
        <div className="mt-5 hidden md:flex justify-end gap-3">
          <AddRole />
          <Link href={"/manage-user"}>
            <button className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4a9fe7] hover:bg-[#18459D] rounded-[6px] px-[12px] py-[14px] uppercase">
              manage users
            </button>
          </Link>
        </div>

        <Link
          href={"/manage-user"}
          className="ml-3 mt-6 nun font-semibold text-[#121212] dark:text-white text-[14px] flex gap-2"
        >
          <Image
            src={"/assets/svg/arrow-left.svg"}
            alt=""
            width={24}
            height={24}
          />
          Back
        </Link>

        <div className="bg-white dark:bg-black border-t-0 md:border-t-[1px] border-[1px] dark:border-y-[1px] dark:border-x-0 border-[#E0E0E0] rounded-[4px] mt-3">
          <div className="hidden  md:grid grid-cols-12 py-3 px-5">
            <div className="col-span-1">
              <div className="flex gap-5">
                <p className="font-semibold text-[#7A7B7C] text-[16px]">ID</p>
                <Image
                  src={"/assets/svg/sort.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="col-span-6 ">
              <div className="flex gap-5">
                <p className="font-semibold text-[#7A7B7C] text-[16px]">Role</p>
                <Image
                  src={"/assets/svg/sort.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="col-span-5">
              <div className="flex gap-5">
                <p className="font-semibold text-[#7A7B7C] text-[16px]">
                  Number of Users
                </p>
                <Image
                  src={"/assets/svg/sort.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div>
            {data.map((item, index) => (
              <div
                key={item.id}
                className=" grid grid-cols-12 py-5 px-5 group border-t-[1px] border-[#CCCCCC] bg-white dark:bg-black hover:bg-[#EEEEEE]"
              >
                <div className="col-span-2 md:col-span-1">
                  <div className="md:flex gap-5 ">
                    <p className="font-semibold text-[#7A7B7C] dark:text-white text-[14px] block md:hidden">
                      ID
                    </p>
                    <p className="pt-1 font-normal  text-[#121212] dark:text-white text-[14px]">
                      {item.id}
                    </p>
                  </div>
                </div>
                <div className="col-span-5 md:col-span-6">
                  <div className="md:flex gap-5 ">
                    <p className="font-semibold text-[#7A7B7C] dark:text-white text-[14px] block md:hidden">
                      Role
                    </p>
                    <p className="pt-1 self-center font-normal text-[#121212] dark:text-white text-[14px]">
                      {item.role}
                    </p>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="md:flex justify-between gap-5">
                    <p className="font-semibold text-[#7A7B7C] dark:text-white text-[14px] block md:hidden">
                      # of Users
                    </p>
                    <p
                      onClick={() => setShowModal(true)}
                      className="pt-1 self-center font-normal text-[#3076B1] text-[14px] cursor-pointer"
                    >
                      {item.score}
                    </p>
                    {item.score === 0 && (
                      <div className="hidden invisible group-hover:visible md:flex gap-4">
                        <EditRole />
                        {index === 3 && <Delect />}
                      </div>
                    )}
                    {item.score !== 0 && (
                      <div className="invisible group-hover:visible hidden md:flex gap-4">
                        <EditRole />
                        {index === 3 && <Delect />}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      </>
        ) : (
          <div className="w-full h-full flex justify-between px-3 mt-3 items-center">
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">All</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
                Infosight
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
                CU Policy Pro
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
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
      {showModal ? (
        <>
          <div className="  justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[95%] md:w-[70%] lg:w-[50%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
                {/*body*/}
                <div className="relative flex-auto">
                  <div className="flex justify-between p-5">
                    <div className="self-center">
                      <p className=" nun font-bold text-[#14142B] dark:text-white text-[16px] md:text-[18px]">
                        User Role:
                        <span className="font-normal"> Editor (499 users)</span>
                      </p>
                    </div>
                    <Image
                      onClick={() => setShowModal(false)}
                      className="cursor-pointer"
                      src={Cross}
                      alt=""
                    />
                  </div>

                  <div className="px-5  relative">
                    <input
                      type="text"
                      className="bg-[#dff5fb] dark:bg-white rounded-[6px] py-[12px] pl-10 pr-2 w-full outline-none"
                    />
                    <Image
                      src={"/assets/svg/bi_searchs.svg"}
                      alt=""
                      width={16}
                      height={16}
                      className="absolute top-4 left-8 "
                    />
                  </div>

                  <div className="p-5  mx-5 hidden md:grid grid-cols-12 border-b-[2px] border-[#CCCCCC]">
                    <div className="col-span-3">
                      <p className="text-[#7A7B7C] font-semibold text-[16px] ">
                        First Name
                      </p>
                    </div>
                    <div className="col-span-3">
                      <p className="text-[#7A7B7C] font-semibold text-[16px] ">
                        Last Name
                      </p>
                    </div>
                    <div className="col-span-6">
                      <p className="text-[#7A7B7C] font-semibold text-[16px] ">
                        Email
                      </p>
                    </div>
                  </div>

                  <div className="h-[60vh] overflow-y-scroll">
                    {peopleData.map((person, index) => (
                      <div
                        key={index}
                        className="relative md:px-5 py-4 mx-5 grid md:grid-cols-12 border-b-[1px] border-[#f2f2f2] "
                      >
                        <div className="hidden md:block col-span-3">
                          <p className="text-[#121212] dark:text-white font-normal text-[14px] mt-1 md:mt-0">
                            {person.firstName}
                          </p>
                        </div>
                        <div className="hidden md:block col-span-3">
                          <p className="text-[#121212] dark:text-white font-normal text-[14px] mt-1 md:mt-0">
                            {person.lastName}
                          </p>
                        </div>

                        <div className="grid md:hidden grid-cols-2">
                          <div className="md:col-span-3">
                          
                          <p className="text-[#7A7B7C]  font-semibold text-[16px] block md:hidden">
                            First Name
                          </p>
                            <p className="text-[#121212] dark:text-white  font-normal text-[14px] mt-1 md:mt-0">
                              {person.firstName}
                            </p>


                          </div>
                          <div className="md:col-span-3">
                          <p className="text-[#7A7B7C]  font-semibold text-[16px] block md:hidden">
                            Last Name
                          </p>
                      
                            <p className="text-[#121212] dark:text-white  font-normal text-[14px] mt-1 md:mt-0">
                              {person.lastName}
                            </p>
                          </div>
                        </div>
                        <div className="md:col-span-6 md:flex justify-between mt-2 md:mt-0">
                          <p className="text-[#7A7B7C]  font-semibold text-[16px] block md:hidden">
                            Email
                          </p>
                          <p className="text-[#121212] dark:text-white font-normal text-[14px] mt-1 md:mt-0">
                            {person.email}
                          </p>
                          <div className="hidden md:block relative">
                            <Image
                              src="/assets/svg/bx-more.svg"
                              alt=""
                              height={24}
                              width={24}
                              className="cursor-pointer"
                              onClick={() => toggleMoreDropdown(index)}
                            />

                            {visibleDropdownIndex === index && (
                              <div className="absolute z-30 right-0 mt-2 w-[200px] bg-white dark:bg-black shadow-lg">
                                <div className="group flex gap-1 border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-[10px] cursor-pointer">
                                  <Image
                                    src="/assets/svg/remove.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  <p className="self-center font-normal text-[#121F2C] group-hover:text-[#121f2c]  dark:text-white text-[12px] ">
                                    Remove from this Role
                                  </p>
                                </div>
                                <div className="group flex gap-1 border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-[10px] cursor-pointer">
                                  <Image
                                    src="/assets/svg/add.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  <p className="self-center font-normal text-[#121F2C] group-hover:text-[#121f2c] dark:text-white text-[12px] ">
                                    Assign New Role
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
