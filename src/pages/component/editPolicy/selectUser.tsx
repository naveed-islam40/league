import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function SelectUser() {
  const [selectUser, setSelectUser] = useState(false);

  return (
    <>
      <p
        onClick={() => setSelectUser(true)}
        className="font-normal text-[14px] dark:text-[#4A9FE7]  text-[#3076B1] cursor-pointer"
      >
        Select Users
      </p>

      <Transition.Root show={selectUser} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setSelectUser}>
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
                        <div className="fixed z-30 w-full dark:bg-black bg-white">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="flex justify-between py-4 px-6 ">
                            <p className="nun font-bold text-[18px] text-[#14142B] dark:text-white">
                              Select User(s)
                            </p>
                            <Image
                              onClick={() => setSelectUser(false)}
                              src={"/assets/svg/cross.svg"}
                              alt=""
                              width={40}
                              height={40}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="pl-6 pr-8 pb-10 mt-28 ">
                          <div className="relative ">
                            <input
                              type="text"
                              placeholder="Search User"
                              className="dark:bg-black pb-2 pl-6 pr-14 text-[#7A7B7C] font-medium text-[16px] outline-none border-b-[2px] border-[#f2f2f2] w-full"
                            />
                            <Image
                              src={"/assets/svg/bi_searchs.svg"}
                              alt=""
                              width={16}
                              height={16}
                              className="absolute top-1 left-0"
                            />
                            <div className="flex gap-2 absolute right-0 top-1">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-5 gap-5 mt-5">
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white ">
                                Keith Wayman
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white ">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white ">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white ">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white ">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white ">
                                Keith Wayman
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white ">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white ">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white ">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white ">
                                Keith Wayman
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <input type="checkbox" className="mt-[1px]" />
                              <p className="font-normal text-[14px] dark:text-white ">
                                Keith Wayman
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-end gap-5 mt-28">
                            <p
                              onClick={() => setSelectUser(false)}
                              className="font-semibold text-[#3076B1]  dark:text-[#4A9FE7] text-[14px] self-center cursor-pointer"
                            >
                              Cancel
                            </p>
                            <button className="font-semibold text-white text-[14px] dark:bg-[#4A9FE7] bg-[#3076B1] hover:bg-[#18459D]  rounded-[6px] py-3 px-4 uppercase">
                              DONE
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
      </Transition.Root>
    </>
  );
}
