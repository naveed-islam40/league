import React, { useEffect, useRef, useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import BarGraph from "./component/cu-policy/barGraph";
import Image from "next/image";
import Datepickers from "./component/cu-policy/date-picker";
import Reportable from "./component/cu-policy/report-table";
import Footer from "./component/footer/footer";
import NotificationReport from "./component/file-manager/notification-report";
import NotificationTable from "./component/file-manager/NotificationTable";
import AssignReport from "./component/file-manager/assign-report";
import AssginmentTable from "./component/file-manager/assginment-table";
import CuPolicyContent from "./component/cu-policy/cuPolicyContent";
import Auditing from "./component/cu-policy/auditing";
import Bot from "../../public/assets/png/bot.png";

interface ReportData {
  title: string;
  value: number;
  component: JSX.Element;
  table: JSX.Element;
}

export default function Report() {
  const filterRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<boolean>(false);
  const [month, setMonth] = useState(false);
  const [year, setYear] = useState(false);
  const [product, setProduct] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const [selectedReport, setSelectedReport] = useState<string>(
    "Login Report by User"
  );
  const [selecteMonth, setSelecteMonth] = useState<string>("Jan");
  const [selectYear, setSelecteYear] = useState<string>("2020");
  const [selectedProduct, setSelectedProduct] =
    useState<string>("All Products");

  const handleSelectReport = (report: string) => {
    setSelectedReport(report);
    setFilter(false);
  };
  const handleSelectMonth = (report: string) => {
    setSelecteMonth(report);
    setMonth(false);
  };

  const handleSelectYear = (report: string) => {
    setSelecteYear(report);
    setYear(false);
  };

  const handleSelectProduct = (report: string) => {
    setSelectedProduct(report);
    setProduct(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target as Node)
    ) {
      setFilter(false);
    }
    if (monthRef.current && !monthRef.current.contains(event.target as Node)) {
      setMonth(false);
    }
    if (yearRef.current && !yearRef.current.contains(event.target as Node)) {
      setYear(false);
    }
    if (
      productRef.current &&
      !productRef.current.contains(event.target as Node)
    ) {
      setProduct(false);
    }
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target as Node)
    ) {
      setFilter(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]);

  const reportData: Record<string, ReportData> = {
    "Login Report by User": {
      title: "Total Users Logins in 2024:",
      value: 500,
      component: <BarGraph />,
      table: <Reportable />,
    },
    "CU Policies Content Report": {
      title: "Total Policies Content Reviewed:",
      value: 300,
      component: <BarGraph />,
      table: <CuPolicyContent />,
    },
    "CU BCP Content Report": {
      title: "Total BCP Content Reviewed:",
      value: 200,
      component: <BarGraph />,
      table: <CuPolicyContent />,
    },
    "Auditing Notes Report": {
      title: "Total Auditing Notes:",
      value: 150,
      component: <BarGraph />,
      table: <Auditing />,
    },
    "Notifications Report": {
      title: "Total Notifications Sent:",
      value: 1000,
      component: <NotificationReport />,
      table: <NotificationTable />,
    },
    "Assignments Reports": {
      title: "Total Assignments:",
      value: 50,
      component: <AssignReport />,
      table: <AssginmentTable />,
    },
  };

  const currentReport = reportData[selectedReport];

  const reportsToHide: string[] = [
    "CU Policies Content Report",
    "CU BCP Content Report",
    "Auditing Notes Report",
  ];

  const shouldShowDetails = !reportsToHide.includes(selectedReport);

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
            <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
              <Link
                href={"/"}
                className="nun font-semibold text-[#3076B1] text-[14px]"
              >
                Resources
              </Link>
              <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
              <Link
                href={"/"}
                className="nun font-normal text-[#121F2C] dark:text-white text-[14px]"
              >
                Reports
              </Link>
            </div>

            <div className="md:flex gap-5 w-[95%] 2xl:w-[70%] mx-auto mt-10 md:mt-5">
              <p className="font-semibold text-[16px] text-[#121212] dark:text-white self-center">
                Select a Report:
              </p>

              <div
                className="mt-2 md:mt-0 relative md:w-[40%] lg:w-[30%] xl:w-[20%]"
                ref={filterRef}
              >
                <div
                  onClick={() => setFilter(!filter)}
                  className="flex justify-between border-[1px] border-[#3F95D166] border-dashed rounded-[6px] bg-[#3F95D11A] p-[14px] cursor-pointer"
                >
                  <p className="font-normal text-[14px] text-black dark:text-white ">
                    {selectedReport}
                  </p>
                  <IoMdArrowDropdown className="text-[20px] text-black dark:text-white   opacity-50" />
                </div>

                {filter && (
                  <div className="absolute left-0 mt-2 w-[100%] bg-white dark:bg-black shadow-lg z-10">
                    <div
                      onClick={() => handleSelectReport("Login Report by User")}
                      className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#CCCCCC] p-3 cursor-pointer dark:hover:bg-[#242424] hover:bg-[#eeeeee]"
                    >
                      Login Report by User
                    </div>
                    <div
                      onClick={() =>
                        handleSelectReport("CU Policies Content Report")
                      }
                      className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#CCCCCC] p-3 cursor-pointer dark:hover:bg-[#242424] hover:bg-[#eeeeee]"
                    >
                      CU Policies Content Report
                    </div>
                    <div
                      onClick={() =>
                        handleSelectReport("CU BCP Content Report")
                      }
                      className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#CCCCCC] p-3 cursor-pointer dark:hover:bg-[#242424] hover:bg-[#eeeeee]"
                    >
                      CU BCP Content Report
                    </div>
                    <div
                      onClick={() =>
                        handleSelectReport("Auditing Notes Report")
                      }
                      className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#CCCCCC] p-3 cursor-pointer dark:hover:bg-[#242424] hover:bg-[#eeeeee]"
                    >
                      Auditing Notes Report
                    </div>
                    <div
                      onClick={() => handleSelectReport("Notifications Report")}
                      className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#CCCCCC] p-3 cursor-pointer dark:hover:bg-[#242424] hover:bg-[#eeeeee]"
                    >
                      Notifications Report
                    </div>
                    <div
                      onClick={() => handleSelectReport("Assignments Reports")}
                      className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#CCCCCC] p-3 cursor-pointer dark:hover:bg-[#242424] hover:bg-[#eeeeee]"
                    >
                      Assignments Reports
                    </div>
                  </div>
                )}
              </div>

              {(selectedReport === "Assignments Reports" ||
                selectedReport === "Notifications Report" ||
                selectedReport === "Auditing Notes Report") && (
                <div
                  className="mt-3 md:mt-0 relative md:w-[20%] lg:w-[15%] "
                  ref={productRef}
                >
                  <div
                    onClick={() => setProduct(!product)}
                    className="flex justify-between border-[1px] border-[#3F95D166] border-dashed rounded-[6px] bg-[#3F95D11A] p-[14px] cursor-pointer"
                  >
                    <p className="font-normal text-[14px] text-black dark:text-white">
                      {selectedProduct}
                    </p>
                    <IoMdArrowDropdown className="text-[20px] text-black dark:text-white opacity-50" />
                  </div>

                  {product && (
                    <div className="absolute left-0 mt-2 w-[100%] bg-white dark:bg-black shadow-lg z-10">
                      <div
                        onClick={() => handleSelectProduct("All Products")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#CCCCCC] p-3 cursor-pointer dark:hover:bg-[#242424] hover:bg-[#eeeeee]"
                      >
                        All Products
                      </div>
                      <div
                        onClick={() => handleSelectProduct("InfoSight")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#CCCCCC] p-3 cursor-pointer dark:hover:bg-[#242424] hover:bg-[#eeeeee]"
                      >
                        InfoSight
                      </div>
                      <div
                        onClick={() => handleSelectProduct("CU PolicyPro")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#CCCCCC] p-3 cursor-pointer dark:hover:bg-[#242424] hover:bg-[#eeeeee]"
                      >
                        CU PolicyPro
                      </div>
                      <div
                        onClick={() => handleSelectProduct("RecoveryPro")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#CCCCCC] p-3 cursor-pointer dark:hover:bg-[#242424] hover:bg-[#eeeeee]"
                      >
                        RecoveryPro
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {!reportsToHide.includes(selectedReport) && (
              <div className="flex gap-3 md:gap-5 w-[95%] 2xl:w-[70%] mx-auto mb-5  mt-5">
                {selectedReport !== "Notifications Report" && (
                  <p className="w-[90%] md:w-auto font-bold text-[12px] md:text-[14px] text-[#121212] dark:text-white self-center">
                    User Login Summary
                  </p>
                )}

                {/* Show "User Subscribers" ONLY in Notifications Report */}
                {selectedReport === "Notifications Report" && (
                  <p className=" w-[70%] md:w-auto font-bold text-[12px] md:text-[14px] text-[#121212] dark:text-white self-center">
                    User Subscribers
                  </p>
                )}
                <div className="relative w-[80%] md:w-[130px]" ref={monthRef}>
                  <div
                    onClick={() => setMonth(!month)}
                    className="flex justify-between border-[1px] border-[#D5D5D5]  rounded-[6px] bg-white dark:bg-[#242424] p-[10px] md:p-[14px] cursor-pointer"
                  >
                    <p className="font-semibold text-[14px] text-[#09122E] dark:text-white">
                      {selecteMonth}
                    </p>
                    <IoMdArrowDropdown className="text-[20px] text-black opacity-50 dark:text-white" />
                  </div>

                  {month && (
                    <div className="absolute left-0 mt-2 w-[100%]  bg-white dark:bg-black shadow-lg z-0 h-[40vh] overflow-auto">
                      <div
                        onClick={() => handleSelectMonth("Jan")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        Jan
                      </div>
                      <div
                        onClick={() => handleSelectMonth("Feb")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        Feb
                      </div>
                      <div
                        onClick={() => handleSelectMonth("March")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        March
                      </div>
                      <div
                        onClick={() => handleSelectMonth("April")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        April
                      </div>
                      <div
                        onClick={() => handleSelectMonth("May")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        May
                      </div>
                      <div
                        onClick={() => handleSelectMonth("Jun")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        Jun
                      </div>
                      <div
                        onClick={() => handleSelectMonth("July")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        July
                      </div>
                      <div
                        onClick={() => handleSelectMonth("Aug")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        Aug
                      </div>
                      <div
                        onClick={() => handleSelectMonth("Sep")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        Sep
                      </div>
                      <div
                        onClick={() => handleSelectMonth("Oct")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        Oct
                      </div>
                      <div
                        onClick={() => handleSelectMonth("Nov")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        Nov
                      </div>
                      <div
                        onClick={() => handleSelectMonth("Dec")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        Dec
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative w-[80%] md:w-[130px]" ref={yearRef}>
                  <div
                    onClick={() => setYear(!year)}
                    className="flex justify-between border-[1px] border-[#D5D5D5]  rounded-[6px] bg-white dark:bg-[#242424] p-[10px] md:p-[14px] cursor-pointer"
                  >
                    <p className="font-semibold text-[14px] text-[#09122E] dark:text-white">
                      {selectYear}
                    </p>
                    <IoMdArrowDropdown className="text-[20px] text-black dark:text-white opacity-50" />
                  </div>

                  {year && (
                    <div className="absolute left-0 mt-2 w-[100%]  bg-white dark:bg-black shadow-lg z-20 ">
                      <div
                        onClick={() => handleSelectYear("2022")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        2022
                      </div>
                      <div
                        onClick={() => handleSelectYear("2023")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        2023
                      </div>
                      <div
                        onClick={() => handleSelectYear("2024")}
                        className="nun font-normal text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#f2f2f2] dark:hover:bg-[#242424] hover:bg-[#f2f2f2] cursor-pointer p-3"
                      >
                        2024
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="2xl:w-[70%] mx-auto">
              {shouldShowDetails && <>{currentReport.component}</>}
            </div>

            <div className="grid grid-cols-12 md:w-[95%] 2xl:w-[70%] mx-auto mt-5 ">
              <div className="col-span-12">{currentReport.table}</div>
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
