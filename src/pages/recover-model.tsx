import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "./component/footer/footer";
import Bot from "../../public/assets/png/bot.png";
import Image from "next/image";


export default function RecoverContent() {

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
          href={"/cu-policy"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          RecoveryPro
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] self-center cursor-pointer" />
        <Link
          href={"/compliance"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
        Model BCP
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] self-center cursor-pointer" />
        <Link
          href={"/"}
          className="nun font-normal text-[#121F2C] text-[14px]"
        >
          Import Model BCP
        </Link>
      </div>

      <div className="mt-8 md:mt-5 md:w-[95%] 2xl:w-[70%] mx-auto mb-12 md:mb-10">
        <div className="flex justify-between px-3 md:px-0">
          <p className="nun font-normal text-[12px] self-center">
            Select one or more model templates to import to your CU Policies
            manual
          </p>
          <button className="hidden md:block font-semibold text-[14px] text-white bg-[#3076B1] hover:bg-[#18459D] rounded-[6px] py-[14px] px-[10px] uppercase">
            import policies
          </button>
        </div>
        <div className="bg-white rounded-[7px] shadow-sm mt-5">
          <div className="flex justify-between p-[15px] border-b-[1px] border-[#CCCCCC]">
            <p className="nun font-semibold text-[14px] text-[#3076B1]">
              Chapter 1000: Administrative
            </p>
            <div className="flex gap-4 self-center">
              <p className="nun font-normal text-[12px] text-[#121212]">
                All Sub-Content
              </p>
              <input type="checkbox" />
            </div>
          </div>

          <div className="flex justify-between p-[15px] border-b-[1px] border-[#CCCCCC] md:ml-5">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-medium text-[14px] text-[#3076B1] truncate w-48 md:w-auto">
                Policy 1100: Credit Union Culture and Governance
              </p>
            </div>
            <div className="flex gap-4 self-center">
              <p className="nun font-normal text-[12px] text-[#121212]">
                All Sub-Content
              </p>
              <input type="checkbox" />
            </div>
          </div>

          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1100.10: Organization
              </p>
            </div>
          </div>
          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1100.11: Field of Membership
              </p>
            </div>
          </div>
          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1100.12: Board of Directors Duties
              </p>
            </div>
          </div>
          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1100.13: Compensation, Reimbursement, and Indemnification
              </p>
            </div>
          </div>
          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1100.14: Bond and Insurance Coverage
              </p>
            </div>
          </div>
          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1100.15: Education and Volunteer Training Guidelines
              </p>
            </div>
          </div>
          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1100.16: Strategic Planning
              </p>
            </div>
          </div>
          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1100.17: Audits
              </p>
            </div>
          </div>
          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1100.18: Legal Counsel
              </p>
            </div>
          </div>

          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1100.19: Code of Ethics and Diversity
              </p>
            </div>
          </div>

          <div className="flex justify-between p-[15px] border-b-[1px] border-[#CCCCCC] md:ml-5">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-medium text-[14px] text-[#3076B1] truncate w-48 md:w-auto">
                Policy 1200: Regulatory Compliance
              </p>
            </div>
            <div className="flex gap-4 self-center">
              <p className="nun font-normal text-[12px] text-[#121212]">
                All Sub-Content
              </p>
              <input type="checkbox" />
            </div>
          </div>

          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1] truncate w-64 md:w-auto">
                1230.10: Complaint Process for Federally Chartered Credit Unions
              </p>
            </div>
          </div>

          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1] truncate w-64 md:w-auto">
                1230.11: Complaint Process for State-Chartered Credit Unions
              </p>
            </div>
          </div>

          <div className="flex justify-between p-[15px] border-b-[1px] border-[#CCCCCC] md:ml-5">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-medium text-[14px] text-[#3076B1] truncate w-64 md:w-auto">
                Policy 1230: Enterprise Risk Management (Policy 1240)
              </p>
            </div>
          </div>

          <div className="flex justify-between p-[15px] border-b-[1px] border-[#CCCCCC] md:ml-5">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-medium text-[14px] text-[#3076B1] truncate w-48 md:w-auto">
                Policy 1300: Staffing and Human Resources (Policy 1500)
              </p>
            </div>
            <div className="flex gap-4 self-center">
              <p className="nun font-normal text-[12px] text-[#121212]">
                All Sub-Content
              </p>
              <input type="checkbox" />
            </div>
          </div>

          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1500.10: Whistleblowing Protection
              </p>
            </div>
          </div>

          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1500.11: Nepotism
              </p>
            </div>
          </div>

          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1500.12: Equal Opportunity Statement
              </p>
            </div>
          </div>

          <div className=" p-[15px] border-b-[1px] border-[#CCCCCC] ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1500.13: Political Contributions
              </p>
            </div>
          </div>

          <div className=" p-[15px]  ml-10">
            <div className="flex gap-2 ">
              <input type="checkbox" className="mt-[2px]" />

              <p className="nun font-normal text-[14px] text-[#3076B1]">
                1500.14: Payroll
              </p>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
      
      <Link href={'/cu-bcp'} className="fixed bottom-0 w-full  z-20">
          <button className=" font-semibold text-[14px] text-white bg-[#3076B1] hover:bg-[#18459D] w-full py-[14px] px-[10px] uppercase">
            import policies
          </button>
          </Link>
        </div>

      </div>
      <Footer/>
      </>
        ) : (
          <div className="w-full h-full flex justify-between px-3 mt-3 items-center">
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">All</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
                Infosight
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
                CU Policy Pro
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
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
