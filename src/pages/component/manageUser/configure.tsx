import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ConfigureProps {
  setConfigure: (value: boolean) => void;
  configure: boolean;
}

export default function Configure() {
  interface CheckboxState {
    view: boolean[];
    edit: boolean[];
    delete: boolean[];
  }
  const [configure, setConfigure] = useState(false);
  const [checkboxes, setCheckboxes] = useState<CheckboxState>({
    view: [false, false, false, false, false],
    edit: [false, false, false, false, false],
    delete: [false, false, false, false, false],
  });

  const handleCheckboxChange = (type: keyof CheckboxState, index: number) => {
    setCheckboxes((prev) => ({
      ...prev,
      [type]: prev[type].map((item, i) => (i === index ? !item : item)),
    }));
  };

  const handleSelectAllChange = (type: keyof CheckboxState) => {
    const isAllChecked = checkboxes[type].every((item) => item);
    setCheckboxes((prev) => ({
      ...prev,
      [type]: prev[type].map(() => !isAllChecked),
    }));
  };

  return (
    <>
      <p
        onClick={() => setConfigure(true)}
        className="font-normal text-[#3076B1] dark:text-[#4a9fe7] text-[12px] text-center mt-5 cursor-pointer"
      >
        Configure Access
      </p>

      <Transition.Root show={configure} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setConfigure}>
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

          <div className=" fixed inset-0 overflow-hidden z-10">
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
                        <div className="fixed w-full">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="flex justify-between p-4">
                            <div>
                              <p className="nun font-semibold text-[18px] text-[#14142B] dark:text-white">
                                Configure Per-Policy Access
                              </p>
                            </div>
                            <Image
                              onClick={() => setConfigure(false)}
                              src={"/assets/svg/cross.svg"}
                              alt=""
                              width={40}
                              height={40}
                              className="cursor-pointer"
                            />
                          </div>
                          <p className="nun font-normal text-[12px] text-black dark:text-white px-4 -mt-5">
                            Select the user groups CU Policies Manual policy
                            access. Clicking the column header will select all
                            policies in that column. You must click the SAVE
                            button at the bottom of this screen to save your
                            changes.
                          </p>

                          <div className="p-4 mt-3  h-[60vh] overflow-y-scroll">
                            <div className="flex gap-10">
                              <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                                View
                              </p>
                              <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                                Edit
                              </p>
                              <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                                Delete
                              </p>
                            </div>

                            <div className="flex gap-[52px] border-b-[1px] border-[#CCCCCC] pb-1 ">
                              <div>
                                <input
                                  type="checkbox"
                                  className="mt-[6px]"
                                  onChange={() => handleSelectAllChange("view")}
                                  checked={checkboxes.view.every(
                                    (item) => item
                                  )}
                                />
                              </div>

                              <div>
                                <input
                                  type="checkbox"
                                  className="mt-[6px]"
                                  onChange={() => handleSelectAllChange("edit")}
                                  checked={checkboxes.edit.every(
                                    (item) => item
                                  )}
                                />
                              </div>

                              <div>
                                <input
                                  type="checkbox"
                                  className="mt-[6px]"
                                  onChange={() =>
                                    handleSelectAllChange("delete")
                                  }
                                  checked={checkboxes.delete.every(
                                    (item) => item
                                  )}
                                />
                              </div>
                            </div>

                            {[
                              "Chapter 1000: Administrative",
                              "Policy 1100: Credit Union Culture and Governance",
                              "1100.10: Organization",
                              "1100.20: Field of Membership",
                              "1100.30: Board of Director's Duties",
                              "1100.40: Compensation, Reimbursement, and Indemnification",
                              "Policy 1200: Regulatory Compliance",
                            ].map((policy, index) => (
                              <div
                                className="flex gap-[52px]  py-2"
                                key={index}
                              >
                                <div>
                                  <input
                                    type="checkbox"
                                    className="mt-[6px]"
                                    checked={checkboxes.view[index]}
                                    onChange={() =>
                                      handleCheckboxChange("view", index)
                                    }
                                  />
                                </div>

                                <div>
                                  <input
                                    type="checkbox"
                                    className="mt-[6px]"
                                    checked={checkboxes.edit[index]}
                                    onChange={() =>
                                      handleCheckboxChange("edit", index)
                                    }
                                  />
                                </div>

                                <div>
                                  <input
                                    type="checkbox"
                                    className="mt-[6px]"
                                    checked={checkboxes.delete[index]}
                                    onChange={() =>
                                      handleCheckboxChange("delete", index)
                                    }
                                  />
                                </div>
                                <p className="pl-3 nun font-normal text-[#3076B1] text-[14px] self-center border-b-[1px] border-[#CCCCCC] w-full pb-2">
                                  {policy}
                                </p>
                              </div>
                            ))}

                            <div className="flex justify-end gap-5 mt-10 mb-20">
                              <p className="font-semibold text-[#3076B1] dark:text-[#4a9fe7] text-[14px] self-center cursor-pointer">
                                Cancel
                              </p>
                              <button className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4a9fe7] hover:bg-[#18459D]  rounded-[6px] py-3 px-5 uppercase">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="w-[95%] mx-auto pb-40 mt-24 "></div>
                      </div>
                    </Transition.Child>

                    <div className="flex w-full h-[65vh] flex-col overflow-y-scroll bg-white dark:bg-black shadow-xl"></div>

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
