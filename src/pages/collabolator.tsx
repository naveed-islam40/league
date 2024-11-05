import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Bot from "../../public/assets/png/bot.png";
import PrintModal from "./component/cu-policy/PrintModal";

export default function Collaborator() {
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
            <div className="hidden md:flex gap-2 mt-5  w-[95%] 2xl:w-[70%] mx-auto">
              <Link
                href={"/"}
                className="nun font-semibold text-[#3076B1] text-[14px]"
              >
                Resources
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                Collaborative Partners
              </Link>
            </div>
            <div className="hidden md:block mt-5  w-[95%] 2xl:w-[70%] mx-auto">
              
              <PrintModal/>
            </div>

            <div className="md:w-[95%] 2xl:w-[70%] mx-auto shadow-sm mb-5 md:rounded-[7px] p-[20px] bg-white dark:bg-black dark:border-[1px]">
              <p className="nun font-semibold text-[#121F2C] dark:text-white text-[12px] pt-3 md:pt-0">
                CU Risk Intelligence
              </p>
              <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                Combining the knowledge and expertise of industry leaders
                AffirmX and CU Solutions Group, CU Risk Intelligences approach
                to governance, risk and compliance (GRC) management is to
                provide affordable solutions to credit unions of all sizes and
                sophistication
              </p>

              <p className="nun font-semibold text-[#121F2C] dark:text-white text-[12px] mt-5">
                AffirmX
              </p>
              <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                CU Risk Intelligence’s industry-leading risk management
                automation provider, AffirmX, delivers mitigation resources for
                credit unions that reduce the costs, workloads and angst
                associated with regulatory compliance.
              </p>

              <p className="nun font-bold text-[#121F2C] dark:text-white text-[12px] mt-5">
                Anticipate and Pinpoint Compliance Issues Before They Become a
                Problem
              </p>
              <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                Is your credit union finding it challenging to keep up with the
                complexities of regulatory compliance? You need a cost-effective
                solution that offers the same or greater oversight that
                consulting and accounting firms provide. AffirmXs patented risk
                management and compliance technology, the AffirmX Risk Intel
                Platform, is designed to help credit unions seamlessly comply
                with laws and regulations and addresses emerging risks at a
                fraction of the cost that consulting and accounting firms
                charge.
              </p>

              <p className="nun font-semibold text-[#121F2C] dark:text-white text-[12px] mt-5">
                ComplySight
              </p>
              <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                CU Risk Intelligences compliance management
                solution, ComplySight, provides visibility, tracking, measuring
                and reporting of compliance activities through a single,
                simplified application. ComplySight transforms complex
                regulations into simple, straightforward summary language. As a
                holistic solution, it includes 16 areas of compliance and over
                700 compliance factors for self-evaluation and grading to
                provide visibility and measurement and identify any potential
                areas of compliance deficiency. ComplySight matches compliance
                needs with compliance gaps - filling the need by integrating
                with both InfoSight and CU PolicyPro.
              </p>

              <p className="nun font-semibold text-[#121F2C] dark:text-white text-[12px] mt-5">
                CU Vendor Management (CUVM)
              </p>
              <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                CUVM is all about making your life easier with a dependable and
                cost-effective way to manage vendor and regulatory due
                diligence. To put it simply, we take the burden off you, so you
                don’t have to worry!
              </p>

              <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
                Your ROI on the CDNG. Institutions lose over a billion dollars
                annually just in check fraud losses (which does not include all
                nonpayment and erroneous check deposit losses). The CDNG will
                assist your credit union in addressing and preventing all
                potential check deposit losses as well as provide your members
                with excellent service! If the CDNG helps your credit union
                prevent one check deposit loss (or one call to a lawyer about a
                check problem) each year, its more than proved its value to your
                credit union (and it will help your credit union and employees
                consistently and beneficially assist hundreds of members with
                problematic checks annually)
              </p>

              <p className="nun font-semibold text-[#121F2C] dark:text-white text-[12px] mt-5">
                Heres How We Help:
              </p>
              <li className="nu font-normal text-[12px] text-[#121F2C] dark:text-white mt-5">
                Streamline the vendor management process
              </li>
              <li className="nu font-normal text-[12px] text-[#121F2C] dark:text-white">
                Save you time and money and lower operational expenses
              </li>
              <li className="nu font-normal text-[12px] text-[#121F2C] dark:text-white">
                Centralize storage and retrieval of contracts and due diligence
              </li>
              <li className="nu font-normal text-[12px] text-[#121F2C] dark:text-white">
                Offer personalized service with dedicated analyst and support
                staff{" "}
              </li>
              <li className="nu font-normal text-[12px] text-[#121F2C] dark:text-white">
                Ensure all contracts are compliance-friendly
              </li>
              <li className="nu font-normal text-[12px] text-[#121F2C] dark:text-white">
                Meet NCUA requirement
              </li>

              <p className="nu font-semibold text-[12px] text-[#3076B1] mt-4">
                  Learn more about the CU Risk Intelligence Solutions!
              </p>
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
