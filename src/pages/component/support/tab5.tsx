import React, { useEffect, useState } from "react";
import Video from "../../../../public/assets/png/video.png";
import Image from "next/image";

export default function Tab5() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-white dark:bg-black dark:border-[1px] dark:border-white p-4 rounded-[6px] shadow-sm pb-5 animate-pulse">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 mb-2 rounded"></div>
              <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>

            <div>
              <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 mb-2 rounded"></div>
              <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>

          <div className="mt-10">
            <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 mb-2 rounded"></div>
            <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 mb-5 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 mb-2 rounded"></div>
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 mb-2 rounded"></div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>

          <div className="mt-10">
            <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 mb-2 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 mb-2 rounded"></div>
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 mb-2 rounded"></div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>

          <div className="mt-10">
            <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 mb-2 rounded"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 mb-2 rounded"></div>
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 mb-2 rounded"></div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-black dark:border-[1px] dark:border-white p-4 rounded-[6px] shadow-sm pb-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <p className="font-semibold text-[16px] dark:text-white mb-2">
                Integrated System - Overview
              </p>
              <Image src={Video} alt="" />
            </div>

            <div>
              <p className="font-semibold text-[16px] dark:text-white mb-2">
                Admin Functions - Overview
              </p>
              <Image src={Video} alt="" />
            </div>
          </div>

          <div className="mt-10">
            <p className="font-bold text-[12px] dark:text-white">
              RecoveryPro Training Sessions
            </p>
            <p className="font-bold text-[12px] mt-5">
              BCP 101 - Recorded March 6, 2024
            </p>
            <p className="font-normal text-[12px] dark:text-white">
              This session introduces the fundamental concepts and key
              components of business continuity planning
            </p>
            <p className="font-normal text-[12px] text-[#3076B1]">
              View BCP 101
            </p>
            <p className="font-normal text-[12px] dark:text-white">
              <span className="font-bold">Passcode:</span> LZ8!$4u9
            </p>
          </div>

          <div className="mt-10">
            <p className="font-bold text-[12px] dark:text-white">
              Building Your BCP - Recorded March 13, 2024
            </p>

            <p className="font-normal text-[12px] dark:text-white">
              This session introduces the fundamental concepts and key
              components of business continuity planning
            </p>
            <p className="font-normal text-[12px] text-[#3076B1]">
              View Building Your BCP 
            </p>
            <p className="font-normal text-[12px] dark:text-white">
              <span className="font-bold">Passcode:</span> LZ8!$4u9
            </p>
          </div>

          <div className="mt-10">
            <p className="font-bold text-[12px] dark:text-white">
              Testing and Maintenance of your BCP - Recorded March 20, 2024
            </p>
            <p className="font-normal text-[12px] dark:text-white">
              This session introduces the fundamental concepts and key
              components of business continuity planning
            </p>
            <p className="font-normal text-[12px] text-[#3076B1]">
              View Testing and Maintenance of your BCP
            </p>
            <p className="font-normal text-[12px] dark:text-white">
              <span className="font-bold">Passcode:</span> LZ8!$4u9
            </p>
          </div>
        </div>
      )}
    </>
  );
}
