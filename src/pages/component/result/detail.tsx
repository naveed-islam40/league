import React, { useState } from "react";
import SearchFelid from "../home/searchFelid";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import Cross from "../../../../public/assets/svg/cross.svg";

export default function Detail() {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white dark:bg-black dark:border-[1px] dark:border-white rounded-[7px] shadow-sm p-4 mt-5 lg:mt-16">
        <SearchFelid />
        <p className="mt-5 block xl:hidden nun font-semibold text-[#121F2C] text-[14px] self-center">
            Related keywords:
          </p>
        <div className="flex gap-2 xl:gap-5 mt-5">
          <p className="hidden xl:block nun font-semibold text-[#121F2C] dark:text-white text-[14px] self-center">
            Related keywords:
          </p>

          <button className="hidden md:block nun font-normal text-[11px] text-[#121F2C] bg-[#F5F5F5] py-[5px] px-[6px] shadow-sm rounded-[4px]">
            Compliance
          </button>
          <button className="hidden md:block nun font-normal text-[11px] text-[#121F2C] bg-[#F5F5F5] py-[5px] px-[6px] shadow-sm rounded-[4px]">
            Estate Administration
          </button>
          <button className="hidden md:block nun font-normal text-[11px] text-[#121F2C] bg-[#F5F5F5] py-[5px] px-[6px] shadow-sm rounded-[4px]">
            CU Probate Compliance
          </button>
          <button className="hidden md:block nun font-normal text-[11px] text-[#121F2C] bg-[#F5F5F5] py-[5px] px-[6px] shadow-sm rounded-[4px]">
            CU Beneficiary Verification
          </button>
          <button className="hidden md:block nun font-normal text-[11px] text-[#121F2C] bg-[#F5F5F5] py-[5px] px-[6px] shadow-sm rounded-[4px]">
            Legacy Account Management
          </button>

          <div className="grid md:hidden grid-cols-2 gap-5">
          <button className="nun font-normal text-[11px] text-[#121F2C] bg-[#F5F5F5] py-[5px] px-[6px] shadow-sm rounded-[4px]">
            Compliance
          </button>
          <button className="nun font-normal text-[11px] text-[#121F2C] bg-[#F5F5F5] py-[5px] px-[6px] shadow-sm rounded-[4px]">
            Estate Administration
          </button>
          <button className="nun font-normal text-[11px] text-[#121F2C] bg-[#F5F5F5] py-[5px] px-[6px] shadow-sm rounded-[4px]">
            CU Probate Compliance
          </button>
          <button className="nun font-normal text-[11px] text-[#121F2C] bg-[#F5F5F5] py-[5px] px-[6px] shadow-sm rounded-[4px]">
            CU Beneficiary Verification
          </button>
          <button className="nun font-normal text-[11px] text-[#121F2C] bg-[#F5F5F5] py-[5px] px-[6px] shadow-sm rounded-[4px]">
            Legacy Account Management
          </button>
          </div>
        </div>
        <div className="border-b-[1px] border-[#F5F5F5]">
      {/* Accordion Header */}
      <div className="flex justify-end gap-2 pt-5 pb-2 border-b-[1px] border-[#F5F5F5] cursor-pointer" onClick={toggleAccordion}>
        <p className="font-normal text-[14px]">{isOpen ? 'Collapse' : 'Expand'}</p>
        {isOpen ? <IoIosArrowUp className="text-[15px] self-center text-black dark:text-white" /> : <IoIosArrowDown className="text-[15px] self-center text-black dark:text-white" />}
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="py-4">
          <p className="nun font-normal text-[14px] text-black dark:text-white">
            The phrase Deceased Member typically refers to a person who was
            previously a member of a group, organization, or community but has
            passed away. Its commonly used in contexts such as Membership
            Organizations: Referring to individuals who were once part of the
            organization but are no longer due to their death[1]. Financial
            Institutions: Pertaining to clients or account holders who have
            passed away. Legal and Estate Matters: Describing individuals[2] who
            were involved in legal matters or estate planning but are now
            deceased[3]. This term is straightforward and respectful in
            acknowledging the status of someone who was once actively involved
            but is no longer living.
          </p>
          <div className="flex gap-5 mt-4">
            <Image
              src={"/assets/svg/copy.svg"}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
            />
            <Image
              src={"/assets/svg/ref.svg"}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
            />
          </div>
        </div>
      )}
    </div>

        <div className="md:flex justify-between pt-2">
          <p className="self-center nun font-normal text-[11px] italic text-black dark:text-white">
            InfoSight360AI is an experimental tool powered by AI. If you want to
            report anything,{" "}
            <span 
              onClick={() => setShowModal(true)}
            
            className="text-[#3076B1] cursor-pointer">click here</span>
          </p>
          <div className="flex justify-end gap-3 mt-5 md:mt-0">
            <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
              Was this helpful?
            </p>
            <Image
              src={"/assets/svg/like.svg"}
              alt=""
              width={20}
              height={20}
              className={`cursor-pointer w-[15px] h-[15px] md:w-[20px] md:h-[20px] ${
                isClicked ? "filter-active" : ""
              }`}
              onClick={handleClick}
              style={{
                filter: isClicked ? "invert(28%) sepia(73%) saturate(2454%) hue-rotate(179deg) brightness(92%) contrast(98%)" : "none"
              }}
            />
            <Image
              onClick={() => setShowModal(true)}
              src={"/assets/svg/dislike.svg"}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
            />
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[90%] md:w-[60%] xl:w-[40%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-black  outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex justify-between">
                    <p className="self-center nun font-bold text-[#14142B] dark:text-white text-[16px] md:text-[20px]">
                      We Value Your Feedback!
                    </p>
                    <Image
                      onClick={() => setShowModal(false)}
                      className="cursor-pointer"
                      src={Cross}
                      alt=""
                    />
                  </div>
                  <p className="nun font-normal text-[#14142B] dark:text-white text-[12px] md:text-[15px] mt-3">
                    Please share your thoughts to help us improve our content.
                  </p>
                  <textarea className="h-[200px] border-[1px] border-[#D9D9D9] bg-white dark:bg-black p-2 w-full rounded-[5px] mt-2"></textarea>

                  <div className="flex items-center justify-end  mt-5">
                    <button
                      className="text-[#3076B1] background-transparent font-semibold  px-6 py-2 text-[12px] md:text-[14px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Skip
                    </button>
                    <button
                      className="bg-[#3076B1] hover:bg-[#18459D] text-white active:bg-emerald-600 font-semibold uppercase text-[12px] md:text-sm px-4 py-4 rounded-[6px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
