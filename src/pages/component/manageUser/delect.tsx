import Image from "next/image";
import React, { useState } from "react";

export default function Delect({onDelete}: any) {
  const [delect, setDelect] = useState(false);

  return (
    <>
      <Image
        onClick={() => setDelect(true)}
        src={"/assets/svg/trash.svg"}
        alt="trash"
        title="Trash"
        width={22}
        height={22}
        className="cursor-pointer"
      />

      {delect ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[35%] lg:w-[25%]">
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
                    Are you sure you want to delete this assignment?
                  </p>

                  <div className="mt-5 flex gap-5">
                    <button
                      onClick={() => setDelect(false)}
                      className="font-semibold text-[#5E5873] dark:text-white text-[14px] border-[1px] border-[#5E5873] dark:border-white py-[8px] px-[12px] rounded-[4px]  uppercase"
                    >
                      Cancel
                    </button>
                    <button className="font-semibold text-white text-[14px] bg-[#E11919] py-[8px] px-[15px] rounded-[4px] uppercase" onAbort={onDelete}>
                      Delete
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
