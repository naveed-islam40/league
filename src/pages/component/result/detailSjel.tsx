import React, { useState } from "react";
import SearchFelid from "../home/searchFelid";
import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import Cross from "../../../../public/assets/svg/cross.svg";

export default function DetailSkel() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-black rounded-[7px] shadow-sm p-4 mt-16">
        <SearchFelid />
        <p className="mt-5 block xl:hidden nun font-semibold text-[#121F2C] dark:text-white text-[14px] self-center">
            Related keywords:
          </p>
        <div className="flex gap-5 mt-5">
          <p className="hidden xl:block nun font-semibold text-[#121F2C] dark:text-white text-[14px] self-center">
            Related keywords:
          </p>
          <button className="nun font-normal text-[13px] text-[#121F2C] dark:text-white bg-[#F5F5F5] dark:bg-gray-700 py-[5px] px-[6px] shadow-sm rounded-[4px]">
            Compliance
          </button>
          <button className="nun font-normal text-[13px] text-[#121F2C] dark:text-white bg-[#F5F5F5] dark:bg-gray-700 py-[5px] px-[6px] shadow-sm rounded-[4px]">
            Estate Administration
          </button>
          <button className="nun font-normal text-[13px] text-[#121F2C] dark:text-white bg-[#F5F5F5] dark:bg-gray-700 py-[5px] px-[6px] shadow-sm rounded-[4px]">
            CU Probate Compliance
          </button>
          <button className="nun font-normal text-[13px] text-[#121F2C] dark:text-white bg-[#F5F5F5] dark:bg-gray-700 py-[5px] px-[6px] shadow-sm rounded-[4px]">
            CU Beneficiary Verification
          </button>
          <button className="nun font-normal text-[13px] text-[#121F2C] dark:text-white bg-[#F5F5F5] dark:bg-gray-700 py-[5px] px-[6px] shadow-sm rounded-[4px]">
            Legacy Account Management
          </button>
        </div>

      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[40%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex justify-between">
                    <p className="self-center nun font-bold text-[#14142B] text-[20px]">
                      We Value Your Feedback!
                    </p>
                    <Image
                      onClick={() => setShowModal(false)}
                      className="cursor-pointer"
                      src={Cross}
                      alt=""
                    />
                  </div>
                  <p className="nun font-normal text-[#14142B] text-[15px] mt-3">
                    Please share your thoughts to help us improve our content.
                  </p>
                  <textarea className="h-[200px] border-[1px] border-[#D9D9D9] p-2 w-full rounded-[5px] mt-2"></textarea>

                  <div className="flex items-center justify-end  mt-5">
                    <button
                      className="text-[#3076B1] background-transparent font-semibold uppercase px-6 py-2 text-[14px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Skip
                    </button>
                    <button
                      className="bg-[#3076B1] hover:bg-[#18459D] text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded-[6px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Submit
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
