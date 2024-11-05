import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  IoMdArrowDropdown,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";

interface Item {
  id: number;
  filePath: string;
  title: string;
  author: string;
  date: string;
}

const tasks = [
  {
    id: 1,
    title: "Policy Spell Review for account introd...",
    assignee: "Beth Elizabeth",
    date: "01/26/2024",
    status: "Overdue",
    statusColor: "white",
    statusBgColor: "#B30000",
    fileColor: "#AD7EFB",
  },
  {
    id: 2,
    title: "Review New Lending Policy Changes",
    assignee: "Beth Elizabeth",
    date: "01/26/2024",
    status: "In Progress",
    statusColor: "#CA9307",
    statusBgColor: "#f8f6de",
    fileColor: "#AD7EFB",
  },
  {
    id: 3,
    title: "Review New Lending Policy Changes",
    assignee: "Beth Elizabeth",
    date: "01/26/2024",
    status: "Not Started",
    statusColor: "#5D5C5C",
    statusBgColor: "#44424212",
    fileColor: "#FFDF36",
  },
];

const tasksTwo = [
  {
    id: 1,
    title: "Policy Spell Review for account introd...",
    assignee: "Beth Elizabeth",
    date: "01/26/2024",
    status: "Overdue",
    statusColor: "white",
    statusBgColor: "#B30000",
    fileColor: "#AD7EFB",
  },
  {
    id: 2,
    title: "Review New Lending Policy Changes",
    assignee: "Beth Elizabeth",
    date: "01/26/2024",
    status: "In Progress",
    statusColor: "#CA9307",
    statusBgColor: "#f8f6de",
    fileColor: "#AD7EFB",
  },
  {
    id: 3,
    title: "Review New Lending Policy Changes",
    assignee: "Beth Elizabeth",
    date: "01/26/2024",
    status: "Not Started",
    statusColor: "#5D5C5C",
    statusBgColor: "#44424212",
    fileColor: "#AD7EFB",
  },
];

export default function Section3({
  handleAccordionClick,
  isAccordionOpen,
}: any) {
  const [assign, setAssign] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [accordionOpen, setAccordionOpen] = useState(false); // Accordion state
  const [openDropdown, setOpenDropdown] = useState<{ [key: number]: boolean }>(
    {}
  );

  const [taskStatus, setTaskStatus] = useState<{
    [key: number]: { status: string; color: string; bgColor: string };
  }>(
    tasks.reduce((acc, task) => {
      acc[task.id] = {
        status: task.status,
        color: task.statusColor,
        bgColor: task.statusBgColor,
      };
      return acc;
    }, {} as { [key: number]: { status: string; color: string; bgColor: string } })
  );

  const toggleAccordion = () => {
    setAccordionOpen((prevState) => !prevState); // Toggle accordion state
  };

  const toggleDropdowns = (taskId: number) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const handleSelectAction = (
    taskId: number,
    status: string,
    color: string,
    bgColor: string
  ) => {
    setTaskStatus((prev) => ({
      ...prev,
      [taskId]: { status, color, bgColor },
    }));
    setOpenDropdown((prev) => ({
      ...prev,
      [taskId]: false, // Close the dropdown after selection
    }));
  };

  const handleAssign = (tabIndex: any) => {
    setAssign(tabIndex);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* section 3   */}

      <div className="bg-white dark:bg-black md:dark:border-[1px] md:dark:border-white md:rounded-[7px] p-[15px] drop-shadow-sm md:mt-5 border-t-[1px] border-[#f2f2f2] md:border-transparent">
        <div className="flex justify-between">
          <p className="nun font-semibold text-[#121F2C] dark:text-white  text-[16px] xl:text-[18px]">
            Assignments
          </p>

          <div className="hidden md:flex gap-5">
            <Link
              href={"/manage-assignments"}
              className="self-center flex gap-2"
            >
              <p className="nun font-semibold text-[12px] cursor-pointer text-[#3076B1]">
                See All
              </p>
              <FaArrowRight className="self-center text-[14px] text-[#3076B1] cursor-pointer" />
            </Link>

            <Image
              src={"/assets/svg/dots.svg"}
              alt=""
              width={24}
              height={24}
              className="self-center cursor-pointer"
            />
          </div>
          {!accordionOpen && (
            <IoIosArrowDown
              onClick={toggleAccordion}
              className="text-[#121F2C] dark:text-white text-[25px] block md:hidden"
            />
          )}
          {/* This will render the up arrow when the accordion is open */}
          {accordionOpen && (
            <IoIosArrowUp
              onClick={toggleAccordion}
              className="text-[#121F2C] dark:text-white text-[25px] block md:hidden"
            />
          )}
        </div>

        {/* Accordion for Mobile */}
        {accordionOpen && (
          <div className="md:hidden">
            <div className="my-5 flex gap-5">
              <button
                className={
                  assign === 1
                    ? "active tab nun bg-[#EEF5FF] font-semibold text-[14px] text-[#3076B1] border-[1px] border-[#3076B1] rounded-full py-[5px] w-full"
                    : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white border-[1px] border-[#3076B1] rounded-full py-[5px] w-full"
                }
                onClick={() => handleAssign(1)}
              >
                Assigned to me
              </button>
              <button
                className={
                  assign === 2
                    ? "active tab nun bg-[#f6f2fb] font-semibold text-[14px] text-[#AD7EFB] border-[1px] border-[#AD7EFB] rounded-full py-[5px] w-full"
                    : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white border-[1px] border-[#AD7EFB] rounded-full py-[5px] w-full"
                }
                onClick={() => handleAssign(2)}
              >
                Assigned to others
              </button>
            </div>

            {assign === 1 && (
              <div>
                <div className="mt-2">
                  {tasks.map((task, index) => (
                    <div
                      key={task.id}
                      className={`relative grid md:grid-cols-12 ${
                        index !== tasks.length - 1
                          ? "border-b-[1px] border-[#F5F5F5]"
                          : ""
                      } py-2`}
                    >
                      <div className="md:col-span-5 flex gap-2">
                        <button
                          className="rounded-[3px] w-[30px] h-[30px]"
                          style={{ backgroundColor: task.fileColor }}
                        >
                          <Image
                            src={"/assets/png/file.png"}
                            alt=""
                            width={14}
                            height={18}
                            className="mx-auto"
                          />
                        </button>
                        <div>
                          <p className=" nun font-normal text-[#3076B1] text-[14px]  self-center truncate max-w-52 md:max-w-xs">
                            {task.title}
                          </p>
                          <p className="block md:hidden nun font-normal text-black dark:text-white text-[14px] ">
                            {task.assignee}
                          </p>
                          <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                            {task.date}
                          </p>
                        </div>
                      </div>

                      <div className="hidden md:block md:col-span-3 self-center">
                        <p className="nun font-normal text-black dark:text-white text-[14px] ">
                          {task.assignee}
                        </p>
                      </div>
                      <div className="hidden md:block md:col-span-2 self-center">
                        <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                          {task.date}
                        </p>
                      </div>

                      <div className="absolute top-2 right-0 md:flex gap-2 md:col-span-2">
                        <button
                          className="nun font-semibold text-[12px] lg:text-[10px] xl:text-[12px] py-[5px] md:py-[8px] px-[10px] rounded-full w-full"
                          style={{
                            color: task.statusColor,
                            backgroundColor: task.statusBgColor,
                          }}
                        >
                          {task.status}
                        </button>
                        <IoIosArrowDown className="hidden md:block text-[#7A7B7C] dark:text-white text-[22px] cursor-pointer self-center" />
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href={"/manage-assignments"}
                  className="self-center flex justify-end md:hidden gap-2 mt-5"
                >
                  <p className="nun font-semibold text-[12px] cursor-pointer text-[#3076B1]">
                    See All
                  </p>
                  <FaArrowRight className="self-center text-[14px] text-[#3076B1] cursor-pointer" />
                </Link>
              </div>
            )}

            {assign === 2 && (
              <div>
                <div className="mt-2">
                  {tasksTwo.map((task, index) => (
                    <div
                      key={task.id}
                      className={`relative grid md:grid-cols-12 ${
                        index !== tasks.length - 1
                          ? "border-b-[1px] border-[#F5F5F5]"
                          : ""
                      } py-2`}
                    >
                      <div className="md:col-span-5 flex gap-2">
                        <button
                          className="rounded-[3px] w-[30px] h-[30px]"
                          style={{ backgroundColor: task.fileColor }}
                        >
                          <Image
                            src={"/assets/png/file.png"}
                            alt=""
                            width={14}
                            height={18}
                            className="mx-auto"
                          />
                        </button>
                        <div>
                          <p className=" nun font-normal text-[#3076B1] text-[14px]  self-center truncate max-w-52 md:max-w-xs">
                            {task.title}
                          </p>
                          <p className="block md:hidden nun font-normal text-black dark:text-white text-[14px] ">
                            {task.assignee}
                          </p>
                          <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                            {task.date}
                          </p>
                        </div>
                      </div>

                      <div className="hidden md:block md:col-span-3 self-center">
                        <p className="nun font-normal text-black dark:text-white text-[14px] ">
                          {task.assignee}
                        </p>
                      </div>
                      <div className="hidden md:block md:col-span-2 self-center">
                        <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                          {task.date}
                        </p>
                      </div>

                      <div className="absolute top-2 right-0 md:flex gap-2 md:col-span-2">
                        <button
                          className="nun font-semibold text-[12px] lg:text-[10px] xl:text-[12px] py-[5px] md:py-[8px] px-[10px] rounded-full w-full"
                          style={{
                            color: task.statusColor,
                            backgroundColor: task.statusBgColor,
                          }}
                        >
                          {task.status}
                        </button>
                        <IoIosArrowDown className="hidden md:block text-[#7A7B7C] dark:text-white text-[22px] cursor-pointer self-center" />
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href={"/manage-assignments"}
                  className="self-center flex justify-end md:hidden gap-2 mt-5"
                >
                  <p className="nun font-semibold text-[12px] cursor-pointer text-[#3076B1]">
                    See All
                  </p>
                  <FaArrowRight className="self-center text-[14px] text-[#3076B1] cursor-pointer" />
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Desktop View (always visible on larger screens) */}
        <div className="hidden md:block">
          <div className="my-5 flex gap-5">
            <button
              className={
                assign === 1
                  ? "active tab nun bg-[#EEF5FF] font-semibold text-[14px] text-[#3076B1] border-[1px] border-[#3076B1] rounded-full py-[5px] w-full"
                  : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white border-[1px] border-[#3076B1] rounded-full py-[5px] w-full"
              }
              onClick={() => handleAssign(1)}
            >
              Assigned to me
            </button>
            <button
              className={
                assign === 2
                  ? "active tab nun bg-[#f6f2fb] font-semibold text-[14px] text-[#AD7EFB] border-[1px] border-[#AD7EFB] rounded-full py-[5px] w-full"
                  : "tab nun  font-semibold text-[14px] text-[#121F2C] dark:text-white  border-[1px] border-[#AD7EFB] rounded-full py-[5px] w-full"
              }
              onClick={() => handleAssign(2)}
            >
              Assigned to others
            </button>
          </div>

          {assign === 1 && (
            <div>
              <div className="hidden md:grid grid-cols-12">
                <div className="col-span-5">
                  <p className="nun font-normal text-[#8F8E8E] dark:text-white text-[14px]">
                    Assignments
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="nun font-normal text-[#8F8E8E] dark:text-white text-[14px]">
                    Assigned by
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="nun font-normal text-[#8F8E8E] dark:text-white text-[14px]">
                    Due Date
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="nun font-normal text-[#8F8E8E] dark:text-white text-[16px]"></p>
                </div>
              </div>

              <div className="mt-2">
                {tasks.map((task, index) => (
                  <div
                    key={task.id}
                    className={`relative grid md:grid-cols-12 ${
                      index !== tasks.length - 1
                        ? "border-b-[1px] border-[#F5F5F5]"
                        : ""
                    } py-2`}
                  >
                    <div className="md:col-span-5 flex gap-2">
                      <button
                        className="rounded-[3px] w-[30px] h-[30px]"
                        style={{ backgroundColor: task.fileColor }}
                      >
                        <Image
                          src={"/assets/png/file.png"}
                          alt=""
                          width={14}
                          height={18}
                          className="mx-auto"
                        />
                      </button>
                      <div className="self-center">
                        <p className=" nun font-normal text-[#3076B1] text-[14px]  self-center truncate max-w-52 md:max-w-xs">
                          {task.title}
                        </p>
                        <p className="block md:hidden nun font-normal text-black dark:text-white text-[14px] ">
                          {task.assignee}
                        </p>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                          {task.date}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:block md:col-span-3 self-center">
                      <p className="nun font-normal text-black dark:text-white text-[14px] ">
                        {task.assignee}
                      </p>
                    </div>
                    <div className="hidden md:block md:col-span-2 self-center">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                        {task.date}
                      </p>
                    </div>

                    <div className="relative md:col-span-2">
                      <div className="md:flex gap-2 ">
                        <button
                          className="nun font-semibold text-[12px] lg:text-[10px] xl:text-[12px] py-[5px] md:py-[8px] px-[10px] rounded-full w-full"
                          style={{
                            color: taskStatus[task.id].color,
                            backgroundColor: taskStatus[task.id].bgColor,
                          }}
                          onClick={() => toggleDropdowns(task.id)}
                        >
                          {taskStatus[task.id].status}
                        </button>
                        <IoIosArrowDown
                          className="hidden md:block text-[#7A7B7C] dark:text-white text-[22px] cursor-pointer self-center"
                          onClick={() => toggleDropdowns(task.id)}
                        />
                      </div>

                      {/* Dropdown Menu */}
                      {openDropdown[task.id] && (
                        <div className="absolute right-0 mt-2 w-[150px] p-2 bg-white dark:bg-black border-[1px] border-[#E2E2E2] shadow-sm rounded-lg z-10">
                          <button
                            className="bg-[#B30000] text-white nun font-semibold text-[12px] lg:text-[10px] xl:text-[12px] py-[5px] md:py-[8px] px-[10px] rounded-full w-full"
                            onClick={() =>
                              handleSelectAction(
                                task.id,
                                "Overdue",
                                "white",
                                "#B30000"
                              )
                            }
                          >
                            Overdue
                          </button>
                          <button
                            className="mt-2 bg-[#fbf7ee] text-[#CA9307] nun font-semibold text-[12px] lg:text-[10px] xl:text-[12px] py-[5px] md:py-[8px] px-[10px] rounded-full w-full"
                            onClick={() =>
                              handleSelectAction(
                                task.id,
                                "In Progress",
                                "#CA9307",
                                "#fbf7ee"
                              )
                            }
                          >
                            In Progress
                          </button>
                          <button
                            className="mt-2 bg-[#f2f2f2] text-[#5D5C5C] nun font-semibold text-[12px] lg:text-[10px] xl:text-[12px] py-[5px] md:py-[8px] px-[10px] rounded-full w-full"
                            onClick={() =>
                              handleSelectAction(
                                task.id,
                                "Not Started",
                                "#5D5C5C",
                                "#f2f2f2"
                              )
                            }
                          >
                            Not Started
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {assign === 2 && (
            <div>
              <div className="hidden md:grid grid-cols-12">
                <div className="col-span-5">
                  <p className="nun font-normal text-[#8F8E8E] dark:text-white text-[14px]">
                    Assignments
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="nun font-normal text-[#8F8E8E] dark:text-white text-[14px]">
                    Assigned by
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="nun font-normal text-[#8F8E8E] dark:text-white text-[14px]">
                    Due Date
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="nun font-normal text-[#8F8E8E] dark:text-white text-[16px]"></p>
                </div>
              </div>

              <div className="mt-2">
                {tasksTwo.map((task, index) => (
                  <div
                    key={task.id}
                    className={`relative grid md:grid-cols-12 ${
                      index !== tasks.length - 1
                        ? "border-b-[1px] border-[#F5F5F5]"
                        : ""
                    } py-2`}
                  >
                    <div className="md:col-span-5 flex gap-2">
                      <button
                        className="rounded-[3px] w-[30px] h-[30px]"
                        style={{ backgroundColor: task.fileColor }}
                      >
                        <Image
                          src={"/assets/png/file.png"}
                          alt=""
                          width={14}
                          height={18}
                          className="mx-auto"
                        />
                      </button>
                      <div className="self-center">
                        <p className=" nun font-normal text-[#3076B1] text-[14px]  self-center truncate max-w-52 md:max-w-xs">
                          {task.title}
                        </p>
                        <p className="block md:hidden nun font-normal text-black dark:text-white text-[14px] ">
                          {task.assignee}
                        </p>
                        <p className="block md:hidden nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                          {task.date}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:block md:col-span-3 self-center">
                      <p className="nun font-normal text-black dark:text-white text-[14px] ">
                        {task.assignee}
                      </p>
                    </div>
                    <div className="hidden md:block md:col-span-2 self-center">
                      <p className="nun font-normal text-[#7A7B7C] dark:text-white text-[12px] ">
                        {task.date}
                      </p>
                    </div>

                    <div className="relative md:col-span-2">
                      <div className="md:flex gap-2 ">
                        <button
                          className="nun font-semibold text-[12px] lg:text-[10px] xl:text-[12px] py-[5px] md:py-[8px] px-[10px] rounded-full w-full"
                          style={{
                            color: taskStatus[task.id].color,
                            backgroundColor: taskStatus[task.id].bgColor,
                          }}
                          onClick={() => toggleDropdowns(task.id)}
                        >
                          {taskStatus[task.id].status}
                        </button>
                        <IoIosArrowDown
                          className="hidden md:block text-[#7A7B7C] dark:text-white text-[22px] cursor-pointer self-center"
                          onClick={() => toggleDropdowns(task.id)}
                        />
                      </div>

                      {/* Dropdown Menu */}
                      {openDropdown[task.id] && (
                        <div className="absolute right-0 mt-2 w-[150px] p-2 bg-white dark:bg-black border-[1px] border-[#E2E2E2] shadow-sm rounded-lg z-10">
                          <button
                            className="bg-[#B30000] text-white nun font-semibold text-[12px] lg:text-[10px] xl:text-[12px] py-[5px] md:py-[8px] px-[10px] rounded-full w-full"
                            onClick={() =>
                              handleSelectAction(
                                task.id,
                                "Overdue",
                                "white",
                                "#B30000"
                              )
                            }
                          >
                            Overdue
                          </button>
                          <button
                            className="mt-2 bg-[#fbf7ee] text-[#CA9307] nun font-semibold text-[12px] lg:text-[10px] xl:text-[12px] py-[5px] md:py-[8px] px-[10px] rounded-full w-full"
                            onClick={() =>
                              handleSelectAction(
                                task.id,
                                "In Progress",
                                "#CA9307",
                                "#fbf7ee"
                              )
                            }
                          >
                            In Progress
                          </button>
                          <button
                            className="mt-2 bg-[#f2f2f2] text-[#5D5C5C] nun font-semibold text-[12px] lg:text-[10px] xl:text-[12px] py-[5px] md:py-[8px] px-[10px] rounded-full w-full"
                            onClick={() =>
                              handleSelectAction(
                                task.id,
                                "Not Started",
                                "#5D5C5C",
                                "#f2f2f2"
                              )
                            }
                          >
                            Not Started
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
