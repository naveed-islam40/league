import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import TypeMenu from "./component/manageUser/typeMenu";
import Bot from "../../public/assets/png/bot.png";
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";

type ButtonLabel =
  | "Board Member"
  | "CEO"
  | "Compliance"
  | "Front Line Staff"
  | "Human Resources"
  | "Lending"
  | "Marketing"
  | "Supervisory Committee";

  interface Role {
    group_id: number;
    role_name: string;
  }

  type UserRole = {
    id: number,
    role_name: string;
  }

  interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    type: string;
    roles: UserRole[];
  }

export default function MyAccount() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedButtons, setSelectedButtons] = useState<ButtonLabel[]>([]);
  const sortType = ["Mr", "Mrs"];
  const [selectedType, setSelectedType] = useState<string>(sortType[0]);
  const toggleShowOldPassword = () => setShowOldPassword(!showOldPassword);
  const toggleShowNewPassword = () => setShowNewPassword(!showNewPassword);
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    areasOfInterest: selectedButtons,
    userType: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    roles: [],
  });

  console.log(formData)
  useEffect(() => {
    const data = localStorage.getItem("user");
    const user = JSON.parse(data || "");

    const fetchUserDetails = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/getUserById/${user?.id}?subDomain=c_master`);
        console.log(res)
        if (res.status === 200) {
          setFormData(res.data.user);
        } else {
          console.error('Failed to fetch user details:', res.status);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
      fetchUserDetails();
  }, []);



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setFormData((prev : any) => ({
          ...prev,
          areasOfInterest: [...prev.areasOfInterest, value],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          areasOfInterest: prev.areasOfInterest.filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };


  const handleSubmit = async() => {
    let user = localStorage.getItem("user")
    const token = localStorage.getItem("token")
    console.log(token)
    let userId : number | undefined;
    if(user){
      const parsedUser = JSON.parse(user) as User;
      userId = parsedUser?.id;
    }
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/update-user/${userId}`,
        formData,
        {headers: 
          {Authorization: `Bearer ${token}`}
        }
      );
      if (response.status == 201) {
        toast.success("User update successfully", {
          position: "top-center",
          style: {
            color: "green",
          },
        });
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message, {
        position: "top-center",
        style: {
          color: "red",
        },
      });
    }
  };

  const buttonData: ButtonLabel[] = [
    "Board Member",
    "CEO",
    "Compliance",
    "Front Line Staff",
    "Human Resources",
    "Lending",
    "Marketing",
    "Supervisory Committee",
  ];

  const handleButtonClick = (button: ButtonLabel) => {
    setSelectedButtons((prevSelected) =>
      prevSelected.includes(button)
        ? prevSelected.filter((item) => item !== button)
        : [...prevSelected, button]
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
            <div className="w-[95%] 2xl:w-[70%] mx-auto mb-5">
              <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px] mt-5">
                My Account
              </p>

              <div className="mt-5 xl:w-[70%] mx-auto">
                <div className="my-5 block md:hidden">
                  <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                    Title
                  </p>
                  <TypeMenu
                    options={sortType}
                    selectedType={selectedType}
                    onSelectType={setSelectedType}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                      First Name
                    </p>
                    <input
                      type="text"
                      className="mt-1 outline-none  border-[1px] border-[#D9D9D9] font-semibold text-[16px] text-[#121F2C] py-[12px] px-[15px] rounded-[5px] w-full"
                      onChange={handleChange}
                      name="firstname"
                      value={formData.firstname}
                    />
                  </div>
                  <div>
                    <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                      Last Name
                    </p>
                    <input
                      type="text"
                      className="mt-1 outline-none  border-[1px] border-[#D9D9D9] font-semibold text-[16px] text-[#121F2C] py-[12px] px-[15px] rounded-[5px] w-full"
                      onChange={handleChange}
                      name="lastname"
                      value={formData.lastname}
                    />
                  </div>
                  <div>
                    <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                      Email
                    </p>
                    <input
                      type="email"
                      className="mt-1 outline-none  border-[1px] border-[#D9D9D9] font-semibold text-[16px] text-[#121F2C] py-[12px] px-[15px] rounded-[5px] w-full"
                      onChange={handleChange}
                      name="email"
                      value={formData.email}
                    />
                  </div>
                  <div>
                    <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                      Phone Number (used for MFA via SMS)
                    </p>
                    <input
                      type="number"
                      className="mt-1 outline-none  border-[1px] border-[#D9D9D9] font-semibold text-[16px] text-[#121F2C] py-[12px] px-[15px] rounded-[5px] w-full"
                      onChange={handleChange}
                      name="phoneNumber"
                      value={formData.mobile}
                    />
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[11px]">
                      Phone number must be exactly 10 numbers, with no spaces,
                      hyphens, or parentheses. Example: 1234567890
                    </p>
                  </div>
                </div>

                <div className="hidden md:block mt-5">
                  <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                    Areas of Interest (choose all that apply)
                  </p>
                  <div className="mt-3 flex gap-2 ">
                    {buttonData.map((button, index) => (
                      <button
                        key={index}
                        className={` font-normal text-[10px] lg:text-[14px] p-[10px] rounded-[5px] hover:bg-[#121212] hover:text-white ${
                          selectedButtons.includes(button)
                            ? "bg-[#121212] text-white"
                            : "bg-white text-[#121212]"
                        }`}
                        onClick={() => handleButtonClick(button)}
                      >
                        {button}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mt-5">
                  <div>
                    <div className="flex gap-1 font-normal text-[#121F2C] dark:text-white text-[14px]">
                      User Type
                      <div className="relative group">
                        <Image
                          src={"/assets/svg/info.svg"}
                          alt=""
                          width={18}
                          height={18}
                          className="cursor-pointer"
                        />
                        <div className="invisible group-hover:visible flex absolute z-30 left-8 -top-2 w-[230px]">
                          <Image
                            src={"/assets/svg/tool.svg"}
                            alt=""
                            width={20}
                            height={20}
                            className="absolute top-2 -left-3"
                          />

                          <p className="font-normal text-[10px] bg-[#EEEDED]  text-[#121F2C] p-3">
                            Admin level provides full, unrestricted access to
                            all system functions and all content for products to
                            which the credit union subscribes.User level
                            provides no access until a Role(s) is assigned to
                            grant specific rights to the user.
                          </p>
                        </div>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="mt-1 outline-none  bg-[#D9D9D9] border-[1px] border-[#D9D9D9] font-semibold text-[16px] text-[#121F2C] py-[12px] px-[15px] rounded-[5px] w-full"
                       onChange={handleChange}
                      name="userType"
                      value={formData.userType === "u" ? "User" : "Admin"}
                    />
                  </div>

                  <div>
                    <div className="flex gap-1 font-normal text-[#121F2C] dark:text-white text-[14px]">
                      User Role
                      <div className="relative group">
                        <Image
                          src={"/assets/svg/info.svg"}
                          alt=""
                          width={18}
                          height={18}
                          className="cursor-pointer"
                        />
                        <div className="invisible group-hover:visible flex absolute z-30 left-8 -top-2 w-[230px]">
                          <Image
                            src={"/assets/svg/tool.svg"}
                            alt=""
                            width={20}
                            height={20}
                            className="absolute top-2 -left-3"
                          />

                          <p className="font-normal text-[10px] bg-[#EEEDED]  text-[#121F2C] p-3">
                            Roles are used to provide specific viewing and/or
                            editing rights for this user.
                          </p>
                        </div>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="mt-1 outline-none  bg-[#D9D9D9] border-[1px] border-[#D9D9D9] font-semibold text-[16px] text-[#121F2C] py-[12px] px-[15px] rounded-[5px] w-full"
                       onChange={handleChange}
                      name="roles"
                      // value={formData.roles[0].role_name}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-5 mt-5">
                  <div>
                    <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                      Old Password
                    </p>
                    <div className="relative ">
                      <input
                        type={showOldPassword ? "text" : "password"}
                        className="mt-1 outline-none border-[1px] border-[#D9D9D9] font-semibold text-[16px] text-[#121F2C] py-[12px] px-[15px] rounded-[5px] w-full"
                         onChange={handleChange}
                      name="oldPassword"
                      />
                      <span
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={toggleShowOldPassword}
                      >
                        {showOldPassword ? (
                          <Image
                            src={"/assets/svg/uns.svg"}
                            alt=""
                            width={16}
                            height={16}
                          />
                        ) : (
                          <Image
                            src={"/assets/svg/see.svg"}
                            alt=""
                            width={16}
                            height={16}
                          />
                        )}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                      New Password
                    </p>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        className="mt-1 outline-none border-[1px] border-[#D9D9D9] font-semibold text-[16px] text-[#121F2C] py-[12px] px-[15px] rounded-[5px] w-full"
                        onChange={handleChange}
                      name="newPassword"
                      />
                      <span
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={toggleShowNewPassword}
                      >
                        {showNewPassword ? (
                          <Image
                            src={"/assets/svg/uns.svg"}
                            alt=""
                            width={16}
                            height={16}
                          />
                        ) : (
                          <Image
                            src={"/assets/svg/see.svg"}
                            alt=""
                            width={16}
                            height={16}
                          />
                        )}
                      </span>
                    </div>
                    <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[11px]">
                      Password must have at least 8 characters, including
                      number, an uppercase and symbol.
                    </p>
                  </div>

                  <div>
                    <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                      Confirm Password
                    </p>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="mt-1 outline-none border-[1px] border-[#D9D9D9] font-semibold text-[16px] text-[#121F2C] py-[12px] px-[15px] rounded-[5px] w-full"
                        onChange={handleChange}
                      name="confirmPassword"
                      />
                      <span
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={toggleShowConfirmPassword}
                      >
                        {showConfirmPassword ? (
                          <Image
                            src={"/assets/svg/uns.svg"}
                            alt=""
                            width={16}
                            height={16}
                          />
                        ) : (
                          <Image
                            src={"/assets/svg/see.svg"}
                            alt=""
                            width={16}
                            height={16}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-10 md:my-16 md:flex justify-between">
                  <div className="flex gap-2">
                    <input type="checkbox" className="mt-[2px]" />
                    <p className="nun font-normal text-[#121F2C]  dark:text-white text-[12px] mt-[2px]">
                      I would like to sign up for the newsletter to stay
                      informed!
                    </p>
                  </div>
                  <button className="w-full md:w-auto mt-10 md:mt-0 font-semibold text-[14px] text-white py-[12px] px-[20px] rounded-[6px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D]" onClick={handleSubmit}>
                    SAVE
                  </button>
                </div>
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
