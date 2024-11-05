import Image from "next/image";
import React, { useState } from "react";

export default function Sidebar() {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const locations = [
    "California, CA",
    "Alabama, AL",
    "Alaska, AS",
    "Arizona, AZ",
    "Arkansas, AK",
    "Colorado, CO",
    "Connecticut, CT",
    "Delaware, DE",
    "Florida, FL",
    "Georgia, GA",
    "Hawaii, HI",
    "Idaho, ID",
    "Illinois, IL",
    "Iowa, IA",
    "Kansas, KS",
    "Kentucky, KY",
    "Louisiana, LA",
    "Maine, ME",
    "Maryland, MD",
    "Massachusetts, MA",
    "Michigan, MI",
    "Minnesota, MN",
    "Mississippi, MS",
    "Missouri, MO",
    "Montana, MT",
    "Nebraska, NE",
    "Nevada, NV",
    "New Hampshire, NH",
    "New Jersey, NJ",
    "New Mexico, NM",
    "New York, NY",
    "North Carolina, NC",
  ];

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <p className="nun font-normal text-[#121F2C] dark:text-white text-[16px] mt-5">
        Search Result
      </p>
      <div className="dark:border-[1px] dark:border-white bg-white dark:bg-black rounded-[7px] shadow-sm p-4 mt-5">
        <div className="flex justify-between border-b-[1px] border-[#F5F5F5] pb-2">
          <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px] xl:text-[16px]">
            Filter by State
          </p>
          <p className="nun font-semibold text-[#3076B1] underline text-[14px] xl:text-[16px] cursor-pointer">
            Reset
          </p>
        </div>

        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border-[1px] border-[#D9D9D9] dark:bg-black placeholder-black dark:placeholder-white rounded-[4px] pl-9 py-2 w-full nun font-[300] text-[16px] md:text-[14px] text-[#121F2C] "
          />
          <Image
            className="absolute top-[10px] left-[10px]"
            src={"/assets/svg/bi_search.svg"}
            alt=""
            width={16}
            height={16}
          />
        </div>

        <div className="mt-2">
          {filteredLocations
            .slice(0, showAll ? filteredLocations.length : 10)
            .map((location, index) => (
              <li
                key={index}
                className="flex gap-2 nun font-normal text-[#121F2C] dark:text-white text-[16px] md:text-[14px] py-[8px] border-b-[1px] border-[#F5F5F5] hover:bg-[#F5F5F5] cursor-pointer"
              >
                <input type="checkbox" className="self-center" />
                {location}
              </li>
            ))}
          <p
            onClick={toggleShowAll}
            className="nun font-semibold text-[16px] text-[#3076B1] underline mt-3 cursor-pointer"
          >
            {showAll ? "Show Less" : "Show All"}
          </p>
        </div>
      </div>
    </>
  );
}
