import Image from "next/image";
import React, { useState } from "react";
import Cross from "../../../../public/assets/svg/cross.svg";

export default function AddModel({
  firstName,
  lastName,
  email,
  permissions,
  status,
  lastActive,
  type
}: any) {
  const [showModal, setShowModal] = useState(false);

  const lengthOfList = permissions.length - 1;

  return (
    <div>
      <div className="relative group">
        <span
          onClick={() => setShowModal(true)}
          className="text-[#3076B1] cursor-pointer"
        >
          +{lengthOfList || ""}
        </span>

        <div className="invisible group-hover:visible flex absolute z-30 left-8 -top-2 w-[230px]  ">
          <Image
            src={"/assets/svg/tool.svg"}
            alt=""
            width={20}
            height={20}
            className="absolute top-2 -left-3"
          />

          <p className="font-normal text-[10px] bg-white shadow-sm text-[#121F2C] p-3">
            {permissions.map((p: any) => p.name).join(", ")}
          </p>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="  justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[90%] lg:w-[80%] xl:w-[60%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
                {/*body*/}
                <div className="relative flex-auto">
                  <div className="flex justify-between p-5">
                    <div className="self-center">
                      <p className="self-center nun font-bold text-[#14142B] dark:text-white text-[18px]">
                        User:
                        <span className="font-normal dark:text-white">
                          {firstName} {lastName}
                        </span>
                      </p>
                      <p className="self-center nun font-semibold text-[#14142B] dark:text-white text-[14px]">
                        <span className="font-normal">Email: {email}</span>
                      </p>
                    </div>
                    <Image
                      onClick={() => setShowModal(false)}
                      className="cursor-pointer"
                      src={Cross}
                      alt=""
                    />
                  </div>
                  {permissions.map((p: any, index: number) => (
                    <div className="cursor-pointer flex  justify-between border-t-[1px] border-[#CCCCCC] hover:bg-[#FFFDF6] dark:hover:bg-transparent px-5 py-3" key={index}>
                      <p className="font-normal text-[#121212] dark:text-white text-[14px]">
                       {p.name}
                      </p>
                      <p className="font-normal text-[#121212]  dark:text-white text-[14px]">
                       {type === "u" ? "User" : "Admin"}
                      </p>
                      <p className="font-normal text-[#121212]  dark:text-white text-[14px]">
                        {permissions[1]?.name}
                      </p>
                      <p className="font-normal text-[#121212]  dark:text-white text-[14px]">
                       {status === false ? "Inactive" : "Active" }
                      </p>
                      <p className="font-normal text-[#121212]  dark:text-white text-[14px] mr-10">
                       {lastActive?.substring(0, 10)}
                      </p>
                    </div>
                  ))}
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
