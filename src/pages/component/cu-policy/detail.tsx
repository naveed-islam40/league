import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";

type AccordionItem = {
  index: number;
  title: string;
  content: string[];
  bgColor: string;
  border: string;
};

const accordionData: AccordionItem[] = [
  {
    index: 1,
    title: "Compliance",
    content: [
      "Safe Deposit Boxes - Death of a Renter",
      "Pretend federal compliance topic",
      "Other link",
    ],
    bgColor: "#03E09E12",
    border: "#487F18",
  },
  {
    index: 2,
    title: "Model Policies",
    content: [
      "2210.15 Deceased Member Issues and Estate Accounts",
      "2210.14: Health Savings Accounts",
    ],
    bgColor: "#AD7EFB12",
    border: "#CA9307",
  },
  {
    index: 3,
    title: "Model BCP",
    content: [
      "Policy 2214: Health Savings Accounts",
      "Policy 10011: Records Retention Table 11 - Member Account Records",
    ],
    bgColor: "#FFDF3612",
    border: "#FEF151",
  },
  {
    index: 4,
    title: "CU Policies",
    content: [
      "2210.15 Deceased Member Issues and Estate Accounts",
      "Policy 10011: Records Retention Table 11: Member Account Records",
    ],
    bgColor: "#AD7EFB12",
    border: "#CA9307",
  },
  {
    index: 5,
    title: "CU BCP",
    content: [
      "2210.15 Deceased Member Issues and Estate Accounts",
      "Policy 10011: Records Retention Table 11: Member Account Records",
    ],
    bgColor: "#FFDF3612",
    border: "#CA9307",
  },
];

export default function Details() {
  // Initialize openIndex with all indexes to keep all items open by default
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    accordionData.map((item) => item.index)
  );

  const handleToggle = (index: number) => {
    setOpenIndexes(
      (prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index) // Close the accordion if it's already open
          : [...prevIndexes, index] // Open the accordion if it's closed
    );
  };

  return (
    <>
      <div className="bg-white dark:bg-[#242424] p-[15px] rounded-[7px] shadow-sm">
        <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#F5F5F5] pb-1">
          Other resources
        </p>

        {accordionData.map((item) => (
          <div key={item.index} className="mt-2">
            <div
              className={`flex justify-between items-center border-b-[1px] py-[5px] px-[10px] cursor-pointer transition-all duration-300`}
              style={{
                backgroundColor: item.bgColor,
                borderColor: item.border,
              }}
              onClick={() => handleToggle(item.index)}
            >
              <p className="nun font-semibold text-[#121212] dark:text-white text-[14px]">
                {item.title}
              </p>
              <IoIosArrowUp
                className={`text-[18px] transition-transform duration-300 ${
                  openIndexes.includes(item.index) ? "rotate-0" : "rotate-180"
                }`}
                style={{ color: item.border }}
              />
            </div>
            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                openIndexes.includes(item.index) ? "max-h-screen" : "max-h-0"
              }`}
            >
              {item.content.map((text, idx) => (
                <p
                  key={idx}
                  className="nun font-normal text-[#121F2C] dark:text-white text-[12px] pt-2 px-[10px]"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
