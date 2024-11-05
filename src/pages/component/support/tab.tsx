import React, { useEffect, useState } from "react";

export default function Tab() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout for 3 seconds to simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time (in milliseconds) as needed

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
 <div className="bg-white dark:bg-black dark:border-[1px] dark:border-white p-4 rounded-[6px] shadow-sm">
      {isLoading ? (
        // Skeleton Loader
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-3/4 mb-4"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-md w-full mb-4"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-md w-5/6 mb-4"></div>

          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-2/3 mt-8 mb-2"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-md w-4/5 mb-4"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-md w-4/5 mb-4"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-md w-1/3 mt-4 mb-8"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-md w-1/4"></div>
        </div>
      ) : (
        // Actual Content
        <>
          <p className="font-normal text-[#121212] dark:text-white text-[12px]">
            Spring has sprung with the May 2024 content update! This is the second update of 2024 and includes changes to both CU PolicyPro and RecoveryPro content.
          </p>
          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-5">
            For CU PolicyPro, we revised 18 policies, released two new procedure/resources, and retired one policy. In addition, we have added a new Fraud Awareness Document to use with Policy 2245 Elder and/or Vulnerable Adult Protections. The RecoveryPro update included the development of comprehensive Cyber Incident content and updates to 5 existing content sections.
          </p>
          <p className="font-semibold text-[#121212] dark:text-white text-[14px] mt-8">
            RecoveryPro Training Sessions
          </p>
          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-1">
            BCP 101 - Recorded March 6, 2024 RecoveryPro Training Sessions
          </p>
          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-1">
            This session introduces the fundamental concepts and key components of business continuity planning.
          </p>
          <p className="font-normal text-[#3076B1] text-[12px] mt-1">
            View BCP 101
          </p>
          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-1">
            Passcode: LZ8!$4u9
          </p>

          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-8">
            Building Your BCP - Recorded March 13, 2024
          </p>
          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-1">
            This session guides participants through a step-by-step process to develop a Business Continuity Plan using RecoveryPros pre-designed BCP framework.
          </p>
          <p className="font-normal text-[#3076B1] text-[12px] mt-1">
            View Building Your BCP
          </p>
          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-1">
            Passcode: 4ufr^L5#
          </p>

          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-8">
            Testing and Maintenance of your BCP - Recorded March 20, 2024
          </p>
          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-1">
            This session guides participants through a step-by-step process to develop a Business Continuity Plan using RecoveryPros pre-designed BCP framework.
          </p>
          <p className="font-normal text-[#3076B1] text-[12px] mt-1">
            View Testing and Maintenance of your BCP
          </p>
          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-1">
            Passcode: W$09.?Ai
          </p>
        </>
      )}
    </div>

    </>
  );
}
