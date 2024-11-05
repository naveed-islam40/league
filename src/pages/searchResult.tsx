import React, { useState, useEffect } from "react";
import Navbar from "./component/navbar/navbar";
import Sidebar from "./component/result/sidebar";
import Detail from "./component/result/detail";
import Member from "./component/result/member";
import Footer from "./component/footer/footer";
import SidebarSkel from "./component/result/sidebarSkel";
import DetailSkel from "./component/result/detailSjel";
import MemberSkel from "./component/result/memberSkel";
import Bot from "../../public/assets/png/bot.png";
import Link from "next/link";
import Image from "next/image";

export default function SearchResult() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchActive, setSearchActive] = useState(false); // State to track if search is active

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    setSearchActive(query.length > 0); // Activate search if there is a query
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="pb-40">
          <Navbar />
        </div>
        <div className="flex gap-8 w-[95%] 2xl:w-[70%] mx-auto mb-5">
          <div className="w-[20%]">
            <SidebarSkel />
          </div>
          <div className="w-[80%]">
            <DetailSkel />
            <MemberSkel />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="relative">
        <div className="pb-32 md:pb-40">
          <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
        </div>

        {!searchActive ? ( // Conditionally render based on searchActive state
          <>
            <div className="lg:flex gap-4 xl:gap-8 w-[95%] 2xl:w-[70%] mx-auto mb-16">
              <div className="lg:w-[20%]">
                <Sidebar />
              </div>
              <div className="lg:w-[80%]">
                <Detail />
                <Member />
              </div>
            </div>
            <Footer />
          </>
        ) : (
          <div className="w-full h-full flex justify-between px-3 mt-3 items-center">
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">All</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
                Infosight
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
                CU Policy Pro
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
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
