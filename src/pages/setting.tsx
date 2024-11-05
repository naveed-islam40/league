import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar/navbar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Switch } from "@headlessui/react";
import Footer from "./component/footer/footer";
import Bot from "../../public/assets/png/bot.png";
import Image from "next/image";
import Link from "next/link";

export default function Settings() {
  const [enabled, setEnabled] = useState(false);
  const [info, setInfo] = useState(false);
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const [openAccor, setOpenAccor] = useState(null);
  const [selectAll, setSelectAll] = useState(false);

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
    checkbox11: false,
    checkbox12: false,
    checkbox13: false,
    checkbox14: false,
    checkbox15: false,
    checkbox16: false,
    checkbox17: false,
    checkbox18: false,
    checkbox19: false,
    checkbox20: false,
    checkbox21: false,
    checkbox22: false,
    checkbox23: false,
    checkbox24: false,
    checkbox25: false,
    checkbox26: false,
    checkbox27: false,
    checkbox28: false,
    checkbox29: false,
    checkbox30: false,
    checkbox31: false,
    checkbox32: false,
    checkbox33: false,
    checkbox34: false,
    checkbox35: false,
    checkbox36: false,
    checkbox37: false,
    checkbox38: false,
    checkbox39: false,
    checkbox40: false,
    checkbox41: false,
    checkbox42: false,
    checkbox43: false,
    checkbox44: false,
    checkbox45: false,
    checkbox46: false,
    checkbox47: false,
    checkbox48: false,
    checkbox49: false,
    checkbox50: false,
    checkbox51: false,
    checkbox52: false,
    checkbox53: false,
    checkbox54: false,
    checkbox55: false,
    checkbox56: false,
    checkbox57: false,
    checkbox58: false,
    checkbox59: false,
    checkbox60: false,
    checkbox61: false,
    checkbox62: false,
    checkbox63: false,
    checkbox64: false,
    checkbox65: false,
    checkbox66: false,
    checkbox67: false,
    checkbox68: false,
    checkbox69: false,
  });

  // States for controlling the switch for each section
  const [isSwitch1Active, setIsSwitch1Active] = useState(false);
  const [isSwitch2Active, setIsSwitch2Active] = useState(false);
  const [isSwitch3Active, setIsSwitch3Active] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Adjust time for the skeleton loading effect
  }, []);

  useEffect(() => {
    const section1Checkboxes = [
      checkboxes.checkbox1,
      checkboxes.checkbox2,
      checkboxes.checkbox3,
      checkboxes.checkbox4,
      checkboxes.checkbox5,
      checkboxes.checkbox6,
      checkboxes.checkbox7,
      checkboxes.checkbox8,
      checkboxes.checkbox9,
      checkboxes.checkbox10,
      checkboxes.checkbox11,
      checkboxes.checkbox12,
      checkboxes.checkbox48,
      checkboxes.checkbox49,
      checkboxes.checkbox50,
      checkboxes.checkbox51,
      checkboxes.checkbox52,
      checkboxes.checkbox53,
      checkboxes.checkbox54,
      checkboxes.checkbox55,
      checkboxes.checkbox56,
      checkboxes.checkbox57,
      checkboxes.checkbox58,
    ];

    const section2Checkboxes = [
      checkboxes.checkbox13,
      checkboxes.checkbox14,
      checkboxes.checkbox15,
      checkboxes.checkbox16,
      checkboxes.checkbox17,
      checkboxes.checkbox18,
      checkboxes.checkbox19,
      checkboxes.checkbox20,
      checkboxes.checkbox21,
      checkboxes.checkbox22,
      checkboxes.checkbox23,
      checkboxes.checkbox24,
      checkboxes.checkbox59,
      checkboxes.checkbox60,
      checkboxes.checkbox61,
      checkboxes.checkbox62,
      checkboxes.checkbox63,
      checkboxes.checkbox64,
      checkboxes.checkbox65,
      checkboxes.checkbox66,
      checkboxes.checkbox67,
      checkboxes.checkbox68,
      checkboxes.checkbox69,
    ];

    const section3Checkboxes = [
      checkboxes.checkbox25,
      checkboxes.checkbox26,
      checkboxes.checkbox27,
      checkboxes.checkbox28,
      checkboxes.checkbox29,
      checkboxes.checkbox30,
      checkboxes.checkbox31,
      checkboxes.checkbox32,
      checkboxes.checkbox33,
      checkboxes.checkbox34,
      checkboxes.checkbox35,
      checkboxes.checkbox36,
      checkboxes.checkbox37,
      checkboxes.checkbox38,
      checkboxes.checkbox39,
      checkboxes.checkbox40,
      checkboxes.checkbox41,
      checkboxes.checkbox42,
      checkboxes.checkbox43,
      checkboxes.checkbox44,
      checkboxes.checkbox45,
      checkboxes.checkbox46,
      checkboxes.checkbox47,
    ];

    // Only activate Switch 1 when any checkbox from section 1 is checked
    setIsSwitch1Active(section1Checkboxes.some((checked) => checked));

    // Only activate Switch 2 when any checkbox from section 2 is checked
    setIsSwitch2Active(section2Checkboxes.some((checked) => checked));

    setIsSwitch3Active(section3Checkboxes.some((checked) => checked));
  }, [checkboxes]);

  const handleSelectAllChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { checked } = event.target;
    setSelectAll(checked);
    setCheckboxes({
      checkbox1: checked,
      checkbox2: checked,
      checkbox3: checked,
      checkbox4: checked,
      checkbox5: checked,
      checkbox6: checked,
      checkbox7: checked,
      checkbox8: checked,
      checkbox9: checked,
      checkbox10: checked,
      checkbox11: checked,
      checkbox12: checked,
      checkbox13: checked,
      checkbox14: checked,
      checkbox15: checked,
      checkbox16: checked,
      checkbox17: checked,
      checkbox18: checked,
      checkbox19: checked,
      checkbox20: checked,
      checkbox21: checked,
      checkbox22: checked,
      checkbox23: checked,
      checkbox24: checked,
      checkbox25: checked,
      checkbox26: checked,
      checkbox27: checked,
      checkbox28: checked,
      checkbox29: checked,
      checkbox30: checked,
      checkbox31: checked,
      checkbox32: checked,
      checkbox33: checked,
      checkbox34: checked,
      checkbox35: checked,
      checkbox36: checked,
      checkbox37: checked,
      checkbox38: checked,
      checkbox39: checked,
      checkbox40: checked,
      checkbox41: checked,
      checkbox42: checked,
      checkbox43: checked,
      checkbox44: checked,
      checkbox45: checked,
      checkbox46: checked,
      checkbox47: checked,
      checkbox48: checked,
      checkbox49: checked,
      checkbox50: checked,
      checkbox51: checked,
      checkbox52: checked,
      checkbox53: checked,
      checkbox54: checked,
      checkbox55: checked,
      checkbox56: checked,
      checkbox57: checked,
      checkbox58: checked,
      checkbox59: checked,
      checkbox60: checked,
      checkbox61: checked,
      checkbox62: checked,
      checkbox63: checked,
      checkbox64: checked,
      checkbox65: checked,
      checkbox66: checked,
      checkbox67: checked,
      checkbox68: checked,
      checkbox69: checked,
    });
  };

  const handleSubContentChange =
    (startKey: keyof typeof checkboxes, endKey: keyof typeof checkboxes) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { checked } = event.target;
      const updatedCheckboxes = { ...checkboxes };

      let startUpdating = false;
      for (const key in updatedCheckboxes) {
        if (key === startKey) startUpdating = true;
        if (startUpdating)
          updatedCheckboxes[key as keyof typeof checkboxes] = checked;
        if (key === endKey) break;
      }

      setCheckboxes(updatedCheckboxes);
    };

  const handleCheckboxChange =
    (checkboxKey: string) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { checked } = event.target;
      setCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        [checkboxKey]: checked,
      }));
    };

  const handleSwitchChange = (id: any) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  const handleSwitch = (id: any) => {
    setOpenAccor(openAccor === id ? null : id);
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
            <div className="md:w-[95%] 2xl:w-[70%] mx-auto mb-5">
              <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px] mt-5 px-3 md:px-0">
                Notification Settings
              </p>

              <div className="bg-white dark:bg-black dark:border-[1px] dark:border-white md:rounded-[7px] shadow-sm p-3 mt-5  xl:w-[70%] mx-auto">
                {loading ? (
                  <div className="animate-pulse">
                    <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-1/2 mb-4"></div>
                    <div className="h-5 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4"></div>
                    <div className="h-5 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4"></div>
                  </div>
                ) : (
                  <>
                    <div className="border-b-[1px] border-[#D8D8D8] pb-3">
                      <div className="flex justify-between cursor-pointer">
                        <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px] md:text-[18px]">
                          Content Update Notifications
                        </p>
                      </div>
                      <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px]">
                        Receive email notifications for content updates
                      </p>
                    </div>

                    <div className="border-b-[1px] border-[#D8D8D8] py-3">
                      <div className="flex justify-between cursor-pointer">
                        <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px] md:text-[18px]">
                          InfoSight
                        </p>
                      </div>

                      <div
                        onClick={() => setInfo(!info)}
                        className="flex justify-between mt-2"
                      >
                        <p className="mt-[5px] self-center nun font-normal text-[#121F2C] dark:text-white text-[14px] md:text-[16px]">
                          Compliance Topics
                        </p>
                        <div className="flex gap-4">
                          <Switch
                            id="switch1"
                            checked={
                              isSwitch1Active || openAccordionId === "switch1"
                            }
                            onChange={() => handleSwitchChange("switch1")}
                            className={`group relative flex h-7 w-11 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
                              isSwitch1Active || openAccordionId === "switch1"
                                ? "bg-[#4CD964]"
                                : "bg-white"
                            }`}
                          >
                            <span
                              aria-hidden="true"
                              className={`pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out ${
                                isSwitch1Active || openAccordionId === "switch1"
                                  ? "translate-x-3"
                                  : "-translate-x-1"
                              }`}
                            />
                          </Switch>

                          {openAccor === "switch1" ? (
                            <IoIosArrowUp
                              className="text-[20px] self-center cursor-pointer dark:text-white"
                              onClick={() => handleSwitch("switch1")}
                            />
                          ) : (
                            <IoIosArrowDown
                              className="text-[20px] self-center cursor-pointer dark:text-white"
                              onClick={() => handleSwitch("switch1")}
                            />
                          )}
                        </div>
                      </div>

                      {openAccordionId === "switch1" && (
                        <>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 md:w-[95%] mx-auto pt-5 pb-2">
                            <input
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAllChange}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                              Select All
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 md:w-[95%] mx-auto py-3">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox1}
                              onChange={handleCheckboxChange("checkbox1")}
                              className="self-center"
                            />
                            <p className="nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                              Chapter 1000: Administrative
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className=" flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox2}
                                onChange={handleCheckboxChange("checkbox2")}
                                className="mt-[3px] md:mt-0 md:self-center"
                              />
                              <p className="hidden md:block nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1100: Credit Union Culture and Governance
                              </p>
                              <p className="w-[90%] block md:hidden nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1100: Credit Union <br /> Culture and
                                Governance
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="md:self-center nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox3 &&
                                  checkboxes.checkbox4 &&
                                  checkboxes.checkbox5 &&
                                  checkboxes.checkbox6 &&
                                  checkboxes.checkbox7 &&
                                  checkboxes.checkbox8 &&
                                  checkboxes.checkbox9 &&
                                  checkboxes.checkbox10 &&
                                  checkboxes.checkbox11 &&
                                  checkboxes.checkbox12
                                }
                                onChange={handleSubContentChange(
                                  "checkbox3",
                                  "checkbox12"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox3}
                              onChange={handleCheckboxChange("checkbox3")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.10: Organization
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox4}
                              onChange={handleCheckboxChange("checkbox4")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.11: Field of Membership
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox5}
                              onChange={handleCheckboxChange("checkbox5")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.12: Board of Directors Duties
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox6}
                              onChange={handleCheckboxChange("checkbox6")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.13: Compensation and Indemnification
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox7}
                              onChange={handleCheckboxChange("checkbox7")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.14: Bond and Insurance Coverage
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox8}
                              onChange={handleCheckboxChange("checkbox8")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.15: Education and Training Guidelines
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox9}
                              onChange={handleCheckboxChange("checkbox9")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.16: Strategic Planning
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox10}
                              onChange={handleCheckboxChange("checkbox10")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.17: Audits
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox11}
                              onChange={handleCheckboxChange("checkbox11")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.18: Legal Counsel
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox12}
                              onChange={handleCheckboxChange("checkbox12")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.19: Code of Ethics and Diversity
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox48}
                                onChange={handleCheckboxChange("checkbox48")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1200: Regulatory Compliance
                              </p>
                              <p className="block md:hidden nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1200: Regulatory <br /> Compliance
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="nun font-medium text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox49 &&
                                  checkboxes.checkbox50 &&
                                  checkboxes.checkbox51
                                }
                                onChange={handleSubContentChange(
                                  "checkbox49",
                                  "checkbox51"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox49}
                              onChange={handleCheckboxChange("checkbox49")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1230.10: Complaint Process for Federally
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox50}
                              onChange={handleCheckboxChange("checkbox50")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1230.11: State-Chartered Credit Unions
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox51}
                                onChange={handleCheckboxChange("checkbox51")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="block md:hidden nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1230: Enterprise Risk Management <br />{" "}
                                (Policy 1240)
                              </p>
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1230: Enterprise Risk Management (Policy
                                1240)
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox52}
                                onChange={handleCheckboxChange("checkbox52")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="block md:hidden nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1300: Staffing <br /> Resources (Policy
                                1500)
                              </p>
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1300: Staffing and Human Resources
                                (Policy 1500)
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox53 &&
                                  checkboxes.checkbox54 &&
                                  checkboxes.checkbox55 &&
                                  checkboxes.checkbox56 &&
                                  checkboxes.checkbox57 &&
                                  checkboxes.checkbox58
                                }
                                onChange={handleSubContentChange(
                                  "checkbox53",
                                  "checkbox58"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox53}
                              onChange={handleCheckboxChange("checkbox53")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.10: Whistleblowing Protection
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox54}
                              onChange={handleCheckboxChange("checkbox54")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.11: Nepotism
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox55}
                              onChange={handleCheckboxChange("checkbox55")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.12: Equal Opportunity Statement
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox56}
                              onChange={handleCheckboxChange("checkbox56")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.13: Political Contributions
                            </p>
                          </div>

                          <div className=" flex gap-2 w-[85%] mx-auto pt-2 pb-0">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox57}
                              onChange={handleCheckboxChange("checkbox57")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.14: Payroll
                            </p>
                          </div>
                        </>
                      )}

                      {/* view only */}
                      {openAccor === "switch1" && (
                        <>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 md:w-[95%] mx-auto pt-5 pb-2">
                            <input
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAllChange}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                              Select All
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 md:w-[95%] mx-auto py-3">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox1}
                              onChange={handleCheckboxChange("checkbox1")}
                              className="self-center"
                            />
                            <p className="nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                              Chapter 1000: Administrative
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className=" flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox2}
                                onChange={handleCheckboxChange("checkbox2")}
                                className="mt-[3px] md:mt-0 md:self-center"
                              />
                              <p className="hidden md:block nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1100: Credit Union Culture and Governance
                              </p>
                              <p className="w-[90%] block md:hidden nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1100: Credit Union <br /> Culture and
                                Governance
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="md:self-center nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox3 &&
                                  checkboxes.checkbox4 &&
                                  checkboxes.checkbox5 &&
                                  checkboxes.checkbox6 &&
                                  checkboxes.checkbox7 &&
                                  checkboxes.checkbox8 &&
                                  checkboxes.checkbox9 &&
                                  checkboxes.checkbox10 &&
                                  checkboxes.checkbox11 &&
                                  checkboxes.checkbox12
                                }
                                onChange={handleSubContentChange(
                                  "checkbox3",
                                  "checkbox12"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox3}
                              onChange={handleCheckboxChange("checkbox3")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.10: Organization
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox4}
                              onChange={handleCheckboxChange("checkbox4")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.11: Field of Membership
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox5}
                              onChange={handleCheckboxChange("checkbox5")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.12: Board of Directors Duties
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox6}
                              onChange={handleCheckboxChange("checkbox6")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.13: Compensation and Indemnification
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox7}
                              onChange={handleCheckboxChange("checkbox7")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.14: Bond and Insurance Coverage
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox8}
                              onChange={handleCheckboxChange("checkbox8")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.15: Education and Training Guidelines
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox9}
                              onChange={handleCheckboxChange("checkbox9")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.16: Strategic Planning
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox10}
                              onChange={handleCheckboxChange("checkbox10")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.17: Audits
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox11}
                              onChange={handleCheckboxChange("checkbox11")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.18: Legal Counsel
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox12}
                              onChange={handleCheckboxChange("checkbox12")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.19: Code of Ethics and Diversity
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox48}
                                onChange={handleCheckboxChange("checkbox48")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1200: Regulatory Compliance
                              </p>
                              <p className="block md:hidden nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1200: Regulatory <br /> Compliance
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="nun font-medium text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox49 &&
                                  checkboxes.checkbox50 &&
                                  checkboxes.checkbox51
                                }
                                onChange={handleSubContentChange(
                                  "checkbox49",
                                  "checkbox51"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox49}
                              onChange={handleCheckboxChange("checkbox49")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1230.10: Complaint Process for Federally
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox50}
                              onChange={handleCheckboxChange("checkbox50")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1230.11: State-Chartered Credit Unions
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox51}
                                onChange={handleCheckboxChange("checkbox51")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="block md:hidden nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1230: Enterprise Risk Management <br />{" "}
                                (Policy 1240)
                              </p>
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1230: Enterprise Risk Management (Policy
                                1240)
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox52}
                                onChange={handleCheckboxChange("checkbox52")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="block md:hidden nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1300: Staffing <br /> Resources (Policy
                                1500)
                              </p>
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1300: Staffing and Human Resources
                                (Policy 1500)
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox53 &&
                                  checkboxes.checkbox54 &&
                                  checkboxes.checkbox55 &&
                                  checkboxes.checkbox56 &&
                                  checkboxes.checkbox57 &&
                                  checkboxes.checkbox58
                                }
                                onChange={handleSubContentChange(
                                  "checkbox53",
                                  "checkbox58"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox53}
                              onChange={handleCheckboxChange("checkbox53")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.10: Whistleblowing Protection
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox54}
                              onChange={handleCheckboxChange("checkbox54")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.11: Nepotism
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox55}
                              onChange={handleCheckboxChange("checkbox55")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.12: Equal Opportunity Statement
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox56}
                              onChange={handleCheckboxChange("checkbox56")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.13: Political Contributions
                            </p>
                          </div>

                          <div className=" flex gap-2 w-[85%] mx-auto pt-2 pb-0">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox57}
                              onChange={handleCheckboxChange("checkbox57")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.14: Payroll
                            </p>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="border-b-[1px] border-[#D8D8D8] py-3">
                      <div className="flex justify-between cursor-pointer">
                        <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px] md:text-[18px]">
                          CU PolicyPro
                        </p>
                      </div>

                      <div
                        onClick={() => setInfo(!info)}
                        className="flex justify-between mt-2"
                      >
                        <p className="mt-[2px] self-center nun font-normal text-[#121F2C] dark:text-white text-[14px] md:text-[16px]">
                          Model Content
                        </p>
                        <div className="flex gap-4">
                          <Switch
                            id="switch2"
                            checked={
                              isSwitch2Active || openAccordionId === "switch2"
                            }
                            onChange={() => handleSwitchChange("switch2")}
                            className={`group relative flex h-7 w-11 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
                              isSwitch2Active || openAccordionId === "switch2"
                                ? "bg-[#4CD964]"
                                : "bg-white"
                            }`}
                          >
                            <span
                              aria-hidden="true"
                              className={`pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out ${
                                isSwitch2Active || openAccordionId === "switch2"
                                  ? "translate-x-3"
                                  : "-translate-x-1"
                              }`}
                            />
                          </Switch>

                          {openAccor === "switch2" ? (
                            <IoIosArrowUp
                              className="text-[20px] self-center cursor-pointer dark:text-white"
                              onClick={() => handleSwitch("switch2")}
                            />
                          ) : (
                            <IoIosArrowDown
                              className="text-[20px] self-center cursor-pointer dark:text-white"
                              onClick={() => handleSwitch("switch2")}
                            />
                          )}
                        </div>
                      </div>

                      {openAccordionId === "switch2" && (
                        <>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 md:w-[95%] mx-auto pt-5 pb-2">
                            <input
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAllChange}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                              Select All
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 md:w-[95%] mx-auto py-3">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox13}
                              onChange={handleCheckboxChange("checkbox13")}
                              className="self-center"
                            />
                            <p className="nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                              Chapter 1000: Administrative
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className=" flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox14}
                                onChange={handleCheckboxChange("checkbox14")}
                                className="mt-[3px] md:mt-0 md:self-center"
                              />
                              <p className="hidden md:block nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1100: Credit Union Culture and Governance
                              </p>
                              <p className="w-[90%] block md:hidden nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1100: Credit Union <br /> Culture and
                                Governance
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="md:self-center nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox15 &&
                                  checkboxes.checkbox16 &&
                                  checkboxes.checkbox17 &&
                                  checkboxes.checkbox18 &&
                                  checkboxes.checkbox19 &&
                                  checkboxes.checkbox20 &&
                                  checkboxes.checkbox21 &&
                                  checkboxes.checkbox22 &&
                                  checkboxes.checkbox23 &&
                                  checkboxes.checkbox24
                                }
                                onChange={handleSubContentChange(
                                  "checkbox15",
                                  "checkbox24"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox15}
                              onChange={handleCheckboxChange("checkbox15")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.10: Organization
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox16}
                              onChange={handleCheckboxChange("checkbox16")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.11: Field of Membership
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox17}
                              onChange={handleCheckboxChange("checkbox17")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.12: Board of Directors Duties
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox18}
                              onChange={handleCheckboxChange("checkbox18")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.13: Compensation and Indemnification
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox19}
                              onChange={handleCheckboxChange("checkbox19")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.14: Bond and Insurance Coverage
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox20}
                              onChange={handleCheckboxChange("checkbox20")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.15: Education and Training Guidelines
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox21}
                              onChange={handleCheckboxChange("checkbox21")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.16: Strategic Planning
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox22}
                              onChange={handleCheckboxChange("checkbox22")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.17: Audits
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox23}
                              onChange={handleCheckboxChange("checkbox23")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.18: Legal Counsel
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox24}
                              onChange={handleCheckboxChange("checkbox24")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.19: Code of Ethics and Diversity
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox59}
                                onChange={handleCheckboxChange("checkbox59")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1200: Regulatory Compliance
                              </p>
                              <p className="block md:hidden nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1200: Regulatory <br /> Compliance
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="nun font-medium text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox60 &&
                                  checkboxes.checkbox61 &&
                                  checkboxes.checkbox62
                                }
                                onChange={handleSubContentChange(
                                  "checkbox60",
                                  "checkbox62"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox60}
                              onChange={handleCheckboxChange("checkbox60")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1230.10: Complaint Process for Federally
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox61}
                              onChange={handleCheckboxChange("checkbox61")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1230.11: State-Chartered Credit Unions
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox62}
                                onChange={handleCheckboxChange("checkbox62")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="block md:hidden nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1230: Enterprise Risk Management <br />{" "}
                                (Policy 1240)
                              </p>
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1230: Enterprise Risk Management (Policy
                                1240)
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox63}
                                onChange={handleCheckboxChange("checkbox63")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="block md:hidden nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1300: Staffing <br /> Resources (Policy
                                1500)
                              </p>
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1300: Staffing and Human Resources
                                (Policy 1500)
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox64 &&
                                  checkboxes.checkbox65 &&
                                  checkboxes.checkbox66 &&
                                  checkboxes.checkbox67 &&
                                  checkboxes.checkbox68 &&
                                  checkboxes.checkbox69
                                }
                                onChange={handleSubContentChange(
                                  "checkbox64",
                                  "checkbox69"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox64}
                              onChange={handleCheckboxChange("checkbox64")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.10: Whistleblowing Protection
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox65}
                              onChange={handleCheckboxChange("checkbox65")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.11: Nepotism
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox66}
                              onChange={handleCheckboxChange("checkbox66")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.12: Equal Opportunity Statement
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox67}
                              onChange={handleCheckboxChange("checkbox67")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.13: Political Contributions
                            </p>
                          </div>

                          <div className=" flex gap-2 w-[85%] mx-auto pt-2 pb-0">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox68}
                              onChange={handleCheckboxChange("checkbox68")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.14: Payroll
                            </p>
                          </div>
                        </>
                      )}

                      {/* view only */}

                      {openAccor === "switch2" && (
                        <>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 md:w-[95%] mx-auto pt-5 pb-2">
                            <input
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAllChange}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                              Select All
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 md:w-[95%] mx-auto py-3">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox13}
                              onChange={handleCheckboxChange("checkbox13")}
                              className="self-center"
                            />
                            <p className="nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                              Chapter 1000: Administrative
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className=" flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox14}
                                onChange={handleCheckboxChange("checkbox14")}
                                className="mt-[3px] md:mt-0 md:self-center"
                              />
                              <p className="hidden md:block nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1100: Credit Union Culture and Governance
                              </p>
                              <p className="w-[90%] block md:hidden nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1100: Credit Union <br /> Culture and
                                Governance
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="md:self-center nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox15 &&
                                  checkboxes.checkbox16 &&
                                  checkboxes.checkbox17 &&
                                  checkboxes.checkbox18 &&
                                  checkboxes.checkbox19 &&
                                  checkboxes.checkbox20 &&
                                  checkboxes.checkbox21 &&
                                  checkboxes.checkbox22 &&
                                  checkboxes.checkbox23 &&
                                  checkboxes.checkbox24
                                }
                                onChange={handleSubContentChange(
                                  "checkbox15",
                                  "checkbox24"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox15}
                              onChange={handleCheckboxChange("checkbox15")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.10: Organization
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox16}
                              onChange={handleCheckboxChange("checkbox16")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.11: Field of Membership
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox17}
                              onChange={handleCheckboxChange("checkbox17")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.12: Board of Directors Duties
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox18}
                              onChange={handleCheckboxChange("checkbox18")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.13: Compensation and Indemnification
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox19}
                              onChange={handleCheckboxChange("checkbox19")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.14: Bond and Insurance Coverage
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox20}
                              onChange={handleCheckboxChange("checkbox20")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.15: Education and Training Guidelines
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox21}
                              onChange={handleCheckboxChange("checkbox21")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.16: Strategic Planning
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox22}
                              onChange={handleCheckboxChange("checkbox22")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.17: Audits
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox23}
                              onChange={handleCheckboxChange("checkbox23")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.18: Legal Counsel
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox24}
                              onChange={handleCheckboxChange("checkbox24")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.19: Code of Ethics and Diversity
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox59}
                                onChange={handleCheckboxChange("checkbox59")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1200: Regulatory Compliance
                              </p>
                              <p className="block md:hidden nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1200: Regulatory <br /> Compliance
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="nun font-medium text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox60 &&
                                  checkboxes.checkbox61 &&
                                  checkboxes.checkbox62
                                }
                                onChange={handleSubContentChange(
                                  "checkbox60",
                                  "checkbox62"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox60}
                              onChange={handleCheckboxChange("checkbox60")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1230.10: Complaint Process for Federally
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox61}
                              onChange={handleCheckboxChange("checkbox61")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1230.11: State-Chartered Credit Unions
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox62}
                                onChange={handleCheckboxChange("checkbox62")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="block md:hidden nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1230: Enterprise Risk Management <br />{" "}
                                (Policy 1240)
                              </p>
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1230: Enterprise Risk Management (Policy
                                1240)
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox63}
                                onChange={handleCheckboxChange("checkbox63")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="block md:hidden nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1300: Staffing <br /> Resources (Policy
                                1500)
                              </p>
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1300: Staffing and Human Resources
                                (Policy 1500)
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox64 &&
                                  checkboxes.checkbox65 &&
                                  checkboxes.checkbox66 &&
                                  checkboxes.checkbox67 &&
                                  checkboxes.checkbox68 &&
                                  checkboxes.checkbox69
                                }
                                onChange={handleSubContentChange(
                                  "checkbox64",
                                  "checkbox69"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox64}
                              onChange={handleCheckboxChange("checkbox64")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.10: Whistleblowing Protection
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox65}
                              onChange={handleCheckboxChange("checkbox65")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.11: Nepotism
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox66}
                              onChange={handleCheckboxChange("checkbox66")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.12: Equal Opportunity Statement
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox67}
                              onChange={handleCheckboxChange("checkbox67")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.13: Political Contributions
                            </p>
                          </div>

                          <div className=" flex gap-2 w-[85%] mx-auto pt-2 pb-0">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox68}
                              onChange={handleCheckboxChange("checkbox68")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.14: Payroll
                            </p>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="border-b-[1px] border-[#D8D8D8] py-3">
                      <div className="flex justify-between">
                        <p className="mt-[2px] self-center nun font-normal text-[#121F2C] dark:text-white text-[14px]">
                          Credit Union Custom Content
                        </p>
                        <div className="flex gap-4">
                          <Switch
                            id="switch5"
                            checked={openAccordionId === "switch5"}
                            onChange={() => handleSwitchChange("switch5")}
                            className="group relative flex h-7 w-11 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] bg-white p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#4CD964]"
                          >
                            <span
                              aria-hidden="true"
                              className="pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-3"
                            />
                          </Switch>

                          <IoIosArrowDown className="text-[20px] self-center cursor-pointer dark:text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="border-b-[1px] border-[#D8D8D8] py-3">
                      <div className="flex justify-between cursor-pointer">
                        <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px] md:text-[18px]">
                          RecoveryPro
                        </p>
                      </div>

                      <div
                        onClick={() => setInfo(!info)}
                        className="flex justify-between mt-2"
                      >
                        <p className="mt-[2px] self-center nun font-normal text-[#121F2C] dark:text-white text-[14px] md:text-[16px]">
                          Model Content
                        </p>
                        <div className="flex gap-4">
                          <Switch
                            id="switch3"
                            checked={
                              isSwitch3Active || openAccordionId === "switch3"
                            }
                            onChange={() => handleSwitchChange("switch3")}
                            className={`group relative flex h-7 w-11 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
                              isSwitch3Active || openAccordionId === "switch3"
                                ? "bg-[#4CD964]"
                                : "bg-white"
                            }`}
                          >
                            <span
                              aria-hidden="true"
                              className={`pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out ${
                                isSwitch3Active || openAccordionId === "switch3"
                                  ? "translate-x-3"
                                  : "-translate-x-1"
                              }`}
                            />
                          </Switch>

                          {openAccor === "switch3" ? (
                            <IoIosArrowUp
                              className="text-[20px] self-center cursor-pointer dark:text-white"
                              onClick={() => handleSwitch("switch3")}
                            />
                          ) : (
                            <IoIosArrowDown
                              className="text-[20px] self-center cursor-pointer dark:text-white"
                              onClick={() => handleSwitch("switch3")}
                            />
                          )}
                        </div>
                      </div>

                      {openAccordionId === "switch3" && (
                        <>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 md:w-[95%] mx-auto pt-5 pb-2">
                            <input
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAllChange}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                              Select All
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 md:w-[95%] mx-auto py-3">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox25}
                              onChange={handleCheckboxChange("checkbox25")}
                              className="self-center"
                            />
                            <p className="nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                              Chapter 1000: Administrative
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className=" flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox26}
                                onChange={handleCheckboxChange("checkbox26")}
                                className="mt-[3px] md:mt-0 md:self-center"
                              />
                              <p className="hidden md:block nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1100: Credit Union Culture and Governance
                              </p>
                              <p className="w-[90%] block md:hidden nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1100: Credit Union <br /> Culture and
                                Governance
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="md:self-center nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox27 &&
                                  checkboxes.checkbox28 &&
                                  checkboxes.checkbox29 &&
                                  checkboxes.checkbox30 &&
                                  checkboxes.checkbox31 &&
                                  checkboxes.checkbox32 &&
                                  checkboxes.checkbox33 &&
                                  checkboxes.checkbox34 &&
                                  checkboxes.checkbox35 &&
                                  checkboxes.checkbox36
                                }
                                onChange={handleSubContentChange(
                                  "checkbox27",
                                  "checkbox36"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox27}
                              onChange={handleCheckboxChange("checkbox27")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.10: Organization
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox28}
                              onChange={handleCheckboxChange("checkbox28")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.11: Field of Membership
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox29}
                              onChange={handleCheckboxChange("checkbox29")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.12: Board of Directors Duties
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox30}
                              onChange={handleCheckboxChange("checkbox30")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.13: Compensation and Indemnification
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox31}
                              onChange={handleCheckboxChange("checkbox31")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.14: Bond and Insurance Coverage
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox32}
                              onChange={handleCheckboxChange("checkbox32")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.15: Education and Training Guidelines
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox33}
                              onChange={handleCheckboxChange("checkbox33")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.16: Strategic Planning
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox34}
                              onChange={handleCheckboxChange("checkbox34")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.17: Audits
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox35}
                              onChange={handleCheckboxChange("checkbox35")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.18: Legal Counsel
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox36}
                              onChange={handleCheckboxChange("checkbox36")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.19: Code of Ethics and Diversity
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox37}
                                onChange={handleCheckboxChange("checkbox37")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1200: Regulatory Compliance
                              </p>
                              <p className="block md:hidden nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1200: Regulatory <br /> Compliance
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="nun font-medium text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox38 &&
                                  checkboxes.checkbox39 &&
                                  checkboxes.checkbox40
                                }
                                onChange={handleSubContentChange(
                                  "checkbox38",
                                  "checkbox40"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox38}
                              onChange={handleCheckboxChange("checkbox38")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1230.10: Complaint Process for Federally
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox39}
                              onChange={handleCheckboxChange("checkbox39")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1230.11: State-Chartered Credit Unions
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox40}
                                onChange={handleCheckboxChange("checkbox40")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="block md:hidden nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1230: Enterprise Risk Management <br />{" "}
                                (Policy 1240)
                              </p>
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1230: Enterprise Risk Management (Policy
                                1240)
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox41}
                                onChange={handleCheckboxChange("checkbox41")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="block md:hidden nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1300: Staffing <br /> Resources (Policy
                                1500)
                              </p>
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1300: Staffing and Human Resources
                                (Policy 1500)
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox42 &&
                                  checkboxes.checkbox43 &&
                                  checkboxes.checkbox44 &&
                                  checkboxes.checkbox45 &&
                                  checkboxes.checkbox46 &&
                                  checkboxes.checkbox47
                                }
                                onChange={handleSubContentChange(
                                  "checkbox42",
                                  "checkbox47"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox42}
                              onChange={handleCheckboxChange("checkbox42")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.10: Whistleblowing Protection
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox43}
                              onChange={handleCheckboxChange("checkbox43")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.11: Nepotism
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox44}
                              onChange={handleCheckboxChange("checkbox44")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.12: Equal Opportunity Statement
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox45}
                              onChange={handleCheckboxChange("checkbox45")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.13: Political Contributions
                            </p>
                          </div>

                          <div className=" flex gap-2 w-[85%] mx-auto pt-2 pb-0">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox46}
                              onChange={handleCheckboxChange("checkbox46")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.14: Payroll
                            </p>
                          </div>
                        </>
                      )}

                      {openAccor === "switch3" && (
                        <>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 md:w-[95%] mx-auto pt-5 pb-2">
                            <input
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAllChange}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                              Select All
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 md:w-[95%] mx-auto py-3">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox25}
                              onChange={handleCheckboxChange("checkbox25")}
                              className="self-center"
                            />
                            <p className="nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                              Chapter 1000: Administrative
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className=" flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox26}
                                onChange={handleCheckboxChange("checkbox26")}
                                className="mt-[3px] md:mt-0 md:self-center"
                              />
                              <p className="hidden md:block nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1100: Credit Union Culture and Governance
                              </p>
                              <p className="w-[90%] block md:hidden nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1100: Credit Union <br /> Culture and
                                Governance
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="md:self-center nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox27 &&
                                  checkboxes.checkbox28 &&
                                  checkboxes.checkbox29 &&
                                  checkboxes.checkbox30 &&
                                  checkboxes.checkbox31 &&
                                  checkboxes.checkbox32 &&
                                  checkboxes.checkbox33 &&
                                  checkboxes.checkbox34 &&
                                  checkboxes.checkbox35 &&
                                  checkboxes.checkbox36
                                }
                                onChange={handleSubContentChange(
                                  "checkbox27",
                                  "checkbox36"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox27}
                              onChange={handleCheckboxChange("checkbox27")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.10: Organization
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox28}
                              onChange={handleCheckboxChange("checkbox28")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.11: Field of Membership
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox29}
                              onChange={handleCheckboxChange("checkbox29")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.12: Board of Directors Duties
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox30}
                              onChange={handleCheckboxChange("checkbox30")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.13: Compensation and Indemnification
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox31}
                              onChange={handleCheckboxChange("checkbox31")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.14: Bond and Insurance Coverage
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox32}
                              onChange={handleCheckboxChange("checkbox32")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.15: Education and Training Guidelines
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox33}
                              onChange={handleCheckboxChange("checkbox33")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.16: Strategic Planning
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox34}
                              onChange={handleCheckboxChange("checkbox34")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.17: Audits
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox35}
                              onChange={handleCheckboxChange("checkbox35")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.18: Legal Counsel
                            </p>
                          </div>
                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox36}
                              onChange={handleCheckboxChange("checkbox36")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1100.19: Code of Ethics and Diversity
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox37}
                                onChange={handleCheckboxChange("checkbox37")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1200: Regulatory Compliance
                              </p>
                              <p className="block md:hidden nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1200: Regulatory <br /> Compliance
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="nun font-medium text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox38 &&
                                  checkboxes.checkbox39 &&
                                  checkboxes.checkbox40
                                }
                                onChange={handleSubContentChange(
                                  "checkbox38",
                                  "checkbox40"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox38}
                              onChange={handleCheckboxChange("checkbox38")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1230.10: Complaint Process for Federally
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[90%] md:w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox39}
                              onChange={handleCheckboxChange("checkbox39")}
                              className="mt-[2px] md:mt-0 md:self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1230.11: State-Chartered Credit Unions
                            </p>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox40}
                                onChange={handleCheckboxChange("checkbox40")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="block md:hidden nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1230: Enterprise Risk Management <br />{" "}
                                (Policy 1240)
                              </p>
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1230: Enterprise Risk Management (Policy
                                1240)
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between border-b-[1px] border-[#E5E5EA] w-[95%] md:w-[90%] mx-auto py-3">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                checked={checkboxes.checkbox41}
                                onChange={handleCheckboxChange("checkbox41")}
                                className="mt-[2px] md:mt-0 md:self-center"
                              />
                              <p className="block md:hidden nun font-medium text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1300: Staffing <br /> Resources (Policy
                                1500)
                              </p>
                              <p className="hidden md:block nun font-semibold text-[#7A7B7C] text-[14px] md:text-[16px]">
                                Policy 1300: Staffing and Human Resources
                                (Policy 1500)
                              </p>
                            </div>
                            <div className="flex gap-2 mt-1 md:mt-0">
                              <p className="nun font-normal text-[#3076B1] text-[12px] md:text-[14px]">
                                All sub-content
                              </p>

                              <input
                                type="checkbox"
                                checked={
                                  checkboxes.checkbox42 &&
                                  checkboxes.checkbox43 &&
                                  checkboxes.checkbox44 &&
                                  checkboxes.checkbox45 &&
                                  checkboxes.checkbox46 &&
                                  checkboxes.checkbox47
                                }
                                onChange={handleSubContentChange(
                                  "checkbox42",
                                  "checkbox47"
                                )}
                                className="md:self-center"
                              />
                            </div>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox42}
                              onChange={handleCheckboxChange("checkbox42")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.10: Whistleblowing Protection
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox43}
                              onChange={handleCheckboxChange("checkbox43")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.11: Nepotism
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox44}
                              onChange={handleCheckboxChange("checkbox44")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.12: Equal Opportunity Statement
                            </p>
                          </div>

                          <div className="border-b-[1px] border-[#E5E5EA] flex gap-2 w-[85%] mx-auto py-2">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox45}
                              onChange={handleCheckboxChange("checkbox45")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.13: Political Contributions
                            </p>
                          </div>

                          <div className=" flex gap-2 w-[85%] mx-auto pt-2 pb-0">
                            <input
                              type="checkbox"
                              checked={checkboxes.checkbox46}
                              onChange={handleCheckboxChange("checkbox46")}
                              className="self-center"
                            />
                            <p className="nun font-normal text-[#7A7B7C] text-[14px] md:text-[16px]">
                              1500.14: Payroll
                            </p>
                          </div>
                        </>
                      )}
                    </div>

                    <div className=" py-3">
                      <div className="flex justify-between">
                        <p className="mt-[2px] self-center nun font-normal text-[#121F2C] dark:text-white text-[14px] md:text-[16px]">
                          Credit Union Custom Content
                        </p>
                        <div className="flex gap-4">
                          <Switch
                            onChange={setEnabled}
                            className="group relative flex h-7 w-11 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] bg-white p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#4CD964]"
                          >
                            <span
                              aria-hidden="true"
                              className="pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-3"
                            />
                          </Switch>
                          <IoIosArrowDown className="text-[20px] self-center cursor-pointer  dark:text-white" />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <Footer />
          </>
        ) : (
          <div className="w-full h-full flex justify-between px-3 mt-3 items-center">
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                All
              </p>
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
