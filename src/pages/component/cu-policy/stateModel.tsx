import Image from "next/image";
import React, { useState } from "react";
import Cross from "../../../../public/assets/svg/cross.svg";

export default function StateModel() {
  const [additional, setAdditional] = useState(false);

  return (
    <div>
      <Image
        onClick={() => setAdditional(true)}
        src={"/assets/png/users.png"}
        alt=""
        width={130}
        height={36}
      />

      {additional ? (
        <>
          <div className="  justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[300px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
                {/*body*/}
                <div className="relative flex-auto p-4 pb-1">
                  <div className="flex justify-between ">
                    <p className="self-center nun font-bold text-[#14142B] dark:text-white text-[14px]">
                      State-Specific Content
                    </p>

                    <Image
                      onClick={() => setAdditional(false)}
                      className="cursor-pointer w-[28px] h-[28px]"
                      src={Cross}
                      alt=""
                    />
                  </div>

                  <div className="mt-2">
                    <p className="flex gap-2 py-2 font-normal text-[#121F2C] dark:text-white text-[12px] border-b-[1px] border-[#f2f2f2]">
                      <Image
                        src={"/assets/svg/dott.svg"}
                        alt=""
                        width={4}
                        height={4}
                        className="self-center"
                      />
                      California, CA
                    </p>
                    <p className="flex gap-2 py-2 font-normal text-[#121F2C] dark:text-white text-[12px] border-b-[1px] border-[#f2f2f2]">
                      <Image
                        src={"/assets/svg/dott.svg"}
                        alt=""
                        width={4}
                        height={4}
                        className="self-center"
                      />
                      Alabama, AL
                    </p>
                    <p className="flex gap-2 py-2 font-normal text-[#121F2C] dark:text-white text-[12px] border-b-[1px] border-[#f2f2f2]">
                      <Image
                        src={"/assets/svg/dott.svg"}
                        alt=""
                        width={4}
                        height={4}
                        className="self-center"
                      />
                      Arizona, AZ
                    </p>
                    <p className="flex gap-2 py-2 font-normal text-[#121F2C] dark:text-white text-[12px] border-b-[1px] border-[#f2f2f2]">
                      <Image
                        src={"/assets/svg/dott.svg"}
                        alt=""
                        width={4}
                        height={4}
                        className="self-center"
                      />
                      Arkansas, AR
                    </p>
                    <p className="flex gap-2 py-2 font-normal text-[#121F2C] dark:text-white text-[12px] border-b-[1px] border-[#f2f2f2]">
                      <Image
                        src={"/assets/svg/dott.svg"}
                        alt=""
                        width={4}
                        height={4}
                        className="self-center"
                      />
                      Colorado, CO
                    </p>
                    <p className="flex gap-2 py-2 font-normal text-[#121F2C] dark:text-white text-[12px] border-b-[1px] border-[#f2f2f2]">
                      <Image
                        src={"/assets/svg/dott.svg"}
                        alt=""
                        width={4}
                        height={4}
                        className="self-center"
                      />
                      Kansas, KS
                    </p>
                    <p className="flex gap-2 py-2 font-normal text-[#121F2C] dark:text-white text-[12px] border-b-[1px] border-[#f2f2f2]">
                      <Image
                        src={"/assets/svg/dott.svg"}
                        alt=""
                        width={4}
                        height={4}
                        className="self-center"
                      />
                      Kentucky, KY
                    </p>
                    <p className="flex gap-2 py-2 font-normal text-[#121F2C] dark:text-white text-[12px] border-b-[1px] border-[#f2f2f2]">
                      <Image
                        src={"/assets/svg/dott.svg"}
                        alt=""
                        width={4}
                        height={4}
                        className="self-center"
                      />
                      Louisiana, LA
                    </p>
                    <p className="flex gap-2 py-2 font-normal text-[#121F2C] dark:text-white text-[12px] border-b-[1px] border-[#f2f2f2]">
                      <Image
                        src={"/assets/svg/dott.svg"}
                        alt=""
                        width={4}
                        height={4}
                        className="self-center"
                      />
                      New Hampshire, NH
                    </p>
                    <p className="flex gap-2 py-2 font-normal text-[#121F2C] dark:text-white text-[12px]">
                      <Image
                        src={"/assets/svg/dott.svg"}
                        alt=""
                        width={4}
                        height={4}
                        className="self-center"
                      />
                      New Jersey, NJ
                    </p>
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
