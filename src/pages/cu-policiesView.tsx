import React, { useEffect, useRef, useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Recoder from "./component/cu-policy/recorder";
import Content from "./component/manageUser/shareContent";
import Footer from "./component/footer/footer";
import Modal from "./component/cu-policy/PrintModal";
import DelectCu from "./component/cu-policy/delect";
import Assign from "./component/manageAssignment/assign";
import SelectContent from "./component/cu-policy/selectContent";
import SelectContent2 from "./component/cu-policy/selectContent2";
import SelectContent3 from "./component/cu-policy/selectContent3";
import Bot from "../../public/assets/png/bot.png";
import axios from "axios";
import { toast } from "sonner";

export default function CuPoliciesView() {
  const [moreDropdownVisible, setMoreDropdownVisible] =
    useState<boolean>(false);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const moreDropdownRef = useRef<HTMLDivElement | null>(null);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active
  const [cuPolicyDetails, setCuPolicyDetails] = useState([]);

  // const [isMounted, setIsMounted] = useState(false);




  //fetching the policy details
  useEffect(() => {
    // setIsMounted(true);
    const fetchingCuPoliceDetails = async () => {
      const token = localStorage.getItem("token")
      const policieId = "786"
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/policy-details/${policieId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          },
        );
        setCuPolicyDetails(response.data.data)
      } catch (error: any) {
        toast.error(error.response.data.message, {
          position: "top-center",
          style: {
            color: "red",
          },
        });
      }
    };
    fetchingCuPoliceDetails();
  }, []);

  // if (!isMounted) {
  //   return null;
  // }



  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMoreDropdown = () => {
    setMoreDropdownVisible(!moreDropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
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
<div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
      <div className="bg-[#AD7EFB] p-[5px] -mt-1 md:-mt-[12px] xl:-mt-[10px] fixed w-full"></div>

      <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
        <Link
          href={"/cu-policy"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          CU PolicyPro
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link
          href={"/compliance"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          Model Policies
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link
          href={"/compliance"}
          className="nun font-normal text-[#121F2C] dark:text-white  text-[14px]"
        >
          Chapter 1000: Administrative
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link
          href={"/compliance"}
          className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
        >
          Policy 1100: Credit Union Culture
        </Link>
      </div>

      <div className="relative mt-8 md:mt-5 md:w-[95%] 2xl:w-[70%] mx-auto">
        <div className="pl-3 md:pl-0 flex justify-between md:justify-end">
          <Link
            href={"/cu-policies"}
            className="  nun font-semibold text-[#121212] dark:text-white text-[14px] flex md:hidden gap-2"
          >
            <Image
              src={"/assets/svg/arrow-left.svg"}
              alt=""
              width={24}
              height={24}
            />
            <p className="self-center dark:text-white">Back</p>
          </Link>

          <div className="flex gap-3 md:gap-5 px-3 md:px-0">
            <Link href={"/editPolicy"} className="self-center">
              <Image
                src={"/assets/svg/bx-edit.svg"}
                alt=""
                title="Edit"
                width={24}
                height={24}
                className="cursor-pointer hidden md:block"
              />
            </Link>
            <Link href={"/revision"} className="self-center mt-1 md:mt-0">
              <Image
                src={"/assets/svg/bx-history.svg"}
                alt=""
                title="Revision"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </Link>
            <div className="self-center">
              <Content />
            </div>
            <Assign />
            <div className="self-center hidden md:block">
              <Recoder />
            </div>
            <div
              className="relative self-center hidden md:block"
              ref={dropdownRef}
            >
              <Image
                src={"/assets/svg/bx-folder.svg"}
                alt=""
                title="Move"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={toggleDropdown}
              />
              {dropdownVisible && (
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-black dark:border-[1px] shadow-lg z-0 p-3">
                  <p className="nun font-normal text-[14px] dark:text-white">Move to:</p>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      className="border-[1px] border-[#D9D9D9]  rounded-[5px] py-[8px] px-[15px] w-full"
                    />
                    <Image
                      src={"/assets/svg/bi_search.svg"}
                      alt=""
                      width={16}
                      height={16}
                      className="absolute top-3 right-3"
                    />
                  </div>
                  <div className="border-b-[1px] border-[#CCCCCC] pb-2">
                    <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-3">
                      Chapter 1000: Administrative
                    </p>
                    <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-5 mt-2">
                      Policy 1100: Credit Union Culture
                    </p>
                    <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-2">
                      1100.10: Field of Membership
                    </p>
                    <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-2 ">
                      1100.11: Board of Director Duties
                    </p>
                  </div>
                  <div className="pb-2">
                    <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-3">
                      Chapter 2000: Operations
                    </p>
                    <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-2 mt-2">
                      Policy 2100: Bank Secrecy Act/Anti-Money Laund..
                    </p>
                  </div>
                  <div className="flex gap-2 justify-end mt-3">
                    <button className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px]">
                      Cancel
                    </button>
                    <button className="font-semibold text-white bg-[#3076B1] dark:bg-[#4A9FE7] px-4 text-[14px] rounded-[6px] p-[10px] uppercase">
                      move
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Image
              src={"/assets/svg/print.svg"}
              alt=""
              title="Print"
              width={35}
              height={40}
              className="block md:hidden self-center mt-1"
            />
            <div className="hidden md:block">
              <Modal />
            </div>
            <DelectCu />

            <div
              className="relative self-center hidden md:block"
              ref={moreDropdownRef}
            >
              <Image
                src={"/assets/svg/bx-more.svg"}
                alt=""
                title="Option"
                height={24}
                width={24}
                className="cursor-pointer"
                onClick={toggleMoreDropdown}
              />

              {moreDropdownVisible && (
                <div className="absolute right-0 mt-2 w-[330px] bg-white dark:bg-black dark:border-[1px] shadow-lg z-0">
                  <SelectContent />
                  <SelectContent2 />
                  <SelectContent3 />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-black md:rounded-[4px] p-4 mb-10 mt-3 md:mt-0">
          <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16 px] border-b-[1px] border-[#D8D8D8] pb-2">
            Organization (1100.10)
          </p>
          <p className="nun font-normal text-[#8F8E8E] dark:text-white text-[12px] border-b-[1px] border-[#F5F5F5] py-2">
            Last Revised on: September 6, 2023
          </p>

          <p className="nun font-semibold text-[12px] text-[#121F2C] dark:text-white mt-5">
            General Statement
          </p>
          <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-1">
            [[CUname]] (Credit Union) is managed by a Board of Directors
            assisted by committees as set forth in the Credit Unions bylaws and
            within governance documents (as applicable). 
          </p>
          <p className="nun font-semibold text-[12px] text-[#121F2C] dark:text-white mt-5">
            Guidelines:
          </p>

          <div>
            <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
              1. BOARD OF DIRECTORS
            </p>
            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              a.
              {/* <p>
                The Board of Directors consists of an odd number of directors,
                at least five in number, who are elected by the Credit Union
                members.
              </p> */}
            </p>

            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              b.
              {/* <p>
                The Board is ultimately responsible for all the operations of
                the Credit Union. 
              </p> */}
            </p>

            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              c.
              {/* <p>
                The Board shall elect from their number the Board Officers
                specified in the bylaws, and also shall elect from their number
                a financial officer
              </p> */}
            </p>

            <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
              2. GOVERN2NCE.
            </p>

            <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white  mt-2">
              The Board of Directors is responsible for the general direction
              and control of the affairs of the Credit Union.
            </p>

            <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
              3. COMMITTEES
            </p>
            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              a.
              {/* <p>
                The Board shall appoint the following committees to assist it:
              </p> */}
            </p>

            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              i.
              {/* <p>
                A Supervisory Committee consisting of not less than three nor
                more than five members.
              </p> */}
            </p>

            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              ii.
              {/* <p>
                Where the Bylaws so provide, an Executive Committee of not less
                than three directors.
              </p> */}
            </p>

            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-8">
              b.
              {/* <p>
                The Board is ultimately responsible for all the operations of
                the Credit Union. 
              </p> */}
            </p>
            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              i.
              {/* <p>
                Where the bylaws so provide, a Credit Committee consisting of an
                odd number of members of the Credit Union, but which shall not
                include more than one loan officer.
              </p> */}
            </p>

            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              ii.
              {/* <p>An Asset/Liability Management Committee.</p> */}
            </p>

            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              iii.
              {/* <p>An Investment Committee.</p> */}
            </p>

            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              iv.
              {/* <p>A Nominating Committee</p> */}
            </p>

            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              v.
              {/* <p>A Nominating Committee</p> */}
            </p>

            <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
              BY LAWS AND MEETING MINUTES
            </p>
            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              a.
              {/* <p>
                The Credit Union will keep a current set of bylaws and minutes
                of the meetings of the Board and its committees.
              </p> */}
            </p>

            <p className="flex gap-2 nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              b.
              {/* <p>
                The Board is ultimately responsible for all the operations of
                the Credit Union. 
              </p> */}
            </p>

            <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
              5. QUALIFICATIONS.
            </p>

            <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              Any member over the age of 18 may serve as a director or committee
              member subject to the approval of the Credit Unions examiners and
              bonding company. However, no person shall serve as a director,
              officer, committee member, or employee of the Credit Union who has
              been convicted of any criminal offense involving dishonesty or
              breach of trust.
            </p>

            <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
              6. ELECTIONS.
            </p>

            <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              The Credit Union will follow the election procedures in accordance
              with its bylaws as follows:[[1200-1]]
            </p>

            <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
              7. RECORD RETENTION.
            </p>

            <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white mt-2">
              See Policy 10001, Table 1 for retention schedule of corporate
              records.
            </p>

            <p className="nun font-normal text-[#7A7B7C] text-[11px] border-t-[1px] border-[#CCCCCC] py-4 mt-4">
              This content is a resources to support Policy 1100 - Credit Union
              Culture and Governance.
              <br /> Organization is recommended.
            </p>
          </div>
        </div>

        <Link href={"/cu-policies"} className="fixed bottom-0 w-full  z-20">
          <button className=" block  md:hidden font-semibold text-[14px] text-white bg-[#3076B1] w-full md:rounded-[6px] py-[14px] px-[10px] uppercase">
            import this policy
          </button>
        </Link>
      </div>
      <Footer />
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
          className="fixed right-5 bottom-5 w-[82px] h-[87px] cursor-pointer"
        />
      </Link>
    </div>
    </>
  );
}
