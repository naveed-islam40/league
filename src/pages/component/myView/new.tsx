import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Pic from "../../../../public/assets/png/pic.png";
import Pic2 from "../../../../public/assets/png/pic2.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const data = [
  {
    date: "Sep 24, 2024",
    title: "What Is a Shared Branch Credit Union?",
    buttonText: ["CU PolicyPro"],
    buttonColors: ["bg-[#f6f2fb] text-[#AD7EFB]"],
    imageSrc: Pic,
    imageAlt: "Image description",
  },
  {
    date: "Sep 24, 2024",
    title: "What Is a Shared Branch Credit Union?",
    buttonText: ["Training", "Industry News"],
    buttonColors: [
      "bg-[#eef5fe] text-[#136DF5]",
      "bg-[#fef5f0] text-[#EE6F2E]",
    ],
    imageSrc: Pic2,
    imageAlt: "Image description",
  },
];

export default function New() {
  const [accordionOpen, setAccordionOpen] = useState(false); // Accordion state

  const toggleAccordion = () => {
    setAccordionOpen((prevState) => !prevState); // Toggle accordion state
  };

  return (
    <>
      <div className="bg-white dark:bg-black md:dark:border-[1px] md:dark:border-white md:rounded-[7px] p-[15px] md:drop-shadow-sm border-t-[1px] border-[#f2f2f2] md:border-transparent  md:mt-5">
        <div className="flex justify-between">
          <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px] xl:text-[18px]">
            News & Announcements
          </p>

          <div className="hidden md:flex gap-5">
            <Link href={"/resources"} className="self-center flex gap-2">
              <p className="self-center nun font-semibold text-[12px] cursor-pointer text-[#3076B1]">
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
              {data.map((item, index) => (
                <Link key={index} href={"/resources-detail"}>
                  <div className="mt-4" key={index}>
                    <Image src={item.imageSrc} alt={item.imageAlt} />
                    <p className="nun font-normal text-[12px] text-[#777777] mt-2">
                      {item.date}
                    </p>
                    <p className="nun font-semibold text-[12px] text-[#121212] dark:text-white mt-1">
                      {item.title}
                    </p>
                    {item.buttonText.map((text, i) => (
                      <button
                        key={i}
                        className={`font-normal text-[12px] rounded-[7px] py-[5px] px-[10px] mt-2 ${
                          item.buttonColors[i]
                        } ${i > 0 ? "ml-2" : ""}`}
                      >
                        {text}
                      </button>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href={"/resources-detail"}
              className="self-center mt-5 justify-end flex md:hidden gap-2"
            >
              <p className="self-center nun font-semibold text-[12px] cursor-pointer text-[#3076B1]">
                See All
              </p>
              <FaArrowRight className="self-center text-[14px] text-[#3076B1] cursor-pointer" />
            </Link>
          </div>
        )}

        {/* Desktop View (always visible on larger screens) */}
        <div className="hidden md:block">
          <div>
            {data.map((item, index) => (
              <Link key={index} href={"/resources-detail"}>
                <div className="mt-4" key={index}>
                  <Image src={item.imageSrc} alt={item.imageAlt} />
                  <p className="nun font-normal text-[12px] text-[#777777] mt-2">
                    {item.date}
                  </p>
                  <p className="nun font-semibold text-[12px] text-[#121212] dark:text-white mt-1">
                    {item.title}
                  </p>
                  {item.buttonText.map((text, i) => (
                    <button
                      key={i}
                      className={`font-normal text-[12px] rounded-[7px] py-[5px] px-[10px] mt-2 ${
                        item.buttonColors[i]
                      } ${i > 0 ? "ml-2" : ""}`}
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
