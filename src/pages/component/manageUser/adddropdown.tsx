import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function AddDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const openRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
    if (openRef.current && !openRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  const handleItemClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-[35px] self-center relative" ref={dropdownRef}>
        <Image
          onClick={toggleDropdown}
          src={"/assets/svg/setting.svg"}
          alt=""
          title="Setting"
          width={18}
          height={18}
          className="cursor-pointer"
        />
        {isOpen && (
          <div className="group absolute right-0 mt-2 w-[210px] bg-white dark:bg-black dark:border-[1px] dark:border-white shadow-lg z-0">
            <div>
              <div className="border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] dark:hover:text-black font-normal text-[12px] flex gap-2 px-2 py-3 text-[#121F2C] dark:text-white cursor-pointer">
                <input type="checkbox" className="mt-[3px]" />
                <p className="mt-1"> First Name</p>
              </div>
              <div className="border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] dark:hover:text-black font-normal text-[12px] flex gap-2 px-2 py-3 text-[#121F2C] dark:text-white cursor-pointer">
                <input type="checkbox" className="mt-[3px]" />
                <p className="mt-1"> Last Name</p>
              </div>
              <div className="border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] dark:hover:text-black font-normal text-[12px] flex gap-2 px-2 py-3 text-[#121F2C] dark:text-white cursor-pointer">
                <input type="checkbox" className="mt-[3px]" />
                <p className="mt-1"> Email </p>
              </div>
              <div className="border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] dark:hover:text-black font-normal text-[12px] flex gap-2 px-2 py-3 text-[#121F2C] dark:text-white cursor-pointer">
                <input type="checkbox" className="mt-[3px]" />
                <p className="mt-1"> Status </p>
              </div>
              <div className="border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] dark:hover:text-black font-normal text-[12px] flex gap-2 px-2 py-3 text-[#121F2C] dark:text-white cursor-pointer">
                <input type="checkbox" className="mt-[3px]" />
                <p className="mt-1"> User Type </p>
              </div>
              <div className="border-b-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] dark:hover:text-black font-normal text-[12px] flex gap-2 px-2 py-3 text-[#121F2C] dark:text-white cursor-pointer">
                <input type="checkbox" className="mt-[3px]" />
                <p className="mt-1"> Product Access </p>
              </div>
            </div>
            <div className=" relative border-b-[1px] border- dark:hover:text-black[#f2f2f2]  font-normal text-[12px]  px-2 py-3 text-[#121F2C] dark:text-white cursor-pointer">
              <div onClick={toggleOpen} className="flex gap-2">
                <p className="mt-1"> Add new column </p>
                <IoIosArrowDown className="text-[14px] self-center ml-auto cursor-pointer" />
              </div>
              {open && (
                <div className="absolute -top-40 -left-20 z-30 w-[210px] bg-white dark:bg-black dark:border-[1px] dark:border-white shadow-sm">
                  <div
                    onClick={handleItemClick}
                    className="border-b-[1px] border-[#f2f2f2] hover:b dark:hover:text-blackg-[#f2f2f2] font-normal text-[12px] px-2 py-3 text-[#121F2C] dark:text-white cursor-pointer"
                  >
                    <p>User ID</p>
                  </div>
                  <div
                    onClick={handleItemClick}
                    className="border-b-[1px] border-[#f2f2f2] hover:b dark:hover:text-blackg-[#f2f2f2] font-normal text-[12px] px-2 py-3 text-[#121F2C] dark:text-white cursor-pointer"
                  >
                    <p>Last Sign in</p>
                  </div>
                  <div
                    onClick={handleItemClick}
                    className="border-b-[1px] border-[#f2f2f2] hover:b dark:hover:text-blackg-[#f2f2f2] font-normal text-[12px] px-2 py-3 text-[#121F2C] dark:text-white cursor-pointer"
                  >
                    <p>User Role</p>
                  </div>
                  <div
                    onClick={handleItemClick}
                    className="border-b-[1px] border-[#f2f2f2] hover:b dark:hover:text-blackg-[#f2f2f2] font-normal text-[12px] px-2 py-3 text-[#121F2C] dark:text-white cursor-pointer"
                  >
                    <p>Mobile Phone</p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-3 flex gap-3 justify-end">
              <button className="nun font-normal text-[#3076B1] text-[12px]">
                <p className="mt-1"> Reset </p>
              </button>
              <button className="nun font-bold text-white bg-[#3076B1] hover:bg-[#18459D] text-[14px] py-[6px] px-[15px] rounded-[5px]">
                <p className="mt-1"> APPLY </p>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
