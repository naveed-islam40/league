import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaPlus } from "react-icons/fa6";

export default function Select() {
  const [select, setSelect] = useState(false);

  return (
    <>
      <button
        onClick={() => setSelect(true)}
        className="flex gap-2 mt-2 nun font-semibold text-[#3076B1] text-[16px] border-[1px] border-[#3076B1] py-2 px-5 rounded-[10px]"
      >
        <FaPlus className="self-center" />
        Select Content
      </button>

      

      <Transition show={select} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setSelect(false)}
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
                      <div className="dark:bg-black absolute top-0 left-0 w-full mt-1 h-[100vh] pb-40 overflow-y-scroll ">
                        <div className="fixed w-full dark:bg-black bg-white  z-20">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="flex justify-between py-4 px-6 ">
                            <div>
                              <p className="nun font-semibold text-[18px] text-[#14142B] dark:text-white">
                                Select Content
                              </p>
                              <p className="nun font-normal text-[12px] mt-1 w-[90%] dark:text-white">
                                Select one or more policies to include in
                                published manual. If Draft and Final Version are
                                available for selected content, you must choose
                                which version to use in this published Document.
                                Content with only Draft version available will
                                be indicated.
                              </p>
                            </div>
                            <Image
                              onClick={() => setSelect(false)}
                              src={"/assets/svg/cross.svg"}
                              alt=""
                              width={40}
                              height={40}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="w-[96%] mx-auto pb-10 mt-32">
                          <div className="flex gap-1 border-b-[1px] border-[#CCCCCC] pb-3">
                            <input type="checkbox" />
                            <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white">
                              Select All
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#CCCCCC] py-3">
                            <div className="flex gap-10">
                              <div className="flex gap-1 self-center">
                                <input type="checkbox" />
                                <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                                  Chapter 1000: Administrative
                                </p>
                              </div>

                              <div className="flex gap-2">
                                <p className="self-center nun font-normal text-[14px] text-[#7A7B7C]">
                                  Select a Version:
                                </p>
                                <button className="nun font-normal text-[14px] text-white bg-[#3076B1] hover:bg-[#18459D] rounded-[6px] py-[5px] px-[15px]">
                                  Draft
                                </button>
                              </div>
                            </div>
                            <div className="flex gap-2 self-center">
                              <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                                All Sub-Content
                              </p>
                              <input type="checkbox" />
                            </div>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#CCCCCC] py-3">
                            <div className="flex gap-1 self-center pl-5">
                              <input type="checkbox" />
                              <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Policy 1100: Credit Union Culture and Governance
                              </p>
                            </div>

                            <div className="flex gap-2 self-center">
                              <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                                All Sub-Content
                              </p>
                              <input type="checkbox" />
                            </div>
                          </div>

                          <div className="flex gap-1 self-center pl-10 border-b-[1px] border-[#CCCCCC] py-3">
                            <input type="checkbox" />
                            <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                              1100.10: Organization
                            </p>
                          </div>

                          <div className="flex gap-10 border-b-[1px] border-[#CCCCCC] py-3 pl-10">
                            <div className="flex gap-1 self-center">
                              <input type="checkbox" />
                              <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Chapter 1000: Administrative
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <p className="self-center nun font-normal text-[14px] text-[#7A7B7C]">
                                Select a Version:
                              </p>
                              <div className="flex gap-3">
                                <button className="nun font-normal text-[14px] border-[1px] border-[#CCCCCC] text-[#121212] bg-[#EFEFEF99] rounded-[6px] py-[5px] px-[15px]">
                                  Draft
                                </button>
                                <button className="nun font-normal text-[14px] text-white bg-[#3076B1] hover:bg-[#18459D] rounded-[6px] py-[5px] px-[15px]">
                                  Final
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-1 self-center pl-10 border-b-[1px] border-[#CCCCCC] py-3">
                            <input type="checkbox" />
                            <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                            1100.30: Board of Directors Duties
                            </p>
                          </div>

                          <div className="flex gap-10 border-b-[1px] border-[#CCCCCC] py-3 pl-10">
                            <div className="flex gap-1 self-center">
                              <input type="checkbox" />
                              <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Chapter 1000: Administrative
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <p className="self-center nun font-normal text-[14px] text-[#7A7B7C]">
                                Select a Version:
                              </p>
                              <div className="flex gap-3">
                                <button className="nun font-normal text-[14px] border-[1px] border-[#CCCCCC] text-[#121212] bg-[#EFEFEF99] rounded-[6px] py-[5px] px-[15px]">
                                  Draft
                                </button>
                                <button className="nun font-normal text-[14px] text-white bg-[#3076B1] hover:bg-[#18459D] rounded-[6px] py-[5px] px-[15px]">
                                  Final
                                </button>
                              </div>
                            </div>
                          </div>

                            <div className="flex gap-1 self-center border-b-[1px] border-[#CCCCCC] py-3 pl-5">
                              <input type="checkbox" />
                              <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Policy 1100: Credit Union Culture and Governance
                              </p>
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

                    <div className="flex w-full h-[80vh] flex-col overflow-y-scroll dark:bg-black bg-white shadow-xl"></div>

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
