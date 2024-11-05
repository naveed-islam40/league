import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Extended data array
const data = [
  {
    id: 1,
    title: "FAQs: Deceased Member Issues: FAQs",
    description:
      "A credit union accrues dividends quarterly and declares them the first day of the next quarter (e.g., the dividend period is Oct. 1-Dec. 31 and dividends are declared on Jan. 1). How would dividends and APYE be disclosed on its monthly statements?",
    imageSrc: "/assets/svg/pdf.svg",
    buttonText: "FAQs",
    buttonColor: "#03E09E",
  },
  {
    id: 2,
    title: "Deceased Member Issues",
    description:
      "In the event of a member's death, a credit union must determine the proper disposition of the remaining funds in the member's account(s). A joint account owner, family member, executor, administrator, or other person will most likely make a claim for funds in the decedent's accounts.",
    imageSrc: "/assets/svg/pdf.svg",
    buttonText: "Accounts",
    buttonColor: "#AD7EFB",
  },
  {
    id: 3,
    title: "Deceased Member Issues: Checklist",
    description:
      "(To be in substantial compliance, all answers should be Yes unless they are not applicable.) Proof of Death: 1. Does the credit union obtain a certified copy of the death certificate of a deceased member?",
    imageSrc: "/assets/svg/link.svg",
    buttonText: "Compliance Topics",
    buttonColor: "#FFDF36",
  },
  {
    id: 4,
    title: "FAQs: Membership Eligibility: FAQs",
    description:
      "In the event of a member's death, a credit union must determine the proper disposition of the remaining funds in the member's account(s). A joint account owner, family member, executor, administrator, or other person will most likely make a claim for funds in the decedent's accounts.",
    imageSrc: "/assets/svg/link.svg",
    buttonText: "Publishing",
    buttonColor: "#AD7EFB",
  },
  {
    id: 5,
    title: "Fair Debt Collection Practices Act",
    description:
      "The Fair Debt Collection Practices Act (FDCPA) is a federal law that was enacted in 1977 to curb abusive debt collection activity by some debt collectors. The law became effective on March 20, 1978.",
    imageSrc: "/assets/svg/docs.svg",
    buttonText: "Model Policies",
    buttonColor: "#AD7EFB",
    isDisabled: true, // This indicates if the item is disabled
  },
  {
    id: 6,
    title: "FAQs: Account Types and Ownership: FAQs",
    description:
      "One risk that is never warranted is providing legal or tax advice to members. Opening a deposit account involves establishing a legal relationship between the member and the credit union. The member’s inquiry about avoiding probate by establishing joint ownership clearly goes beyond the credit union staff’s area of expertise.",
    imageSrc: "/assets/svg/link.svg",
    buttonText: "Resources",
    buttonColor: "#03E09E",
  },
  // Add more objects as needed
];

export default function Member() {
  const [visibleItems, setVisibleItems] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLockClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // Function to load more items (add 2 more items)
  const loadMoreItems = () => {
    setVisibleItems((prevCount: any) => prevCount + 2);
  };

  return (
    <>
      <div className="bg-white dark:bg-black dark:border-[1px] dark:border-white rounded-[7px] shadow-sm p-4 mt-10">
        <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px] md:text-[18px]">
          Results for <span className="font-semibold">“Deceased Member”</span>{" "}
        </p>
        <p className="nun font-normal text-[12px] text-[#121F2C] dark:text-white border-b-[1px] border-[#F5F5F5] pb-2">
          {data.length} results found
        </p>

        {/* Filter Section */}
        <div className="border-b-[1px] border-[#F5F5F5] py-4">
          <div className="grid grid-cols-2 sm:flex gap-5">
            {["All", "InfoSight", "CU Policy Pro", "RecoveryPro"].map(
              (filter, index) => (
                <div key={index} className="flex gap-2">
                  <input type="checkbox" className="self-center" />
                  <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                    {filter}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Dynamic Data Rendering */}

        {data.slice(0, visibleItems).map((item, index) => (
          <div
            key={item.id}
            className={`border-b-[1px] border-[#F5F5F5] py-4 ${
              item.isDisabled
                ? " bg-[#F5F5F5] dark:bg-black opacity-40 p-2 cursor-pointer"
                : ""
            }`}
            onClick={() => {
              if (item.isDisabled) {
                handleLockClick();
              }
            }}
          >
            <div className="flex justify-between">
              <div className="md:flex gap-2 w-full md:w-auto">
                <div className="flex gap-2">
                  <Image src={item.imageSrc} alt="" width={24} height={24} />
                  <p className="self-center nun font-semibold text-[14px] md:text-[16px] text-[#3076B1]">
                    {item.title}
                  </p>
                </div>
                <Link href={"/compliance"}>
                  <button
                    className="mt-3 md:mt-0 ml-auto block uppercase nun font-normal text-[11px] text-white py-[4px] px-[10px] rounded-[4px]"
                    style={{ backgroundColor: item.buttonColor }}
                  >
                    {item.buttonText}
                  </button>
                </Link>
              </div>
              {index === 4 && (
                <Image
                  onClick={handleLockClick}
                  src={"/assets/svg/lock.svg"}
                  alt="Lock"
                  width={20}
                  height={20}
                  className="-mt-10 md:mt-0 cursor-pointer"
                />
              )}
            </div>
            <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-2">
              {item.description}
            </p>
          </div>
        ))}

        {/* Modal */}
        {isModalOpen && (
          <>
            <div className="justify-center   items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative my-6 mx-auto w-[80%] md:w-[45%] lg:w-[35%] xl::w-[25%]">
                {/*content*/}
                <div className=" rounded-lg  relative flex flex-col w-full bg-white dark:bg-black  outline-none focus:outline-none">
                  <button
                    className="absolute top-3 right-4 text-black dark:text-white"
                    onClick={handleCloseModal}
                  >
                    &#10005;
                  </button>
                  <div className=" p-4 mt-10 mb-4">
                    <li className="font-normal text-[#121F2C] dark:text-white  text-[14px] self-center">
                      Client is not subscribed - learn more about subscribing to
                      this product
                    </li>
                    <li className="font-normal text-[#121F2C] dark:text-white text-[14px] self-center mt-3">
                      Insufficient User Rights - Contact system admin
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black "></div>
          </>
        )}
      </div>
      {/* Load More Button */}
      {visibleItems < data.length && (
        <button
          onClick={loadMoreItems}
          className="nun font-normal text-[14px] dark:text-white p-[10px] border-[1px] border-[#D5D5D5] mt-5 mb-10 block mx-auto"
        >
          Load More Results
        </button>
      )}
    </>
  );
}
