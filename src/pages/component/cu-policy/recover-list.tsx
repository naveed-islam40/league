import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CuEdit from "./edit";
import Recoder from "./recorder";
import Link from "next/link";
import DelectCu from "./delect";

interface Item {
  title: string;
  showDraft: boolean;
}

const initialItems: Item[] = [
  { title: "1100.10: Organization", showDraft: false },
  { title: "1100.11: Field of Membership ", showDraft: false },
  {
    title: "1100.12: Board of Director's Duties",
    showDraft: true,
  },
  {
    title: "1100.13: Compensation, Reimbursement, and Indemnification",
    showDraft: false,
  },
  { title: "1100.14: Bond and Insurance Coverage", showDraft: false },
  {
    title: "1100.15: Education and Volunteer Training Guidelines",
    showDraft: false,
  },
  { title: "1100.16: Strategic Planning", showDraft: false },
  { title: "1100.17: This is a  Audits", showDraft: false },
  { title: "1100.18: Legal Counsel", showDraft: false },
  { title: "1100.19: Code of Ethics and Diversity", showDraft: false },
];

export default function RecoverList() {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [accordionOpen, setAccordionOpen] = useState(true); // Accordion state
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const [showActions, setShowActions] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [items, setItems] = useState(initialItems);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const toggleAccordion = () => {
    setAccordionOpen((prevState) => !prevState); // Toggle accordion state
  };

  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
    if (draggingIndex === null) return;

    if (draggingIndex !== index) {
      const newItems = [...items];
      const draggedItem = newItems[draggingIndex];

      newItems.splice(draggingIndex, 1);
      newItems.splice(index, 0, draggedItem);

      setItems(newItems);
      setDraggingIndex(index);
    }
  };

  const handleDrop = () => {
    setDraggingIndex(null);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left detected
      setShowActions(true);
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right detected, hide actions
      setShowActions(false);
    }
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
      <div className="bg-white dark:bg-black py-[15px] md:p-[15px] md:rounded-[7px] shadow-sm mt-5 overflow-hidden md:overflow-auto">
        <div className="flex justify-between">
          <p className="nun font-semibold text-[14px] text-[#3076B1] px-3 md:px-0 ">
            Chapter 1000: Administrative
          </p>

          <Image
            src={
              accordionOpen
                ? "/assets/svg/arrow-up.svg"
                : "/assets/svg/arrow-down.svg"
            }
            alt=""
            width={20}
            height={20}
            className="self-center cursor-pointer filter dark:invert mr-4 md:md-0"
            onClick={toggleAccordion} // Toggle accordion on click
          />
        </div>

        {accordionOpen && (
          <div>
            <div className="group hidden md:flex justify-between md:hover:bg-[#eeeeee] dark:hover:bg-[#242424] border-y-[1px] border-[#f2f2f2] pl-3  md:px-3 md:py-4 mt-5">
              <p className=" nun font-medium text-[14px] text-[#3076B1] py-4 md:py-0">
                1000: Incident Management
              </p>

              <div className=" bg-[#eeeeee] md:bg-transparent  flex gap-5 md:invisible md:group-hover:visible pt-4 md:pt-0 md:self-center pr-3 md:pr-0">
                <Link href={"/recoverEditPolicy"}>
                  <Image
                    src={"/assets/svg/bx-edit.svg"}
                    alt=""
                    title="Edit"
                    width={24}
                    height={24}
                    className="cursor-pointer hidden md:block "
                  />
                </Link>
                <CuEdit />

                <div className="hidden md:block">
                  <Recoder />
                </div>
                <div className="" ref={dropdownRef}>
                  <Image
                    src={"/assets/svg/bx-folder.svg"}
                    alt=""
                    title="Moving"
                    width={24}
                    height={24}
                    className="cursor-pointer "
                    onClick={toggleDropdown}
                  />
                  {dropdownVisible && (
                       <div className="absolute right-0 mt-2 w-[350px] bg-white dark:bg-black dark:border-[1px] shadow-lg z-0 p-3">
                       <p className="nun font-normal text-[14px] dark:text-white">
                         Move to:
                       </p>
                       <div className="relative mt-2">
                         <input
                           type="text"
                           className="border-[1px] border-[#D9D9D9] rounded-[5px] py-[8px] px-[15px] w-full"
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
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-5 mt-3">
                           Policy 1100: Credit Union Culture
                         </p>
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                           1100.10: Field of Membership
                         </p>
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                           1100.11: Board of Director Duties
                         </p>
                       </div>
                       <div className="pb-2">
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-3">
                           Chapter 2000: Operations
                         </p>
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-2 mt-3">
                           Policy 2100: Bank Secrecy Act/Anti-Money Laund..
                         </p>
                       </div>
                       <div className="flex gap-3 justify-end mt-3">
                         <button className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px]">
                           Cancel
                         </button>
                         <button className="font-semibold text-white bg-[#3076B1] dark:bg-[#4A9FE7] text-[14px] rounded-[6px] px-5 py-3 uppercase">
                           move
                         </button>
                       </div>
                     </div>
                  )}
                </div>

                <Link href={"/recovery-revision"}>
                  <Image
                    src={"/assets/svg/bx-history.svg"}
                    alt=""
                    title="Revision"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
                <DelectCu />
              </div>
            </div>
            <div
              className="group flex md:hidden justify-between md:hover:bg-[#eeeeee] border-y-[1px] border-[#f2f2f2] pl-3 md:px-3 md:py-4 mt-5"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <p className="nun font-medium text-[14px] text-[#3076B1] py-4 md:py-0">
                1000: Incident Management
              </p>

              {/* Mobile actions with slide animation */}
              <div
                className={`${
                  showActions ? "translate-x-0 flex" : "translate-x-full flex"
                } transform transition-transform duration-300 ease-in-out dark:bg-[#242424]  bg-[#eeeeee] md:bg-transparent gap-5 pt-4 md:pt-0 md:self-center pr-3 md:pr-0`}
              >
                <Link href={"/recoverEditPolicy"}>
                  <Image
                    src={"/assets/svg/bx-edit.svg"}
                    alt=""
                    title="Edit"
                    width={24}
                    height={24}
                    className="cursor-pointer hidden md:block"
                  />
                </Link>
                <CuEdit />

                <div className="hidden md:block">
                  <Recoder />
                </div>

                <div className="" ref={dropdownRef}>
                  <Image
                    src={"/assets/svg/bx-folder.svg"}
                    alt=""
                    title="Moving"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                    onClick={toggleDropdown}
                  />
                  {dropdownVisible && (
                     <div className="absolute right-0 mt-2 w-[350px] bg-white dark:bg-black dark:border-[1px] shadow-lg z-0 p-3">
                     <p className="nun font-normal text-[14px] dark:text-white">
                       Move to:
                     </p>
                     <div className="relative mt-2">
                       <input
                         type="text"
                         className="border-[1px] border-[#D9D9D9] rounded-[5px] py-[8px] px-[15px] w-full"
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
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-5 mt-3">
                         Policy 1100: Credit Union Culture
                       </p>
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                         1100.10: Field of Membership
                       </p>
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                         1100.11: Board of Director Duties
                       </p>
                     </div>
                     <div className="pb-2">
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-3">
                         Chapter 2000: Operations
                       </p>
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-2 mt-3">
                         Policy 2100: Bank Secrecy Act/Anti-Money Laund..
                       </p>
                     </div>
                     <div className="flex gap-3 justify-end mt-3">
                       <button className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px]">
                         Cancel
                       </button>
                       <button className="font-semibold text-white bg-[#3076B1] dark:bg-[#4A9FE7] text-[14px] rounded-[6px] px-5 py-3 uppercase">
                         move
                       </button>
                     </div>
                   </div>
                  )}
                </div>

                <Link href={"/recovery-revision"}>
                  <Image
                    src={"/assets/svg/bx-history.svg"}
                    alt=""
                    title="Revision"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
                <DelectCu />
              </div>
            </div>

            <div>
              {items.map((item, index) => (
                // <Link key={index} href={"/cu-bcpView"}>
                <div
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={handleDrop}
                  className={`flex justify-between group p-4 ${
                    draggingIndex === index
                      ? "bg-[#3076B1] text-white "
                      : "hover:bg-[#eeeeee] dark:hover:bg-[#242424] text-[#3076B1] "
                  } ${
                    index !== items.length - 1
                      ? "border-b-[1px] border-[#f2f2f2]"
                      : ""
                  }`}
                >
                  <Link href={"/cu-bcpView"}>
                    <div className="flex gap-3">
                      <Image
                        src={"/assets/svg/bx-ver.svg"}
                        alt=""
                        width={10}
                        height={16}
                        className="opacity-40 hidden md:block"
                      />
                      <p
                        className={`nun font-normal  text-[14px] self-center ${
                          draggingIndex === index
                            ? "text-white"
                            : "text-[#3076B1]"
                        }`}
                      >
                        {item.title}
                      </p>
                      {item.showDraft && (
                        <button className=" nun font-semibold text-[12px] text-white rounded-[5px] bg-[#FF9000] py-[5px] px-[15px]">
                          Draft
                        </button>
                      )}
                    </div>
                  </Link>

                  <div className="hidden md:flex gap-5 invisible group-hover:visible">
                    <Link href={"/editPolicy"}>
                      <Image
                        src={"/assets/svg/bx-edit.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="cursor-pointer hidden md:block"
                      />
                    </Link>
                    <CuEdit />

                    <Recoder />

                    <div className="relative" ref={dropdownRef}>
                      <Image
                        src={"/assets/svg/bx-folder.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="cursor-pointer"
                        onClick={toggleDropdown}
                      />
                      {dropdownVisible && (
                         <div className="absolute right-0 mt-2 w-[350px] bg-white dark:bg-black dark:border-[1px] shadow-lg z-0 p-3">
                         <p className="nun font-normal text-[14px] dark:text-white">
                           Move to:
                         </p>
                         <div className="relative mt-2">
                           <input
                             type="text"
                             className="border-[1px] border-[#D9D9D9] rounded-[5px] py-[8px] px-[15px] w-full"
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
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-5 mt-3">
                             Policy 1100: Credit Union Culture
                           </p>
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                             1100.10: Field of Membership
                           </p>
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                             1100.11: Board of Director Duties
                           </p>
                         </div>
                         <div className="pb-2">
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-3">
                             Chapter 2000: Operations
                           </p>
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-2 mt-3">
                             Policy 2100: Bank Secrecy Act/Anti-Money Laund..
                           </p>
                         </div>
                         <div className="flex gap-3 justify-end mt-3">
                           <button className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px]">
                             Cancel
                           </button>
                           <button className="font-semibold text-white bg-[#3076B1] dark:bg-[#4A9FE7] text-[14px] rounded-[6px] px-5 py-3 uppercase">
                             move
                           </button>
                         </div>
                       </div>
                      )}
                    </div>

                    <Link href={"/recovery-revision"}>
                      <Image
                        src={"/assets/svg/bx-history.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />
                    </Link>
                    <DelectCu />
                  </div>
                </div>
                // </Link>
              ))}
            </div>

            <div className="w-[98%] mx-auto cursor-pointer flex justify-center gap-2 border-[2px] border-[#CCCCCC] border-dashed bg-[#eeeeee] dark:bg-black p-3 rounded-[4px] mt-3">
              <Image
                src={"/assets/svg/plus.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="nun font-normal text-[#8F8F8F] text-[12px] self-center">
                Add New Content Item to “Credit Union Culture and Governance”
              </p>
            </div>

            <div className="w-[99%] mx-auto cursor-pointer flex justify-center gap-2 border-[2px] border-[#CCCCCC] border-dashed bg-[#eeeeee] dark:bg-black p-3 rounded-[4px] mt-3">
              <Image
                src={"/assets/svg/plus.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="nun font-normal text-[#8F8F8F] text-[12px] self-center">
                Add New Content Item to “Administrative”
              </p>
            </div>
            <div className="cursor-pointer  flex justify-center gap-2 border-[2px] border-[#CCCCCC] border-dashed bg-[#eeeeee] dark:bg-black p-3 rounded-[4px] mt-3">
              <Image
                src={"/assets/svg/plus.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="nun font-normal text-[#8F8F8F] text-[12px] self-center">
                Add New Chapter
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-black py-[15px] md:p-[15px] md:rounded-[7px] shadow-sm mt-5 overflow-hidden md:overflow-auto">
        <div className="flex justify-between">
          <p className="nun font-semibold text-[14px] text-[#3076B1] px-3 md:px-0 ">
            Chapter 1001: Administrative
          </p>

          <Image
            src={
              accordionOpen
                ? "/assets/svg/arrow-up.svg"
                : "/assets/svg/arrow-down.svg"
            }
            alt=""
            width={20}
            height={20}
            className="self-center cursor-pointer filter dark:invert mr-4 md:md-0"
            onClick={toggleAccordion} // Toggle accordion on click
          />
        </div>

        {accordionOpen && (
          <div>
            <div className="group hidden md:flex justify-between md:hover:bg-[#eeeeee] dark:hover:bg-[#242424] border-y-[1px] border-[#f2f2f2] pl-3  md:px-3 md:py-4 mt-5">
              <p className=" nun font-medium text-[14px] text-[#3076B1] py-4 md:py-0">
                1000: Incident Management
              </p>

              <div className=" bg-[#eeeeee] md:bg-transparent  flex gap-5 md:invisible md:group-hover:visible pt-4 md:pt-0 md:self-center pr-3 md:pr-0">
                <Link href={"/recoverEditPolicy"}>
                  <Image
                    src={"/assets/svg/bx-edit.svg"}
                    alt=""
                    title="Edit"
                    width={24}
                    height={24}
                    className="cursor-pointer hidden md:block "
                  />
                </Link>
                <CuEdit />

                <div className="hidden md:block">
                  <Recoder />
                </div>
                <div className="" ref={dropdownRef}>
                  <Image
                    src={"/assets/svg/bx-folder.svg"}
                    alt=""
                    title="Moving"
                    width={24}
                    height={24}
                    className="cursor-pointer "
                    onClick={toggleDropdown}
                  />
                  {dropdownVisible && (
                       <div className="absolute right-0 mt-2 w-[350px] bg-white dark:bg-black dark:border-[1px] shadow-lg z-0 p-3">
                       <p className="nun font-normal text-[14px] dark:text-white">
                         Move to:
                       </p>
                       <div className="relative mt-2">
                         <input
                           type="text"
                           className="border-[1px] border-[#D9D9D9] rounded-[5px] py-[8px] px-[15px] w-full"
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
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-5 mt-3">
                           Policy 1100: Credit Union Culture
                         </p>
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                           1100.10: Field of Membership
                         </p>
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                           1100.11: Board of Director Duties
                         </p>
                       </div>
                       <div className="pb-2">
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-3">
                           Chapter 2000: Operations
                         </p>
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-2 mt-3">
                           Policy 2100: Bank Secrecy Act/Anti-Money Laund..
                         </p>
                       </div>
                       <div className="flex gap-3 justify-end mt-3">
                         <button className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px]">
                           Cancel
                         </button>
                         <button className="font-semibold text-white bg-[#3076B1] dark:bg-[#4A9FE7] text-[14px] rounded-[6px] px-5 py-3 uppercase">
                           move
                         </button>
                       </div>
                     </div>
                  )}
                </div>

                <Link href={"/recovery-revision"}>
                  <Image
                    src={"/assets/svg/bx-history.svg"}
                    alt=""
                    title="Revision"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
                <DelectCu />
              </div>
            </div>
            <div
              className="group flex md:hidden justify-between md:hover:bg-[#eeeeee] border-y-[1px] border-[#f2f2f2] pl-3 md:px-3 md:py-4 mt-5"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <p className="nun font-medium text-[14px] text-[#3076B1] py-4 md:py-0">
                1000: Incident Management
              </p>

              {/* Mobile actions with slide animation */}
              <div
                className={`${
                  showActions ? "translate-x-0 flex" : "translate-x-full flex"
                } transform transition-transform duration-300 ease-in-out dark:bg-[#242424]  bg-[#eeeeee] md:bg-transparent gap-5 pt-4 md:pt-0 md:self-center pr-3 md:pr-0`}
              >
                <Link href={"/recoverEditPolicy"}>
                  <Image
                    src={"/assets/svg/bx-edit.svg"}
                    alt=""
                    title="Edit"
                    width={24}
                    height={24}
                    className="cursor-pointer hidden md:block"
                  />
                </Link>
                <CuEdit />

                <div className="hidden md:block">
                  <Recoder />
                </div>

                <div className="" ref={dropdownRef}>
                  <Image
                    src={"/assets/svg/bx-folder.svg"}
                    alt=""
                    title="Moving"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                    onClick={toggleDropdown}
                  />
                  {dropdownVisible && (
                     <div className="absolute right-0 mt-2 w-[350px] bg-white dark:bg-black dark:border-[1px] shadow-lg z-0 p-3">
                     <p className="nun font-normal text-[14px] dark:text-white">
                       Move to:
                     </p>
                     <div className="relative mt-2">
                       <input
                         type="text"
                         className="border-[1px] border-[#D9D9D9] rounded-[5px] py-[8px] px-[15px] w-full"
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
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-5 mt-3">
                         Policy 1100: Credit Union Culture
                       </p>
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                         1100.10: Field of Membership
                       </p>
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                         1100.11: Board of Director Duties
                       </p>
                     </div>
                     <div className="pb-2">
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-3">
                         Chapter 2000: Operations
                       </p>
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-2 mt-3">
                         Policy 2100: Bank Secrecy Act/Anti-Money Laund..
                       </p>
                     </div>
                     <div className="flex gap-3 justify-end mt-3">
                       <button className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px]">
                         Cancel
                       </button>
                       <button className="font-semibold text-white bg-[#3076B1] dark:bg-[#4A9FE7] text-[14px] rounded-[6px] px-5 py-3 uppercase">
                         move
                       </button>
                     </div>
                   </div>
                  )}
                </div>

                <Link href={"/recovery-revision"}>
                  <Image
                    src={"/assets/svg/bx-history.svg"}
                    alt=""
                    title="Revision"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
                <DelectCu />
              </div>
            </div>

            <div>
              {items.map((item, index) => (
                // <Link key={index} href={"/cu-bcpView"}>
                <div
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={handleDrop}
                  className={`flex justify-between group p-4 ${
                    draggingIndex === index
                      ? "bg-[#3076B1] text-white "
                      : "hover:bg-[#eeeeee] dark:hover:bg-[#242424] text-[#3076B1] "
                  } ${
                    index !== items.length - 1
                      ? "border-b-[1px] border-[#f2f2f2]"
                      : ""
                  }`}
                >
                  <Link href={"/cu-bcpView"}>
                    <div className="flex gap-3">
                      <Image
                        src={"/assets/svg/bx-ver.svg"}
                        alt=""
                        width={10}
                        height={16}
                        className="opacity-40 hidden md:block"
                      />
                      <p
                        className={`nun font-normal  text-[14px] self-center ${
                          draggingIndex === index
                            ? "text-white"
                            : "text-[#3076B1]"
                        }`}
                      >
                        {item.title}
                      </p>
                      {item.showDraft && (
                        <button className=" nun font-semibold text-[12px] text-white rounded-[5px] bg-[#FF9000] py-[5px] px-[15px]">
                          Draft
                        </button>
                      )}
                    </div>
                  </Link>

                  <div className="hidden md:flex gap-5 invisible group-hover:visible">
                    <Link href={"/editPolicy"}>
                      <Image
                        src={"/assets/svg/bx-edit.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="cursor-pointer hidden md:block"
                      />
                    </Link>
                    <CuEdit />

                    <Recoder />

                    <div className="relative" ref={dropdownRef}>
                      <Image
                        src={"/assets/svg/bx-folder.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="cursor-pointer"
                        onClick={toggleDropdown}
                      />
                      {dropdownVisible && (
                         <div className="absolute right-0 mt-2 w-[350px] bg-white dark:bg-black dark:border-[1px] shadow-lg z-0 p-3">
                         <p className="nun font-normal text-[14px] dark:text-white">
                           Move to:
                         </p>
                         <div className="relative mt-2">
                           <input
                             type="text"
                             className="border-[1px] border-[#D9D9D9] rounded-[5px] py-[8px] px-[15px] w-full"
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
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-5 mt-3">
                             Policy 1100: Credit Union Culture
                           </p>
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                             1100.10: Field of Membership
                           </p>
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                             1100.11: Board of Director Duties
                           </p>
                         </div>
                         <div className="pb-2">
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-3">
                             Chapter 2000: Operations
                           </p>
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-2 mt-3">
                             Policy 2100: Bank Secrecy Act/Anti-Money Laund..
                           </p>
                         </div>
                         <div className="flex gap-3 justify-end mt-3">
                           <button className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px]">
                             Cancel
                           </button>
                           <button className="font-semibold text-white bg-[#3076B1] dark:bg-[#4A9FE7] text-[14px] rounded-[6px] px-5 py-3 uppercase">
                             move
                           </button>
                         </div>
                       </div>
                      )}
                    </div>

                    <Link href={"/recovery-revision"}>
                      <Image
                        src={"/assets/svg/bx-history.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />
                    </Link>
                    <DelectCu />
                  </div>
                </div>
                // </Link>
              ))}
            </div>

            <div className="w-[98%] mx-auto cursor-pointer flex justify-center gap-2 border-[2px] border-[#CCCCCC] border-dashed bg-[#eeeeee] dark:bg-black p-3 rounded-[4px] mt-3">
              <Image
                src={"/assets/svg/plus.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="nun font-normal text-[#8F8F8F] text-[12px] self-center">
                Add New Content Item to “Credit Union Culture and Governance”
              </p>
            </div>

            <div className="w-[99%] mx-auto cursor-pointer flex justify-center gap-2 border-[2px] border-[#CCCCCC] border-dashed bg-[#eeeeee] dark:bg-black p-3 rounded-[4px] mt-3">
              <Image
                src={"/assets/svg/plus.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="nun font-normal text-[#8F8F8F] text-[12px] self-center">
                Add New Content Item to “Administrative”
              </p>
            </div>
            <div className="cursor-pointer  flex justify-center gap-2 border-[2px] border-[#CCCCCC] border-dashed bg-[#eeeeee] dark:bg-black p-3 rounded-[4px] mt-3">
              <Image
                src={"/assets/svg/plus.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="nun font-normal text-[#8F8F8F] text-[12px] self-center">
                Add New Chapter
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-black py-[15px] md:p-[15px] md:rounded-[7px] shadow-sm mt-5 overflow-hidden md:overflow-auto">
        <div className="flex justify-between">
          <p className="nun font-semibold text-[14px] text-[#3076B1] px-3 md:px-0 ">
            Chapter 1002: Administrative
          </p>

          <Image
            src={
              accordionOpen
                ? "/assets/svg/arrow-up.svg"
                : "/assets/svg/arrow-down.svg"
            }
            alt=""
            width={20}
            height={20}
            className="self-center cursor-pointer filter dark:invert mr-4 md:md-0"
            onClick={toggleAccordion} // Toggle accordion on click
          />
        </div>

        {accordionOpen && (
          <div>
            <div className="group hidden md:flex justify-between md:hover:bg-[#eeeeee] dark:hover:bg-[#242424] border-y-[1px] border-[#f2f2f2] pl-3  md:px-3 md:py-4 mt-5">
              <p className=" nun font-medium text-[14px] text-[#3076B1] py-4 md:py-0">
                1000: Incident Management
              </p>

              <div className=" bg-[#eeeeee] md:bg-transparent  flex gap-5 md:invisible md:group-hover:visible pt-4 md:pt-0 md:self-center pr-3 md:pr-0">
                <Link href={"/recoverEditPolicy"}>
                  <Image
                    src={"/assets/svg/bx-edit.svg"}
                    alt=""
                    title="Edit"
                    width={24}
                    height={24}
                    className="cursor-pointer hidden md:block "
                  />
                </Link>
                <CuEdit />

                <div className="hidden md:block">
                  <Recoder />
                </div>
                <div className="" ref={dropdownRef}>
                  <Image
                    src={"/assets/svg/bx-folder.svg"}
                    alt=""
                    title="Moving"
                    width={24}
                    height={24}
                    className="cursor-pointer "
                    onClick={toggleDropdown}
                  />
                  {dropdownVisible && (
                       <div className="absolute right-0 mt-2 w-[350px] bg-white dark:bg-black dark:border-[1px] shadow-lg z-0 p-3">
                       <p className="nun font-normal text-[14px] dark:text-white">
                         Move to:
                       </p>
                       <div className="relative mt-2">
                         <input
                           type="text"
                           className="border-[1px] border-[#D9D9D9] rounded-[5px] py-[8px] px-[15px] w-full"
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
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-5 mt-3">
                           Policy 1100: Credit Union Culture
                         </p>
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                           1100.10: Field of Membership
                         </p>
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                           1100.11: Board of Director Duties
                         </p>
                       </div>
                       <div className="pb-2">
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-3">
                           Chapter 2000: Operations
                         </p>
                         <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-2 mt-3">
                           Policy 2100: Bank Secrecy Act/Anti-Money Laund..
                         </p>
                       </div>
                       <div className="flex gap-3 justify-end mt-3">
                         <button className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px]">
                           Cancel
                         </button>
                         <button className="font-semibold text-white bg-[#3076B1] dark:bg-[#4A9FE7] text-[14px] rounded-[6px] px-5 py-3 uppercase">
                           move
                         </button>
                       </div>
                     </div>
                  )}
                </div>

                <Link href={"/recovery-revision"}>
                  <Image
                    src={"/assets/svg/bx-history.svg"}
                    alt=""
                    title="Revision"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
                <DelectCu />
              </div>
            </div>
            <div
              className="group flex md:hidden justify-between md:hover:bg-[#eeeeee] border-y-[1px] border-[#f2f2f2] pl-3 md:px-3 md:py-4 mt-5"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <p className="nun font-medium text-[14px] text-[#3076B1] py-4 md:py-0">
                1000: Incident Management
              </p>

              {/* Mobile actions with slide animation */}
              <div
                className={`${
                  showActions ? "translate-x-0 flex" : "translate-x-full flex"
                } transform transition-transform duration-300 ease-in-out dark:bg-[#242424]  bg-[#eeeeee] md:bg-transparent gap-5 pt-4 md:pt-0 md:self-center pr-3 md:pr-0`}
              >
                <Link href={"/recoverEditPolicy"}>
                  <Image
                    src={"/assets/svg/bx-edit.svg"}
                    alt=""
                    title="Edit"
                    width={24}
                    height={24}
                    className="cursor-pointer hidden md:block"
                  />
                </Link>
                <CuEdit />

                <div className="hidden md:block">
                  <Recoder />
                </div>

                <div className="" ref={dropdownRef}>
                  <Image
                    src={"/assets/svg/bx-folder.svg"}
                    alt=""
                    title="Moving"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                    onClick={toggleDropdown}
                  />
                  {dropdownVisible && (
                     <div className="absolute right-0 mt-2 w-[350px] bg-white dark:bg-black dark:border-[1px] shadow-lg z-0 p-3">
                     <p className="nun font-normal text-[14px] dark:text-white">
                       Move to:
                     </p>
                     <div className="relative mt-2">
                       <input
                         type="text"
                         className="border-[1px] border-[#D9D9D9] rounded-[5px] py-[8px] px-[15px] w-full"
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
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-5 mt-3">
                         Policy 1100: Credit Union Culture
                       </p>
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                         1100.10: Field of Membership
                       </p>
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                         1100.11: Board of Director Duties
                       </p>
                     </div>
                     <div className="pb-2">
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-3">
                         Chapter 2000: Operations
                       </p>
                       <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-2 mt-3">
                         Policy 2100: Bank Secrecy Act/Anti-Money Laund..
                       </p>
                     </div>
                     <div className="flex gap-3 justify-end mt-3">
                       <button className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px]">
                         Cancel
                       </button>
                       <button className="font-semibold text-white bg-[#3076B1] dark:bg-[#4A9FE7] text-[14px] rounded-[6px] px-5 py-3 uppercase">
                         move
                       </button>
                     </div>
                   </div>
                  )}
                </div>

                <Link href={"/recovery-revision"}>
                  <Image
                    src={"/assets/svg/bx-history.svg"}
                    alt=""
                    title="Revision"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
                <DelectCu />
              </div>
            </div>

            <div>
              {items.map((item, index) => (
                // <Link key={index} href={"/cu-bcpView"}>
                <div
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={handleDrop}
                  className={`flex justify-between group p-4 ${
                    draggingIndex === index
                      ? "bg-[#3076B1] text-white "
                      : "hover:bg-[#eeeeee] dark:hover:bg-[#242424] text-[#3076B1] "
                  } ${
                    index !== items.length - 1
                      ? "border-b-[1px] border-[#f2f2f2]"
                      : ""
                  }`}
                >
                  <Link href={"/cu-bcpView"}>
                    <div className="flex gap-3">
                      <Image
                        src={"/assets/svg/bx-ver.svg"}
                        alt=""
                        width={10}
                        height={16}
                        className="opacity-40 hidden md:block"
                      />
                      <p
                        className={`nun font-normal  text-[14px] self-center ${
                          draggingIndex === index
                            ? "text-white"
                            : "text-[#3076B1]"
                        }`}
                      >
                        {item.title}
                      </p>
                      {item.showDraft && (
                        <button className=" nun font-semibold text-[12px] text-white rounded-[5px] bg-[#FF9000] py-[5px] px-[15px]">
                          Draft
                        </button>
                      )}
                    </div>
                  </Link>

                  <div className="hidden md:flex gap-5 invisible group-hover:visible">
                    <Link href={"/editPolicy"}>
                      <Image
                        src={"/assets/svg/bx-edit.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="cursor-pointer hidden md:block"
                      />
                    </Link>
                    <CuEdit />

                    <Recoder />

                    <div className="relative" ref={dropdownRef}>
                      <Image
                        src={"/assets/svg/bx-folder.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="cursor-pointer"
                        onClick={toggleDropdown}
                      />
                      {dropdownVisible && (
                         <div className="absolute right-0 mt-2 w-[350px] bg-white dark:bg-black dark:border-[1px] shadow-lg z-0 p-3">
                         <p className="nun font-normal text-[14px] dark:text-white">
                           Move to:
                         </p>
                         <div className="relative mt-2">
                           <input
                             type="text"
                             className="border-[1px] border-[#D9D9D9] rounded-[5px] py-[8px] px-[15px] w-full"
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
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-5 mt-3">
                             Policy 1100: Credit Union Culture
                           </p>
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                             1100.10: Field of Membership
                           </p>
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-8 mt-3">
                             1100.11: Board of Director Duties
                           </p>
                         </div>
                         <div className="pb-2">
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-3">
                             Chapter 2000: Operations
                           </p>
                           <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] ml-2 mt-3">
                             Policy 2100: Bank Secrecy Act/Anti-Money Laund..
                           </p>
                         </div>
                         <div className="flex gap-3 justify-end mt-3">
                           <button className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px]">
                             Cancel
                           </button>
                           <button className="font-semibold text-white bg-[#3076B1] dark:bg-[#4A9FE7] text-[14px] rounded-[6px] px-5 py-3 uppercase">
                             move
                           </button>
                         </div>
                       </div>
                      )}
                    </div>

                    <Link href={"/recovery-revision"}>
                      <Image
                        src={"/assets/svg/bx-history.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />
                    </Link>
                    <DelectCu />
                  </div>
                </div>
                // </Link>
              ))}
            </div>

            <div className="w-[98%] mx-auto cursor-pointer flex justify-center gap-2 border-[2px] border-[#CCCCCC] border-dashed bg-[#eeeeee] dark:bg-black p-3 rounded-[4px] mt-3">
              <Image
                src={"/assets/svg/plus.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="nun font-normal text-[#8F8F8F] text-[12px] self-center">
                Add New Content Item to “Credit Union Culture and Governance”
              </p>
            </div>

            <div className="w-[99%] mx-auto cursor-pointer flex justify-center gap-2 border-[2px] border-[#CCCCCC] border-dashed bg-[#eeeeee] dark:bg-black p-3 rounded-[4px] mt-3">
              <Image
                src={"/assets/svg/plus.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="nun font-normal text-[#8F8F8F] text-[12px] self-center">
                Add New Content Item to “Administrative”
              </p>
            </div>
            <div className="cursor-pointer  flex justify-center gap-2 border-[2px] border-[#CCCCCC] border-dashed bg-[#eeeeee] dark:bg-black p-3 rounded-[4px] mt-3">
              <Image
                src={"/assets/svg/plus.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="nun font-normal text-[#8F8F8F] text-[12px] self-center">
                Add New Chapter
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
