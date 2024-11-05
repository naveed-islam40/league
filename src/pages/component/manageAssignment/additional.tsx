import Image from "next/image";
import React, { useState } from "react";
import Cross from "../../../../public/assets/svg/cross.svg";

export default function Additional() {
  const [additional, setAdditional] = useState(false);

  return (
    <div>
      <Image
        onClick={() => setAdditional(true)}
        src="/assets/svg/bx-note.svg"
        alt=""
title="Notes"

        width={24}
        height={24}
        className="cursor-pointer self-center mt-2"
      />

      {additional ? (
        <>
          <div className="  justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[60%] lg:w-[40%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <div className="flex justify-between ">
                    <p className="self-center nun font-bold text-[#14142B] dark:text-white text-[18px]">
                      Additional Notes
                    </p>

                    <Image
                      onClick={() => setAdditional(false)}
                      className="cursor-pointer"
                      src={Cross}
                      alt=""
                    />
                  </div>

                  <p className="nun font-bold text-[#14142B] dark:text-white text-[14px] mt-4 border-b-[1px] border-[#CCCCCC] pb-3">
                    Assignment Name:{" "}
                    <span className="font-normal ">
                      Credit Union Member review
                    </span>
                  </p>
                  <p className="nun font-normal text-[14px] mt-3 pb-10 dark:text-white">
                    State law dealing with deposit accounts takes two forms.
                    Statutes that govern how certain deposits work and what
                    contract terms are and are not enforceable; and basic
                    contract law which covers the contract existing between the
                    credit union and its depositors. In general, a credit union
                    may accept shares and deposits from members on terms and
                    conditions agreed upon by both parties. Credit unions must
                    take into consideration numerous laws and regulations
                    regarding the opening, maintaining, and closing of deposit
                    accounts.
                  </p>



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
