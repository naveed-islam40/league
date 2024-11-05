import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PublishSetting from "./publishSetting";
import Image from "next/image";

interface CheckedItems {
  chapter1000: boolean;
  policy1100: boolean;
  organization110010: boolean;
  boardDuties110030: boolean;
  compensation110040: boolean;
  complaintProcess123010: boolean;
  complaintProcess123011: boolean;
}

export default function SelectContent() {
  const [selectContent, setSelectContent] = useState<boolean>(false);
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    chapter1000: false,
    policy1100: false,
    organization110010: false,
    boardDuties110030: false,
    compensation110040: false,
    complaintProcess123010: false,
    complaintProcess123011: false,
  });

  // Handle the 'Select All' functionality
  const handleSelectAll = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setCheckedItems({
      chapter1000: newCheckedState,
      policy1100: newCheckedState,
      organization110010: newCheckedState,
      boardDuties110030: newCheckedState,
      compensation110040: newCheckedState,
      complaintProcess123010: newCheckedState,
      complaintProcess123011: newCheckedState,
    });
  };

  // Handle individual checkbox change
  const handleCheckboxChange = (name: keyof CheckedItems) => {
    setCheckedItems((prevState) => {
      const updatedState = { ...prevState, [name]: !prevState[name] };
      const allSelected = Object.values(updatedState).every((item) => item);
      setAllChecked(allSelected);
      return updatedState;
    });
  };

  return (
    <>
      <p
        onClick={() => setSelectContent(true)}
        className="nun font-normal text-[#121F2C] dark:text-white dark:hover:text-black text-[12px] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-[10px] cursor-pointer"
      >
        Change Content Status
      </p>

      <Transition.Root show={selectContent} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setSelectContent(false)}>
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
                        <div className="fixed w-full bg-white dark:bg-black rounded-t-[12px] md:rounded-none z-20">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt="Dots Icon"
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="flex justify-between py-4 px-2 md:px-6 ">
                            <div>
                              <p className="nun font-semibold text-[18px] text-[#14142B] dark:text-white">
                                Select Content
                              </p>
                              <p className="nun font-normal text-[12px] mt-1 dark:text-white">
                              Select one or more sections to update the Draft/Final status
                              </p>
                            </div>
                            <Image
                              onClick={() => setSelectContent(false)}
                              src={"/assets/svg/cross.svg"}
                              alt="Close Icon"
                              width={40}
                              height={40}
                              className="cursor-pointer hidden md:block"
                            />
                          </div>
                        </div>
                        <div className="relative w-[96%] mx-auto pb-10 mt-28">
                          <div className="flex gap-1 border-b-[1px] border-[#CCCCCC] pb-3">
                            <input
                              type="checkbox"
                              className="mt-[1px]"
                              checked={allChecked}
                              onChange={handleSelectAll}
                            />
                            <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white">
                              Select All
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#CCCCCC] py-3">
                            <div className="flex gap-1 self-center">
                              <input
                                type="checkbox"
                                className="mt-[1px]"
                                checked={checkedItems.chapter1000}
                                onChange={() => handleCheckboxChange("chapter1000")}
                              />
                              <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Chapter 1000: Administrative
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#CCCCCC] py-3">
                            <div className="flex gap-1 self-center pl-5">
                              <input
                                type="checkbox"
                                className="mt-[1px]"
                                checked={checkedItems.policy1100}
                                onChange={() => handleCheckboxChange("policy1100")}
                              />
                              <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Policy 1100: Credit Union Culture and Governance
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-1 self-center pl-10 border-b-[1px] border-[#CCCCCC] py-3">
                            <input
                              type="checkbox"
                              className="mt-[1px]"
                              checked={checkedItems.organization110010}
                              onChange={() => handleCheckboxChange("organization110010")}
                            />
                            <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                              1100.10: Organization
                            </p>
                          </div>

                          <div className="flex gap-10 border-b-[1px] border-[#CCCCCC] py-3 pl-10">
                            <div className="flex gap-1 self-center">
                              <input
                                type="checkbox"
                                className="mt-[1px]"
                                checked={checkedItems.boardDuties110030}
                                onChange={() => handleCheckboxChange("boardDuties110030")}
                              />
                              <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                                1100.30: Board of Directors Duties
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-1 self-center pl-10 border-b-[1px] border-[#CCCCCC] py-3">
                            <input
                              type="checkbox"
                              className="mt-[1px]"
                              checked={checkedItems.compensation110040}
                              onChange={() => handleCheckboxChange("compensation110040")}
                            />
                            <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                              1100.40: Compensation Reimbursement
                            </p>
                          </div>



                          <div className="flex justify-between border-b-[1px] border-[#CCCCCC] py-3">
                            <div className="flex gap-1 self-center pl-5">
                              <input
                                type="checkbox"
                                className="mt-[1px]"
                                checked={checkedItems.policy1100}
                                onChange={() => handleCheckboxChange("policy1100")}
                              />
                              <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Policy 1100: Credit Union Culture and Governance
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-1 self-center pl-10 border-b-[1px] border-[#CCCCCC] py-3">
                            <input
                              type="checkbox"
                              className="mt-[1px]"
                              checked={checkedItems.complaintProcess123010}
                              onChange={() => handleCheckboxChange("complaintProcess123010")}
                            />
                            <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                              1200.10: Complaint Process Credit Unions (1230.10)
                            </p>
                          </div>

                          <div className="flex gap-1 self-center py-3 pl-10 pb-6">
                            <input
                              type="checkbox"
                              className="mt-[1px]"
                              checked={checkedItems.complaintProcess123011}
                              onChange={() => handleCheckboxChange("complaintProcess123011")}
                            />
                            <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
                              1100.20: Complaint Process Credit Unions (1230.11)
                            </p>
                          </div>

                          <div className="fixed bottom-0 right-0 pr-5 py-3 bg-white dark:bg-black border-t-[1px] border-[#CCCCCC] w-full flex justify-end gap-5 mt-5">
                            <p
                              onClick={() => setSelectContent(false)}
                              className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px] self-center cursor-pointer"
                            >
                              Cancel
                            </p>

                            <PublishSetting />
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <div className="flex w-full h-[80vh] flex-col overflow-y-scroll bg-white dark:bg-black rounded-t-[12px] md:rounded-none shadow-xl"></div>
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
