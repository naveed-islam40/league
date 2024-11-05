import Image from "next/image";
import React, { useState } from "react";

export default function InActive() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Image
        onClick={() => setShowModal(true)}
        src="/assets/svg/bx-us.svg"
        alt="User Settings"
        title="User Settings"
        width={24}
        height={24}
        className="cursor-pointer"
      />

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[60%] lg:w-[40%] xl:w-[30%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <div className="flex justify-between">
                    {/* <p className="self-center nun font-bold text-[#14142B] text-[20px]">
                      We Value Your Feedback!
                    </p>
                    <Image
                      onClick={() => setShowModal(false)}
                      className="cursor-pointer"
                      src={Cross}
                      alt=""
                    /> */}
                  </div>

                  <p className="font-normal text-[#121F2C] dark:text-white text-[14px] ">
                    Do you want to re-assign the assignments pending from the
                    user(s)?
                  </p>
                  <div className="mt-5 flex justify-between">
                    <div className="flex gap-2">
                      <input type="radio" />
                      <p className="font-normal text-[14px] dark:text-white">
                        Yes, I want to assign
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <input type="radio" />
                      <p className="font-normal text-[14px] dark:text-white">
                        No, close all assignments
                      </p>
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Search for a User"
                    className="mt-5 font-medium text-[16px] md:text-[14px] text-[#8F8F8F] border-[1px] border-[#D9D9D9] py-[12px] px-[10px] rounded-[5px] w-full"
                  />
                  <div className="mt-5 flex gap-5">
                    <button
                      onClick={() => setShowModal(false)}
                      className="font-semibold text-[#5E5873] dark:text-white text-[14px] border-[1px] border-[#5E5873] dark:border-white py-[8px] px-[12px] rounded-[4px]  uppercase"
                    >
                      Cancel
                    </button>
                    <button className="font-semibold text-white text-[14px] bg-[#E11919] py-[8px] px-[12px] rounded-[4px] uppercase">
                      make user(s) inactive
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
