import Image from "next/image";
import React, { useState } from "react";
import Cross from "../../../../public/assets/svg/cross.svg";

export default function Content() {
  const [content, setContent] = useState(false);

  return (
    <div>
      <Image
        onClick={() => setContent(true)}
        src={"/assets/svg/comp2.svg"}
        alt=""
        title="Share"

        width={22}
        height={24}
        className="ml-2 md:ml-0 cursor-pointer self-center   "
      />

      {content ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <div className="flex justify-between ">
                    <p className="self-center nun font-bold text-[#14142B] dark:text-white text-[20px]">
                      Share Content
                    </p>

                    <Image
                      onClick={() => setContent(false)}
                      className="cursor-pointer"
                      src={Cross}
                      alt=""
                    />
                  </div>

                  <p className="nun font-normal text-[14px] dark:text-white mt-3">
                    Enter an email below to share a link to this page. Please
                    note the recipient will need to log into InfoSight360 to
                    access this content.
                  </p>

                  <div className="mt-8">
                    <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                      Add Email(s)
                    </p>
                    <input
                      type="email"
                      className="border-[1px] border-[#D9D9D9] rounded-[5px] py-[12px] px-[15px] mt-2 w-full"
                    />
                  </div>

                  <div className="flex justify-end gap-5 mt-5">
                    <p
                      onClick={() => setContent(false)}
                      className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px] self-center cursor-pointer"
                    >
                      Cancel
                    </p>
                    <button className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D]  rounded-[6px] py-3 px-4 uppercase">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
