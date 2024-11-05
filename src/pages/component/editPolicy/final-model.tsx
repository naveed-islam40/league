import Image from "next/image";
import React, { useState } from "react";

type HandleClickData = {
  handleClick?: () => Promise<void>;
};

const FinalModel: React.FC<HandleClickData> = ({ handleClick }) => {
  const [final, setFinal] = useState(false);

  return (
    <>
      <p
        onClick={() => setFinal(true)}
        className="font-normal text-[#121F2C] dark:text-white dark:hover:text-black text-[12px] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-[10px] cursor-pointer"
      >
        Final Version
      </p>

      {final && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[25%]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
                <div className="relative p-4 flex-auto">
                  <div className="flex justify-between">
                    {/* Optional close button or header can go here */}
                  </div>

                  <p className="font-normal text-[#121F2C] dark:text-[#4A9FE7] text-[14px]">
                    Are you sure you want to update the policy status to Final Version?
                  </p>

                  <div className="mt-5 flex gap-5">
                    <button
                      onClick={() => setFinal(false)}
                      className="font-semibold dark:text-white text-[#5E5873] text-[14px] border-[1px] border-[#5E5873] py-[8px] px-[12px] rounded-[4px] uppercase"
                    >
                      Cancel
                    </button>
                    <button
                      className="font-semibold text-white text-[14px] bg-[#3076B1] py-[8px] px-[15px] rounded-[4px] uppercase"
                      onClick={handleClick}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default FinalModel;
