import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function DelectPolicy() {
  const [delectP, setDelectP] = useState(false);

  return (
    <>
      <Image
        onClick={() => setDelectP(true)}
        src={"/assets/svg/trash.svg"}
        alt="trash"
        title="Delect"

        width={22}
        height={22}
        className="hidden md:block cursor-pointer"
      />

      <Transition show={delectP} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setDelectP(false)}
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
                      <div className="absolute top-0 left-0 w-full mt-1 h-[100vh] pb-40 overflow-y-scroll">
                        <div className="fixed z-30 w-full bg-white">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="flex justify-between py-4 px-6 ">
                         <div>
                            <p className="nun font-semibold text-[18px] text-[#14142B]">
                            Select Content
                            </p>
                            <p className="nun font-normal text-[12px] text-black mt-2">
                            Select one or more policies to update published settings.
                          </p>
                          </div>
                         


                            <Image
                              onClick={() => setDelectP(false)}
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
                          
                            <div className="flex gap-3 border-b-[2px] border-[#F5F5F5] pb-2">
                                <input type="checkbox" className="outline-none" />
                                <p className="font-normal text-[12px]">Select All</p>
                            </div>
                            <div className="flex gap-3 border-b-[2px] border-[#F5F5F5] py-4">
                                <input type="checkbox" className="outline-none" />
                                <p className="font-normal text-[14px]">Chapter 1000: Administrative</p>
                            </div>

                            <div className="flex gap-3 border-b-[2px] border-[#F5F5F5] py-3 px-6">
                                <input type="checkbox" className="outline-none" />
                                <p className="font-normal text-[14px]">Policy 1100: Credit Union Culture and Governance</p>
                            </div>

                            <div className="flex gap-3 border-b-[2px] border-[#F5F5F5] py-3 px-12">
                                <input type="checkbox" className="outline-none" />
                                <p className="font-normal text-[14px]">1100.10: Organization</p>
                            </div>

                            <div className="flex gap-3 border-b-[2px] border-[#F5F5F5] py-3 px-12">
                                <input type="checkbox" className="outline-none" />
                                <p className="font-normal text-[14px]">1100.20: Field of Membership</p>
                            </div>

                            <div className="flex gap-3 border-b-[2px] border-[#F5F5F5] py-3 px-12">
                                <input type="checkbox" className="outline-none" />
                                <p className="font-normal text-[14px]">1100.30: Board of Directors Duties</p>
                            </div>

                            <div className="flex gap-3 border-b-[2px] border-[#F5F5F5] py-3 px-12">
                                <input type="checkbox" className="outline-none" />
                                <p className="font-normal text-[14px]">1100.40: Compensation, Reimbursement, and Indemnification</p>
                            </div>

                            <div className="flex gap-3 border-b-[2px] border-[#F5F5F5] py-3 px-6">
                                <input type="checkbox" className="outline-none" />
                                <p className="font-normal text-[14px]">Policy 1200: Regulatory Compliance</p>
                            </div>

                            <div className="flex gap-3 border-b-[2px] border-[#F5F5F5] py-3 px-12">
                                <input type="checkbox" className="outline-none" />
                                <p className="font-normal text-[14px]">1100.20: Complaint Process for State-Chartered Credit Unions (1230.11)</p>
                            </div>


                    
                            <div className="flex justify-end gap-5 mt-14">
                            <p
                              onClick={() => setDelectP(false)}
                              className="font-semibold text-[#3076B1] text-[14px] self-center cursor-pointer"
                            >
                              Cancel
                            </p>
                            <button className="font-semibold text-white text-[14px] bg-[#ED4C5C] hover:bg-[#a93944]  rounded-[6px] py-3 px-5 uppercase">
                            delete
                            </button>
                          </div>

                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <div className="flex w-full h-[80vh] flex-col overflow-y-scroll bg-white shadow-xl"></div>

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
