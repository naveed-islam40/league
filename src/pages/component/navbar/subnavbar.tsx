import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Subnavbar() {
  // Using Next.js router to get the current path
  const router = useRouter();
  const currentPath = router.pathname;
  // Define arrays of paths for different sections of the navbar
  const homePaths = ["/home"];
  const myViewPaths = ["/myView"];
  const infoSightPaths = [
    "/infoSight",
    "/check-list",
    "/accountDetail",
    "/compliance",
    "/check-list-detail",
  ];
  const cuPolicyPaths = [
    "/cu-policies",
    "/cu-policy",
    "/archive",
    "/publishDocx",
    "/keyField",
    "/organization",
    "/cu-policiesView",
    "/editPolicy",
    "/revision",
  ];
  const recoverPaths = [
    "/cu-bcp",
    "/recover-policy",
    "/recover-archive",
    "/recover-publish",
    "/recover-keyfield",
    "/recover-organization",
    "/cu-bcpView",
    "/recoverEditPolicy",
    "/recovery-revision",
  ];
  const resourcePaths = [
    "/a-to-z",
    "/account-insurance",
    "/check-deposite",
    "/collabolator",
    "/fedral-list",
    "/",
    "/resources",
    "/newsletter",
    "/risk",
    "/training",
    "/ability",
  ];
  const docuPaths = ["/cu-docx"];
  const discussionPaths = ["/discussion"];
  const adminPaths = [
    "/manage-user",
    "/manage-assignments",
    "/system-setting",
    "/report",
    "/file-manager",
  ];

  // Boolean variables to check if the current path is included in each section
  const homeBorder = homePaths.includes(currentPath);
  const myViewBorder = myViewPaths.includes(currentPath);
  const infoSightBorder = infoSightPaths.includes(currentPath);
  const showCuPolicyBorder = cuPolicyPaths.includes(currentPath);
  const recoverBorder = recoverPaths.includes(currentPath);
  const resourceBorder = resourcePaths.includes(currentPath);
  const docuBorder = docuPaths.includes(currentPath);
  const discussionBorder = discussionPaths.includes(currentPath);
  const adminBorder = adminPaths.includes(currentPath);

  return (
    <>
      <div className="bg-[#3076B1]">
        <div className="py-3 w-[95%] 2xl:w-[70%] mx-auto flex gap-2 xl:gap-4">
          <Link href={"/home"}>
            <button
              className={`mb-2 flex gap-2 group-hover:bg-[#a3bfd6] font-medium text-[13px] xl:text-[15px]  group-hover:text-black py-[4px] xl:py-[5px] px-[4px] xl:px-[10px] rounded-full ${
                homeBorder ? "bg-[#a3bfd6] text-black" : "text-white"
              }`}
            >
              Home
            </button>
          </Link>

          <Link href={"/myView"}>
            <button
              className={`  mb-2 hidden lg:flex gap-2 group-hover:bg-[#a3bfd6] font-medium text-[13px] xl:text-[15px]  group-hover:text-black py-[4px] xl:py-[5px] px-[4px] xl:px-[10px] rounded-full ${
                myViewBorder ? "bg-[#a3bfd6] text-black" : "text-white"
              }`}
            >
              My 360 View
            </button>
          </Link>

          <div className="relative group">
            <button
              className={`mb-2 flex gap-2 group-hover:bg-[#a3bfd6] font-medium text-[13px] xl:text-[15px]  group-hover:text-black py-[4px] xl:py-[5px] px-[4px] xl:px-[10px] rounded-full ${
                infoSightBorder ? "bg-[#a3bfd6] text-black" : "text-white"
              }`}
            >
              InfoSight
              <Image
                src="/assets/svg/arrow.svg"
                alt=""
                width={10}
                height={6}
                className={`self-center group-hover:filter group-hover:invert ${
                  infoSightBorder ? "filter  invert " : ""
                }`}
              />
            </button>

            <div className="absolute  w-48 bg-white dark:bg-black shadow-lg z-20  hidden group-hover:block transition-opacity duration-200">
              <Link
                href="/infoSight"
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
              >
                <Image
                  src="/assets/svg/infopri2.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                Checklists
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button
              className={`mb-2 flex gap-2 group-hover:bg-[#a3bfd6] font-medium text-[13px] xl:text-[15px]  group-hover:text-black py-[4px] xl:py-[5px] px-[4px] xl:px-[10px] rounded-full ${
                showCuPolicyBorder ? "bg-[#a3bfd6] text-black" : "text-white"
              }`}
            >
              CU PolicyPro
              <Image
                src={"/assets/svg/arrow.svg"}
                alt=""
                width={10}
                height={6}
                className={`self-center group-hover:filter group-hover:invert ${
                  showCuPolicyBorder ? "filter  invert " : ""
                }`}
              />
            </button>
            <div className="absolute w-52 bg-white dark:bg-black shadow-lg z-20 hidden group-hover:block transition-opacity duration-200">
              <Link
                href="/cu-policies"
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
              >
                <Image
                  src={"/assets/svg/cu4.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
                Key Fields
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button
              className={`mb-2 flex gap-2 group-hover:bg-[#a3bfd6] font-medium text-[13px] xl:text-[15px]  group-hover:text-black py-[4px] xl:py-[5px] px-[4px] xl:px-[10px] rounded-full ${
                recoverBorder ? "bg-[#a3bfd6] text-black" : "text-white"
              }`}
            >
              <p className="">RecoveryPro</p>
              <Image
                src={"/assets/svg/arrow.svg"}
                alt=""
                width={10}
                height={6}
                className={`self-center group-hover:filter group-hover:invert ${
                  recoverBorder ? "filter  invert " : ""
                }`}
              />
            </button>

            <div className="absolute  w-52 bg-white dark:bg-black shadow-lg z-20 hidden group-hover:block transition-opacity duration-200">
              <Link
                href="/cu-bcp"
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
              >
                <Image
                  src={"/assets/svg/res5.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
                Key Fields
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button
              className={`mb-2 flex gap-2 group-hover:bg-[#a3bfd6] font-medium text-[13px] xl:text-[15px]  group-hover:text-black py-[4px] xl:py-[5px] px-[4px] xl:px-[10px] rounded-full ${
                resourceBorder ? "bg-[#a3bfd6] text-black" : "text-white"
              }`}
            >
              Resources
              <Image
                src={"/assets/svg/arrow.svg"}
                alt=""
                width={10}
                height={6}
                className={`self-center group-hover:filter group-hover:invert ${
                  resourceBorder ? "filter  invert " : ""
                }`}
              />
            </button>

            <div className="absolute  w-[300px] dark:bg-black bg-white shadow-lg z-20  hidden group-hover:block transition-opacity duration-200">
              <Link
                href="/a-to-z"
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
              >
                <Image
                  src={"/assets/svg/res10.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
                Training
              </Link>
            </div>
          </div>

          <Link href={"/cu-docx"}>
            <button
              className={`mb-2 hidden lg:flex gap-2 group-hover:bg-[#a3bfd6] font-medium text-[13px] xl:text-[15px]  group-hover:text-black py-[4px] xl:py-[5px] px-[4px] xl:px-[10px] rounded-full ${
                docuBorder ? "bg-[#a3bfd6] text-black" : "text-white"
              }`}
            >
              APFCU Documents
            </button>
          </Link>

          <Link href={"/discussion"}>
            <button
              className={`mb-2 hidden lg:flex gap-2 group-hover:bg-[#a3bfd6] font-medium text-[13px] xl:text-[15px]  group-hover:text-black py-[4px] xl:py-[5px] px-[4px] xl:px-[10px] rounded-full ${
                discussionBorder ? "bg-[#a3bfd6] text-black" : "text-white"
              }`}
            >
              Discussion Board
            </button>
          </Link>

          <div className="relative group">
            <button
              className={`mb-2 flex gap-2 group-hover:bg-[#a3bfd6] font-medium text-[13px] xl:text-[15px]  group-hover:text-black py-[4px] xl:py-[5px] px-[4px] xl:px-[10px] rounded-full ${
                adminBorder ? "bg-[#a3bfd6] text-black" : "text-white"
              }`}
            >
              Admin
              <Image
                src="/assets/svg/arrow.svg"
                alt=""
                width={10}
                height={6}
                className={`self-center group-hover:filter group-hover:invert ${
                  adminBorder ? "filter  invert " : ""
                }`}
              />
            </button>

            <div className="absolute right-0  w-52 bg-white dark:bg-black  shadow-lg z-20 hidden group-hover:block transition-opacity duration-200">
              <Link
                href="/manage-user"
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
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
                className="hover:bg-[#f2f2f2] dark:text-white dark:hover:text-gray-800 border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
              >
                <Image
                  src={"/assets/svg/ad5.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
                File Manager
              </Link>
            </div>
          </div>

          <div className="block lg:hidden relative group">
            <button
              className={`mb-2 flex gap-2 group-hover:bg-[#a3bfd6] font-medium text-[13px] xl:text-[15px]  group-hover:text-black py-[4px] xl:py-[5px] px-[4px] xl:px-[10px] rounded-full ${
                adminBorder ? "bg-[#a3bfd6] text-black" : "text-white"
              }`}
            >
              See More
              <Image
                src="/assets/svg/arrow.svg"
                alt=""
                width={10}
                height={6}
                className={`self-center group-hover:filter group-hover:invert ${
                  adminBorder ? "filter  invert " : ""
                }`}
              />
            </button>

            <div className="absolute right-0  w-[150px] bg-white  shadow-lg z-20 hidden group-hover:block transition-opacity duration-200">
              <Link
                href="/myView"
                className="hover:bg-[#f2f2f2] border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
              >
               
                My 360 View
              </Link>
              <Link
                href="/cu-docx"
                className="hover:bg-[#f2f2f2] border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
              >
                
                APFCU Documents
              </Link>
              <Link
                href="/discussion"
                className="hover:bg-[#f2f2f2] border-b-[1px] border-[#f2f2f2] font-normal text-[14px] flex gap-2 px-2 py-3 text-gray-800 cursor-pointer"
              >
                
                Discussion Board
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
