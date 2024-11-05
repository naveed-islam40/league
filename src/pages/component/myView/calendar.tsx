import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Lec from "../../../../public/assets/png/lec.jpg";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date()); // Default to the current date
  const [isClickable, setIsClickable] = useState<boolean>(false);
  const [accordionOpen, setAccordionOpen] = useState(false); // Accordion state

  const toggleAccordion = () => {
    setAccordionOpen((prevState) => !prevState); // Toggle accordion state
  };

  const generateDates = (): {
    date: Date;
    hasEvent: boolean;
    unclickable: boolean;
  }[] => {
    const dates = [];
    const today = new Date(); // Current date

    const eventDates = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
    const unclickableDates = [
      1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31,
    ];

    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    for (let day = 1; day <= endOfMonth.getDate(); day++) {
      const currentDate = new Date(today.getFullYear(), today.getMonth(), day);
      const isToday = currentDate.toDateString() === today.toDateString();
      dates.push({
        date: currentDate,
        hasEvent: eventDates.includes(day),
        unclickable: unclickableDates.includes(day) && !isToday,
      });
    }

    return dates;
  };

  const dates = generateDates();

  const handleDateClick = (date: Date, unclickable: boolean) => {
    setSelectedDate(date);
    setIsClickable(!unclickable); // Update the clickable state based on whether the date is unclickable or not
  };

  const today = new Date(); // For comparison to highlight today's date

  return (
    <>
      <div className="bg-white dark:bg-black md:dark:border-[1px] md:dark:border-white md:rounded-[7px] p-[15px] md:drop-shadow-sm border-t-[1px] border-[#f2f2f2] md:border-transparent  md:mt-5">
        <div className="flex justify-between">
          <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px] xl:text-[18px]">
            Calendar
          </p>

          <div className="hidden md:flex gap-5">
            <Link href={"/event-calendar"} className="self-center flex gap-2">
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
            <div className="mt-5 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <div className="inline-flex gap-3">
                {dates.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleDateClick(item.date, item.unclickable)}
                    className={`border-[1px] border-[#D9D9D9] rounded-[5px] px-2 py-1 cursor-pointer ${
                      item.date.toDateString() ===
                        selectedDate?.toDateString() && !item.unclickable
                        ? "bg-[#3076B1]"
                        : item.unclickable
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <p
                      className={`nun font-normal text-[12px] text-center ${
                        item.date.toDateString() ===
                          selectedDate?.toDateString() && !item.unclickable
                          ? "text-white "
                          : "text-[#121F2C] dark:text-white"
                      }`}
                    >
                      {item.date.getDate()}
                    </p>
                    <p
                      className={`nun font-normal text-[12px] text-center ${
                        item.date.toDateString() ===
                          selectedDate?.toDateString() && !item.unclickable
                          ? "text-white"
                          : "text-[#121F2C] dark:text-white"
                      }`}
                    >
                      {item.date.toLocaleString("default", { month: "short" })}
                    </p>
                    {item.hasEvent && (
                      <div
                        className={`h-[5px] w-[5px] rounded-full mx-auto mt-1 ${
                          item.date.toDateString() ===
                          selectedDate?.toDateString()
                            ? "bg-white"
                            : "bg-gray-400"
                        }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Conditional Rendering Based on Clickable Date */}
            <div className="mt-5">
              {selectedDate &&
              selectedDate.toDateString() === today.toDateString() ? (
                <Link
                  href={"/training"}
                  className="flex gap-5 border-[1px] border-[#F5F5F5] rounded-[10px] bg-[#FAFAFA] dark:bg-black p-3 mt-5"
                >
                  <Image
                    src={Lec}
                    alt="Event Image"
                    className="w-[44px] h-[37px]"
                  />
                  <p className="font-normal text-[#121212] dark:text-white text-[14px] lg:text-[12px] xl:text-[14px] self-center">
                    Todays Event: FCC – Targeting and Eliminating Unlawful Text
                    Messages
                  </p>
                </Link>
              ) : selectedDate && isClickable ? (
                <div className="flex gap-5 border-[1px] border-[#F5F5F5] rounded-[10px] bg-[#FAFAFA] dark:bg-black p-3 mt-5">
                  <Image
                    src={Lec}
                    alt="Event Image"
                    className="w-[44px] h-[37px]"
                  />
                  <p className="font-normal text-[#121212] dark:text-white text-[14px] lg:text-[12px] xl:text-[14px] self-center">
                    FCC – Targeting and Eliminating Unlawful Text Messages
                  </p>
                </div>
              ) : (
                <p className="text-[#777777]  text-[16px] font-medium text-center mt-5">
                  No events for this date
                </p>
              )}
            </div>

            <Link
              href={"/event-calendar"}
              className="self-center flex md:hidden justify-end gap-2 mt-5"
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
          <div className="mt-5 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="inline-flex gap-3">
              {dates.map((item, index) => {
                const isToday =
                  item.date.toDateString() === today.toDateString();
                const isSelected =
                  item.date.toDateString() === selectedDate?.toDateString();

                return (
                  <div
                    key={index}
                    onClick={() => handleDateClick(item.date, item.unclickable)}
                    className={`border-[1px] border-[#D9D9D9]  rounded-[5px] px-2 py-1 cursor-pointer ${
                      isSelected && !item.unclickable
                        ? "bg-[#3076B1] " // Background for selected date
                        : isToday
                        ? "bg-[#e0f7fa]" // Default background for today's date
                        : item.unclickable
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <p
                      className={`nun font-normal text-[12px] text-center ${
                        isSelected && !item.unclickable
                          ? "text-white"
                          : "text-[#121F2C] dark:text-white"
                      }`}
                    >
                      {item.date.getDate()}
                    </p>
                    <p
                      className={`nun font-normal text-[12px] text-center ${
                        isSelected && !item.unclickable
                          ? "text-white"
                          : "text-[#121F2C] dark:text-white"
                      }`}
                    >
                      {item.date.toLocaleString("default", { month: "short" })}
                    </p>
                    {item.hasEvent && (
                      <div
                        className={`h-[5px] w-[5px] rounded-full mx-auto mt-1 ${
                          isSelected ? "bg-white" : "bg-gray-400"
                        }`}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Conditional Rendering Based on Clickable Date */}
          <div className="mt-5">
            {selectedDate &&
            selectedDate.toDateString() === today.toDateString() ? (
              <Link
                href={"/training"}
                className="flex gap-5 border-[1px] border-[#F5F5F5] rounded-[10px] bg-[#FAFAFA] dark:bg-black p-3 mt-5"
              >
                <Image
                  src={Lec}
                  alt="Event Image"
                  className="w-[44px] h-[37px]"
                />
                <p className="font-normal text-[#121212] dark:text-white text-[14px] lg:text-[12px] xl:text-[14px] self-center">
                  Todays Event: FCC – Targeting and Eliminating Unlawful Text
                  Messages
                </p>
              </Link>
            ) : selectedDate && isClickable ? (
              <Link
                href={"/training"}
                className="flex gap-5 border-[1px] border-[#F5F5F5] rounded-[10px] bg-[#FAFAFA] dark:bg-black p-3 mt-5"
              >
                <Image
                  src={Lec}
                  alt="Event Image"
                  className="w-[44px] h-[37px]"
                />
                <p className="font-normal text-[#121212] dark:text-white text-[14px] x:text-[12px] xl:text-[14px] self-center">
                  FCC – Targeting and Eliminating Unlawful Text Messages
                </p>
              </Link>
            ) : (
              <p className="text-[#777777]  font-medium text-center mt-5">
                No events for this date
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
