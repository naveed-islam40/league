import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Sure() {
  const [sure, setSure] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([
    "Any logged in CU PolicyPro Users",
  ]);
  const [tempSelectedValues, setTempSelectedValues] = useState<string[]>([
    "Any logged in CU PolicyPro Users",
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (value: string) => {
    setTempSelectedValues((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const isSelected = (value: string) => tempSelectedValues.includes(value);

  const handleCancel = () => {
    setTempSelectedValues(selectedValues);
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setSelectedValues(tempSelectedValues);
    setIsOpen(false);
  };

  return (
    <>
      <Image
        onClick={() => setSure(true)}
        src={"/assets/svg/locks.svg"}
        alt=""
        className="cursor-pointer"
        width={24}
        height={24}
      />

      {sure ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[50%] lg:w-[35%] xl:w-[30%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-black bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex justify-between">
                    {/* Header can be placed here */}
                  </div>

                  <p className="font-normal text-[#121F2C] dark:text-white text-[12px] ">
                    Authorized User Role(s)
                  </p>
                  <div className="relative">
                    <div
                      className="mt-3 flex justify-between border-[1px] border-[#D9D9D9] rounded-[5px] p-[15px] cursor-pointer"
                      onClick={toggleDropdown}
                    >
                      <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white">
                        {selectedValues.join(", ")}
                      </p>
                      <IoIosArrowDown className="text-[#121F2C] dark:text-white text-[16px] self-center" />
                    </div>

                    {isOpen && (
                      <div className="border-[1px] border-[#E2E2E2] absolute right-0 mt-1 w-full bg-white dark:bg-black shadow-lg z-20">
                        {[
                          "Any logged in CU PolicyPro Users",
                          "Any logged in RecoveryPro Users",
                          "Moderator",
                          "Editor",
                          "Content Creator",
                        ].map((value) => (
                          <div
                            key={value}
                            className="flex gap-2 p-3 cursor-pointer border-b"
                            onClick={() => handleSelection(value)}
                          >
                            <input
                              type="checkbox"
                              className=""
                              checked={isSelected(value)}
                              readOnly
                            />
                            <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white self-center">
                              {value}
                            </p>
                          </div>
                        ))}

                        <div className="flex items-center justify-end gap-5 p-3">
                          <button
                            onClick={handleCancel}
                            className="nun text-xs text-[#3076B1] dark:text-[#4A9FE7]"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleConfirm}
                            className="nun text-sm font-bold text-white bg-[#3076B1] dark:bg-[#4A9FE7] rounded-md px-5 py-2"
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 mt-3 cursor-pointer">
                    <input type="checkbox" className="" />
                    <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white">
                      Apply Settings to All Files/Folders in these Folders
                    </p>
                  </div>

                  <div className="mt-5 flex justify-end gap-3">
                    <button
                      onClick={() => setSure(false)}
                      className="font-normal text-[#3076B1] dark:text-[#4A9FE7] text-[12px] py-[8px] px-[12px] rounded-[4px]  uppercase"
                    >
                      Cancel
                    </button>
                    <button className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] py-[10px] px-[20px] rounded-[6px] uppercase">
                      SAVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
