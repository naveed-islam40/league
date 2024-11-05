import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Recoder() {
  const [recoder, setRecoder] = useState(false);

  return (
    <>
      <Image
        onClick={() => setRecoder(true)}
        src={"/assets/svg/bx-move.svg"}
        alt=""
        
        title="Sorting"

        height={24}
        width={24}
        className="cursor-pointer "
      />

      <Transition show={recoder} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setRecoder(false)}
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
                        <div className="fixed z-30 w-full bg-white dark:bg-black">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className=" flex justify-between py-4 px-6 ">
                         <div className="self-center">
                            <p className=" nun font-semibold text-[18px] text-[#14142B] dark:text-white">
                              Reorder Content
                            </p>
                            <p className="hidden md:block nun font-normal text-[12px] text-black dark:text-white mt-2">
                            Content can be alphabetized or sorted by section
                            number using the buttons below, or drag and drop
                            content items into the desired order.
                          </p>
                          </div>


                            <Image
                              onClick={() => setRecoder(false)}
                              src={"/assets/svg/cross.svg"}
                              alt=""
                              width={40}
                              height={40}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="pl-6 pr-8 pb-10 mt-28">
                          
                          <div className="w-[98%] mx-auto">
                            <div className="hidden md:flex w-[460px] mx-auto  justify-center mt-6">
                              <div className="w-full flex items-center justify-center gap-2 border border-[#7A7B7C] rounded-tl-lg rounded-bl-lg cursor-pointer py-2">
                                <Image
                                  src={"/assets/svg/sortNum.svg"}
                                  alt=""
                                  width={17}
                                  height={15}
                                />
                                <p className="font-normal text-[12px] text-[#7A7B7C] dark:text-white">
                                  Sort by Section Number
                                </p>
                              </div>

                              <div className="w-full flex items-center justify-center gap-2 border border-[#7A7B7C] dark:text-white border-l-0 rounded-tr-lg rounded-br-lg cursor-pointer py-2">
                                <Image
                                  src={"/assets/svg/sortAlb.svg"}
                                  alt=""
                                  width={17}
                                  height={17}
                                />
                                <p className="font-normal text-[12px] text-[#7A7B7C] dark:text-white">

                                  Sort Alphabetically
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-3 md:pt-8 pb-2 border-b-[1px] border-[#CCCCCC]">
                              <Image
                                src={"/assets/svg/bx-ver.svg"}
                                alt=""
                                width={10}
                                height={16}
                                className="opacity-40"
                              />
                              <p className="nun font-normal text-[#121212] dark:text-white text-[14px] self-center">
                                Chapter 1000: Administrative
                              </p>
                            </div>
                            <div className="flex gap-3 py-4 border-b-[1px] border-[#CCCCCC]">
                              <Image
                                src={"/assets/svg/bx-ver.svg"}
                                alt=""
                                width={10}
                                height={16}
                                className="opacity-40"
                              />
                              <p className="nun font-normal text-[#121212] dark:text-white text-[14px] self-center">
                                Chapter 2000: Operations
                              </p>
                            </div>
                            <div className="flex gap-3 py-4 border-b-[1px] border-[#CCCCCC]">
                              <Image
                                src={"/assets/svg/bx-ver.svg"}
                                alt=""
                                width={10}
                                height={16}
                                className="opacity-40"
                              />
                              <p className="nun font-normal text-[#121212] dark:text-white text-[14px] self-center">
                                Chapter 3000: Accounting
                              </p>
                            </div>
                            <div className="flex gap-3 py-4 border-b-[1px] border-[#CCCCCC]">
                              <Image
                                src={"/assets/svg/bx-ver.svg"}
                                alt=""
                                width={10}
                                height={16}
                                className="opacity-40"
                              />
                              <p className="nun font-normal text-[#121212] dark:text-white text-[14px] self-center">
                                Chapter 4000: Security
                              </p>
                            </div>
                            <div className="flex gap-3 py-4 border-b-[1px] border-[#CCCCCC]">
                              <Image
                                src={"/assets/svg/bx-ver.svg"}
                                alt=""
                                width={10}
                                height={16}
                                className="opacity-40"
                              />
                              <p className="nun font-normal text-[#121212] dark:text-white text-[14px] self-center">
                                Chapter 5000: Asset/Liability Management
                              </p>
                            </div>
                            <div className="flex gap-3 py-4 border-b-[1px] border-[#CCCCCC]">
                              <Image
                                src={"/assets/svg/bx-ver.svg"}
                                alt=""
                                width={10}
                                height={16}
                                className="opacity-40"
                              />
                              <p className="nun font-normal text-[#121212] dark:text-white text-[14px] self-center">
                                Chapter 6000: Investment
                              </p>
                            </div>
                            <div className="flex gap-3 py-4 border-b-[1px] border-[#CCCCCC]">
                              <Image
                                src={"/assets/svg/bx-ver.svg"}
                                alt=""
                                width={10}
                                height={16}
                                className="opacity-40"
                              />
                              <p className="nun font-normal text-[#121212] dark:text-white text-[14px] self-center">
                                Chapter 7000: Lending
                              </p>
                            </div>
                            <div className="flex gap-3 py-4 border-b-[1px] border-[#CCCCCC]">
                              <Image
                                src={"/assets/svg/bx-ver.svg"}
                                alt=""
                                width={10}
                                height={16}
                                className="opacity-40"
                              />
                              <p className="nun font-normal text-[#121212] dark:text-white text-[14px] self-center">
                                Chapter 8000: Other Real Estate Owned (OREO)
                              </p>
                            </div>
                            <div className="flex gap-3 py-4 border-b-[1px] border-[#CCCCCC]">
                              <Image
                                src={"/assets/svg/bx-ver.svg"}
                                alt=""
                                width={10}
                                height={16}
                                className="opacity-40"
                              />
                              <p className="nun font-normal text-[#121212] dark:text-white text-[14px] self-center">
                                Chapter 9000: Federal Regulations
                              </p>
                            </div>
                            <div className="flex gap-3 py-4 border-b-[1px] border-[#CCCCCC]">
                              <Image
                                src={"/assets/svg/bx-ver.svg"}
                                alt=""
                                width={10}
                                height={16}
                                className="opacity-40"
                              />
                              <p className="nun font-normal text-[#121212] dark:text-white text-[14px] self-center">
                                Chapter 10000: Records Retention
                              </p>
                            </div>

                            <div className="flex justify-end gap-5 mt-14">
                            <p
                              onClick={() => setRecoder(false)}
                              className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px] self-center cursor-pointer"
                            >
                              Cancel
                            </p>
                            <button className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D]  rounded-[6px] py-3 px-5 uppercase">
                              SAVE
                            </button>
                          </div>

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
