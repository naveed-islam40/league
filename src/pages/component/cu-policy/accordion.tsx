import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

interface AccordionItems {
  title: string;
  content: string[];
  number: any;
}

const accordionDatas: AccordionItems[] = [
  {
    title: "Policy 1100: Credit Union Culture and Governance",
    content: [
      "1100.10: Organization",
      "1100.11: Field of Membership",
      "1100.13: Compensation, Reimbursement, and Indemnification",
      "1100.14: Bond and Insurance Coverage",
      "1100.15: Education and Volunteer Training Guidelines",
      "1100.16: Strategic Planning",
      "1100.17: Audits",
      "1100.18: Legal Counsel",
      "1100.19: Code of Ethics and Diversity",
    ],
    number: 8,
  },
  {
    title: "Policy 1200: Regulatory Compliance",
    content: [
      "1100.10: Organization",
      "1100.11: Field of Membership",
      "1100.13: Compensation, Reimbursement, and Indemnification",
      "1100.14: Bond and Insurance Coverage",
      "1100.15: Education and Volunteer Training Guidelines",
      "1100.16: Strategic Planning",
      "1100.17: Audits",
      "1100.18: Legal Counsel",
      "1100.19: Code of Ethics and Diversity",
    ],
    number: 4,
  },
  {
    title: "Policy 1230: Enterprise Risk Management",
    content: [
      "1100.10: Organization",
      "1100.11: Field of Membership",
      "1100.13: Compensation, Reimbursement, and Indemnification",
      "1100.14: Bond and Insurance Coverage",
      "1100.15: Education and Volunteer Training Guidelines",
      "1100.16: Strategic Planning",
      "1100.17: Audits",
      "1100.18: Legal Counsel",
      "1100.19: Code of Ethics and Diversity",
    ],
    number: 5,
  },
  {
    title: "Policy 1300: Staffing and Human Resources",
    content: [
      "1100.10: Organization",
      "1100.11: Field of Membership",
      "1100.13: Compensation, Reimbursement, and Indemnification",
      "1100.14: Bond and Insurance Coverage",
      "1100.15: Education and Volunteer Training Guidelines",
      "1100.16: Strategic Planning",
      "1100.17: Audits",
      "1100.18: Legal Counsel",
      "1100.19: Code of Ethics and Diversity",
    ],
    number: 10,
  },
  {
    title: "Policy 1400: Covid-19 Vaccination, Testing and Face overing Policy",
    content: [
      "1100.10: Organization",
      "1100.11: Field of Membership",
      "1100.13: Compensation, Reimbursement, and Indemnification",
      "1100.14: Bond and Insurance Coverage",
      "1100.15: Education and Volunteer Training Guidelines",
      "1100.16: Strategic Planning",
      "1100.17: Audits",
      "1100.18: Legal Counsel",
      "1100.19: Code of Ethics and Diversity",
    ],
    number: 8,
  },
  {
    title: "Policy 1500: Employee Use of Social Media",
    content: [
      "1100.10: Organization",
      "1100.11: Field of Membership",
      "1100.13: Compensation, Reimbursement, and Indemnification",
      "1100.14: Bond and Insurance Coverage",
      "1100.15: Education and Volunteer Training Guidelines",
      "1100.16: Strategic Planning",
      "1100.17: Audits",
      "1100.18: Legal Counsel",
      "1100.19: Code of Ethics and Diversity",
    ],
    number: 2,
  },
  {
    title: "Policy 1600: Credit Union Use of Social Media",
    content: [
      "1100.10: Organization",
      "1100.11: Field of Membership",
      "1100.13: Compensation, Reimbursement, and Indemnification",
      "1100.14: Bond and Insurance Coverage",
      "1100.15: Education and Volunteer Training Guidelines",
      "1100.16: Strategic Planning",
      "1100.17: Audits",
      "1100.18: Legal Counsel",
      "1100.19: Code of Ethics and Diversity",
    ],
    number: 1,
  },
  {
    title: "Policy 1700: Privacy and Confidential Information",
    content: [
      "1100.10: Organization",
      "1100.11: Field of Membership",
      "1100.13: Compensation, Reimbursement, and Indemnification",
      "1100.14: Bond and Insurance Coverage",
      "1100.15: Education and Volunteer Training Guidelines",
      "1100.16: Strategic Planning",
      "1100.17: Audits",
      "1100.18: Legal Counsel",
      "1100.19: Code of Ethics and Diversity",
    ],
    number: 7,
  },
  {
    title: "Policy 1800: Conflict of Interest",
    content: [
      "1100.10: Organization",
      "1100.11: Field of Membership",
      "1100.13: Compensation, Reimbursement, and Indemnification",
      "1100.14: Bond and Insurance Coverage",
      "1100.15: Education and Volunteer Training Guidelines",
      "1100.16: Strategic Planning",
      "1100.17: Audits",
      "1100.18: Legal Counsel",
      "1100.19: Code of Ethics and Diversity",
    ],
    number: 6,
  },
];

export default function Accordion({ handleBack }: { handleBack: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [expandAll, setExpandAll] = useState<boolean>(false);

  const toggleAccordion = (index: number) => {
    if (expandAll) {
      setExpandAll(false);
      setOpenIndex(null);
    } else if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
    if (expandAll) {
      setOpenIndex(null);
    } else {
      setOpenIndex(0);
    }
  };

  return (
    <>
      <div className="xl:flex justify-between">
        <div className="flex md:hidden justify-between mx-3 mt-5">
          <div
            onClick={handleBack}
            className="self-center  nun font-semibold text-[#121212] dark:text-white   text-[14px] flex gap-2"
          >
            <Image
              src={"/assets/svg/arrow-left.svg"}
              alt=""
              width={24}
              height={24}
            />
            Back
          </div>
          <button
            onClick={toggleExpandAll}
            className="dark:bg-[#212121] font-semibold text-[14px]  text-[#7A7B7C] border-[1px] border-[#7A7B7C]  rounded-[6px] py-[12px] w-[30%] "
          >
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </div>

        <div className="hidden md:flex gap-3 lg:w-[50%] mx-3 md:mx-0 self-center mb-3">
          <Link href={"/model-content"} className="">
            <button className="font-semibold text-[14px] text-white bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] p-[14px]  uppercase">
              import policies
            </button>
          </Link>
          <button
            onClick={toggleExpandAll}
            className="dark:bg-[#212121] font-normal text-[12px] text-[#7A7B7C] dark:text-white border-[1px] border-[#7A7B7C] bg-white rounded-[6px] py-[14px] w-[20%] lg:w-[35%] xl:w-[25%]"
          >
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </div>

        <div className="hidden md:flex xl:block justify-end mr-4 xl:mr-8 mt-5 xl:mt-0">
          <Link href={"/cu-policy"}>
            <button className="nun font-medium text-[#121212] dark:text-white text-[14px]  dark:bg-[#212121] bg-white py-[10px] xl:py-[20px] px-[25px]">
              CU PolicyPro
            </button>
          </Link>

          <Link href={"/recover-policy"}>
            <button className="nun font-medium text-[#121212] dark:text-white text-[14px] dark:bg-[#3c3c3c] bg-[#E5E5E5]  py-[10px] xl:py-[20px] px-[25px]">
              RecoveryPro
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-3 md:mt-0">
        {accordionDatas.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black md:dark:border-[1px] border-b-[1px] md:border-b-0 border-[#f2f2f2] md:rounded-[4px] p-4 md:mb-3"
          >
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <p className="nun font-semibold text-[#3076B1] text-[14px] self-center">
                {item.title}
              </p>

              <div className="flex gap-5">
                <button className="nun font-semibold text-[#487F18] text-[12px] bg-[#487F1812] rounded-[4px] py-[6px] px-[8px] w-[32px] h-[32px]">
                  {item.number}
                </button>
                {expandAll || openIndex === index ? (
                  <Image
                    src={"/assets/svg/up.svg"}
                    alt=""
                    width={14}
                    height={14}
                    className=" filter dark:invert"

                  />
                ) : (
                  <Image
                    src={"/assets/svg/down.svg"}
                    alt=""
                    width={14}
                    height={14}
                    className=" filter dark:invert"

                  />
                )}
              </div>
            </div>

            {(expandAll || openIndex === index) && (
              <div className="mt-4">
                {item.content.map((contentItem, i) => (
                  <Link key={i} href={"/organization"}>
                    <div className="py-3 flex justify-between border-t-[1px] border-[#f2f2f2]">
                      <p className="nun font-normal  text-[#3076B1] text-[14px] ">
                        {contentItem}
                      </p>
                      <Image
                        src={"/assets/svg/right.svg"}
                        alt=""
                        width={8}
                        height={8}
                    className=" filter dark:invert"

                      />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="font-normal dark:text-white text-[14px] border-[1px] border-[#D5D5D5] p-[10px] mt-8 block mx-auto">
        Load More
      </button>
    </>
  );
}
