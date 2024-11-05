import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Footer from "./component/footer/footer";
import PrintModal from "./component/cu-policy/PrintModal";
import Bot from "../../public/assets/png/bot.png";


export default function AccountInsurance() {

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
        <IoIosArrowForward className="text-[16px] text-[#121F2C]    dark:text-white self-center cursor-pointer" />
        <Link href={"/"} className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
          Account Insurance Estimator
        </Link>
      </div>
      <div className="hidden md:block md:mt-5  w-[95%] 2xl:w-[70%] mx-auto">
        <PrintModal />
      </div>

      <div className=" md:w-[95%] 2xl:w-[70%] mx-auto shadow-sm  mb-5 md:rounded-[7px] p-[20px] bg-white dark:bg-black dark:border-[1px]">
        <p className="nun font-normal text-[#121F2C]  dark:text-white  text-[12px] pt-3 md:pt-0">
          The Account Insurance Estimator is now available to all credit unions
          as a member benefit! Account Insurance Estimator (AIE) allows your
          credit union to estimate the maximum federal insurance (NCUSIF)
          coverage of funds in any member’s account(s) for the ten most popular
          types of coverage, and generate a customized estimate and estimate
          form to provide to the member to reinforce the value of your credit
          union. Not only is the AIE a “service excellence” and “employee
          training” solution, the AIE will also allow your credit union to
          promote itself and all its important products and services to members
          and potential members instantly!
        </p>

        <p className="nun font-normal text-[#121F2C]  dark:text-white  text-[12px] mt-5">
          <span className="font-semibold">
            Account Insurance Estimator Webinar Recording
          </span>{" "}
          The recent bank failures have raised member concerns for many credit
          unions. Help equip your employees to answer questions and assure
          members about NCUSIF coverage through the Account Insurance Estimator.
          We recently held an educational webinar to help credit unions learn
          more and take advantage of this dues-supported tool. A recording of
          the April 4, 2023 webinar is below
        </p>

        <p className="nun font-semibold text-[#3076B1] text-[12px] mt-5">
          View Recording
        </p>
        <p className="nun font-normal text-[#121F2C]  dark:text-white  text-[12px] ">
          Passcode: .=6Oga3G
        </p>

        <p className="nun font-normal text-[#121F2C]  dark:text-white  text-[12px] mt-5">
          How are your employees being prepared to answer questions and build
          confidence in your credit union? Let us help!
        </p>

        <p className="nun font-normal text-[#121F2C]  dark:text-white  text-[12px] mt-5">
          <span className="font-bold">Your ROI on the AIE.</span> Your credit
          union has hundreds of thousands to millions of members’ funds on
          deposit with NCUSIF, and providing or linking to government resources
          is not helpful to your members or your credit union. The AIE will
          immediately help your credit union get a significant and valuable
          return on its NCUSIF deposit with excellent service for and the
          promotion and sale of all products and services to members, as well as
          help it attract potential members. If the AIE assists you keep one
          valuable member each year, its more than proved its value to your
          credit union (and it will help you serve and please hundreds if not
          thousands of members annually)!
        </p>
        <li className="nu font-semibold text-[14px] text-[#3076B1] mt-5">
          AIE Video Tour Passcode: 4J#@T7#g
        </li>
        <li className="nu font-semibold text-[14px] text-[#3076B1]">
          AIE Video Tour Additional Information
        </li>
      </div>
      <Footer />
      </>
        ):(
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
