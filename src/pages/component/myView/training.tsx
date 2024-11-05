import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Lec from "../../../../public/assets/png/lec.jpg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const dataArray = [
  {
    id: 1,
    text: "FCC – Targeting and Eliminating Unlawful Text Messages",
    imageSrc: Lec,
  },
  {
    id: 2,
    text: "Another important update related to FCC",
    imageSrc: Lec,
  },
];

export default function Training() {
  const [accordionOpen, setAccordionOpen] = useState(false); // Accordion state

  const toggleAccordion = () => {
    setAccordionOpen((prevState) => !prevState); // Toggle accordion state
  };

  return (
    <>
      <div className="bg-white dark:bg-black md:dark:border-[1px] md:dark:border-white md:rounded-[7px] p-[15px] md:drop-shadow-sm border-t-[1px] border-[#f2f2f2] md:border-transparent  md:mt-5">
        <div className="flex justify-between">
          <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px] xl:text-[18px]">
            Trainings
          </p>

          <div className="hidden md:flex gap-5">
            <Link href={"/training"} className="self-center flex gap-2">
              <p className="nun font-semibold text-[12px] cursor-pointer text-[#3076B1]">
                See All
              </p>
              <FaArrowRight className="self-center text-[14px] text-[#3076B1] cursor-pointer" />
            </Link>

            <Image
              src={"/assets/svg/dots.svg"}
              alt=""
              width={24}
              height={24}
              className="self-center cursor-pointer"
            />
          </div>
          {!accordionOpen && (
            <IoIosArrowDown
              onClick={toggleAccordion}
              className="text-[#121F2C] dark:text-white text-[25px] block md:hidden"
            />
          )}
          {/* This will render the up arrow when the accordion is open */}
          {accordionOpen && (
            <IoIosArrowUp
              onClick={toggleAccordion}
              className="text-[#121F2C] dark:text-white text-[25px] block md:hidden"
            />
          )}
        </div>

        {/* Accordion for Mobile */}
        {accordionOpen && (
          <div className="md:hidden">
            <div>
              {/*  */}
              {dataArray.map((item) => (
                <Link
                  href={"/training"}
                  key={item.id}
                  className="flex gap-5 border-[1px] border-[#F5F5F5] rounded-[10px] bg-[#FAFAFA] dark:bg-black p-3 mt-4 md:mt-5"
                >
                  <Image
                    src={item.imageSrc}
                    alt=""
                    className="w-[44px] h-[37px]"
                  />
                  <p className="font-normal text-[#121212] dark:text-white text-[14px] lg:text-[12px] xl:text-[14px] self-center">
                    {item.text}
                  </p>
                </Link>
              ))}
            </div>

            <Link
              href={"/training"}
              className="self-center flex justify-end md:hidden gap-2 mt-5"
            >
              <p className="nun font-semibold text-[12px] cursor-pointer text-[#3076B1]">
                See All
              </p>
              <FaArrowRight className="self-center text-[14px] text-[#3076B1] cursor-pointer" />
            </Link>
          </div>
        )}

        {/* Desktop View (always visible on larger screens) */}
        <div className="hidden md:block">
          <div>
            {/*  */}
            {dataArray.map((item) => (
              <Link
                href={"/training"}
                key={item.id}
                className="flex gap-5 border-[1px] border-[#F5F5F5] rounded-[10px] bg-[#FAFAFA] dark:bg-black p-3 mt-4 md:mt-5"
              >
                <Image
                  src={item.imageSrc}
                  alt=""
                  className="w-[44px] h-[37px]"
                />
                <p className="font-normal text-[#121212] dark:text-white text-[14px] lg:text-[12px] xl:text-[14px] self-center">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
