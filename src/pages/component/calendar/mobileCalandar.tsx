import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Line from "../../../../public/assets/png/linez.png";
import Global from "./drawer";



export default function MobileCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());

  const generateDates = (): {
    date: Date;
    hasEvent: boolean;
    unclickable: boolean;
  }[] => {
    const dates = [];
    const today = new Date();

    const eventDates = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
    const unclickableDates = [
      1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31,
    ];

    // Get the number of days in the current month
    const endOfMonth = new Date(currentYear, currentMonth + 1, 0);

    for (let day = 1; day <= endOfMonth.getDate(); day++) {
      const currentDate = new Date(currentYear, currentMonth, day);
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
    if (!unclickable) {
      setSelectedDate(date);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <>
      <div className="block md:hidden bg-white dark:bg-black p-3">
        <div className="flex gap-2">
          {/* Display the dynamically selected month and year */}
          <p className="font-semibold text-[14px] dark:text-white">
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </p>
          <div className="flex gap-2 self-center">
            <IoIosArrowBack
              onClick={handlePrevMonth}
              className="cursor-pointer dark:text-white"
            />
            <IoIosArrowForward
              onClick={handleNextMonth}
              className="cursor-pointer dark:text-white"
            />
          </div>
        </div>

        <div className="mt-5 overflow-x-auto whitespace-nowrap">
          <div className="inline-flex gap-3">
            {dates.map((item, index) => (
              <div
                key={index}
                onClick={() => handleDateClick(item.date, item.unclickable)}
                className={`rounded-[5px] px-2 py-1 cursor-pointer ${
                  item.date.toDateString() === selectedDate.toDateString() &&
                  !item.unclickable
                    ? "border-[1px] border-[#3076B1]"
                    : item.unclickable
                    ? "opacity-100 cursor-not-allowed"
                    : ""
                }`}
              >
                <p
                  className={`nun font-normal text-[12px] text-center ${
                    item.date.toDateString() === selectedDate.toDateString() &&
                    !item.unclickable
                      ? "text-[#3076B1]"
                      : "text-[#7A7B7C] dark:text-white"
                  }`}
                >
                  {item.date.toLocaleString("default", { weekday: "short" })}
                </p>

                <p
                  className={`nun font-semibold text-[14px] text-center ${
                    item.date.toDateString() === selectedDate.toDateString() &&
                    !item.unclickable
                      ? "text-[#3076B1]"
                      : "text-[#121F2C] dark:text-white"
                  }`}
                >
                  {item.date.getDate()}
                </p>
              </div>
            ))}
          </div>
        </div>



        <div className="flex gap-1 mt-5">
          <p className="font-medium text-[#A4B9DE] text-[12px] w-[15%]">
            8:00 am
          </p>
          <div className="w-[85%] self-center">
            <Image src={Line} alt="" />
            
          </div>
        </div>


        <div className="flex gap-1 mt-10">
          <p className="font-medium text-[#A4B9DE] text-[12px] w-[15%]">
            9:00 am
          </p>
          <div className="w-[85%] self-center mt-[8px]">
            <Image src={Line} alt="" />
           <Global/>
          </div>
        </div>

        <div className="flex gap-1 mt-10">
          <p className="font-medium text-[#A4B9DE] text-[12px] w-[15%]">
            10:00 am
          </p>
          <div className="w-[85%] self-center">
            <Image src={Line} alt="" />
            
          </div>
        </div>


        <div className="flex gap-1 mt-10">
          <p className="font-medium text-[#A4B9DE] text-[12px] w-[15%]">
            11:00 am
          </p>
          <div className="w-[85%] self-center">
            <Image src={Line} alt="" />
            
          </div>
        </div>


        <div className="flex gap-1 mt-10">
          <p className="font-medium text-[#A4B9DE] text-[12px] w-[15%]">
            12:00 am
          </p>
          <div className="w-[85%] self-center">
            <Image src={Line} alt="" />
            
          </div>
        </div>

        <div className="flex gap-1 mt-10">
          <p className="font-medium text-[#A4B9DE] text-[12px] w-[15%]">
            1:00 am
          </p>
          <div className="w-[85%] self-center">
            <Image src={Line} alt="" />
            
          </div>
        </div>


        <div className="flex gap-1 mt-10">
          <p className="font-medium text-[#A4B9DE] text-[12px] w-[15%]">
            2:00 am
          </p>
          <div className="w-[85%] self-center">
            <Image src={Line} alt="" />
            
          </div>
        </div>


        <div className="flex gap-1 mt-10">
          <p className="font-medium text-[#A4B9DE] text-[12px] w-[15%]">
            3:00 am
          </p>
          <div className="w-[85%] self-center">
            <Image src={Line} alt="" />
            
          </div>
        </div>



      </div>
    </>
  );
}
