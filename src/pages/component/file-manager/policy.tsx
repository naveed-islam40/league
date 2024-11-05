import Image from "next/image";
import React from "react";

interface PolicyData {
  imgSrc: string;
  title: string;
  items?: string;
  date?: string;
}

const policyData: PolicyData[] = [
  {
    imgSrc: "/assets/svg/folder2.svg",
    title: "CU Administration",
    items: "5 items",
  },
  {
    imgSrc: "/assets/svg/word.svg",
    title: "New Policy",
    date: "6/23/2024, 1:16 AM",
  },
  {
    imgSrc: "/assets/svg/bxs-pdf.svg",
    title: "Revised Policy",
    date: "6/23/2024, 1:22 AM",
  },
];


export default function Policy({ handleBack }: { handleBack: () => void }) {


  
  return (
    <>
      <div className="flex gap-2 pl-3 mt-5 lg:-mt-8">
        <Image
          src={"/assets/svg/arro.svg"}
          alt=""
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={handleBack}

        />
        <p className="nun font-normal text-[14px] text-[#3076B1] self-center">
          Policy Documents
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 lg:gap-10 my-10 w-[90%] xl:w-[50%] mx-auto xl:mr-0 xl:ml-10">

        {policyData.map((item, index) => (
          <div key={index} className="group">
            <div className="bg-[#F8F8F8] dark:bg-[#242424] group-hover:bg-[#D4D4D4] cursor-pointer rounded-[10px] py-5 p-[15px]">
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <p className="nun font-normal text-[10px] text-[#4E4B66] dark:text-white mt-1 text-center">
              {item.title}
            </p>
            {item.items && (
              <p className="nun font-normal text-[10px] text-[#7A7B7C] dark:text-white mt-[2px] text-center">
                {item.items}
              </p>
            )}
            {item.date && (
              <p className="nun font-normal text-[10px] text-[#7A7B7C] dark:text-white mt-[2px] text-center">
                {item.date}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
