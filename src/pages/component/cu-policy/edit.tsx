import Image from "next/image";
import React, { useState } from "react";

export default function CuEdit() {
  const [delect, setDelect] = useState(false);
  const detect = () => {
    console.log("Clicked")
  }

  return (
    <>
      <Image
        onClick={() => setDelect(true)}
        src={"/assets/svg/bx-dup.svg"}
        alt=""
        title="Duplicate"

        width={24}
        height={24}
        className="cursor-pointer hidden md:block"
      />

      {delect ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[35%] lg:w-[30%] xl:w-[25%]">
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

                  <p className="font-normal text-[#121F2C] dark:text-white text-[13px] ">
                    Are you sure you want to duplicate this policy?
                  </p>

                  <div className="mt-5 flex justify-center gap-5">
                    <button className="font-semibold text-white text-[14px] bg-[#3076B1] py-[8px] px-[15px] rounded-[4px] uppercase" onClick={detect}>
                      YES
                    </button>
                    <button
                      onClick={() => setDelect(false)}
                      className="font-semibold text-[#5E5873] dark:text-white text-[14px] border-[1px] border-[#5E5873] py-[8px] px-[12px] rounded-[4px]  uppercase"
                    >
                      NO
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
