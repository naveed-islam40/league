import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const locations = [
  "California, CA",
  "Alabama, AL",
  "Alaska, AK",
  "Arizona, AZ",
  "Arkansas, AR",
  "Colorado, CO",
  "Connecticut, CT",
  "Delaware, DE",
  "Florida, FL",
  "Georgia, GA",
  "Hawaii, HI",
  "Idaho, ID",
  "Illinois, IL",
];

export default function Location() {
  const [selectedLocation, setSelectedLocation] = useState("California, CA");
  const router = useRouter();

  useEffect(() => {
    // Check if there is a saved location in localStorage
    const savedLocation = localStorage.getItem("selectedLocation");
    if (savedLocation) {
      setSelectedLocation(savedLocation);
    }
  }, []);

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location); // Update the selected location
  };

  const handleDoneClick = () => {
    // Save the selected location to localStorage
    localStorage.setItem("selectedLocation", selectedLocation);
    router.push("/home"); // Navigate back to the previous page or home
  };

  return (
    <>
      <div className="flex justify-between bg-white dark:bg-black md:hidden pt-5 pb-3 px-3 md:px-0">
        <div className="self-center nun font-semibold text-[#7A7B7C] text-[14px] flex gap-2 dark:text-white">
          <Image src={"/assets/svg/arrow-left.svg"} alt="Back" width={24} height={24} />
          Back
        </div>
        <p className="font-semibold text-[#3076B1] text-[14px] cursor-pointer dark:text-white" onClick={handleDoneClick}>
          Done
        </p>
      </div>
      <div className="relative w-full md:w-auto p-4 border-t-[1px] border-[#CCCCCC]">
        <input
          type="text"
          placeholder="Search"
          className="bg-white rounded-[10px] text-[17px] py-[10px] px-[35px] w-full outline-none"
        />
        <Image
          src={"/assets/svg/bi_search.svg"}
          alt="Search"
          width={16}
          height={16}
          className="absolute top-[30px] left-7"
        />
      </div>
      <div className="bg-white dark:bg-black">
        {locations.map((location) => (
          <div
            key={location}
            className="flex gap-2 border-b-[1px] border-[#F5F5F5] p-4 cursor-pointer"
            onClick={() => handleLocationChange(location)} // Update selected location on click
          >
            <input
              type="radio"
              name="location" // Ensure the radio button has a name attribute for the group
              checked={selectedLocation === location} // Control the radio button
              readOnly // Mark the radio button as read-only to avoid uncontrolled state warnings
            />
            <p className="self-center nun font-normal text-[#121F2C] dark:text-white text-[12px]">
              {location}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
