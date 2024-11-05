import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CalendarPopup from "../manageAssignment/calandar";

export default function   PublishSetting4() {
  const [published, setPublished] = useState(false);

  const sortOptions = [
    "Use Last Published Version",
    "Popular to Newest",
    "Highest Rated",
    "Lowest Rated",
  ];

  const [selectedSort, setSelectedSort] = useState<string>(sortOptions[0]);

  return (
    <>
      <button
        onClick={() => setPublished(true)}
        className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D]  rounded-[6px] py-3 px-4 uppercase"
      >
        Next
      </button>

      <Transition.Root show={published} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setPublished}>
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
                      <div className="dark:bg-black absolute top-0 left-0 w-full mt-1 h-[100vh] pb-52 overflow-y-scroll">
                        <div className="fixed z-30 w-full rounded-t-[12px] md:rounded-none dark:bg-black bg-white">
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
                            Manage Board Approved Date
                            </p>
                            <p className="nun font-normal text-[12px]  dark:text-white">
                              Note: Your selection will override the existing
                              dates for the selected content
                            </p>
                            </div>

                            {/* Use the custom handleClose function here */}
                            <Image
                              onClick={() => setPublished(false)}
                              src={"/assets/svg/cross.svg"}
                              alt=""
                              width={40}
                              height={40}
                              className="cursor-pointer hidden md:block"
                            />
                          </div>
                          </div>
                          <div className="px-6 pb-10 mt-28">

                            <div className="mt-5 flex gap-5">
                              <p className="dark:text-white mt-[6px] font-normal text-[14px] w-[20%] md:w-[10%] lg:w-[5%] self-center">
                                New Date
                              </p>
                              <div className="w-[80%] md:w-[40%] lg:w-[30%]">
                              <div className="dark:bg-white  border-[1px] border-[#D9D9D9] rounded-[5px] py-[13px] px-[15px]  mt-2">
                                <CalendarPopup/>

                                </div>
                              </div>
                            </div>

                            <div className="mt-10">
                              <p className="font-semibold text-[14px] border-b-[2px] border-[#f2f2f2] pb-2 dark:text-white">
                                Following Content Affected: 
                                <span className="font-normal">9 policies</span>
                              </p>
                              <p className="font-normal text-[14px] mt-5 dark:text-white">
                                Chapter 1000: Administrative
                              </p>
                              <p className="font-normal text-[14px] ml-5 dark:text-white">
                                Policy 1100: Credit Union Culture and Governance{" "}
                              </p>
                              <div className="ml-10">
                                <p className="font-normal text-[14px] dark:text-white">
                                  1100.10: Organization
                                </p>
                                <p className="font-normal text-[14px] dark:text-white">
                                  1100.20: Field of Membership
                                </p>
                                <p className="font-normal text-[14px] dark:text-white">
                                  1100.30: Board of Directors Duties
                                </p>
                                <p className="font-normal text-[14px] dark:text-white">
                                  1100.40: Compensation, Reimbursement, and
                                  Indemnification
                                </p>
                              </div>

                              <p className="font-normal text-[14px] dark:text-white ml-5 mt-2">
                                Policy 1200: Regulatory Compliance
                              </p>
                              <div className="ml-10">
                                <p className="font-normal text-[14px] dark:text-white">
                                  1200.10: Complaint Process for Federally
                                  Chartered Credit Unions (1230.10)
                                </p>
                                <p className="font-normal text-[14px] dark:text-white">
                                  1100.20: Complaint Process for State-Chartered
                                  Credit Unions (1230.11)
                                </p>
                              </div>
                            </div>

                            <div className="flex justify-end gap-5 mt-5 mb-12">
                              <p className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px] self-center cursor-pointer">
                                Cancel
                              </p>

                              <button
                                onClick={() => setPublished(true)}
                                className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D]  rounded-[6px] py-3 px-4 uppercase"
                              >
                                update
                              </button>
                            </div>
                          </div>
                        
                      </div>
                    </Transition.Child>

                    <div className="flex w-full h-[65vh] flex-col overflow-y-scroll rounded-t-[12px] md:rounded-none bg-white dark:bg-black shadow-xl"></div>
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
