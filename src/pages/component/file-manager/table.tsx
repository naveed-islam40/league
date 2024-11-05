import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Sure from "./sure";

const filess = [
  {
    id: 1,
    name: "General Landing Policy",
    size: "5MB",
    date: "6/23/2024, 1:16 AM",
    icon: "/assets/svg/bxs-pdf.svg",
  },
  {
    id: 2,
    name: "Another Document",
    size: "3MB",
    date: "7/12/2024, 11:45 AM",
    icon: "/assets/svg/word.svg",
  },
  {
    id: 1,
    name: "General Landing Policy",
    size: "5MB",
    date: "6/23/2024, 1:16 AM",
    icon: "/assets/svg/folder2.svg",
  },
  {
    id: 2,
    name: "Another Document",
    size: "3MB",
    date: "7/12/2024, 11:45 AM",
    icon: "/assets/svg/bxs-pdf.svg",
  },
];

export default function FileTable() {
  const [openDropdownId, setOpenDropdownId] = useState(null); // State to track the opened dropdown
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (fileId: any) => {
    setOpenDropdownId((prev) => (prev === fileId ? null : fileId)); // Toggle dropdown
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdownId(null); // Close the dropdown if click is outside
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
      <div className="md:overflow-x-scroll">
        <div className="md:w-[700px] lg:w-auto">
          <div className="hidden md:flex justify-between pb-3 mt-14 px-[15px]">
            <div className="md:w-[530px] flex gap-3">
              <input type="checkbox" className="self-center" />
              <p className="font-normal text-[#7A7B7C] text-[16px]">Name</p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <div className="md:w-[200px] flex gap-3">
              <p className="font-normal text-[#7A7B7C] text-[16px]">Size</p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <div className="md:w-[200px] flex gap-3">
              <p className="font-normal text-[#7A7B7C] text-[16px]">Date</p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>

          {filess.map((file) => (
            <div
              key={file.id}
              className="relative md:flex justify-between py-5 md:hover:bg-[#EFEFEF99] dark:hover:bg-[#242424] border-t-[1px] border-[#CCCCCC] group px-[15px]"
            >
              <div className="grid grid-cols-12">
                <div className="flex col-span-8 md:col-span-12 md:w-[530px] gap-3">
                  <input type="checkbox" className="mt-1 block md:hidden" />

                  <div className="md:flex gap-3">
                    <input
                      type="checkbox"
                      className="self-center hidden md:block"
                    />
                    <p className="ml-[3px] font-normal text-[#7A7B7C]  text-[16px] block md:hidden">
                      Name
                    </p>

                    <div className="flex gap-1 mt-[4px] md:mt-0">
                      <Image src={file.icon} alt="" width={24} height={24} />
                      <p className="font-normal text-[#3076B1] text-[14px] self-center">
                        {file.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="relative col-span-4 block md:hidden"
                  ref={dropdownRef}
                >
                  <Image
                    onClick={() => toggleDropdown(file.id)}
                    src={"/assets/svg/more.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="ml-auto"
                  />
                  {openDropdownId === file.id && (
                    <div className="w-[150px] absolute right-0 z-10 bg-white dark:bg-black border-[1px] border-[#E2E2E2] shadow-sm mt-2">
                      <div className="flex gap-2 border-b-[1px] border-[#f2f2f2s] hover:bg-[#f2f2f2] p-2">
                        <Image
                          src={"/assets/svg/pen.svg"}
                          alt=""
                          className=""
                          width={16}
                          height={16}
                        />
                        <p className="font-normal text-[#121F2C] dark:text-white  text-[12px]">
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

                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 mt-4 md:mt-0 ml-8 md:ml-0 ">
                <div className="md:w-[180px] self-center">
                  <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                    Size
                  </p>

                  <p className="font-normal text-[#121F2C] dark:text-white text-[14px] mt-1 md:mt-0">
                    {file.size}
                  </p>
                </div>

                <div className="md:w-[200px]">
                  <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                    Date
                  </p>

                  <p className="font-normal text-[#121F2C] dark:text-white text-[14px] block md:group-hover:hidden mt-1 md:mt-0">
                    {file.date}
                  </p>
                  <div className="gap-5 hidden md:group-hover:flex">
                    <Image
                      src={"/assets/svg/pen.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                    <Sure />
                    <Image
                      src={"/assets/svg/bx-dup.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                    <Image
                      src={"/assets/svg/folderM.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                    <Image
                      src={"/assets/svg/trash.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
