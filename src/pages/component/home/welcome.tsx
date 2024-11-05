import Image from "next/image";
import React, { useState, useEffect } from "react";
import SearchFelid from "./searchFelid";
import Link from "next/link";

export default function Welcome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or delay to show the loading state
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
<div className="bg-white dark:bg-black rounded-[7px] shadow-sm w-[95%] mx-auto mt-5 py-5">
  {loading ? (
    <div className="animate-pulse space-y-4">
      {/* Loading skeleton for welcome text */}
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-[60%] mx-auto"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-[80%] mx-auto mt-2"></div>

      {/* Loading skeleton for search field */}
      <div className="w-[95%] xl:w-[75%] 2xl:w-[60%] mx-auto mt-5">
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      {/* Loading skeleton for Quick Actions */}
      <div className="w-[95%] xl:w-[70%] 2xl:w-[60%] mx-auto mt-5 xl:mt-10 space-y-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-[20%]"></div>
        <div className="flex gap-5 mt-4">
          <div className="bg-gray-300 dark:bg-gray-700 rounded-[7px] h-12 w-[30%]"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded-[7px] h-12 w-[30%]"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded-[7px] h-12 w-[30%]"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded-[7px] h-12 w-[30%]"></div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <p className="nun font-semibold text-[#121F2C] dark:text-white text-[20px] md:text-[30px] text-center">
        Welcome back, Christopher!
      </p>
      <p className="nun font-normal text-[#121F2C] dark:text-gray-300 text-[12px] md:text-[14px] lg:text-[16px] text-center mt-2">
        Need help with any information relating to credit union? Search a topic or ask any question below
      </p>

      <div className="w-[95%] xl:w-[75%] 2xl:w-[60%] mx-auto mt-5">
        <SearchFelid />
      </div>

      <div className="xl:flex gap-5 w-[95%] xl:w-[70%] 2xl:w-[60%] mx-auto mt-5 xl:mt-10">
        <div className="self-center text-center xl:text-start">
          <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px]">
            Quick Actions
          </p>
        </div>

        <div className="hidden lg:flex gap-5 mt-4 xl:mt-0 lg:ml-20">
          <Link href={'/manage-user'}>
            <div className="bg-[#eef2eb] dark:bg-[#161a12] rounded-[7px] py-[10px] px-[15px] flex gap-2">
              <Image
                src={"/assets/png/prime.png"}
                alt="Manage Users"
                width={24}
                height={24}
              />
              <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                Manage Users
              </p>
            </div>
          </Link>

          <Link href={'/cu-policies'}>
            <div className="bg-[#faeff0] dark:bg-[#211617] rounded-[7px] py-[10px] px-[15px] flex gap-2">
              <Image
                src={"/assets/png/prime2.png"}
                alt="Edit CU Policies"
                width={24}
                height={24}
              />
              <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                Edit CU Policies
              </p>
            </div>
          </Link>

          <Link href={'/cu-bcp'}>
            <div className="bg-[#eef5fa] dark:bg-[#151c21] rounded-[7px] py-[10px] px-[15px] flex gap-2">
              <Image
                src={"/assets/png/prime3.png"}
                alt="Edit CU BCP"
                width={24}
                height={24}
              />
              <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                Edit CU BCP
              </p>
            </div>
          </Link>

          <Link href={'/manage-assignments'}>
            <div className="bg-[#fbfae2] dark:bg-[#35331b] rounded-[7px] py-[10px] px-[15px] flex gap-2">
              <Image
                src={"/assets/png/prime4.png"}
                alt="Manage Assignments"
                width={24}
                height={24}
              />
              <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                Manage Assignments
              </p>
            </div>
          </Link>
        </div>

        <div className="block lg:hidden gap-5 mt-4">
          <div className="md:flex justify-center gap-5">
            <Link href={'/manage-user'}>
              <div className="bg-[#eef2eb] dark:bg-[#161a12] rounded-[7px] py-[10px] px-[15px] flex gap-2">
                <Image
                  src={"/assets/png/prime.png"}
                  alt="Manage Users"
                  width={24}
                  height={24}
                />
                <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                  Manage Users
                </p>
              </div>
            </Link>

            <Link href={'/cu-policies'}>
              <div className="bg-[#faeff0] dark:bg-[#211617] rounded-[7px] py-[10px] px-[15px] flex gap-2 mt-3 md:mt-0">
                <Image
                  src={"/assets/png/prime2.png"}
                  alt="Edit CU Policies"
                  width={24}
                  height={24}
                />
                <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                  Edit CU Policies
                </p>
              </div>
            </Link>
          </div>

          <div className="md:flex justify-center mt-3 gap-5">
            <Link href={'/cu-bcp'}>
              <div className="bg-[#eef5fa] dark:bg-[#151c21] rounded-[7px] py-[10px] px-[15px] flex gap-2">
                <Image
                  src={"/assets/png/prime3.png"}
                  alt="Edit CU BCP"
                  width={24}
                  height={24}
                />
                <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                  Edit CU BCP
                </p>
              </div>
            </Link>

            <Link href={'/manage-assignments'}>
              <div className="bg-[#fbfae2] dark:bg-[#35331b] rounded-[7px] py-[10px] px-[15px] flex gap-2 mt-3 md:mt-0">
                <Image
                  src={"/assets/png/prime4.png"}
                  alt="Manage Assignments"
                  width={24}
                  height={24}
                />
                <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] self-center">
                  Manage Assignments
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )}
</div>

    </>
  );
}
