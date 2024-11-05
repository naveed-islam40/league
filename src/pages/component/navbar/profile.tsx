import Image from "next/image";
import React, { useState } from "react";
import Dp from "../../../../public/assets/svg/dp.svg";
import Cross from "../../../../public/assets/svg/npcl.svg";
import Link from "next/link";
import { MdOutlineWbSunny } from "react-icons/md";

export default function Profile({handleToggle,darkMode}:any ) {
  const [final, setFinal] = useState(false);

  return (
    <>
      <Image
        onClick={() => setFinal(true)}
        src={Dp}
        alt="Profile Picture"
        className="cursor-pointer mt-1"
      />

      {final ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[90%]">
              {/*content*/}
              <div className="border-0 rounded-[10px] shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
                {/*body*/}
                <div className="relative  flex-auto">
                  <div className="flex justify-between  p-5">
                    <p className="self-center nun font-semibold text-[#14142B] dark:text-white text-[14px]">
                      Christopher Charles
                    </p>
                    <Image
                      onClick={() => setFinal(false)}
                      className="cursor-pointer filter dark:invert"
                      src={Cross}
                      alt=""
                      
                    />
                  </div>

                  <div className="">
                    <Link
                      href="/my-account"
                      className="pl-5 border-b-[1px] dark:text-white dark:hover:text-black border-[#f2f2f2] hover:bg-[#f2f2f2]  font-normal text-[12px] flex gap-2 px-2 py-4 cursor-pointer"
                    >
                      <Image
                        src={"/assets/svg/user.svg"}
                        alt=""
                        width={18}
                        height={18}
                      />{" "}
                      My Account
                    </Link>
                    <Link
                      href="/setting"
                      className="pl-5 border-b-[1px] dark:text-white dark:hover:text-black border-[#f2f2f2] hover:bg-[#f2f2f2]  font-normal text-[12px] flex gap-2 px-2 py-4 cursor-pointer"
                    >
                      <Image
                        src={"/assets/svg/settings.svg"}
                        alt=""
                        width={18}
                        height={18}
                      />{" "}
                      Notification Settings
                    </Link>
                    <div
                      onClick={handleToggle}
                    
                    className="pl-5 border-b-[1px] dark:text-white dark:hover:text-black border-[#f2f2f2] hover:bg-[#f2f2f2]  font-normal text-[12px] flex gap-2 px-2 py-4 cursor-pointer">
                      {darkMode ? (
                        
                        <MdOutlineWbSunny className="text-[18px]" />

                      ) : (
                        <Image
                          src={"/assets/svg/dark.svg"}
                          alt=""
                          width={18}
                          height={18}
                        />
                      )}
                      {darkMode ? "Light Mode" : "Dark Mode"}

                    </div>
                    <Link
                      href="/"
                      className="pl-5 dark:text-white dark:hover:text-black hover:bg-[#f2f2f2]  font-normal text-[12px] flex gap-2 px-2 py-4 cursor-pointer"
                    >
                      <Image
                        src={"/assets/svg/logout.svg"}
                        alt=""
                        width={18}
                        height={18}
                      />{" "}
                      Logout
                    </Link>
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
