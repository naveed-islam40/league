import React, { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarPopup: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    setShowCalendar(false); // Close the calendar after selecting a date
  };

  return (
    <div className="relative flex justify-between ">
      <p className="">{startDate ? startDate.toLocaleDateString() : "Select a date"}</p>

      <Image
        src={"/assets/svg/calendar.svg"}
        alt="Calendar Icon"
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={handleCalendarClick}
      />
      {showCalendar && (
        <div className="absolute top-[50px] right-[15px] z-50 bg-white  p-2 rounded shadow-lg">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange} // Use the updated handler here
            inline
          />
        </div>
      )}
    </div>
  );
};

export default CalendarPopup;
