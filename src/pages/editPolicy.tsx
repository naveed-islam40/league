import React, { FormEvent, useEffect, useRef, useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Detail from "./component/editPolicy/detail";
import Footer from "./component/footer/footer";
import FinalModel from "./component/editPolicy/final-model";
import Print from "./component/editPolicy/print";
import Preview from "./component/editPolicy/drawer";
import Bot from "../../public/assets/png/bot.png";
import axios from "axios";
import { toast } from "sonner";

export default function EditPolicy() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [print, setPrint] = useState(false);
  const printRef = useRef<HTMLDivElement | null>(null);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchActive, setSearchActive] = useState(false); 

  const [formData, setFormData] = useState({
    subDomain: "league360",
    userId: "1",
    location: "california",
    policy: "pp",
    policyId: "1100",
    name: "folder/folder/file",
    number: "",
    AssociatedModelContent: "",
    ContentLabel: "",
    RevisedDate: "",
    ReviewedDate: "",
    BoardApprovedDate: "",
    policyDetails: "",
    ModelContentInfo: "",
    ModelContentUpdate: "",
    AuditingNote: "",
    NotificationUsers: ["user1", "user2", "user3"],
    KeyFieldInfo: [
      { keyWord: "1130-1", value: "", Description: "" },
      { keyWord: "1120-1", value: "", Description: "" }
    ],
    saveAs: "Draft"
  });

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const togglePrint = () => {
    setPrint(!print);
  };

  const closeDropdown = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
    if (printRef.current && !printRef.current.contains(event.target)) {
      setPrint(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const addPolicyDraft = async() => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/policy-draft`, formData)
      console.log(res)
      if(res.status == 200){
        toast.error("Policy added to draft", {
          position: "top-center",
          style: {
            color: "green",
          },
        });
      }
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-center",
        style: {
          color: "red",
        },
      });
    }
  }
  const editPolicyDraft = async() => {
    const policyId="786";
    try {
      const res = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/editapi/${policyId}`, formData)
      console.log(res)
      if(res.status == 200){
        toast.error("Policy edit successfully", {
          position: "top-center",
          style: {
            color: "green",
          },
        });
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message, {
        position: "top-center",
        style: {
          color: "red",
        },
      });
    }
  }

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
          href={"/cu-policy"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          CU Policies
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link href={"/"} className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
          Chapter 1000: Administrative
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link href={"/"} className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
          Policy 1100: Credit Union Culture
        </Link>
        
      </div>

      <div className="w-[95%] 2xl:w-[70%] mx-auto mb-10 mt-8 md:mt-0">
        <Link
          href={"/cu-policies"}
          className=" mt-5 nun font-semibold text-[#3076B1] text-[12px] flex gap-2"
        >
          <FaArrowLeft className="text-[14px] self-center text-[#7A7B7C]" />
          Back to Policy Listing
        </Link>

        <div className="xl:flex justify-between mt-5">
          <div className="self-center">
            <p className="font-semibold text-[12px] dark:text-white">
              Last Updated By: 
              <span className="font-normal">Todd Tillman </span> | Date:{" "}
              <span className="font-normal"> June 6, 2024 5:49:48 AM </span> |
              Action: <span className="font-normal"> Imported </span> | Added to
              Manual: <span className="font-normal"> June 14, 2024 </span> |
              Current Status:{" "}
              <span className="font-normal"> Final, June 14, 2024 </span>
            </p>
          </div>

          <div className="flex justify-end gap-3 mt-5 xl:mt-0">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex gap-3 uppercase font-semibold text-[14px] text-white bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] px-4 py-[12px]"
              >
                Save as
                <Image
                  src="/assets/svg/caret.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="self-center"
                />
              </button>
              {isOpen && (
                <div className="absolute w-[150px] bg-white dark:bg-black mt-1 border-[1px] border-[#f2f2f2]">
                  <p className="font-normal text-[#121F2C] dark:text-white dark:hover:text-black text-[12px] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-[10px] cursor-pointer" onClick={addPolicyDraft}>
                    Draft Version
                  </p>
                  <FinalModel />
                </div>
              )}
            </div>

            <Preview />

            <Link href={"/revision"}>
              <div className="bg-white dark:bg-black  cursor-pointer py-2 px-3 h-full border-[1px] border-[#D6D8E7] dark:border-transparent rounded-[6px]">
                <Image
                  src={"/assets/svg/bx-history.svg"}
                  alt=""
                  title="History"
                  width={24}
                  height={24}
                  className="self-center"
                />
              </div>
            </Link>
            <div
              onClick={togglePrint}
              ref={printRef}
              className="hidden md:block relative bg-white dark:bg-black cursor-pointer py-2 px-3 border-[1px] border-[#D6D8E7] dark:border-transparent rounded-[6px]"
            >
              <Print />
            </div>
          </div>
        </div>
        <Detail />

        <div className="flex justify-end gap-3">
          <p className="font-semibold text-[14px] text-[#3076B1] dark:text-[#4A9FE7] self-center">
            Cancel
          </p>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex gap-3 uppercase font-semibold text-[14px] text-white bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] px-4 py-[12px]"
            >
              Save as
              <Image
                src="/assets/svg/caret.svg"
                alt=""
                width={16}
                height={16}
                className="self-center"
              />
            </button>
            {isOpen && (
              <div className="absolute w-[150px] bg-white dark:bg-black mt-1 border-[1px] border-[#f2f2f2]">
                <p className="font-normal text-[#121F2C] dark:text-white dark:hover:text-black text-[12px] border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] p-[10px] cursor-pointer">
                  Draft Version
                </p>
                <FinalModel handleClick={editPolicyDraft} />
              </div>
            )}
          </div>

          <Preview />
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
