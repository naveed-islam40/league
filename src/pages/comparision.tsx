import React, { useEffect, useRef, useState } from "react";
import Navbar from "./component/navbar/navbar";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import Footer from "./component/footer/footer";
import Image from "next/image";
import Bot from "../../public/assets/png/bot.png";

const locations = [
  "California, CA",
  "Alabama, AL",
  "Alaska, AK",
  "Arizona, AZ",
  "Arkansas, AR",
  "Colorado, CO",
  "Connecticut, CT",
  "Delaware, DE",
  "Florida, FL",
  "Georgia, GA",
  "Hawaii, HI",
  "Idaho, ID",
  "Illinois, IL",
];

export default function Comparision() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedLocation1, setSelectedLocation1] = useState("California, CA");
  const [selectedLocation2, setSelectedLocation2] = useState("California, CA");
  const locationDropdownRef1 = useRef<HTMLDivElement>(null);
  const locationDropdownRef2 = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleLocationChange1 = (location: string) => {
    setSelectedLocation1(location);
    setIsOpen1(false);
  };

  const handleLocationChange2 = (location: string) => {
    setSelectedLocation2(location);
    setIsOpen2(false);
  };

  const handleClickOutside1 = (event: MouseEvent) => {
    if (
      locationDropdownRef1.current &&
      !locationDropdownRef1.current.contains(event.target as Node)
    ) {
      setIsOpen1(false);
    }
  };

  const handleClickOutside2 = (event: MouseEvent) => {
    if (
      locationDropdownRef2.current &&
      !locationDropdownRef2.current.contains(event.target as Node)
    ) {
      setIsOpen2(false);
    }
  };

  useEffect(() => {
    if (isOpen1) {
      document.addEventListener("click", handleClickOutside1);
    } else {
      document.removeEventListener("click", handleClickOutside1);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside1);
    };
  }, [isOpen1]);

  useEffect(() => {
    if (isOpen2) {
      document.addEventListener("click", handleClickOutside2);
    } else {
      document.removeEventListener("click", handleClickOutside2);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside2);
    };
  }, [isOpen2]);

  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
            <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
              <Link
                href={"/infoSight"}
                className="nun font-semibold text-[#3076B1] text-[14px]"
              >
                InfoSight
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/compliance"}
                className="nun font-semibold text-[#3076B1] text-[14px]"
              >
                Compliance Topics
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/compliance"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                Accounts
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/compliance"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                Account Introduction
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/compliance"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                Compare
              </Link>
            </div>

            <Link
              href={"/compliance"}
              className="w-[95%] 2xl:w-[70%] mx-auto mt-5 nun font-semibold text-[#3076B1] text-[12px] flex gap-2"
            >
              <FaArrowLeft className="text-[14px] self-center text-[#7A7B7C]" />
              Back to Accounts Introduction
            </Link>

            <div className="grid lg:grid-cols-2 gap-10 mt-5 w-[95%] 2xl:w-[70%] mx-auto mb-5">
              <div className="bg-white dark:bg-black dark:border-[1px] p-[15px] rounded-[7px] shadow-sm">
                <div>
                  <div className="relative" ref={locationDropdownRef1}>
                    <button
                      onClick={toggleDropdown1}
                      className="flex uppercase ml-auto gap-1 cursor-pointer bg-[#FEF1514D] rounded-[4px] py-[4px] px-[10px] nun font-semibold text-[12px] text-[#121F2C] dark:text-white"
                    >
                      {selectedLocation1}
                      <IoIosArrowDown className="text-[14px] self-center" />
                    </button>

                    {isOpen1 && (
                      <div className="absolute right-0 mt-2 border-[1px] border-[#E2E2E2] bg-white dark:bg-black w-[230px] shadow-sm">
                        {locations.map((location) => (
                          <div
                            key={location}
                            className=" flex gap-2 border-b-[1px] border-[#F5F5F5] p-2 cursor-pointer"
                            onClick={() => handleLocationChange1(location)}
                          >
                            <input
                              type="radio"
                              checked={selectedLocation1 === location}
                              readOnly
                            />
                            <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] self-center">
                              {location}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="nun font-semibold text-[#121F2C] dark:text-white text-[18px] mt-5">
                    Accounts Introduction
                  </p>
                  <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] mt-1">
                    State law dealing with deposit accounts takes two forms.
                    Statutes that govern how certain deposits work and what
                    contract terms are and are not enforceable; and basic
                    contract law which covers the contract existing between the
                    credit union and its depositors. In general, a credit union
                    may accept shares and deposits from members on terms and
                    conditions agreed upon by both parties. Credit unions must
                    take into consideration numerous laws and regulations
                    regarding the opening, maintaining, and closing of deposit
                    accounts.
                  </p>

                  <p className="nun font-semibold text-[#121F2C] dark:text-white text-[18px] mt-8">
                    Summary
                  </p>
                  <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-3">
                    Establishing Membership
                  </p>
                  <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-1">
                    A credit union may choose the form of application to be used
                    to establish membership in a credit union just as it chooses
                    the form of account agreement. The instrument most commonly
                    used is a membership agreement. It generally provides for:
                  </p>
                  <li className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-3">
                    Confirmation of the applicant’s eligibility for membership
                  </li>
                  <li className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-3">
                    Personal and identifying information, to include
                  </li>
                  <li className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-3">
                    Back-up withholding certification
                  </li>
                  <li className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-3">
                    Signatures
                  </li>

                  <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-5">
                    The credit union must verify the identity of each person who
                    will be a party to the account, including joint owners. The
                    verification procedures may include either documentary
                    or non-documentary methods, or a combination of both.
                    Non-documentary verification can include comparing
                    information provided against a credit report, check
                    database, or references among other forms. For additional
                    information about verification procedures visit the topics,{" "}
                    <span className="text-[#3076B1]">
                      Customer Identification Program 
                    </span>
                    and{" "}
                    <span className="text-[#3076B1]">
                      Member Due Diligence.
                    </span>
                  </p>

                  <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-5">
                    Each person accepted into membership must make and maintain
                    a minimum deposit equal to the par value of a share. The
                    shares may be held by the member in various forms of
                    ownership and in any type of account (e.g., a share draft
                    account)
                  </p>

                  <p className="nun font-semibold text-[#121F2C] dark:text-white text-[18px] mt-8">
                    Account Agreements
                  </p>

                  <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-1">
                    A well-written account agreement describes the relationship
                    between the credit union and its member and establishes the
                    rights, duties and responsibilities of the parties in a
                    clear, concise and easy-to-understand manner. Sound business
                    practice dictates that all credit unions should either have
                    written account agreements or written credit union rules and
                    regulations to govern every type of account offered.
                  </p>

                  <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-5">
                    An account agreement is not a “fill-in-the-blank, one size
                    fits all,” form. Many subject areas addressed in an
                    agreement involve issues which are handled differently by
                    different credit unions. Moreover, many provisions contained
                    in an agreement may be optional and specific in nature. Each
                    provision set forth should be carefully considered to
                    determine whether it is consistent with each particular
                    credit union’s policies, practices and procedures.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-black dark:border-[1px] p-[15px] rounded-[7px] shadow-sm">
                <div>
                  <div className="relative" ref={locationDropdownRef2}>
                    <button
                      onClick={toggleDropdown2}
                      className="flex uppercase ml-auto gap-1 cursor-pointer bg-[#FEF1514D] rounded-[4px] py-[4px] px-[10px] nun font-semibold text-[12px] text-[#121F2C] dark:text-white"
                    >
                      {selectedLocation2}
                      <IoIosArrowDown className="text-[14px] self-center" />
                    </button>

                    {isOpen2 && (
                      <div className="absolute right-0 mt-2 border-[1px] border-[#E2E2E2] bg-white dark:bg-black w-[230px] shadow-sm">
                        {locations.map((location) => (
                          <div
                            key={location}
                            className=" flex gap-2 border-b-[1px] border-[#F5F5F5] p-2 cursor-pointer"
                            onClick={() => handleLocationChange2(location)}
                          >
                            <input
                              type="radio"
                              checked={selectedLocation2 === location}
                              readOnly
                            />
                            <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] self-center">
                              {location}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="nun font-semibold text-[#121F2C] dark:text-white text-[18px] mt-5">
                    Accounts Introduction
                  </p>
                  <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] mt-1">
                    State law dealing with deposit accounts takes two forms.
                    Statutes that govern how certain deposits work and what
                    contract terms are and are not enforceable; and basic
                    contract law which covers the contract existing between the
                    credit union and its depositors. In general, a credit union
                    may accept shares and deposits from members on terms and
                    conditions agreed upon by both parties. Credit unions must
                    take into consideration numerous laws and regulations
                    regarding the opening, maintaining, and closing of deposit
                    accounts.
                  </p>

                  <p className="nun font-semibold text-[#121F2C] dark:text-white text-[18px] mt-8">
                    Summary
                  </p>
                  <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-3">
                    Establishing Membership
                  </p>
                  <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-1">
                    A credit union may choose the form of application to be used
                    to establish membership in a credit union just as it chooses
                    the form of account agreement. The instrument most commonly
                    used is a membership agreement. It generally provides for:
                  </p>
                  <li className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-3">
                    Confirmation of the applicant’s eligibility for membership
                  </li>
                  <li className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-3">
                    Personal and identifying information, to include
                  </li>
                  <li className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-3">
                    Back-up withholding certification
                  </li>
                  <li className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-3">
                    Signatures
                  </li>

                  <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-5">
                    The credit union must verify the identity of each person who
                    will be a party to the account, including joint owners. The
                    verification procedures may include either documentary
                    or non-documentary methods, or a combination of both.
                    Non-documentary verification can include comparing
                    information provided against a credit report, check
                    database, or references among other forms. For additional
                    information about verification procedures visit the topics,{" "}
                    <span className="text-[#3076B1]">
                      Customer Identification Program 
                    </span>
                    and{" "}
                    <span className="text-[#3076B1]">
                      Member Due Diligence.
                    </span>
                  </p>

                  <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-5">
                    Each person accepted into membership must make and maintain
                    a minimum deposit equal to the par value of a share. The
                    shares may be held by the member in various forms of
                    ownership and in any type of account (e.g., a share draft
                    account)
                  </p>

                  <p className="nun font-semibold text-[#121F2C] dark:text-white text-[18px] mt-8">
                    Account Agreements
                  </p>

                  <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-1">
                    A well-written account agreement describes the relationship
                    between the credit union and its member and establishes the
                    rights, duties and responsibilities of the parties in a
                    clear, concise and easy-to-understand manner. Sound business
                    practice dictates that all credit unions should either have
                    written account agreements or written credit union rules and
                    regulations to govern every type of account offered.
                  </p>

                  <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-5">
                    An account agreement is not a “fill-in-the-blank, one size
                    fits all,” form. Many subject areas addressed in an
                    agreement involve issues which are handled differently by
                    different credit unions. Moreover, many provisions contained
                    in an agreement may be optional and specific in nature. Each
                    provision set forth should be carefully considered to
                    determine whether it is consistent with each particular
                    credit union’s policies, practices and procedures.
                  </p>
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
