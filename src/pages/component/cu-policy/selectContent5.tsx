import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PublishSetting4 from "./publishSetting4";
import PublishSetting5 from "./publishSetting5";

export default function SelectContent4() {
  const [selectContent, setSelectContent] = useState(false);

  return (
    <>
      <p
        onClick={() => setSelectContent(true)}
        className="nun font-normal dark:text-white text-[#121F2C] dark:hover:text-black text-[12px] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-[10px] cursor-pointer"
      >
        Manage Board Approved Date
      </p>

      <Transition.Root show={selectContent} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setSelectContent}>
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
                        <div className="fixed w-full dark:bg-black bg-white rounded-t-[12px] md:rounded-none z-20">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="flex justify-between py-4 px-3 md:px-6 ">
                            <div>
                              <p className="nun font-semibold text-[18px] text-[#14142B] dark:text-white">
                                Select Content
                              </p>
                              <p className="nun font-normal text-[12px] mt-1 dark:text-white">
                                Select one or more section to update manage board approved date
                                settings.
                              </p>
                            </div>
                            <Image
                              onClick={() => setSelectContent(false)}
                              src={"/assets/svg/cross.svg"}
                              alt=""
                              width={40}
                              height={40}
                              className="cursor-pointer hidden md:block"
                            />
                          </div>
                        </div>
                        <div className="relative w-[96%] mx-auto pb-10 mt-28">
                          <div className="flex gap-1 border-b-[1px] border-[#CCCCCC] pb-3">
                            <input type="checkbox" />
                            <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white">
                              Select All
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#CCCCCC] py-3">
                            <div className="flex gap-1 self-center">
                              <input type="checkbox" />
                              <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Chapter 1000: Administrative
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#CCCCCC] py-3">
                            <div className="flex gap-1 self-center pl-5">
                              <input type="checkbox" />
                              <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Policy 1100: Credit Union Culture and Governance
                              </p>
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
                                1100.40: Compensation, Reimbursement
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-1 self-center border-b-[1px] border-[#CCCCCC] py-3 pl-5">
                            <input type="checkbox" />
                            <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                              Policy 1100: Credit Union Culture and Governance
                            </p>
                          </div>

                          <div className="flex gap-1 self-center border-b-[1px] border-[#CCCCCC] py-3 pl-10">
                            <input type="checkbox" />
                            <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                              1200.10: Complaint Process Credit Unions (1230.10)
                            </p>
                          </div>

                          <div className="flex gap-1 self-center py-3 pl-10">
                            <input type="checkbox" />
                            <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                              1100.20: Complaint Process Credit Unions (1230.11)
                            </p>
                          </div>

                          <div className="fixed bottom-0 right-0 pr-5  py-3 bg-white dark:bg-black border-t-[1px] border-[#CCCCCC] w-full flex justify-end gap-5 mt-5">
                            <p
                              onClick={() => setSelectContent(false)}
                              className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px] self-center cursor-pointer"
                            >
                              Cancel
                            </p>

                            <PublishSetting5 />
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <div className="flex w-full h-[80vh] flex-col overflow-y-scroll rounded-t-[12px] md:rounded-none bg-white dark:bg-black shadow-xl"></div>
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
