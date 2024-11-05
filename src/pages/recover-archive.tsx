import React, { useEffect, useRef, useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Arch from "./component/discussion/archive";
import Bot from "../../public/assets/png/bot.png";

const items = [
  {
    title: "Administrative",
    number: "1001",
    versions: [
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
    ],
    name: "Keith Wayman",
  },
  {
    title: "Credit Union Culture and Governance",
    number: "1001",
    versions: [
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
    ],
    name: "Keith Wayman",
  },
  {
    title: "Organization",
    number: "1001",
    versions: [
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
    ],
    name: "Keith Wayman",
  },
  {
    title: "Field of Membership",
    number: "1001",
    versions: [
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
    ],
    name: "Keith Wayman",
  },
  {
    title: "Board of Director's Duties",
    number: "1001",
    versions: [
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
    ],
    name: "Keith Wayman",
  },
  {
    title: "Compensation, Reimbursement, and Indemnification",
    number: "1001",
    versions: [
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
    ],
    name: "Keith Wayman",
  },
  {
    title: "Bond and Insurance Coverage",
    number: "1001",
    versions: [
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
    ],
    name: "Keith Wayman",
  },
  {
    title: "Education and Volunteer Training Guidelines",
    number: "1001",
    versions: [
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
    ],
    name: "Keith Wayman",
  },
  {
    title: "Strategic Planning",
    number: "1001",
    versions: [
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
    ],
    name: "Keith Wayman",
  },
  {
    title: "Audits",
    number: "1001",
    versions: [
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
    ],
    name: "Keith Wayman",
  },
  {
    title: "Code of Ethics and Diversity",
    number: "1001",
    versions: [
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
      "1.1.1 01/26/2024, 11:10 AM",
    ],
    name: "Keith Wayman",
  },
];

export default function Archive() {
  const sortOptions = [
    "01/26/2024, 11:10 AM",
    "01/26/2024, 11:10 AM",
    "01/26/2024, 11:10 AM",
    "01/26/2024, 11:10 AM",
  ];

  const [selectedSort, setSelectedSort] = useState<string>(sortOptions[0]);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
      <div className="bg-[#FFDF36] p-[5px] -mt-1 md:-mt-[12px] xl:-mt-[10px] fixed w-full"></div>

      <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
        <Link
          href={"/cu-policies"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          RecoveryPro
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link
          href={"/cu-policy"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          CU BCP
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link
          href={"/compliance"}
          className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
        >
          Revision History
        </Link>
      </div>

      <div className="mt-7 md:mt-5 md:w-[95%] 2xl:w-[70%] mx-auto mb-5">
              <button className="w-[95%] mx-auto md:mx-0  md:w-auto block md:ml-auto font-semibold text-[#ED4C5C] text-[14px] border-[1px] border-[#ED4C5C] bg-white py-[12px] px-[12px] rounded-[10px] uppercase ">
                Restore deleted
              </button>
              <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] mt-5 mx-3 md:mx-0 mb-3 md:mb-0">
                Select a revision date and time from the drop-down menu, then
                click the Preview button to view it. If it is the revision you
                want, click the Restore Revision button. The Edit button will
                return you to the current version of the content in the CU
                Policies manual.
              </p>

              <div className="md:overflow-x-scroll">
                <div className="md:w-[1200px] xl:w-auto">
                  <div className="bg-white dark:bg-black dark:border-[1px] shadow-sm md:rounded-t-[4px] p-[12px] hidden md:flex justify-between mt-5 mb-3 ">
                    <div className="w-[424px]">
                      <p className="font-normal text-[#7A7B7C] text-[16px]">
                        Policy Name
                      </p>
                    </div>
                    <div className="w-[180px]">
                      <p className="font-normal text-[#7A7B7C] text-[16px]">
                        Document Number
                      </p>
                    </div>
                    <div className="w-[300px]">
                      <p className="font-normal text-[#7A7B7C] text-[16px]">
                        Version
                      </p>
                    </div>
                    <div className="w-[200px]">
                      <p className="font-normal text-[#7A7B7C] text-[16px]">
                        Modified By
                      </p>
                    </div>
                    <div className="w-[200px]"></div>
                  </div>

                  {items.map((item, index) => (
                    <div key={index}>
                      <div
                        key={index}
                        className={`bg-white dark:bg-black border-y-[1px] md:dark:border-[1px] shadow-sm  p-[12px] md:flex justify-between  ${
                          index !== items.length - 1
                            ? "border-b-[1px] border-[#D9D9D9]"
                            : ""
                        }`}
                      >
                        <div className="flex gap-4 md:w-[424px] self-center">
                          <p className="block md:hidden font-normal text-[#7A7B7C] text-[16px]">
                            Policy Name
                          </p>
                          <p className="font-normal text-[#121212] dark:text-white text-[16px] md:text-[14px] self-center">
                            {item.title}
                          </p>
                        </div>
                        <div className="flex gap-4 md:w-[180px] self-center mt-2 md:mt-0">
                          <p className="block md:hidden font-normal text-[#7A7B7C] text-[16px]">
                            Document Number
                          </p>
                          <p className="font-normal text-[#121212] dark:text-white text-[16px] md:text-[14px] self-center">
                            {item.number}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0 md:w-[300px]">
                          <p className="block md:hidden font-normal text-[#7A7B7C] text-[16px] mb-1 md:mt-0">
                            Version
                          </p>
                          <Arch
                            options={sortOptions}
                            selectedOption={selectedSort}
                            onSelectOption={setSelectedSort}
                            title=""
                          />
                        </div>
                        <div className="flex gap-4 md:w-[200px] self-center mt-3 md:mt-0">
                          <p className="block md:hidden font-normal text-[#7A7B7C] text-[16px] self-center ">
                            Modified By
                          </p>
                          <p className="bg-[#EFEFEF] md:bg-transparent rounded-[8px] md:rounded-none p-1 md:p-0 font-normal dark:text-white text-[#121212]  text-[16px] md:text-[14px] self-center">
                            {item.name}
                          </p>
                        </div>
                        <div className=" md:w-[200px] hidden md:flex justify-end gap-5">
                          <Image
                            src={"/assets/svg/eye.svg"}
                            alt=""
                            width={24}
                            height={24}
                            className="cursor-pointer"
                          />
                          <Link
                            href={"/cu-policiesView"}
                            className="self-center"
                          >
                            <Image
                              src={"/assets/svg/bx-reset.svg"}
                              alt=""
                              width={24}
                              height={24}
                              className="cursor-pointer"
                            />
                          </Link>
                          <Image
                            src={"/assets/svg/bx-edit.svg"}
                            alt=""
                            width={24}
                            height={24}
                            className="cursor-pointer hidden md:block"
                          />
                        </div>
                      </div>

                      <div className="grid md:hidden grid-cols-2 py-5">
                        <Image
                          src={"/assets/svg/eye.svg"}
                          alt=""
                          width={24}
                          height={24}
                          className="cursor-pointer mx-auto"
                        />
                        <Link
                          href={"/cu-policiesView"}
                          className="border-l-[2px] border-[#CDCDCD] self-center"
                        >
                          <Image
                            src={"/assets/svg/bx-reset.svg"}
                            alt=""
                            width={24}
                            height={24}
                            className="cursor-pointer mx-auto"
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
      <Footer />
      </>
        ) : (
          <div className="w-full h-full flex justify-between px-3 mt-3 items-center">
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">All</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                Infosight
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                CU Policy Pro
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                RecoveryPro
              </p>
            </div>
          </div>
        )}

        <Link href={"/chat"}>
          <Image
            src={Bot}
            alt="Chatbot"
            className="fixed z-20 right-5 bottom-5 w-[82px] h-[87px] cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
