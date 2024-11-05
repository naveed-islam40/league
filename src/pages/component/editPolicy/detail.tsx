import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import SelectUser from "./selectUser";

const data = [
  { id: "1130-1", label: "Insert Credit Union values." },
  { id: "1120-1", label: "Insert Credit Union Vision Statement." },
  { id: "1110-1", label: "Insert entire Credit Union Mission Statement." },
];

export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Credit Union Culture and Governance (1100)"
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-black rounded-[7px] shadow-sm p-[15px] my-5">
        <div>
          <div className="flex justify-between border-b-[1px] border-[#D9D9D9] pb-2">
            <p className="font-semibold text-[14px] text-[#3D4349] dark:text-white">
              General Information
            </p>
            <IoIosArrowUp className="text-[#121F2C] dark:text-white text-[18px] self-center cursor-pointer" />
          </div>

          <div className="grid md:grid-cols-12 gap-5 md:gap-8 mt-3">
            <div className="md:col-span-9">
              <p className="font-normal text-[14px] text-[#3D4349] dark:text-white">Name</p>
              <input
                type="text"
                placeholder="Credit Union Culture and Governance"
                className="outline-none mt-1 w-full  font-normal text-[16px] md:text-[14px] border-[1px] placeholder:text-black border-[#D9D9D9] rounded-[5px] p-[10px]"
              />
            </div>

            <div className="md:col-span-3">
              <p className="font-normal text-[14px] text-[#3D4349] dark:text-white">Number</p>
              <input
                type="number"
                placeholder="1101"
                className="outline-none mt-1 w-full font-normal text-[16px] md:text-[14px] border-[1px] placeholder:text-black border-[#D9D9D9] rounded-[5px] p-[10px]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-5 md:gap-8 mt-3">
            <div className="md:col-span-6">
              <p className="font-normal text-[14px] text-[#3D4349] dark:text-white">
                Associated Model Content
              </p>
              <div className="relative dark:bg-white" ref={dropdownRef}>
                <div
                  onClick={toggleSelect}
                  className="cursor-pointer flex justify-between mt-1 w-full  font-normal text-[14px] border-[1px] border-[#D9D9D9] rounded-[5px] p-[10px]"
                >
                  <p className="font-medium text-[14px] text-[#121F2C]">
                    {selectedOption}
                  </p>
                  <IoIosArrowDown className="text-[14px] text-[#121F2C] self-center" />
                </div>
                {isOpen && (
                  <div className="absolute z-20 bg-white shadow-sm border-[1px] border-[#f2f2f2] w-full mt-1">
                    {[
                      "Credit Union Culture and Governance (1100)",
                      "Credit Union Culture and Governance (1100)",
                    ].map((option) => (
                      <p
                        key={option}
                        className="hover:bg-[#f2f2f2] font-medium text-[14px] text-[#121F2C] border-b-[1px] border-[#D9D9D9] p-[10px] cursor-pointer"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-6">
              <p className="font-normal text-[14px] text-[#3D4349] dark:text-white">
                Content Label
              </p>
              <input
                type="text"
                placeholder="History of our Credit Union"
                className="outline-none mt-1 w-full font-normal text-[16px] md:text-[14px] border-[1px] placeholder:text-black border-[#D9D9D9] rounded-[5px] p-[10px]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-8 mt-3">
            <div>
              <p className="font-normal text-[14px] text-[#3D4349] dark:text-white">
                Revised Date
              </p>
              <div className="dark:bg-white mt-1 cursor-pointer w-full  font-normal text-[14px] border-[1px] border-[#D9D9D9] rounded-[5px] p-[10px]">
                <Image
                  src={"/assets/svg/calendar.svg"}
                  alt=""
                  width={20}
                  height={20}
                  className="ml-auto"
                />
              </div>
            </div>

            <div>
              <p className="font-normal text-[14px] text-[#3D4349] dark:text-white">
                Revised Date
              </p>
              <div className="dark:bg-white mt-1 cursor-pointer w-full  font-normal text-[14px] border-[1px] border-[#D9D9D9] rounded-[5px] p-[10px]">
                <Image
                  src={"/assets/svg/calendar.svg"}
                  alt=""
                  width={20}
                  height={20}
                  className="ml-auto"
                />
              </div>
            </div>

            <div>
              <p className="font-normal text-[14px] text-[#3D4349] dark:text-white">
                Revised Date
              </p>
              <div className="dark:bg-white mt-1 cursor-pointer w-full  font-normal text-[14px] border-[1px] border-[#D9D9D9] rounded-[5px] p-[10px]">
                <Image
                  src={"/assets/svg/calendar.svg"}
                  alt=""
                  width={20}
                  height={20}
                  className="ml-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between border-b-[1px] border-[#D9D9D9] pb-2">
            <p className="font-semibold text-[14px] text-[#3D4349] dark:text-white">
              Model Content Information
            </p>
            <IoIosArrowUp className="text-[#121F2C] dark:text-white text-[18px] self-center cursor-pointer" />
          </div>

          <div className="mt-3">
            <p className="font-semibold text-[14px] text-[#121F2C] dark:text-white">
              Model Content Last Revised Date: 
              <span className="font-normal">06/30/2022</span>
            </p>
            <p className="font-normal text-[14px] text-[#121F2C] dark:text-white mt-4">
              Credit Union Culture and Governance is optional and provides
              organizational information specific to the credit unions. Credit
              unions may wish to remove the Key Fields and simply type in the
              text for the various sections of this policy.
            </p>

            <div className="flex gap-3 mt-5">
              <button className="border-[1px] border-[#D6D8E7] rounded-[10px] p-[8px] font-semibold text-[16px] text-[#7A7B7C] dark:text-white">
                View Model Content
              </button>
              <button className="border-[1px] border-[#D6D8E7] rounded-[10px] p-[8px] font-semibold text-[16px] text-[#7A7B7C] dark:text-white">
                Import Model Content
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between border-b-[1px] border-[#D9D9D9] pb-2">
            <p className="font-semibold text-[14px] text-[#3D4349] dark:text-white">
              Model Content Updates
            </p>
            <IoIosArrowUp className="text-[#121F2C] text-[18px] self-center cursor-pointer" />
          </div>

          <div className="mt-3">
            <p className="font-semibold text-[14px] text-[#121F2C] dark:text-white">
              June 2022
            </p>
            <p className="font-normal text-[14px]  mt-4 text-[#3076B1]">
              Credit Union Culture and Governance – June 2022 Redlined Version
            </p>
            <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
              This title of this policy was updated to include and Governance
              and information was added related to the Credit Union’s corporate
              governance and includes several additional related procedures and
              resources beneath it. (Recommended)
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between border-b-[1px] border-[#D9D9D9] pb-2">
            <p className="font-semibold text-[14px] text-[#3D4349] dark:text-white">
              Auditing Notes
            </p>
            <IoIosArrowUp className="text-[#121F2C] dark:text-white text-[18px] self-center cursor-pointer" />
          </div>

          <div className="mt-3">
            <input
              type="text"
              placeholder="Credit Union Culture and Governance"
              className="outline-none mt-1 w-full  font-normal text-[16px] md:text-[14px] border-[1px] placeholder:text-black border-[#D9D9D9] rounded-[5px] p-[10px]"
            />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between border-b-[1px] border-[#D9D9D9] pb-2">
            <p className="font-semibold text-[14px] text-[#3D4349] dark:text-white">
              Notifications
            </p>
            <div className="flex gap-5">
              <SelectUser />
              <IoIosArrowUp className="text-[#121F2C] dark:text-white text-[18px] self-center cursor-pointer" />
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 md:flex gap-2">
            <button className="bg-[#EFEFEF99] dark:text-white rounded-[6px] py-[5px] px-[10px] flex justify-between gap-4 font-normal text-[#121212] text-[14px]">
              Keith Wayman
              <RxCross2 className="text-[#7A7B7C] dark:text-white self-center text-[14px] mt-[1px]" />
            </button>
            <button className="bg-[#EFEFEF99] dark:text-white rounded-[6px] py-[5px] px-[10px] flex justify-between gap-4 font-normal text-[#121212] text-[14px]">
              Keith Wayman
              <RxCross2 className="text-[#7A7B7C] dark:text-white self-center text-[14px] mt-[1px]" />
            </button>
            <button className="bg-[#EFEFEF99] dark:text-white rounded-[6px] py-[5px] px-[10px] flex justify-between gap-4 font-normal text-[#121212] text-[14px]">
              Keith Wayman
              <RxCross2 className="text-[#7A7B7C] dark:text-white self-center text-[14px] mt-[1px]" />
            </button>
            <button className="bg-[#EFEFEF99] dark:text-white rounded-[6px] py-[5px] px-[10px] flex justify-between gap-4 font-normal text-[#121212] text-[14px]">
              Keith Wayman
              <RxCross2 className="text-[#7A7B7C] dark:text-white self-center text-[14px] mt-[1px]" />
            </button>
            <button className=" bg-[#EFEFEF99] dark:text-white rounded-[6px] py-[5px] px-[10px] hidden lg:flex justify-between gap-4 font-normal text-[#121212] text-[14px]">
              Keith Wayman
              <RxCross2 className="text-[#7A7B7C] dark:text-white self-center text-[14px] mt-[1px]" />
            </button>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between border-b-[1px] border-[#D9D9D9] pb-2">
            <p className="font-semibold text-[14px] text-[#3D4349] dark:text-white">
              Key Field Information
            </p>

            <IoIosArrowUp className="text-[#121F2C] dark:text-white text-[18px] self-center cursor-pointer" />
          </div>

          <div className="hidden md:grid grid-cols-12 mt-3">
            <div className="col-span-2 flex gap-5">
              <p className="font-normal text-[#7A7B7C] dark:text-white text-[16px] self-center">
                Keyword
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <div className="col-span-6 flex gap-5">
              <p className="font-normal text-[#7A7B7C] dark:text-white text-[16px] self-center">
                Value
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <div className="col-span-4 flex gap-5">
              <p className="font-normal text-[#7A7B7C] dark:text-white text-[16px] self-center">
                Description
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>

          <div>
            {data.map((item, index) => (
              <div className="grid md:grid-cols-12 mt-3 pb-3 md:pb-0 border-b-[1px] md:border-b-0 border-[#f2f2f2]" key={index}>
                <div className="md:col-span-2 self-center">
                  <p className="font-normal text-[#7A7B7C] dark:text-white text-[16px] self-center">
                    Keyword
                  </p>
                  <p className="font-normal text-[14px] mt-1 md:mt-0 dark:text-white">{item.id}</p>
                </div>
                <div className="md:col-span-6 mt-3 md:mt-0">
                <p className="font-normal text-[#7A7B7C] dark:text-white text-[16px] self-center">
                    Value
                  </p>
                  <input
                    type="text"
                    className="outline-none mt-1 w-[90%] font-normal text-[16px] md:text-[14px] border-[1px] placeholder:text-black border-[#D9D9D9] rounded-[5px] p-[5px]"
                  />
                </div>
                <div className="md:col-span-4 self-center mt-3 md:mt-0">
                <p className="font-normal text-[#7A7B7C] dark:text-white text-[16px] self-center">
                    Description
                  </p>
                  <p className="font-normal text-[14px] dark:text-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
