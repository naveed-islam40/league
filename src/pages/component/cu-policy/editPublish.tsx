import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

export default function EditPublish() {
  const [docx, setDocx] = useState(false);
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
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <>
      <Image
        onClick={() => setDocx(true)}
        src="/assets/svg/bx-edit.svg"
        alt="Edit"
        width={24}
        height={24}
        className="cursor-pointer"
      />

      <Transition show={docx} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setDocx(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
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
                            <p className="nun font-bold text-[20px] dark:text-white text-[#14142B]">
                              Edit Published Document
                            </p>
                            <Image
                              onClick={() => setDocx(false)}
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
                            <p className="font-normal dark:text-white text-[#121F2C] text-[12px]">
                              Document Name *
                            </p>
                            <input
                              type="text"
                              placeholder="Published Document 001"
                              className="mt-2 font-normal dark:bg-white text-[#121F2C] text-[14px] border-[1px] border-[#D9D9D9] rounded-[5px] p-[12px] w-full bg-[#EFEFEF99]"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-5 mt-8">
                            <div className="">
                              <p className="font-normal dark:text-white text-[#121F2C] text-[12px]">
                                Roles Authorized For Viewing *
                              </p>
                              <div className="relative" ref={dropdownRef}>
                                <div
                                  onClick={toggleSelect}
                                  className="cursor-pointer dark:bg-white  flex justify-between border-[1px] border-[#D9D9D9] rounded-[5px] py-[13px] px-[15px] mt-2"
                                >
                                  <p className="font-medium text-[14px] text-[#121F2C]">
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
                              <p className="font-normal dark:text-white text-[#121F2C] text-[12px]">
                                Status *
                              </p>
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
                                    {["Active", "InActive"].map(
                                      (option) => (
                                        <p
                                          key={option}
                                          className="hover:bg-[#f2f2f2] font-medium text-[14px] text-[#121F2C] border-b-[1px] border-[#D9D9D9] p-[10px] cursor-pointer"
                                          onClick={() =>
                                            handleStatus(option)
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
                          </div>

                          <div className="flex justify-end gap-5 my-10">
                            <p
                              onClick={() => setDocx(false)}
                            
                            className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px] self-center cursor-pointer">
                              Cancel
                            </p>
                            <button className="font-semibold text-white text-[14px] dark:bg-[#4A9FE7] bg-[#3076B1] hover:bg-[#18459D]  rounded-[6px] py-3 px-4 uppercase">
                              SAVE
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
