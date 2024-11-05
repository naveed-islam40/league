import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import SelectMenu from "./select";

export default function EditDrawer() {
  const [disabled, setDisabled] = useState(true);

  const [open, setOpen] = useState(false);
  const sortOptions = ["MR", "MRS", "Ms"];
  const sortType = ["User", "Admin"];
  const sortRole = ["Editor", "View Only", "N/A"];

  const [selectedTitle, setSelectedTitle] = useState<string>(sortOptions[0]);
  const [selectedType, setSelectedType] = useState<string>(sortType[0]);
  const [selectedRole, setSelectedRole] = useState<string>(sortRole[0]);

  const [news, setNews] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <Image
        onClick={() => setOpen(true)}
        src="/assets/svg/bx-edit.svg"
        alt="Edit"
        title="Edit"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            leave="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden z-10">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-x-0 bottom-0 flex max-h-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-y-full"
                  enterTo="translate-y-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-y-0"
                  leaveTo="translate-y-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-full">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className=" absolute top-0 left-0 w-full mt-1 h-[100vh] overflow-y-scroll pb-40">
                        <div className="fixed z-30 bg-white dark:bg-black w-full">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="flex justify-between p-4">
                            <p className="nun font-semibold text-[18px] text-[#14142B] dark:text-white">
                              Edit User
                            </p>
                            <Image
                              onClick={() => setOpen(false)}
                              src={"/assets/svg/cross.svg"}
                              alt=""
                              width={40}
                              height={40}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="w-[95%] lg:w-[80%] xl:w-[60%] mx-auto pb-10 mt-24">
                          <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-2">
                              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Title *
                              </p>

                              <SelectMenu
                                options={sortOptions}
                                selectedType={selectedTitle}
                                onSelectType={setSelectedTitle}
                              />
                            </div>
                            <div className="col-span-5">
                              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                                First Name *
                              </p>
                              <input
                                type="text"
                                className="outline-none font-medium text-[16px] md:text-[14px] w-full border-[1px] border-[#D9D9D9] rounded-[5px] py-[12px] px-[15px]  mt-2"
                              />
                            </div>

                            <div className="col-span-5">
                              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Last Name *
                              </p>
                              <input
                                type="text"
                                className="outline-none font-medium text-[16px] md:text-[14px] w-full border-[1px] border-[#D9D9D9] rounded-[5px] py-[12px] px-[15px] mt-2"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 mt-5 gap-5">
                            <div>
                              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Email *
                              </p>
                              <input
                                type="email"
                                className="font-medium text-[16px] md:text-[14px] outline-none w-full border-[1px] border-[#D9D9D9] rounded-[5px] py-[12px] px-[15px]  mt-2"
                              />
                            </div>

                            <div>
                              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Phone Number (used for MFA via SMS)
                              </p>
                              <input
                                type="number"
                                className="font-medium text-[16px] md:text-[14px] outline-none w-full border-[1px] border-[#D9D9D9] rounded-[5px] py-[12px] px-[15px] mt-2"
                              />
                              <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] mt-1">
                                Phone number must be exactly 10 numbers, with no
                                spaces, hyphens, or parentheses. Example:
                                1234567890
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 mt-5 gap-5">
                            <div className="">
                              <div className="flex gap-1">
                                <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                                  User Type *
                                </p>
                                <div className="relative group">
                                  <Image
                                    src={"/assets/svg/info.svg"}
                                    alt=""
                                    height={18}
                                    width={18}
                                    className="cursor-pointer"
                                  />

                                  <div className="invisible group-hover:visible flex absolute z-30 left-8 -top-2 w-[230px]  ">
                                    <Image
                                      src={"/assets/svg/tool.svg"}
                                      alt=""
                                      width={20}
                                      height={20}
                                      className="absolute top-2 -left-3"
                                    />

<p className="font-normal text-[10px] bg-[#EEEDED]  text-[#121F2C] p-3">


                                      Admin level provides full, unrestricted
                                      access to all system functions and all
                                      content for products to which the credit
                                      union subscribes.User level provides no
                                      access until a Role(s) is assigned to
                                      grant specific rights to the user.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <SelectMenu
                                options={sortType}
                                selectedType={selectedType}
                                onSelectType={setSelectedType}
                              />
                            </div>

                            <div className="">
                              <div className="flex gap-1">
                                <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                                  Role(s) *
                                </p>
                                <div className="relative group">
                                  <Image
                                    src={"/assets/svg/info.svg"}
                                    alt=""
                                    height={18}
                                    width={18}
                                    className="cursor-pointer"
                                  />

                                  <div className="invisible group-hover:visible flex absolute z-30 left-8 -top-2 w-[230px]  ">
                                    <Image
                                      src={"/assets/svg/tool.svg"}
                                      alt=""
                                      width={20}
                                      height={20}
                                      className="absolute top-2 -left-3"
                                    />

<p className="font-normal text-[10px] bg-[#EEEDED]  text-[#121F2C] p-3">


                                      Roles are used to provide specific viewing
                                      and/or editing rights for this user.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="flex gap-3 cursor-not-allowed">
                                <SelectMenu
                                  options={sortRole}
                                  selectedType={selectedRole}
                                  onSelectType={setSelectedRole}
                                />
                                <button
                                  disabled
                                  className="w-[40%] xl:w-[30%] font-semibold text-[14px] text-[#3076B1] dark:text-[#4a9fe7] self-center cursor-not-allowed opacity-40"
                                >
                                  Add New Role
                                </button>
                              </div>
                            </div>
                          </div>

                          <p className="nun font-normal text-[13px] mt-8">
                            Supply new passwords to change, or leave blank to
                            keep the existing one.
                          </p>
                          <div className="grid grid-cols-2 gap-5 mt-5">
                            <div className="">
                              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                                Password *
                              </p>
                              <div className="relative ">
                                <input
                                  type={isPasswordVisible ? "text" : "password"}
                                  className="mt-2 font-normal text-[#8F8F8F] text-[16px] md:text-[14px] border-[1px] border-[#D9D9D9] rounded-[5px] w-full p-[12px] pr-[40px]"
                                />

                                <div
                                  onClick={togglePasswordVisibility}
                                  className="absolute inset-y-0 top-2 right-0 pr-3 flex items-center cursor-pointer"
                                >
                                  {isPasswordVisible ? (
                                    <FaEyeSlash className="text-[#8F8F8F]" />
                                  ) : (
                                    <FaEye className="text-[#8F8F8F]" />
                                  )}
                                </div>
                              </div>
                              <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[10px] mt-1">
                                Password must have at least 8 characters,
                                including number, an uppercase and symbol.
                              </p>
                            </div>

                            <div className=" ">
                              <div className="">
                                <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                                  Confirm Password *
                                </p>
                                <div className="relative ">
                                  <input
                                    type={
                                      isPasswordVisible ? "text" : "password"
                                    }
                                    className="mt-2 font-normal text-[#8F8F8F] text-[16px] md:text-[14px] border-[1px] border-[#D9D9D9] rounded-[5px] w-full p-[12px] pr-[40px]"
                                  />

                                  <div
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 top-2 right-0 pr-3 flex items-center cursor-pointer"
                                  >
                                    {isPasswordVisible ? (
                                      <FaEyeSlash className="text-[#8F8F8F]" />
                                    ) : (
                                      <FaEye className="text-[#8F8F8F]" />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 mt-3">
                            <input type="checkbox" className="mt-[3px]" />
                            <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
                              Ask user to change their password when they sign
                              in
                            </p>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <input type="checkbox" className="mt-[3px]" />
                            <p className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
                              Reset failed login attempts
                            </p>
                          </div>

                          <div className="flex justify-end gap-5 mt-5">
                            <p
                              onClick={() => setOpen(false)}
                              className="font-semibold text-[#3076B1] dark:text-[#4a9fe7] text-[13px] self-center cursor-pointer"
                            >
                              Cancel
                            </p>
                            <button className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4a9fe7] hover:bg-[#18459D]  rounded-[6px] py-3 px-5 uppercase">
                              save
                            </button>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <div className="flex w-full h-[80vh] flex-col overflow-y-scroll bg-white dark:bg-black shadow-xl"></div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
