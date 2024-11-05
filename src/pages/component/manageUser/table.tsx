import Image from "next/image";
import React, { useEffect, useState } from "react";
import EditDrawer from "./editdrawer";
import AddModel from "./model";
import InActive from "./inactive";
import Duplicate from "./duplicate";
import AddDropdown from "./adddropdown";
import Pagination from "./pagination";
import axios from "axios";
import { toast } from "sonner";
import Delect from "./delect";

type Permissions = {
  name: string;
  value: number;
};
interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  permissions: Array<Permissions>;
  type: string;
  accessLevel: string;
  status: boolean;
  date_last_login: string | null;
}

// const userData: UserData[] = [
//   {
//     firstName: "Scott",
//     lastName: "Carroll",
//     email: "scott_carol@email.net",
//     company: "InfoSight",
//     role: "User",
//     accessLevel: "Editor",
//     status: "Active",
//     lastActive: "07/05/2024 10:11 am",
//   },
//   {
//     firstName: "Scott",
//     lastName: "Carroll",
//     email: "scott_carol@email.net",
//     company: "InfoSight",
//     role: "User",
//     accessLevel: "Editor",
//     status: "Active",
//     lastActive: "07/05/2024 10:11 am",
//   },
//   {
//     firstName: "Scott",
//     lastName: "Carroll",
//     email: "scott_carol@email.net",
//     company: "InfoSight",
//     role: "User",
//     accessLevel: "Editor",
//     status: "Active",
//     lastActive: "07/05/2024 10:11 am",
//   },
//   {
//     firstName: "Scott",
//     lastName: "Carroll",
//     email: "scott_carol@email.net",
//     company: "InfoSight",
//     role: "User",
//     accessLevel: "Editor",
//     status: "Active",
//     lastActive: "07/05/2024 10:11 am",
//   },
//   {
//     firstName: "Scott",
//     lastName: "Carroll",
//     email: "scott_carol@email.net",
//     company: "InfoSight",
//     role: "User",
//     accessLevel: "Editor",
//     status: "Active",
//     lastActive: "07/05/2024 10:11 am",
//   },
//   {
//     firstName: "Scott",
//     lastName: "Carroll",
//     email: "scott_carol@email.net",
//     company: "InfoSight",
//     role: "User",
//     accessLevel: "Editor",
//     status: "Active",
//     lastActive: "07/05/2024 10:11 am",
//   },
//   {
//     firstName: "Scott",
//     lastName: "Carroll",
//     email: "scott_carol@email.net",
//     company: "InfoSight",
//     role: "User",
//     accessLevel: "Editor",
//     status: "Active",
//     lastActive: "07/05/2024 10:11 am",
//   },
//   {
//     firstName: "Scott",
//     lastName: "Carroll",
//     email: "scott_carol@email.net",
//     company: "InfoSight",
//     role: "User",
//     accessLevel: "Editor",
//     status: "Active",
//     lastActive: "07/05/2024 10:11 am",
//   },
//   {
//     firstName: "Scott",
//     lastName: "Carroll",
//     email: "scott_carol@email.net",
//     company: "InfoSight",
//     role: "User",
//     accessLevel: "Editor",
//     status: "Active",
//     lastActive: "07/05/2024 10:11 am",
//   },
//   {
//     firstName: "Scott",
//     lastName: "Carroll",
//     email: "scott_carol@email.net",
//     company: "InfoSight",
//     role: "User",
//     accessLevel: "Editor",
//     status: "Active",
//     lastActive: "07/05/2024 10:11 am",
//   },
//   {
//     firstName: "Scott",
//     lastName: "Carroll",
//     email: "scott_carol@email.net",
//     company: "InfoSight",
//     role: "User",
//     accessLevel: "Editor",
//     status: "Active",
//     lastActive: "07/05/2024 10:11 am",
//   },
// ];

export default function Table() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [allSelected, setAllSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [selected, setSelected] = useState<boolean[]>(
    new Array(users.length).fill(false)
  );

  useEffect(() => {
    const fetchUserList = async () => {
      const url = "api/v1/user-list?subDomain=c_master&user_id=107";
      try {
        const res = await axios.get(`/api/getRequest`, {
          params: { url, method: "GET" },
        });
        if (res) {
          setUsers(res.data.groups);
        }
      } catch (error: any) {
        toast.error(error.response?.data.message, {
          position: "top-center",
          style: {
            color: "red",
          },
        });
      }
    };
    fetchUserList();
  }, []);

  const handleDelete = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    try {
      const res = await axios.post(`/api/postRequest`, {
        url: "api/v1/deleteUsers",
        method: "POST",
      });
      if (res) {
        toast.success(res.data.message, {
          position: "top-center",
          style: {
            color: "green",
          },
        });
      }
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-center",
        style: {
          color: "red",
        },
      });
    }
  };

  const toggleSelectAll = () => {
    const newValue = !allSelected;
    setAllSelected(newValue);
    setSelected(new Array(users.length).fill(newValue));
  };

  const toggleSelectItem = (index: number) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
    setAllSelected(newSelected.every(Boolean));
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = users && users.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(users.length / rowsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };
  return (
    <>
      <div className="hidden md:block overflow-x-scroll">
        <div className="mt-5  bg-white dark:bg-black rounded-[4px] border-[1px] border-[#E0E0E0] w-[1350px] xl:w-auto">
          <div className="flex gap-3 p-4 border-b-[1px] border-[#f2f2f2]">
            <div className="w-[30px] pt-1">
              <input
                type="checkbox"
                className="self-center"
                checked={allSelected}
                onChange={toggleSelectAll}
              />
            </div>
            <div className="flex gap-3 w-[140px]">
              <p className="font-semibold text-[#7A7B7C] text-[16px] self-center">
                First Name
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>

            <div className="flex gap-3 w-[140px]">
              <p className="font-semibold text-[#7A7B7C] text-[16px] self-center">
                Last Name
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>

            <div className="flex gap-3 w-[270px]">
              <p className="font-semibold text-[#7A7B7C] text-[16px] self-center">
                Email
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>

            <div className="flex gap-3 w-[180px]">
              <p className="font-semibold text-[#7A7B7C] text-[16px] self-center">
                Product Access
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>

            <div className="flex gap-3 w-[130px]">
              <p className="font-semibold text-[#7A7B7C] text-[16px] self-center">
                User Type
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>

            <div className="flex gap-3 w-[150px]">
              <p className="font-semibold text-[#7A7B7C] text-[16px] self-center">
                User Role
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>

            <div className="flex gap-3 w-[120px]">
              <p className="font-semibold text-[#7A7B7C] text-[16px] self-center">
                Status
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>

            <div className="flex gap-3 w-[150px]">
              <p className="font-semibold text-[#7A7B7C] text-[16px] self-center">
                Last Sign In
              </p>
              <Image
                src={"/assets/svg/sort.svg"}
                alt=""
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>

            <AddDropdown />
          </div>

          <div className="overflow-x-auto">
            {currentRows.map((user, index) => (
              <div
                key={index}
                className={`group flex gap-3 p-4 min-w-[900px] transition-colors duration-300 border-b-[1px] border-[#f2f2f2] ${
                  index === 1
                    ? "hover:bg-red-100 dark:hover:bg-[#272727]"
                    : index === 1 || index === 5
                    ? "hover:bg-[#FFFDF6] dark:hover:bg-[#272727]"
                    : "hover:bg-[#f2f2f2] dark:hover:bg-[#272727]"
                }`}
              >
                <div className="w-[30px] pt-1">
                  <input
                    type="checkbox"
                    className="self-center"
                    checked={selected[index]}
                    onChange={() => toggleSelectItem(index)}
                  />
                </div>
                <div className=" w-[140px] self-center">
                  <p className="font-normal text-[#7A7B7C] dark:group-hover:text-white dark:text-white text-[14px]">
                    {user.firstname}

                    {index === 1 && (
                      <span className="ml-2 font-normal text-[#7A7B7C] text-[12px] border-[1px] border-[#CCCCCC] rounded-[4px] py-[4px] px-[6px] bg-white">
                        You
                      </span>
                    )}
                  </p>
                </div>
                <div className=" w-[140px] self-center">
                  <p className="font-normal text-[#7A7B7C] dark:group-hover:text-white dark:text-white text-[14px]">
                    {user.lastname}
                  </p>
                </div>
                <div className=" w-[270px] self-center">
                  <p className="font-normal text-[#7A7B7C] dark:group-hover:text-white dark:text-white text-[14px] ">
                    {user.email}
                  </p>
                </div>
                <div className=" w-[180px] self-center">
                  <p className="flex font-normal text-[#7A7B7C] dark:group-hover:text-white dark:text-white text-[14px]">
                    {user.permissions[0].name}

                    {(index === 2 || index === 5) && (
                      <AddModel
                        firstName={user.firstname}
                        lastName={user.lastname}
                        email={user.email}
                        permissions={user.permissions}
                        status={user.status}
                        lastActive={user.date_last_login}
                        type={user.type}
                      />
                    )}
                  </p>
                </div>
                <div className=" w-[130px] self-center">
                  <p className="font-normal text-[#7A7B7C] dark:group-hover:text-white dark:text-white text-[14px]">
                    {user.type == "a" ? "Admin" : "User"}
                  </p>
                </div>
                <div className=" w-[150px] self-center">
                  <p className="font-normal text-[#7A7B7C] dark:group-hover:text-white dark:text-white text-[14px]">
                    {user.permissions[1]?.name || "User"}
                  </p>
                </div>
                <div className=" w-[120px] self-center">
                  <p className="font-normal text-[#7A7B7C] dark:group-hover:text-white dark:text-white text-[14px]">
                    {user.status === false ? "Inactive" : "Active"}
                  </p>
                </div>
                <div className="w-[200px] self-center">
                  {index !== 1 && (
                    <div className="hidden group-hover:flex gap-8">
                      <EditDrawer />
                      <Duplicate />
                      <InActive />
                    </div>
                  )}

                  <p className="font-normal text-[#7A7B7C] dark:group-hover:text-[#7A7B7C] dark:text-white text-[14px]  group-hover:hidden">
                    {user.date_last_login &&
                      user.date_last_login.substring(0, 10)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination component */}
      <Pagination
        rowsPerPage={rowsPerPage}
        handleRowsPerPageChange={handleRowsPerPageChange}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </>
  );
}
