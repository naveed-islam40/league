import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Browse from "./component/setting/browser";
import Footer from "./component/footer/footer";
import Bot from "../../public/assets/png/bot.png";

type Company = {
  id: number;
  name: string;
  companyName: string;
  initials: string;
  isEditing: boolean;
};

export default function SystemSetting() {
  const [companiesData, setCompaniesData] = useState<Company[]>([
    {
      id: 1,
      name: "Company Logo",
      companyName: "Affinity Plus Federal Credit Union",
      initials: "initials: APFCU",

      isEditing: false,
    },
    {
      id: 2,
      name: "Company Name",

      companyName: "Affinity Plus Federal Credit Union",
      initials: "initials: APFCU",
      isEditing: false,
    },
    {
      id: 3,
      name: "Login Security Type",

      companyName: "Standard (No Multi-Factor Authentication)",
      initials: "initials: APFCU",

      isEditing: false,
    },
    {
      id: 4,
      name: "Redline Default Satus",

      companyName: "Off By Default",
      initials: "initials: APFCU",

      isEditing: false,
    },
    {
      id: 5,
      name: "System Admin: Email",

      companyName: "Affinity Plus Federal Credit Union",

      initials: "initials: APFCU",

      isEditing: false,
    },
    {
      id: 6,
      name: "System Admin: Name",

      companyName: "Affinity Plus Federal Credit Union",

      initials: "initials: APFCU",

      isEditing: false,
    },
  ]);

  const handleEditClick = (id: number) => {
    setCompaniesData((prevState) =>
      prevState.map((company) =>
        company.id === id ? { ...company, isEditing: true } : company
      )
    );
  };

  const handleSaveClick = (id: number) => {
    setCompaniesData((prevState) =>
      prevState.map((company) =>
        company.id === id ? { ...company, isEditing: false } : company
      )
    );
  };

  const handleCancelClick = (id: number) => {
    setCompaniesData((prevState) =>
      prevState.map((company) =>
        company.id === id ? { ...company, isEditing: false } : company
      )
    );
  };

  const handleInputChange = (
    id: number,
    field: keyof Company,
    value: string
  ) => {
    setCompaniesData((prevState) =>
      prevState.map((company) =>
        company.id === id ? { ...company, [field]: value } : company
      )
    );
  };

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
          
      <div className="hidden md:flex gap-2 mt-5 md:w-[95%] 2xl:w-[70%] mx-auto">
        <Link
          href={"/manage-user"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          Admin
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link href={"/"} className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
          Global Settings
        </Link>
      </div>

      <div className=" md:w-[95%] 2xl:w-[70%] mx-auto rounded-[4px] bg-white dark:bg-black dark:border-[1px] shadow-sm mt-3 md:mt-5 mb-10">
        <div className="relative  md:overflow-x-scroll">
          <div className="md:w-[1200px] xl:w-auto ">
            <div className="hidden md:flex justify-between py-[12px] px-[24px]">
              <div className="w-[270px] flex gap-3">
                <p className="font-normal text-[#7A7B7C] text-[16px]">Name</p>
                <Image
                  src={"/assets/svg/sort.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <div className="w-[660px] flex gap-3">
                <p className="font-normal text-[#7A7B7C] text-[16px]">Value</p>
                <Image
                  src={"/assets/svg/sort.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>

              <div className="w-[170px] flex gap-3">
                <p className="font-normal text-[#7A7B7C] text-[16px]">
                  Customized
                </p>
                <Image
                  src={"/assets/svg/sort.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>

              <div className="w-[180px] flex">
                <Image
                  src={"/assets/svg/settings.svg"}
                  alt=""
                  width={18}
                  height={18}
                  className="ml-auto cursor-auto"
                />
              </div>
            </div>

            <div className="relative">
              {companiesData.map((company) => (
                <div
                  key={company.id}
                  className={` md:flex justify-between py-[20px] px-3 md:px-[24px] group border-b-[1px] md:border-b-0 border-[#f2f2f2] ${
                    company.isEditing ? "bg-[#FFFEED] dark:bg-[#272727]" : "hover:bg-[#EEEEEE] dark:hover:bg-[#272727]"
                  }`}
                >
                  <div className="grid grid-cols-2 md:flex">
                    <div className=" md:w-[270px] md:flex md:self-center">
                      <p className="font-normal text-[#7A7B7C]   text-[16px] block md:hidden">
                        Name
                      </p>

                      <p className="font-normal text-[#121212] dark:text-white text-[14px] mt-1 md:mt-0">
                        {company.name}
                      </p>
                    </div>

                    <div className="md:w-[170px] block md:hidden gap-3">
                      <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                        Customized
                      </p>

                      <p className="font-semibold text-[#121212] dark:text-white text-[14px] self-center mt-1 md:mt-0">
                        No
                      </p>
                    </div>
                  </div>

                  {company.isEditing ? (
                    <div className="gap-3 flex md:w-[660px]">
                      <input
                        type="text"
                        value={company.initials}
                        onChange={(e) =>
                          handleInputChange(
                            company.id,
                            "initials",
                            e.target.value
                          )
                        }
                        className="w-[80%] border-[1px] border-[#D9D9D9] rounded-[5px] py-[10px] px-[12px] bg-white"
                      />
                      {/* Assuming <Browse /> is a custom component */}
                      <Browse />
                    </div>
                  ) : (
                    <div className="w-full md:w-[680px] md:flex gap-28 mt-4 md:mt-0">
                      <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                        Value
                      </p>

                      <p className=" font-normal text-[#121212] dark:text-white text-[14px] mt-1 md:mt-0 border-[1px] md:border-0 border-[#D9D9D9] bg-white md:bg-transparent p-2 md:p-0 rounded-[5px] md:rounded-none">
                        {company.companyName}
                      </p>

                      {/* <input
                        type="text"
                        placeholder={company.companyName}
                        className="outline-none w-full font-normal text-[#121212] text-[14px] mt-1 md:mt-0 border-[1px] md:border-0 border-[#D9D9D9] bg-white md:bg-transparent p-2 md:p-0 rounded-[5px] md:rounded-none"
                      /> */}

                      <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden  mt-4 md:mt-0">
                        Initials
                      </p>

                      <p className="font-semibold text-[#121212] dark:text-white text-[14px] mt-1 md:mt-0 border-[1px] md:border-0 border-[#D9D9D9] bg-white md:bg-transparent p-2 md:p-0 rounded-[5px] md:rounded-none">
                        {company.initials}
                      </p>
                    </div>
                  )}

                  <div className="md:w-[170px] hidden md:flex gap-3">
                    <p className="font-normal text-[#7A7B7C] text-[16px] block md:hidden">
                      Customized
                    </p>

                    <p className="font-semibold text-[#121212] dark:text-white text-[14px] self-center">
                      No
                    </p>
                  </div>

                  <div className="hidden md:block md:w-[180px]">
                    {company.isEditing ? (
                      <div className="flex justify-end gap-2">
                        <button
                          className="uppercase font-semibold text-[14px] text-white bg-[#3076B1] hover:bg-[#18459D]  rounded-[6px] py-[12px] px-[20px]"
                          onClick={() => handleSaveClick(company.id)}
                        >
                          Save
                        </button>
                        <p
                          className="font-semibold text-[#3076B1] text-[14px] self-center cursor-pointer"
                          onClick={() => handleCancelClick(company.id)}
                        >
                          Cancel
                        </p>
                      </div>
                    ) : (
                      <Image
                        src={"/assets/svg/bx-edit.svg"}
                        alt="Edit"
                        width={24}
                        height={24}
                        className="ml-auto cursor-pointer invisible group-hover:visible"
                        onClick={() => handleEditClick(company.id)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="block md:hidden fixed w-full bottom-0  uppercase font-semibold text-[14px] text-white bg-[#3076B1] hover:bg-[#18459D]  md:rounded-[6px] py-[12px] px-[20px]">
            Save
          </button>
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
