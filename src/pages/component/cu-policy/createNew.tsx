import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Select from "./select";
import { IoIosArrowDown } from "react-icons/io";

export default function CreateNew() {
  const [create, setCreate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("InfoSight");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [status, setStatus] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const statusRef = useRef<HTMLDivElement | null>(null);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleStatus = () => {
    setStatus(!status);
  };

  const handleStatus = (option: any) => {
    setSelectedStatus(option);
    setStatus(false);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
    if (statusRef.current && !statusRef.current.contains(event.target)) {
      setStatus(false);
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
      <button
        onClick={() => setCreate(true)}
        className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7]  hover:bg-[#18459D] rounded-[6px] p-[10px] uppercase"
      >
        Create new
      </button>

      <Transition show={create} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setCreate(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden z-10">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-x-0 bottom-0 flex max-h-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-y-full"
                  enterTo="translate-y-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-y-0"
                  leaveTo="translate-y-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-full">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="dark:bg-black absolute top-0 left-0 w-full mt-1 h-[100vh] pb-40 overflow-y-scroll">
                        <div className="fixed w-full dark:bg-black bg-white">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="flex justify-between py-4 px-6 ">
                            <p className="nun font-semibold text-[18px] text-[#14142B] dark:text-white">
                              Publish New Document
                            </p>
                            <Image
                              onClick={() => setCreate(false)}
                              src={"/assets/svg/cross.svg"}
                              alt=""
                              width={40}
                              height={40}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="w-[96%] mx-auto pb-10 mt-20">
                          <div className="">
                            <div className="flex gap-1">
                              <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                                Document Name
                              </p>
                              <div className="relative group">
                                <Image
                                  src={"/assets/svg/info.svg"}
                                  alt=""
                                  height={18}
                                  width={18}
                                  className="self-center  cursor-pointer"
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
                                    Choose a title for the published document.
                                    It is recommended the title be descriptive
                                    so users will know what content is included.
                                    The title can not be changed once the
                                    document is published.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <input
                              type="text"
                              placeholder="Published Document 001"
                              className="mt-2 font-normal text-[#121F2C]  text-[16px] md:text-[14px] border-[1px] border-[#D9D9D9] rounded-[5px] p-[12px] w-full "
                            />
                          </div>

                          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-0 mt-5">
                            <div>
                              <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                                Add Logo to the title page
                              </p>
                              <div className="flex gap-10 mt-4">
                                <div className="flex gap-2">
                                  <input type="radio" />
                                  <p className="font-normal text-[#121F2C]  dark:text-white text-[14px]">
                                    Yes
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <input type="radio" />
                                  <p className="font-normal text-[#121F2C]  dark:text-white text-[14px]">
                                    No
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="font-normal text-[#121F2C]  dark:text-white text-[14px]">
                                Add Organization Name to the title page
                              </p>
                              <div className="flex gap-10 mt-4">
                                <div className="flex gap-2">
                                  <input type="radio" />
                                  <p className="font-normal text-[#121F2C]  dark:text-white text-[14px]">
                                    Yes
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <input type="radio" />
                                  <p className="font-normal text-[#121F2C]  dark:text-white text-[14px]">
                                    No
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className="font-normal text-[#121F2C]  dark:text-white text-[14px]">
                                Add Published Date to the title page
                              </p>
                              <div className="flex gap-10 mt-4">
                                <div className="flex gap-2">
                                  <input type="radio" />
                                  <p className="font-normal text-[#121F2C]  dark:text-white text-[14px]">
                                    Yes
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <input type="radio" />
                                  <p className="font-normal text-[#121F2C]  dark:text-white text-[14px]">
                                    No
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="flex gap-1">
                                <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                                  Include Section Numbers
                                </p>
                                <div className="relative group">
                                  <Image
                                    src={"/assets/svg/info.svg"}
                                    alt=""
                                    height={18}
                                    width={18}
                                    className="self-center  cursor-pointer"
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
                                      This setting allows you to suppress the
                                      section numbers from the table of contents
                                      and in the section headers.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-10 mt-4">
                                <div className="flex gap-2">
                                  <input type="radio" />
                                  <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                                    Yes
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <input type="radio" />
                                  <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                                    No
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-5">
                            <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                              Additional Text on Title Page
                              <span className="text-[#7A7B7C] ml-2">
                                To be placed just below the Published Document
                                Title and Organization Name
                              </span>
                            </p>
                            <input
                              type="text"
                              className="mt-2 font-normal text-[#121F2C] text-[14px] border-[1px] border-[#D9D9D9] rounded-[5px] px-[12px] py-5 w-full "
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-5 mt-8">
                            <div className="">
                              <div className="flex gap-1">
                                <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                                  Roles Authorized For Viewing
                                </p>
                                <div className="relative group">
                                  <Image
                                    src={"/assets/svg/info.svg"}
                                    alt=""
                                    height={18}
                                    width={18}
                                    className="self-center  cursor-pointer"
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
                                      If no roles are selected, the published
                                      document will only be visible to all
                                      Admin-level users and users with Editor or
                                      Reviewer role for this product.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="relative" ref={dropdownRef}>
                                <div
                                  onClick={toggleSelect}
                                  className="dark:bg-white cursor-pointer flex justify-between border-[1px] border-[#D9D9D9] rounded-[5px] py-[13px] px-[15px] mt-2"
                                >
                                  <p className="font-medium text-[14px] text-[#121F2C] ">
                                    {selectedOption}
                                  </p>
                                  <IoIosArrowDown className="text-[14px] text-[#121F2C] self-center" />
                                </div>
                                {isOpen && (
                                  <div className="absolute z-20 bg-white shadow-sm border-[1px] border-[#f2f2f2] w-full mt-1">
                                    {["Admin", "Content Editor"].map(
                                      (option) => (
                                        <p
                                          key={option}
                                          className="hover:bg-[#f2f2f2] font-medium text-[14px] text-[#121F2C] border-b-[1px] border-[#D9D9D9] p-[10px] cursor-pointer"
                                          onClick={() =>
                                            handleOptionClick(option)
                                          }
                                        >
                                          {option}
                                        </p>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="">
                              <div className=" flex gap-1">
                                <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                                  Status
                                </p>
                                <div className="relative group">
                                  <Image
                                    src={"/assets/svg/info.svg"}
                                    alt=""
                                    height={18}
                                    width={18}
                                    className="self-center  cursor-pointer"
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
                                      Active documents will be available to
                                      authorized users from the Home page.
                                      Inactive documents will not be visible on
                                      the Home page but can be accessed from the
                                      Publishing area.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="relative" ref={statusRef}>
                                <div
                                  onClick={toggleStatus}
                                  className="dark:bg-white cursor-pointer flex justify-between border-[1px] border-[#D9D9D9] rounded-[5px] py-[13px] px-[15px] mt-2"
                                >
                                  <p className="font-medium text-[14px] text-[#121F2C]">
                                    {selectedStatus}
                                  </p>
                                  <IoIosArrowDown className="text-[14px] text-[#121F2C] self-center" />
                                </div>
                                {status && (
                                  <div className="absolute z-20 bg-white shadow-sm border-[1px] border-[#f2f2f2] w-full mt-1">
                                    {["Active", "InActive"].map((option) => (
                                      <p
                                        key={option}
                                        className="hover:bg-[#f2f2f2] font-medium text-[14px] text-[#121F2C] border-b-[1px] border-[#D9D9D9] p-[10px] cursor-pointer"
                                        onClick={() => handleStatus(option)}
                                      >
                                        {option}
                                      </p>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="mt-5">
                            <div className="flex gap-1">
                              <p className="font-normal text-[#121F2C] dark:text-white text-[12px]">
                                Select Content to Include*
                              </p>
                              <div className="relative group">
                                <Image
                                  src={"/assets/svg/info.svg"}
                                  alt=""
                                  height={18}
                                  width={18}
                                  className="self-center  cursor-pointer"
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
                                    Click the Select Content button to choose
                                    specific sections of content to be included
                                    in this published document. The selected
                                    content cannot be changed once the document
                                    is published.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <Select />
                          </div>

                          <div className="flex justify-end gap-5 my-10">
                            <p className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px] self-center cursor-pointer">
                              Cancel
                            </p>
                            <button className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D]  rounded-[6px] py-3 px-4 uppercase">
                              publish
                            </button>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <div className="flex w-full h-[80vh] flex-col overflow-y-scroll bg-white dark:bg-black shadow-xl"></div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
