import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import Image from "next/image";
import Footer from "./component/footer/footer";
import PrintModal from "./component/cu-policy/PrintModal";
import Bot from "../../public/assets/png/bot.png";

export default function Risk() {
  const [isOpenAlert1, setIsOpenAlert1] = useState(true);
  const [isOpenAlert2, setIsOpenAlert2] = useState(true);
  const [isOpenAlert3, setIsOpenAlert3] = useState(true);
  const [isOpenAlert4, setIsOpenAlert4] = useState(true);

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
        <Link href={"/"} className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
          RISK Alerts & Resources
        </Link>
      </div>
      <div className=" hidden md:block mt-5  w-[95%] 2xl:w-[70%] mx-auto">
        <PrintModal />
      </div>

      <div className="md:w-[95%] 2xl:w-[70%] mx-auto shadow-sm  mb-5 md:rounded-[7px] p-[20px] bg-white dark:bg-black dark:border-[1px]">
        <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
          Stay up-to-date on the most recent risks facing your industry and stay
          in-the-know on persistent risks that you need to stay aware of. RISK
          Alerts from TruStage are published just-in-time when risks are most
          prevalent to make sure you are on top of the most relevant topics.
        </p>

        <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
          or links to related risk resources and additional RISK Alerts
          (including Corporate Check Fraud RISK Alerts reported by peer credit
          unions), access the RISK Alerts Library within the TruStageTM Business
          Protection Resource Center.  The RISK Alerts Library provides you the
          ability to search all RISK Alerts by risk, risk category, key words,
          and by credit union role.
        </p>

        <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-5">
          A User ID/Password is required to access TruStage content.
        </p>
      </div>

      <div className="w-[95%] 2xl:w-[70%] mx-auto ">
        <div className="bg-white dark:bg-black dark:border-[1px] mb-5">
          <div
            onClick={() => setIsOpenAlert1(!isOpenAlert1)}
            className="flex justify-between mt-2 border-b-[1px] border-[#f2f2f2] p-4"
          >
            <p className="font-semibold text-[#121F2C] dark:text-white text-[18px]">
              Recent RISK Alerts
            </p>

            {isOpenAlert1 ? (
              <IoIosArrowUp className="text-[20px] text-[#121F2C] dark:text-white self-center" />
            ) : (
              <IoIosArrowDown className="text-[20px] text-[#121F2C] dark:text-white self-center" />
            )}
          </div>
          {isOpenAlert1 && (
            <div className="p-5">
              <li className="text-[#3076B1] text-[12px] font-semibold">
                CISA warns of ongoing cyber threats to critical infrastructures {" "}
                <span className="text-[#121212] dark:text-white font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                CISA (Cybersecurity & Infrastructure Security Agency) recently
                issued an advisory warning of the ongoing threat to critical
                infrastructure across multiple sectors, including financial
                institutions. Cyber actors have increased aggressive threats
                with aims of disruption or destruction of critical services to
                compromise critical American infrastructure, including FIs in
                the event of increased geopolitical tensions and/or military
                conflict with the United States. Credit unions should remain
                extremely vigilant of cyber risks like the ones warned of by
                CISA.
              </p>

              <li className="text-[#3076B1] text-[12px] font-semibold mt-5">
                Credit unions experience losses associated with VIN cloning
                <span className="text-[#121212] font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                VIN cloning happens when a Vehicle Identification Number (VIN)
                is stolen from a legitimate vehicle and attached to another
                vehicle, which is typically stolen. This fraudulent practice
                conceals the real VIN of the stolen vehicle, essentially giving
                it a fake ID. The result is two cars on the road with the same
                VIN.
              </p>

              <li className="text-[#3076B1] text-[12px] font-semibold mt-5">
                Loan delinquency drives risk exposure
                <span className="text-[#121212] font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                Offering lending products is the backbone for many credit
                unions. You have verified the member and properly determined
                their eligibility for credit and the ability to repay. When the
                ability to repay turns into a collection effort, is your credit
                union prepared to collect the funds, correctly?
              </p>

            
              <li className="text-[#3076B1] text-[12px] font-semibold mt-5">
                Credit unions experience losses associated with VIN cloning
                <span className="text-[#121212] font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                VIN cloning happens when a Vehicle Identification Number (VIN)
                is stolen from a legitimate vehicle and attached to another
                vehicle, which is typically stolen. This fraudulent practice
                conceals the real VIN of the stolen vehicle, essentially giving
                it a fake ID. The result is two cars on the road with the same
                VIN.
              </p>
            </div>
          )}
        </div>



        <div className="mt-3 bg-white dark:bg-black dark:border-[1px] mb-5">
          <div
            onClick={() => setIsOpenAlert1(!isOpenAlert2)}
            className="flex justify-between mt-2 border-b-[1px] border-[#f2f2f2] p-4"
          >
            <p className="font-semibold text-[#121F2C] dark:text-white text-[18px]">
              2024 RISK Alerts
            </p>

            {isOpenAlert2 ? (
              <IoIosArrowUp className="text-[20px] text-[#121F2C] dark:text-white self-center" />
            ) : (
              <IoIosArrowDown className="text-[20px] text-[#121F2C] dark:text-white self-center" />
            )}
          </div>
          {isOpenAlert2 && (
            <div className="p-5">
              <li className="text-[#3076B1] text-[12px] font-semibold">
                CISA warns of ongoing cyber threats to critical infrastructures {" "}
                <span className="text-[#121212] dark:text-white font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                CISA (Cybersecurity & Infrastructure Security Agency) recently
                issued an advisory warning of the ongoing threat to critical
                infrastructure across multiple sectors, including financial
                institutions. Cyber actors have increased aggressive threats
                with aims of disruption or destruction of critical services to
                compromise critical American infrastructure, including FIs in
                the event of increased geopolitical tensions and/or military
                conflict with the United States. Credit unions should remain
                extremely vigilant of cyber risks like the ones warned of by
                CISA.
              </p>

              <li className="text-[#3076B1] text-[12px] font-semibold mt-5">
                Credit unions experience losses associated with VIN cloning
                <span className="text-[#121212] font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                VIN cloning happens when a Vehicle Identification Number (VIN)
                is stolen from a legitimate vehicle and attached to another
                vehicle, which is typically stolen. This fraudulent practice
                conceals the real VIN of the stolen vehicle, essentially giving
                it a fake ID. The result is two cars on the road with the same
                VIN.
              </p>

              <li className="text-[#3076B1] text-[12px] font-semibold mt-5">
                Loan delinquency drives risk exposure
                <span className="text-[#121212] font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                Offering lending products is the backbone for many credit
                unions. You have verified the member and properly determined
                their eligibility for credit and the ability to repay. When the
                ability to repay turns into a collection effort, is your credit
                union prepared to collect the funds, correctly?
              </p>

            
              <li className="text-[#3076B1] text-[12px] font-semibold mt-5">
                Credit unions experience losses associated with VIN cloning
                <span className="text-[#121212] font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                VIN cloning happens when a Vehicle Identification Number (VIN)
                is stolen from a legitimate vehicle and attached to another
                vehicle, which is typically stolen. This fraudulent practice
                conceals the real VIN of the stolen vehicle, essentially giving
                it a fake ID. The result is two cars on the road with the same
                VIN.
              </p>
            </div>
          )}
        </div>


        <div className="bg-white dark:bg-black border-[1px] mb-5">
          <div
            onClick={() => setIsOpenAlert1(!isOpenAlert3)}
            className="flex justify-between mt-2 border-b-[1px] border-[#f2f2f2] p-4"
          >
            <p className="font-semibold text-[#121F2C]  dark:text-white text-[18px]">
              2023 RISK Alerts
            </p>

            {isOpenAlert3 ? (
              <IoIosArrowUp className="text-[20px] text-[#121F2C]  dark:text-white self-center" />
            ) : (
              <IoIosArrowDown className="text-[20px] text-[#121F2C]  dark:text-white self-center" />
            )}
          </div>
          {isOpenAlert3 && (
            <div className="p-5">
              <li className="text-[#3076B1] text-[12px] font-semibold">
                CISA warns of ongoing cyber threats to critical infrastructures {" "}
                <span className="text-[#121212] dark:text-white font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                CISA (Cybersecurity & Infrastructure Security Agency) recently
                issued an advisory warning of the ongoing threat to critical
                infrastructure across multiple sectors, including financial
                institutions. Cyber actors have increased aggressive threats
                with aims of disruption or destruction of critical services to
                compromise critical American infrastructure, including FIs in
                the event of increased geopolitical tensions and/or military
                conflict with the United States. Credit unions should remain
                extremely vigilant of cyber risks like the ones warned of by
                CISA.
              </p>

              <li className="text-[#3076B1] text-[12px] font-semibold mt-5">
                Credit unions experience losses associated with VIN cloning
                <span className="text-[#121212] dark:text-white font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                VIN cloning happens when a Vehicle Identification Number (VIN)
                is stolen from a legitimate vehicle and attached to another
                vehicle, which is typically stolen. This fraudulent practice
                conceals the real VIN of the stolen vehicle, essentially giving
                it a fake ID. The result is two cars on the road with the same
                VIN.
              </p>

              <li className="text-[#3076B1] text-[12px] font-semibold mt-5">
                Loan delinquency drives risk exposure
                <span className="text-[#121212] dark:text-white font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                Offering lending products is the backbone for many credit
                unions. You have verified the member and properly determined
                their eligibility for credit and the ability to repay. When the
                ability to repay turns into a collection effort, is your credit
                union prepared to collect the funds, correctly?
              </p>

            
              <li className="text-[#3076B1] text-[12px] font-semibold mt-5">
                Credit unions experience losses associated with VIN cloning
                <span className="text-[#121212] dark:text-white font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                VIN cloning happens when a Vehicle Identification Number (VIN)
                is stolen from a legitimate vehicle and attached to another
                vehicle, which is typically stolen. This fraudulent practice
                conceals the real VIN of the stolen vehicle, essentially giving
                it a fake ID. The result is two cars on the road with the same
                VIN.
              </p>
            </div>
          )}
        </div>


        <div className="bg-white dark:bg-black dark:border-[1px]  mb-5">
          <div
            onClick={() => setIsOpenAlert1(!isOpenAlert4)}
            className="flex justify-between mt-2 border-b-[1px] border-[#f2f2f2] p-4"
          >
            <p className="font-semibold text-[#121F2C]  dark:text-white text-[18px]">
              2022 RISK Alerts
            </p>

            {isOpenAlert4 ? (
              <IoIosArrowUp className="text-[20px] text-[#121F2C]  dark:text-white self-center" />
            ) : (
              <IoIosArrowDown className="text-[20px] text-[#121F2C]  dark:text-white self-center" />
            )}
          </div>
          {isOpenAlert4 && (
            <div className="p-5">
              <li className="text-[#3076B1] text-[12px] dark:text-white font-semibold">
                CISA warns of ongoing cyber threats to critical infrastructures {" "}
                <span className="text-[#121212] dark:text-white font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                CISA (Cybersecurity & Infrastructure Security Agency) recently
                issued an advisory warning of the ongoing threat to critical
                infrastructure across multiple sectors, including financial
                institutions. Cyber actors have increased aggressive threats
                with aims of disruption or destruction of critical services to
                compromise critical American infrastructure, including FIs in
                the event of increased geopolitical tensions and/or military
                conflict with the United States. Credit unions should remain
                extremely vigilant of cyber risks like the ones warned of by
                CISA.
              </p>

              <li className="text-[#3076B1] text-[12px] font-semibold mt-5">
                Credit unions experience losses associated with VIN cloning
                <span className="text-[#121212] dark:text-white font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                VIN cloning happens when a Vehicle Identification Number (VIN)
                is stolen from a legitimate vehicle and attached to another
                vehicle, which is typically stolen. This fraudulent practice
                conceals the real VIN of the stolen vehicle, essentially giving
                it a fake ID. The result is two cars on the road with the same
                VIN.
              </p>

              <li className="text-[#3076B1] text-[12px] font-semibold mt-5">
                Loan delinquency drives risk exposure
                <span className="text-[#121212] dark:text-white font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                Offering lending products is the backbone for many credit
                unions. You have verified the member and properly determined
                their eligibility for credit and the ability to repay. When the
                ability to repay turns into a collection effort, is your credit
                union prepared to collect the funds, correctly?
              </p>

            
              <li className="text-[#3076B1] text-[12px] font-semibold mt-5">
                Credit unions experience losses associated with VIN cloning
                <span className="text-[#121212] dark:text-white font-normal">(6/25/2024) </span>
              </li>
              <p className="font-normal text-[12px] text-[#121212] dark:text-white ml-4 mt-[1px]">
                VIN cloning happens when a Vehicle Identification Number (VIN)
                is stolen from a legitimate vehicle and attached to another
                vehicle, which is typically stolen. This fraudulent practice
                conceals the real VIN of the stolen vehicle, essentially giving
                it a fake ID. The result is two cars on the road with the same
                VIN.
              </p>
            </div>
          )}
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
