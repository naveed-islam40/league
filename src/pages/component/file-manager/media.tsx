import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const medias = [
  {
    title: "CU Administration",
    subtitle: "5 items",
    icon: "/assets/png/log.png",
  },
  {
    title: "New Policy",
    subtitle: "6/23/2024, 1:16 AM",
    icon: "/assets/png/log2.png",
  },
  {
    title: "Revised Policy",
    subtitle: "6/23/2024, 1:22 AM",
    icon: "/assets/png/log3.png",
  },
];

export default function Media() {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
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
       <div className="grid grid-cols-4 gap-5 lg:gap-10 my-10 w-[90%] xl:w-[50%] mx-auto xl:mr-0 xl:ml-10">

        {medias.map((item, index) => (
          <div key={index} className="group">
            <div className="relative  cursor-pointer rounded-[10px]">
              
              <Image
                src={item.icon}
                alt={item.title}
                width={148}
                height={111}
                className="mx-auto rounded-[10px]"
              />
              <div className="px-3 absolute top-2 w-full invisible group-hover:visible flex justify-between">
                  <input type="checkbox" className="bg-white" />
                  <div className="relative" ref={dropdownRef}>
                    <Image
                      src="/assets/svg/more.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="cursor-pointer"
                      onClick={toggleDropdown}
                    />
                    {isOpen && (
                      <div className="w-[150px] absolute z-10 bg-white dark:bg-black border-[1px] border-[#E2E2E2] shadow-sm mt-2">
                        <div className="flex gap-2 border-b-[1px] border-[#f2f2f2s] hover:bg-[#f2f2f2] p-2">
                          <Image
                            src={"/assets/svg/pen.svg"}
                            alt=""
                            className=""
                            width={16}
                            height={16}
                          />
                          <p className="font-normal text-[#121F2C] dark:text-white text-[12px]">
                            Rename
                          </p>
                        </div>
                        <div className="flex gap-2 border-b-[1px] border-[#f2f2f2s] hover:bg-[#f2f2f2] p-2">
                          <Image
                            src={"/assets/svg/locks.svg"}
                            alt=""
                            className=""
                            width={16}
                            height={16}
                          />
                          <p className="font-normal text-[#121F2C] dark:text-white text-[12px]">
                            Secure
                          </p>
                        </div>
                        <div className="flex gap-2 border-b-[1px] border-[#f2f2f2s] hover:bg-[#f2f2f2] p-2">
                          <Image
                            src={"/assets/svg/bx-dup.svg"}
                            alt=""
                            className=""
                            width={16}
                            height={16}
                          />
                          <p className="font-normal text-[#121F2C] dark:text-white text-[12px]">
                            Duplicate
                          </p>
                        </div>
                        <div className="flex gap-2 border-b-[1px] border-[#f2f2f2s] hover:bg-[#f2f2f2] p-2">
                          <Image
                            src={"/assets/svg/folderM.svg"}
                            alt=""
                            className=""
                            width={16}
                            height={16}
                          />
                          <p className="font-normal text-[#121F2C] dark:text-white text-[12px]">
                            Move
                          </p>
                        </div>
                        <div className="flex gap-2 border-b-[1px] border-[#f2f2f2s] hover:bg-[#f2f2f2] p-2">
                          <Image
                            src={"/assets/svg/trash.svg"}
                            alt=""
                            className=""
                            width={16}
                            height={16}
                          />
                          <p className="font-normal text-[#FF0033] text-[12px]">
                            Delete Selected
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
            </div>
            <p className="nun font-normal text-[10px] text-[#4E4B66] dark:text-white mt-1 text-center">
              {item.title}
            </p>
            <p className="nun font-normal text-[10px] text-[#7A7B7C] dark:text-white mt-[2px] text-center">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}