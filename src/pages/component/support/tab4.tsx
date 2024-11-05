import Image from "next/image";
import React, { useEffect, useState } from "react";


const documents = [
    { src: "/assets/svg/word.svg", name: "May 2024 Overview.docx", size: "702 KB" },
    { src: "/assets/svg/word.svg", name: "1520.10 Succession Plan (NEW).docx", size: "702 KB" },
    { src: "/assets/svg/word.svg", name: "2210.11 Individual Retirement Arrangements (REDLINED).docx", size: "702 KB" },
    { src: "/assets/svg/word.svg", name: "2210.15 Deceased Member Issues and Estate Accounts (REDLINED).docx", size: "702 KB" },
    { src: "/assets/svg/word.svg", name: "2400.10 Collection of Checks Procedure (REDLINED).docx", size: "702 KB" },
    { src: "/assets/svg/word.svg", name: "5200 Liquidity Management (REDLINED).docx", size: "702 KB" },
    { src: "/assets/svg/word.svg", name: "5205 Small Asset Liquidity Risk Management (REDLINED).docx", size: "702 KB" },
    { src: "/assets/svg/word.svg", name: "7140 Loan Add-On Products (New Name) (REDLINED).docx", size: "702 KB" },
  ];
  


export default function Tab4() {

  const [isLoading, setIsLoading] = useState(true);

  // Set timeout to remove the skeleton after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds timeout for demo purpose

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);


  return (
    <>
      <div className="flex justify-end mr-1 md:mr-10">
        <button className="nun font-semibold text-[#121212] dark:text-white text-[14px] lg:text-[16px] bg-white dark:bg-[#212121] py-[10px] lg:py-[10px] px-[20px] lg:px-[30px]">
          CU PolicyPro
        </button>
        <button className="nun font-semibold text-[#121212] dark:text-white text-[14px] lg:text-[16px] bg-[#E5E5E5] dark:bg-[#3c3c3c] py-[10px] lg:py-[15px] px-[20px] lg:px-[30px]">
          RecoveryPro
        </button>
      </div>
      <div className="bg-white dark:bg-black dark:border-[1px] dark:border-white p-4 rounded-[6px] shadow-sm">
      {isLoading ? (
        <>
          {/* Skeleton loading for the first paragraph */}
          <p className="font-normal text-[#121212] dark:text-white text-[12px] animate-pulse bg-gray-200 dark:bg-gray-700 h-4 rounded-sm w-full mb-2"></p>
          <p className="font-normal text-[#121212] dark:text-white text-[12px] animate-pulse bg-gray-200 dark:bg-gray-700 h-4 rounded-sm w-5/6 mb-2"></p>

          {/* Skeleton loading for the second paragraph */}
          <p className="font-normal text-[#121212] dark:text-white text-[12px] animate-pulse bg-gray-200 dark:bg-gray-700 h-4 rounded-sm w-4/5 mb-5"></p>
          <p className="font-normal text-[#121212] dark:text-white text-[12px] animate-pulse bg-gray-200 dark:bg-gray-700 h-4 rounded-sm w-3/4 mb-5"></p>

          <div className="mt-10">
            {/* Simulate skeleton for each document */}
            {documents.map((document, index) => (
              <div
                key={index}
                className="flex justify-between border-b-[1px] border-[#EFEFEF99] py-2 animate-pulse"
              >
                <div className="flex gap-2">
                  {/* Placeholder for the image */}
                  <div className="bg-gray-200 dark:bg-gray-700 h-6 w-6 rounded-sm"></div>
                  {/* Placeholder for document name */}
                  <p className="truncate w-64 md:w-auto self-center font-normal text-[10px] lg:text-[12px] bg-gray-200 dark:bg-gray-700 h-4  rounded-sm"></p>
                </div>
                {/* Placeholder for document size */}
                <p className="self-center font-normal bg-gray-200 dark:bg-gray-700 h-4 w-10 rounded-sm"></p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Actual content when loading is done */}
          <p className="font-normal text-[#121212] dark:text-white text-[12px]">
            In the May 2024 content update, 18 policies were revised, two new
            procedure/resources were added, and one policy was retired. In
            addition, a new Fraud Awareness Document was created to use with
            Policy 2245 Elder and/or Vulnerable Adult Protections.
          </p>

          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-5">
            We focused this update on the NCUA Supervisory Priorities for 2024,
            CFPB’s final rule on credit card penalty fees, and two final rules
            impacting the Telephone Consumer Protection Act and the Fair Credit
            Reporting Act (FCRA).
          </p>

          <div className="mt-10">
            {documents.map((document, index) => (
              <div
                key={index}
                className="flex justify-between border-b-[1px] border-[#EFEFEF99] py-2"
              >
                <div className="flex gap-2">
                  <Image
                    src={document.src}
                    alt={document.name}
                    width={24}
                    height={24}
                  />
                  <p className="truncate w-64 md:w-auto self-center font-normal text-[10px] lg:text-[12px] text-[#3076B1]">
                    {document.name}
                  </p>
                </div>
                <p className="self-center font-normal text-[#121212] dark:text-white text-[12px] lg:text-[14px]">
                  {document.size}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>

    </>
  );
}
