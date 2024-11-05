import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Global() {
  const [selectContent, setSelectContent] = useState(false);

  return (
    <>
      <p
        onClick={() => setSelectContent(true)}
        className="font-normal text-[10px] bg-[#E7F6FD] p-2 border-l-[2px] border-[#3076B1]"
      >
        FCC – Targeting and Eliminating Unlawful; Text Messages
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
                      <div className="absolute top-0 left-0 w-full mt-1 h-[100vh] pb-40 overflow-y-scroll ">
                        <div className="fixed w-full bg-white dark:bg-black  rounded-t-[20px] md:rounded-none  z-20">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="p-4">
                          <div className="flex justify-between"> 
                            <button className="mt-3 font-normal text-[#14142B] text-[12px] bg-[#E0E0E0] rounded-[4px] p-2">
                              April 8, 2024
                            </button>

                            <Image
                              onClick={() => setSelectContent(false)}
                              src={"/assets/svg/cross.svg"}
                              alt=""
                              width={40}
                              height={40}
                              className="cursor-pointer"
                            />
                            </div>
                            <p className="font-semibold text-[#14142B] dark:text-white text-[16px] mt-2">
                              FCC – Targeting and Eliminating Unlawful; Text
                              Messages
                            </p>

                            <div className="flex gap-3">
                              <button className="mt-3 font-normal text-[#14142B] text-[12px] bg-[#f2f6ef] rounded-[4px] p-2">
                                All Day Event
                              </button>
                              <button className="mt-3 font-normal text-[#14142B] text-[12px] bg-[#fbf7ee] rounded-[4px] p-2">
                                1 day(s)
                              </button>


                            </div>
                            <p className="font-normal text-[#14142B] dark:text-white text-[12px] mt-3">
                                The <span className="text-[#3076B1]">FCC issued a final rule</span> that requires the
                                credit union to obtain prior express written
                                consent in writing that clearly and
                                conspicuously authorizes no more than one
                                identified seller to deliver calls/texts using
                                an automatic telephone dialing system or an
                                artificial or prerecorded voice. These
                                calls/texts must be logically and topically
                                associated with the interaction that promoted
                                the consent. Meaning, if the member provides
                                consent to be contacted for account services,
                                the same consent should not be used to market
                                loan products.</p>
                            <p className="font-normal text-[#14142B] dark:text-white text-[12px] mt-3">
                                
                                There are also clear and
                                conspicuous disclosure requirements for the
                                signatory.
                              </p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <div className="flex w-full h-[80vh] flex-col overflow-y-scroll bg-white dark:bg-black rounded-t-[20px] md:rounded-none shadow-xl"></div>
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
