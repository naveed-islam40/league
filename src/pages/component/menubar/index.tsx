import Image from "next/image";
import React, { Fragment, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
export default function Menubar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-12 mt-8 md:mt-10 w-[90%] 2xl:w-[70%] mx-auto">
        <div className="lg:col-span-4 xl:col-span-5">
          <Image
            src={"/assets/png/logos.png"}
            alt=""
            width={225}
            height={25}
            className="w-[150px] md:w-[200px] h-auto lg:w-[225px] lg:h-[25px]"
          />
          <p className="font-medium text-[15px] text-[#7A7B7C] dark:text-white uppercase mt-2 hidden md:block">
            A Complete Solution
          </p>
        </div>
        <div className="lg:col-span-8 xl:col-span-7 hidden lg:flex justify-end gap-5 xl:gap-10 self-center">
          <p className="font-normal text-[14px] text-[#121212] dark:text-white cursor-pointer">
            Overview
          </p>
          <p className="font-normal text-[14px] text-[#121212] dark:text-white cursor-pointer">
            InfoSight{" "}
          </p>
          <p className="font-normal text-[14px] text-[#121212] dark:text-white cursor-pointer">
            CU PolicyPro
          </p>
          <p className="font-normal text-[14px] text-[#121212] dark:text-white cursor-pointer">
            RecoveryPro
          </p>
          <p className="font-normal text-[14px] text-[#121212] dark:text-white cursor-pointer">
            Collaborative Tools
          </p>
          <p className="font-normal text-[14px] text-[#121212] dark:text-white cursor-pointer">
            About Us
          </p>
        </div>
        <div className="block lg:hidden ml-auto self-center">
          <RiMenu3Fill
            onClick={() => setOpen(true)}
            className="text-[25px] md:text-[30px] dark:text-white"
          />
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative " onClose={setOpen}>
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
          <div className="fixed inset-0 overflow-hidden  z-10">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex w-[50%] pl-0">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-full">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-4 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        {/* <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button> */}
                      </div>
                    </Transition.Child>
                    <div className="flex w-[100%] ml-auto h-full flex-col overflow-y-scroll  bg-white  dark:bg-black shadow-xl relative z-40">
                      <div className=" container grid grid-cols-1 py-1 ">
                        <div className="flex justify-between px-5 border-b-[1px] border-[#f2f2f2] py-5 ">
                          <Image
                            src={"/assets/png/logos.png"}
                            alt=""
                            width={150}
                            height={25}
                          />

                          {/* <div className="w-[50%] px-3"></div>
                          <button
                            type="button"
                            className=" rounded-md text-white  focus:outline-none"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                          </button> */}
                        </div>

                        <div className="p-5">
                          <p className="font-normal text-[14px] text-[#121212] dark:text-white cursor-pointer">
                            Overview
                          </p>
                          <p className="font-normal text-[14px] text-[#121212] dark:text-white cursor-pointer mt-5">
                            InfoSight{" "}
                          </p>
                          <p className="font-normal text-[14px] text-[#121212] dark:text-white cursor-pointer mt-5">
                            CU PolicyPro
                          </p>
                          <p className="font-normal text-[14px] text-[#121212] dark:text-white cursor-pointer mt-5">
                            RecoveryPro
                          </p>
                          <p className="font-normal text-[14px] text-[#121212] dark:text-white cursor-pointer mt-5">
                            Collaborative Tools
                          </p>
                          <p className="font-normal text-[14px] text-[#121212] dark:text-white cursor-pointer mt-5">
                            About Us
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
