import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Logo from "../../../../public/assets/png/logos.png";
import Link from "next/link";
import Location from "../../location";

export default function NavDrawer() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // Active section
  const [storedLocation, setStoredLocation] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the selected location from localStorage
    const savedLocation = localStorage.getItem("selectedLocation");
    setStoredLocation(savedLocation || "Select a location");
  }, []);
  const toggleSection = (id: any) => {
    setActiveSection(activeSection === id ? null : id); // Toggle active section
  };

  return (
    <>
      <Image
        onClick={() => setOpen(true)}
        src={"/assets/svg/Menu.svg"}
        alt=""
        width={24}
        height={24}
        className="absolute top-[15px] left-3 cursor-pointer"
      />

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden  z-10">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-[80%] pr-0">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-full">
                    <div className="flex w-[100%] mr-auto h-full flex-col overflow-y-scroll dark:bg-black bg-white shadow-xl relative z-40">
                      <div className="container grid grid-cols-1 py-1">
                        <Image
                          onClick={() => setOpen(false)}
                          src={"/assets/svg/crss.svg"}
                          alt=""
                          width={32}
                          height={32}
                          className="ml-auto mr-5 mt-5 "
                        />
                        <div className="pl-5 mt-5">
                          <Image src={Logo} alt="" className="w-[190px]" />
                        </div>

                        <div className="px-5 mt-10">
                          <Link href={"/home"}>
                            <p className="font-semibold dark:text-white text-[16px] border-b-[1px] border-[#E8E8E8] pb-5">
                              Home
                            </p>
                          </Link>
                          <Link href={"/myView"}>
                            <p className="font-semibold dark:text-white text-[16px] border-b-[1px] border-[#E8E8E8] py-5">
                              My 360 View
                            </p>
                          </Link>

                          {/* InfoSight Section */}
                          <div className="border-b-[1px] border-[#E8E8E8] dark:text-white">
                            <p
                              className="flex justify-between font-semibold text-[16px] py-5 cursor-pointer"
                              onClick={() => toggleSection("infoSight")}
                            >
                              InfoSight
                              <Image
                                src={
                                  activeSection === "infoSight"
                                    ? "/assets/svg/da.svg" // Image when open
                                    : "/assets/svg/rr.svg" // Image when closed
                                }
                                className="filter dark:invert"
                                alt=""
                                width={activeSection === "infoSight" ? 15 : 8} // Dynamic width
                                height={activeSection === "infoSight" ? 15 : 8} // Dynamic height
                              />
                            </p>
                            {activeSection === "infoSight" && (
                              <>
                                <Link
                                  href="/infoSight"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src="/assets/svg/infopri.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Compliance Topics
                                </Link>
                                <Link
                                  href="/check-list"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src="/assets/svg/infopri2.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Checklists
                                </Link>
                              </>
                            )}
                          </div>

                          {/* CU PolicyPro Section */}
                          <div className="border-b-[1px] border-[#E8E8E8]">
                            <p
                              className="dark:text-white flex justify-between font-semibold text-[16px] py-5 cursor-pointer"
                              onClick={() => toggleSection("cuPolicyPro")}
                            >
                              CU PolicyPro
                              <Image
                                src={
                                  activeSection === "cuPolicyPro"
                                    ? "/assets/svg/da.svg" // Image when open
                                    : "/assets/svg/rr.svg" // Image when closed
                                }
                                alt=""
                                className="filter dark:invert"
                                width={activeSection === "cuPolicyPro" ? 15 : 8} // Dynamic width
                                height={
                                  activeSection === "cuPolicyPro" ? 15 : 8
                                } // Dynamic height
                              />
                            </p>
                            {activeSection === "cuPolicyPro" && (
                              <>
                                <Link
                                  href="/cu-policies"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/cu.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  CU Policies
                                </Link>
                                <Link
                                  href="/cu-policy"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/cu.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Model Policies
                                </Link>
                                <Link
                                  href="/archive"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/cu2.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Archives
                                </Link>
                                <Link
                                  href="/publishDocx"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/cu3.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Published Documents
                                </Link>
                                <Link
                                  href="/keyField"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/cu4.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Key Fields
                                </Link>
                              </>
                            )}
                          </div>

                          {/* RecoveryPro Section */}
                          <div className="border-b-[1px] border-[#E8E8E8]">
                            <p
                              className="dark:text-white flex justify-between font-semibold text-[16px] py-5 cursor-pointer"
                              onClick={() => toggleSection("recoveryPro")}
                            >
                              RecoveryPro
                              <Image
                                src={
                                  activeSection === "recoveryPro"
                                    ? "/assets/svg/da.svg" // Image when open
                                    : "/assets/svg/rr.svg" // Image when closed
                                }
                                alt=""
                                className="filter dark:invert"
                                width={activeSection === "recoveryPro" ? 15 : 8} // Dynamic width
                                height={
                                  activeSection === "recoveryPro" ? 15 : 8
                                } // Dynamic height
                              />
                            </p>
                            {activeSection === "recoveryPro" && (
                              <>
                                <Link
                                  href="/cu-bcp"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/res.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  CU BCP
                                </Link>
                                <Link
                                  href="/recover-policy"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/res2.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Model BCP
                                </Link>

                                <Link
                                  href="/recover-archive"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/res3.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Archives
                                </Link>

                                <Link
                                  href="/recover-publish"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/res4.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Published Documents
                                </Link>

                                <Link
                                  href="/recover-keyfield"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/res5.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Key Fields
                                </Link>
                              </>
                            )}
                          </div>

                          {/* Resources Section */}
                          <div className="border-b-[1px] border-[#E8E8E8]">
                            <p
                              className="dark:text-white flex justify-between font-semibold text-[16px] py-5 cursor-pointer"
                              onClick={() => toggleSection("resources")}
                            >
                              Resources
                              <Image
                                src={
                                  activeSection === "resources"
                                    ? "/assets/svg/da.svg" // Image when open
                                    : "/assets/svg/rr.svg" // Image when closed
                                }
                                alt=""
                                className="filter dark:invert"
                                width={activeSection === "resources" ? 15 : 8} // Dynamic width
                                height={activeSection === "resources" ? 15 : 8} // Dynamic height
                              />
                            </p>
                            {activeSection === "resources" && (
                              <>
                                <Link
                                  href="/a-to-z"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/ress.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  A to Z Listing
                                </Link>
                                <Link
                                  href="/account-insurance"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/ress2.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Account Insurance Estimator
                                </Link>
                                <Link
                                  href="/check-deposite"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/ress3.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Check Deposit Notice Generator
                                </Link>
                                <Link
                                  href="/collabolator"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/ress4.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Collaborative Partners
                                </Link>
                                <Link
                                  href="/event-calendar"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/ress5.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Compliance Calendar
                                </Link>
                                <Link
                                  href="/fedral-list"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/res6.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Federal Regulations List
                                </Link>
                                <Link
                                  href="/resources"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/res7.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  News & Announcements
                                </Link>
                                <Link
                                  href="/newsletter"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/res8.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Newsletter
                                </Link>
                                <Link
                                  href="/risk"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/res9.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  RISK Alerts
                                </Link>
                                <Link
                                  href="/training"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/res10.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Training
                                </Link>
                              </>
                            )}
                          </div>

                          {/* APFCU Documents Section */}

                          <Link href={"/cu-docx"}>
                            <div className="border-b-[1px] border-[#E8E8E8]">
                              <p className="dark:text-white font-semibold text-[16px] border-b-[1px] border-[#E8E8E8] py-5">
                                APFCU Documents
                              </p>
                            </div>
                          </Link>

                          {/* Discussion Board Section */}
                          <Link href={"/discussion"}>
                            <div className="border-b-[1px] border-[#E8E8E8]">
                              <p className="dark:text-white font-semibold text-[16px] border-b-[1px] border-[#E8E8E8] py-5">
                                Discussion Board
                              </p>
                            </div>
                          </Link>

                          {/* Admin Section */}
                          <div className="border-b-[1px] border-[#E8E8E8]">
                            <p
                              className="dark:text-white flex justify-between font-semibold text-[16px] py-5 cursor-pointer"
                              onClick={() => toggleSection("admin")}
                            >
                              Admin
                              <Image
                                src={
                                  activeSection === "admin"
                                    ? "/assets/svg/da.svg" // Image when open
                                    : "/assets/svg/rr.svg" // Image when closed
                                }
                                alt=""
                                className="filter dark:invert"
                                width={activeSection === "admin" ? 15 : 8} // Dynamic width
                                height={activeSection === "admin" ? 15 : 8} // Dynamic height
                              />
                            </p>
                            {activeSection === "admin" && (
                              <>
                                <Link
                                  href="/manage-user"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/ad.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Manage Users
                                </Link>
                                <Link
                                  href="/manage-assignments"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/ad2.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Manage Assignments
                                </Link>
                                <Link
                                  href="/system-setting"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/ad3.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  System Settings
                                </Link>
                                <Link
                                  href="/report"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/ad4.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  Reports
                                </Link>
                                <Link
                                  href="/file-manager"
                                  className="hover:bg-[#f2f2f2] dark:text-white border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
                                >
                                  <Image
                                    src={"/assets/svg/ad5.svg"}
                                    alt=""
                                    width={24}
                                    height={24}
                                  />
                                  File Manager
                                </Link>
                              </>
                            )}
                          </div>

                          <Link href={"/help"}>
                            <p className="font-medium text-[12px] dark:text-white border-b-[1px] border-[#E8E8E8] mt-8 pb-2">
                              Compliance Help
                            </p>
                          </Link>
                          <Link href={"/support"}>
                            <p className="font-medium text-[12px] dark:text-white border-b-[1px] border-[#E8E8E8] pt-3 pb-2">
                              Support
                            </p>
                          </Link>

                          <div className="border-b-[1px] border-[#E8E8E8]">
                            <Link href={"/location"}>
                              <p className="flex justify-between font-medium text-[12px] dark:text-white py-3 cursor-pointer">
                                {storedLocation}{" "}
                                {/* Updated Location Display */}
                                <Image
                                  src={"/assets/svg/rr.svg"}
                                  alt=""
                                  width={8}
                                  height={8}
                                />
                              </p>
                            </Link>
                          </div>

                          <div className="border-b-[1px] md:border-y-[1px]  border-[#f2f2f2] md:border-[#CCCCCC] py-3 md:w-[95%] 2xl:w-[70%] mx-auto ">
                            <p className="nun font-normal text-[#7A7B7C] text-[11px] md:text-[14px]">
                              © 2024 InfoSight360. All rights reserved.
                            </p>
                          </div>
                          <div className="md:w-[95%] 2xl:w-[70%] mx-auto mb-5">
                            <p className="font-bold text-[#7A7B7C] text-[9px] md:text-[11px] mt-3">
                              Disclaimer
                            </p>
                            <p className="font-normal text-[#7A7B7C] text-[8px] md:text-[10px] mt-2">
                              The compliance content contained in InfoSight360
                              is designed to provide general reference
                              information only. It is intended to be used solely
                              as an informational guide. While efforts are made
                              to timely update the material to reflect
                              applicable changes in laws and regulations, this
                              information may not constitute the most up-to-date
                              legal or other information and should not be
                              considered as legal advice nor relied upon as a
                              substitute for professional legal services. Credit
                              unions are encouraged to contact legal counsel for
                              advice with respect to any particular legal
                              matter. InfoSight360 will not be liable for any
                              direct, indirect or consequential damages
                              resulting from the use of this site. The views
                              expressed herein are not necessarily those of
                              InfoSight360 or its members.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
