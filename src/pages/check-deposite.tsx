import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Bot from "../../public/assets/png/bot.png";
import PrintModal from "./component/cu-policy/PrintModal";

export default function CheckDeposite() {

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
          Check Deposit Notice Generator
        </Link>
      </div>
      <div className="hidden md:block mt-5  w-[95%] 2xl:w-[70%] mx-auto">
        {/* <Image
          src={"/assets/svg/print.svg"}
          alt=""
          width={40}
          height={40}
          className="ml-auto"
        /> */}
        <PrintModal />

      </div>

      <div className="md:w-[95%] 2xl:w-[70%] mx-auto shadow-sm  mb-5 md:rounded-[7px] p-[20px] bg-white dark:bg-black dark:border-[1px]">
        <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] pt-3 md:pt-0">
          Check Deposit Notice Generator (CDNG) allows your credit union to
          evaluate any check offered for deposit and generate a beneficial but
          effective hold, collection, warning, or decline notice to provide to
          the member to prevent a loss on that check. The CDNG not only provides
          a comprehensive objective notice solution that consistently
          addresses all potential check deposit losses, but also provides your
          credit union’s employees with a
          comprehensive research and training resource that will assist your
          credit union in immediately demonstrating that all its actions on
          checks offered for deposit are extremely beneficial to both the member
          and the credit union alike!
        </p>

        <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
          Your ROI on the CDNG. Institutions lose over a billion dollars
          annually just in check fraud losses (which does not include all
          nonpayment and erroneous check deposit losses). The CDNG will assist
          your credit union in addressing and preventing all potential check
          deposit losses as well as provide your members with excellent service!
          If the CDNG helps your credit union prevent one check deposit loss (or
          one call to a lawyer about a check problem) each year, its more than
          proved its value to your credit union (and it will help your credit
          union and employees consistently and beneficially assist hundreds of
          members with problematic checks annually)
        </p>

        <li className="nu font-semibold text-[12px] text-[#3076B1] mt-5">
          CDNG Video Tour  Passcode: v^PK1L!8
        </li>
        <li className="nu font-semibold text-[12px] text-[#3076B1]">
          CDNG Video Tour Additional Information  
        </li>

        <p className="nu font-semibold text-[12px] text-[#3076B1] mt-4">
          Click here to access these valuable tools!
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
          className="fixed right-5 bottom-5 w-[82px] h-[87px] cursor-pointer"
        />
      </Link>
    </div>
    </>
  );
}
