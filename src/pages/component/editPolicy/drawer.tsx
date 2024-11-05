import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Preview() {
  const [preview, setPreview] = useState(false);

  return (
    <>
      <button
        onClick={() => setPreview(true)}
        className="uppercase font-semibold text-[14px] text-white  bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] px-4 py-[12px]"
      >
        preview
      </button>

      <Transition.Root show={preview} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setPreview}>
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
                              Preview Content
                            </p>
                            <Image
                              onClick={() => setPreview(false)}
                              src={"/assets/svg/cross.svg"}
                              alt=""
                              width={40}
                              height={40}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="w-[97%] mx-auto  ">
                          <div className="bg-white dark:bg-black p-4 mt-20 shadow-sm">
                            <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16 px] border-b-[1px] border-[#D8D8D8] pb-2">
                              Organization (1100.10)
                            </p>
                            <p className="nun font-normal text-[#8F8E8E] text-[12px] border-b-[1px] border-[#F5F5F5] py-2">
                              Last Revised on: September 6, 2023
                            </p>

                            <p className="nun font-semibold text-[12px] text-[#121F2C] dark:text-white mt-5">
                              General Statement
                            </p>
                            <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-1">
                              [[CUname]] (Credit Union) is managed by a Board of
                              Directors assisted by committees as set forth in
                              the Credit Unions bylaws and within governance
                              documents (as applicable). 
                            </p>
                            <p className="nun font-semibold text-[12px] text-[#121F2C] dark:text-white mt-5">
                              Guidelines:
                            </p>

                            <div>
                              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                                1. BOARD OF DIRECTORS
                              </p>
                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                a.
                                <p>
                                  The Board of Directors consists of an odd
                                  number of directors, at least five in number,
                                  who are elected by the Credit Union members.
                                </p>
                              </p>

                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                b.
                                <p>
                                  The Board is ultimately responsible for all
                                  the operations of the Credit Union. 
                                </p>
                              </p>

                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                c.
                                <p>
                                  The Board shall elect from their number the
                                  Board Officers specified in the bylaws, and
                                  also shall elect from their number a financial
                                  officer
                                </p>
                              </p>

                              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                                2. GOVERN2NCE.
                              </p>

                              <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white  mt-2">
                                The Board of Directors is responsible for the
                                general direction and control of the affairs of
                                the Credit Union.
                              </p>

                              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                                3. COMMITTEES
                              </p>
                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                a.
                                <p>
                                  The Board shall appoint the following
                                  committees to assist it:
                                </p>
                              </p>

                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                i.
                                <p>
                                  A Supervisory Committee consisting of not less
                                  than three nor more than five members.
                                </p>
                              </p>

                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                ii.
                                <p>
                                  Where the Bylaws so provide, an Executive
                                  Committee of not less than three directors.
                                </p>
                              </p>

                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-8">
                                b.
                                <p>
                                  The Board is ultimately responsible for all
                                  the operations of the Credit Union. 
                                </p>
                              </p>
                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                i.
                                <p>
                                  Where the bylaws so provide, a Credit
                                  Committee consisting of an odd number of
                                  members of the Credit Union, but which shall
                                  not include more than one loan officer.
                                </p>
                              </p>

                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                ii.
                                <p>An Asset/Liability Management Committee.</p>
                              </p>

                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                iii.
                                <p>An Investment Committee.</p>
                              </p>

                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                iv.
                                <p>A Nominating Committee</p>
                              </p>

                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                v.
                                <p>A Nominating Committee</p>
                              </p>

                              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                                BY LAWS AND MEETING MINUTES
                              </p>
                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                a.
                                <p>
                                  The Credit Union will keep a current set of
                                  bylaws and minutes of the meetings of the
                                  Board and its committees.
                                </p>
                              </p>

                              <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                b.
                                <p>
                                  The Board is ultimately responsible for all
                                  the operations of the Credit Union. 
                                </p>
                              </p>

                              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                                5. QUALIFICATIONS.
                              </p>

                              <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                Any member over the age of 18 may serve as a
                                director or committee member subject to the
                                approval of the Credit Unions examiners and
                                bonding company. However, no person shall serve
                                as a director, officer, committee member, or
                                employee of the Credit Union who has been
                                convicted of any criminal offense involving
                                dishonesty or breach of trust.
                              </p>

                              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                                6. ELECTIONS.
                              </p>

                              <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                The Credit Union will follow the election
                                procedures in accordance with its bylaws as
                                follows:[[1200-1]]
                              </p>

                              <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
                                7. RECORD RETENTION.
                              </p>

                              <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
                                See Policy 10001, Table 1 for retention schedule
                                of corporate records.
                              </p>

                              <p className="nun font-normal text-[#7A7B7C] text-[11px] border-t-[1px] border-[#CCCCCC] py-4 mt-4">
                                This content is a resources to support Policy
                                1100 - Credit Union Culture and Governance.
                                <br /> Organization is recommended.
                              </p>
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
      </Transition.Root>
    </>
  );
}
