import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import EditAssignment from "./editAssignment";
import Delect from "../manageUser/delect";

export default function Detail({ row }: any) {
  const [detail, setDetail] = useState(false);

  return (
    <>
      <p
        onClick={() => setDetail(true)}
        className=" font-normal text-[#3076B1] text-[14px] self-center"
      >
        {row}
      </p>
      

      <Transition.Root show={detail} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setDetail}>
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
              <div className="pointer-events-none fixed inset-x-0 bottom-0 flex max-h-[100vh]">
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
                        <div className="fixed w-full bg-white dark:bg-black">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="flex justify-between py-4 px-6 border-b-[1px] border-[#CCCCCC]">
                            <p className="nun font-bold text-[18px] text-[#14142B] dark:text-white self-center">
                              Policy review spell check for Account Introduction
                            </p>

                            <div
                              onClick={() => setDetail(false)}
                              className="cursor-pointer block xl:hidden"
                            >
                              <Image
                                src={"/assets/svg/cross.svg"}
                                alt=""
                                width={40}
                                height={40}
                              />
                            </div>
                            <div className="hidden xl:flex gap-5">
                              <button className="uppercase flex gap-2 font-semibold text-[12px] text-[#7A7B7C] border-[1px] border-[#D6D8E7] py-[12px] px-[10px] rounded-[6px]">
                                <Image
                                  src={"/assets/svg/bx-rep.svg"}
                                  alt=""
                                  width={24}
                                  height={24}
                                />
                                <p className="self-center dark:text-white"> Re-open</p>
                              </button>

                              <button className="uppercase flex gap-2 font-semibold text-[12px] text-[#7A7B7C] border-[1px] border-[#D6D8E7] py-[12px] px-[10px] rounded-[6px]">
                                <Image
                                  src={"/assets/svg/gcheck.svg"}
                                  alt=""
                                  width={24}
                                  height={24}
                                />
                                <p className="self-center dark:text-white"> mark as complete</p>
                              </button>

                              <button className="bg-[#0BA32D] uppercase flex gap-2 font-semibold text-[12px] text-white border-[1px] border-[#D6D8E7] dark:border-transparent py-[12px] px-[10px] rounded-[6px]">
                                <Image
                                  src={"/assets/svg/checks.svg"}
                                  alt=""
                                  width={24}
                                  height={24}
                                />
                                <p className="self-center">
                                  {" "}
                                  marked as completed
                                </p>
                              </button>

                              <EditAssignment />
                              <Delect />

                              <div
                                onClick={() => setDetail(false)}
                                className="cursor-pointer "
                              >
                                <Image
                                  src={"/assets/svg/cross.svg"}
                                  alt=""
                                  width={40}
                                  height={40}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pl-6 pr-8 pb-10 mt-28">
                        
                          <div className="flex justify-between">
                            <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                              Product:{" "}
                              <span className="font-semibold">InfoSight</span>
                            </p>
                            <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                              Type:{" "}
                              <span className="font-semibold">
                                Compliance Review
                              </span>
                            </p>
                            <div className="flex gap-2">
                              <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                                Due Date:{""}
                                <span className="ml-1 font-semibold text-[#ED4C5C]">
                                  Jul 31, 2024
                                </span>
                              </p>
                              <button className="font-semibold text-[12px] text-white bg-[#ED4C5C] py-[1px] px-[10px] rounded-[6px]">
                                2 days Overdue
                              </button>
                            </div>
                          </div>

                          <div className="mt-5">
                            <p className="font-normal text-[#3D4349] dark:text-white text-[14px]">
                              User(s) Assigned *
                            </p>
                            <div className="flex gap-2 mt-5">
                              <button className="bg-[#EFEFEF99] rounded-[6px] py-[5px] px-[10px] flex gap-4 font-normal text-[#121212] dark:text-white text-[14px]">
                                Keith Wayman
                              </button>
                              <button className="bg-[#EFEFEF99] rounded-[6px] py-[5px] px-[10px] flex gap-4 font-normal text-[#121212] dark:text-white text-[14px]">
                                Keith Wayman
                              </button>
                              <button className="bg-[#EFEFEF99] rounded-[6px] py-[5px] px-[10px] flex gap-4 font-normal text-[#121212] dark:text-white text-[14px]">
                                Keith Wayman
                              </button>
                              <button className="bg-[#EFEFEF99] rounded-[6px] py-[5px] px-[10px] flex gap-4 font-normal text-[#121212] dark:text-white text-[14px]">
                                Keith Wayman
                              </button>
                              <button className="bg-[#EFEFEF99] rounded-[6px] py-[5px] px-[10px] flex gap-4 font-normal text-[#121212] dark:text-white text-[14px]">
                                Keith Wayman
                              </button>
                            </div>
                          </div>

                          <div className="mt-5">
                            <p className="font-normal text-[#3D4349] dark:text-white text-[14px]">
                              Notes:
                            </p>
                            <p className="nun font-normal text-[#14142B] dark:text-white text-[12px] mt-3">
                              State law dealing with deposit accounts takes two
                              forms. Statutes that govern how certain deposits
                              work and what contract terms are and are not
                              enforceable; and basic contract law which covers
                              the contract existing between the credit union and
                              its depositors. In general, a credit union may
                              accept shares and deposits from members on terms
                              and conditions agreed upon by both parties. Credit
                              unions must take into consideration numerous laws
                              and regulations regarding the opening,
                              maintaining, and closing of deposit accounts.
                            </p>
                          </div>

                          <div className="mt-5">
                            <p className="font-normal text-[#3D4349] dark:text-white text-[14px]">
                              Notes:
                            </p>

                            <div className="flex gap-1 mt-5 cursor-pointer">
                              <Image
                                src={"/assets/svg/word.svg"}
                                alt=""
                                width={24}
                                height={24}
                              />
                              <p className="font-normal text-[14px] text-[#3076B1] self-center">
                                1--May-2024-Overview.docx
                              </p>
                            </div>
                            <div className="flex gap-1 mt-3 cursor-pointer">
                              <Image
                                src={"/assets/svg/word.svg"}
                                alt=""
                                width={24}
                                height={24}
                              />
                              <p className="font-normal text-[14px] text-[#3076B1] self-center">
                                1520.10-Succession-Plan-(NEW).docx
                              </p>
                            </div>
                            <div className="flex gap-1 mt-3 cursor-pointer">
                              <Image
                                src={"/assets/svg/word.svg"}
                                alt=""
                                width={24}
                                height={24}
                              />
                              <p className="font-normal text-[14px] text-[#3076B1] self-center">
                                2210.11-Individual-Retirement-Arrangements-(REDLINED).docx
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-5 mt-10 xl:hidden">
                            <button className="uppercase flex gap-2 font-semibold text-[12px] text-[#7A7B7C] border-[1px] border-[#D6D8E7] py-[12px] px-[10px] rounded-[6px]">
                              <Image
                                src={"/assets/svg/bx-rep.svg"}
                                alt=""
                                width={24}
                                height={24}
                              />
                              <p className="self-center dark:text-white"> Re-open</p>
                            </button>

                            <button className="uppercase flex gap-2 font-semibold text-[12px] text-[#7A7B7C] border-[1px] border-[#D6D8E7] py-[12px] px-[10px] rounded-[6px]">
                              <Image
                                src={"/assets/svg/gcheck.svg"}
                                alt=""
                                width={24}
                                height={24}
                              />
                              <p className="self-center dark:text-white"> mark as complete</p>
                            </button>

                            <button className="bg-[#0BA32D] uppercase flex gap-2 font-semibold text-[12px] text-white border-[1px] border-[#D6D8E7] dark:border-transparent py-[12px] px-[10px] rounded-[6px]">
                              <Image
                                src={"/assets/svg/checks.svg"}
                                alt=""
                                width={24}
                                height={24}
                              />
                              <p className="self-center">
                                {" "}
                                marked as completed
                              </p>
                            </button>

                            <EditAssignment />
                            <Delect />
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
