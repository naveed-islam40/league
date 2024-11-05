import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import Blake from "../../public/assets/png/blake.png";
import Image from "next/image";
import Footer from "./component/footer/footer";
import Viewing from "./component/resources/viewing";
import Bot from "../../public/assets/png/bot.png";
import Link from "next/link";

export default function Resources() {

  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };


  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
      <div className="w-[95%] 2xl:w-[70%] mx-auto">
        <div className="flex gap-2 mt-5">
          <p className="nun font-semibold text-[#3076B1] text-[16px]">
            Resources
          </p>
          <IoIosArrowForward className="text-[16px] text-[#121F2C]  dark:text-white self-center cursor-pointer" />
          <p className="nun font-normal text-[#121F2C] dark:text-white text-[16px]">
            News & Announcements
          </p>
        </div>

        <Link href={'/resources'} className="flex gap-2 mt-5 md:mt-8">
          <FaArrowLeft className="self-center text-[16px] text-[#7A7B7C] cursor-pointer" />
          <p className="font-semibold text-[#3076B1] text-[14px]">
            Back to News & Announcements
          </p>
        </Link>

        <div className="md:flex justify-between mt-5 md:mt-0">
          <p className=" font-semibold text-[#121212] dark:text-white text-[16px] md:text-[20px]">
            What Is a Shared Branch Credit Union?
          </p>
          <div className="flex  gap-3 mt-3 md:mt-0">
            <button className="bg-[#f6f2fb] dark:bg-[#f6f2fb12] text-[#AD7EFB] font-normal  text-[12px] rounded-[7px] py-[5px] px-[10px]">
              CU PolicyPro
            </button>
            <button className="bg-[#edf2f6] dark:bg-[#edf2f612] text-[#136DF5] font-normal  text-[12px] rounded-[7px] py-[5px] px-[10px]">
              Training
            </button>
            <button className="bg-[#faf1ed] dark:bg-[#faf1ed12] text-[#EE6F2E] font-normal  text-[12px] rounded-[7px] py-[5px] px-[10px]">
              Industry News
            </button>
          </div>
        </div>
        <p className="nun font-normal text-[14px] dark:text-white mt-3 md:mt-0">Sep 24, 2024</p>

        <Image src={Blake} alt="" className="h-[150px] md:h-auto mt-3 rounded-[5px]" />
        <div className="xl:w-[90%] mx-auto pt-5 md:pt-10 pb-0 md:pb-16">
          <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white">
            Credit unions are designed to support the financial needs of the
            surrounding community. You may be apprehensive to join one if you
            travel a lot or need to perform banking services outside of your
            home neighborhood. The good news is that many credit unions have a
            solution for that concern: shared branching.
          </p>

          <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-5">
            Credit union shared branches are part of a network that allows
            members of one credit union to make transactions at another
            participating credit union as if it were their own. This is possible
            because of cooperative agreements among the participating credit
            unions.
          </p>

          <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-5">
            In other words, if youre a member of a credit union that is part of
            a shared branch network, you can walk into any other credit union in
            that network and conduct business as though you were at your home
          </p>

          <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-5">
            This shared branching greatly extends the reach and convenience of
            credit unions, allowing members to access their accounts even when
            theyre far from their home branch.While credit unions dont have
            thousands of branches as some national banks do, shared branches
            bridge the gap and are one way to combat the myth that credit unions
            arent a fit for people who need to make financial transactions
            outside their local area says Mike Squire senior vice president
            and chief experience officer at Kinecta Federal Credit Union.
          </p>

          <p className="nun font-bold text-[14px] text-[#121F2C] dark:text-white mt-5 md:mt-16">
            What Shared Branch Networks Are There?
          </p>

          <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white mt-1">
            There are a handful of credit union shared branch networks. CO-OP is
            the most extensive one, with more than 5,600 shared branches and
            30,000 shared ATMs throughout the country
          </p>
        </div>

        <Viewing />
      </div>
      <Footer />
      </>
        ) : (
          <div className="w-full h-full flex justify-between px-3 mt-3 items-center">
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">All</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                Infosight
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                CU Policy Pro
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                RecoveryPro
              </p>
            </div>
          </div>
        )}

        <Link href={"/chat"}>
          <Image
            src={Bot}
            alt="Chatbot"
            className="fixed z-20 right-5 bottom-5 w-[82px] h-[87px] cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
