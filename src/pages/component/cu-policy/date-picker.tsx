import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

const Datepickers: React.FC = () => {
  const [value, setValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="relative flex flex-col z-0">
      <Datepicker
        value={value}
        onChange={handleValueChange}
        showShortcuts={false}
        inputClassName="dark:bg-[#242424] dark:text-white w-full md:w-auto lg:w-[350px] px-4 py-[13px] text-xs border border-gray-300 rounded-[6px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ps-32"
        containerClassName="relative z-10 "
        displayFormat="MM/DD/YYYY"
      />
      <label className="top-3 left-3 opacity-40 text-sm text-[#09122E] dark:text-white absolute z-10 uppercase font-semibold">
        Filter By Date
      </label>
    </div>
  );
};

export default Datepickers;
