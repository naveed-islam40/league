import React, { useState } from "react";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  accessLevel: string;
  status: string;
  lastActive: string;
}

const userData: UserData[] = [
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
    company: "InfoSight",
    role: "User",
    accessLevel: "Editor",
    status: "Active",
    lastActive: "07/05/2024 10:11 am",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
    company: "InfoSight",
    role: "User",
    accessLevel: "Editor",
    status: "Active",
    lastActive: "07/05/2024 10:11 am",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
    company: "InfoSight",
    role: "User",
    accessLevel: "Editor",
    status: "Active",
    lastActive: "07/05/2024 10:11 am",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
    company: "InfoSight",
    role: "User",
    accessLevel: "Editor",
    status: "Active",
    lastActive: "07/05/2024 10:11 am",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
    company: "InfoSight",
    role: "User",
    accessLevel: "Editor",
    status: "Active",
    lastActive: "07/05/2024 10:11 am",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
    company: "InfoSight",
    role: "User",
    accessLevel: "Editor",
    status: "Active",
    lastActive: "07/05/2024 10:11 am",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
    company: "InfoSight",
    role: "User",
    accessLevel: "Editor",
    status: "Active",
    lastActive: "07/05/2024 10:11 am",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
    company: "InfoSight",
    role: "User",
    accessLevel: "Editor",
    status: "Active",
    lastActive: "07/05/2024 10:11 am",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
    company: "InfoSight",
    role: "User",
    accessLevel: "Editor",
    status: "Active",
    lastActive: "07/05/2024 10:11 am",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
    company: "InfoSight",
    role: "User",
    accessLevel: "Editor",
    status: "Active",
    lastActive: "07/05/2024 10:11 am",
  },
  {
    firstName: "Scott",
    lastName: "Carroll",
    email: "scott_carol@email.net",
    company: "InfoSight",
    role: "User",
    accessLevel: "Editor",
    status: "Active",
    lastActive: "07/05/2024 10:11 am",
  },
];

export default function MobileTable() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = userData.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <>
      <div className="block md:hidden pb-5">
        <div className="mt-2 md:mt-5  bg-white dark:bg-black rounded-[4px] border-[1px] border-[#E0E0E0]">
          <div className="">
            {currentRows.map((user, index) => (
              <div
                key={index}
                className={`group md:flex gap-3 p-4  transition-colors duration-300 border-b-[1px] border-[#f2f2f2] ${
                  index === 1
                    ? "hover:bg-red-100 dark:hover:bg-[#272727]"
                    : index === 1 || index === 5
                    ? "hover:bg-[#FFFDF6] dark:hover:bg-[#272727]"
                    : "hover:bg-[#f2f2f2] dark:hover:bg-[#272727]"
                }`}
              >
                <div className="flex md:block gap-3">
                  <div>
                    <div className=" self-center">
                      <p className="font-semibold text-[#7A7B7C] group-hover:text-[#7A7B7C] dark:text-white text-[16px] self-center">
                        First Name
                      </p>
                      <p className="font-normal text-[#121212] group-hover:text-white dark:text-white text-[14px] mt-1 md:mt-0">
                        {user.firstName}

                        {index === 1 && (
                          <span className="ml-2 font-normal text-[#7A7B7C]  text-[12px] border-[1px] border-[#CCCCCC] rounded-[4px] py-[4px] px-[6px] bg-white">
                            You
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="self-center mt-3">
                      <p className="font-semibold text-[#7A7B7C] group-hover:text-[#7A7B7C] dark:text-white text-[16px] self-center">
                        Email
                      </p>
                      <p className="font-normal text-[#121212] group-hover:text-white dark:text-white text-[14px] ">
                        {user.email}
                      </p>
                    </div>

                    <div className="self-center mt-3">
                      <p className="font-semibold text-[#7A7B7C] group-hover:text-[#7A7B7C] dark:text-white text-[16px] self-center">
                        Status
                      </p>
                      <p className="font-normal text-[#121212] group-hover:text-white dark:text-white text-[14px] ">
                        {user.status}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="block md:hidden font-semibold text-[#7A7B7C] group-hover:text-[#7A7B7C] dark:text-white text-[16px] self-center">
                      Last Name
                    </p>
                    <p className="font-normal text-[#121212] group-hover:text-white dark:text-white text-[14px]">
                      {user.lastName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
