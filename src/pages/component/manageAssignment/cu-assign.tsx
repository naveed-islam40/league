import Image from "next/image";
import React, { Fragment, use, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import SelectContent from "./selectContent";
import CalendarPopup from "./calandar";
import SelectMenu from "../manageUser/select";

export default function CuAssign() {
  const [addAssignment, setAddAssignment] = useState(false);
  const sortOptions = ["InfoSight", "InfoSight"];
  const [selectedProduct, setSelectedProduct] = useState<string>(
    sortOptions[0]
  );

  const sortType = ["Document Review"];
  const [selectedType, setSelectedType] = useState<string>(sortType[0]);

  const sortRepeat = ["1", "2", "3"];
  const [selectedRepeat, setSelectedRepeat] = useState<string>(sortRepeat[0]);

  const sortMonth = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [selectedMonth, setSelectedMonth] = useState<string>(sortMonth[0]);

  return (
    <>
      <Image
        onClick={() => setAddAssignment(true)}
        src={"/assets/svg/btn-base.svg"}
        alt=""
        title="Add Assignment"
        width={24}
        height={24}
        className="self-center cursor-pointer hidden md:block"
      />

      <Transition.Root show={addAssignment} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setAddAssignment}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
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
                      <div className="dark:bg-black absolute top-0 left-0 w-full mt-1 h-[100vh] pb-40 overflow-y-scroll">
                        <div className="fixed z-30 w-full dark:bg-black bg-white">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="flex justify-between py-4 px-6 ">
                            <p className="nun font-bold text-[18px] dark:text-white text-[#14142B]">
                              Add Assignment
                            </p>
                            <Image
                              onClick={() => setAddAssignment(false)}
                              src={"/assets/svg/cross.svg"}
                              alt=""
                              width={40}
                              height={40}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="pl-6 pr-8 pb-10 mt-20">
                          <div className="flex gap-8">
                            <div className="w-[70%]">
                              <p className="font-normal text-[14px] dark:text-white text-[#121F2C]">
                                Assignment Name *
                              </p>
                              <input
                                type="text"
                                className="outline-none w-full border-[1px] border-[#D9D9D9] rounded-[5px] py-[11px] px-[15px]  mt-2"
                              />
                            </div>

                            <div className="w-[30%] ">
                              <p className="font-normal text-[14px] dark:text-white text-[#121F2C]">
                                Type *
                              </p>
                              <SelectMenu
                                options={sortType}
                                selectedType={selectedType}
                                onSelectType={setSelectedType}
                              />
                            </div>
                          </div>

                          <div className="mt-10">
                            <p className="font-normal dark:text-white text-[#3D4349] text-[14px]">
                              User(s) Assigned *
                              <span className="font-normal text-[#3076B1] text-[14px] ml-3">
                                Select Users
                              </span>
                            </p>
                            <div className="flex gap-2 mt-5">
                              <button className="dark:text-white bg-[#EFEFEF99] rounded-[6px] py-[5px] px-[10px] flex gap-4 font-normal text-[#121212] text-[14px]">
                                Keith Wayman
                                <RxCross2 className="dark:text-white text-[#7A7B7C] self-center text-[14px] mt-[1px]" />
                              </button>
                              <button className="dark:text-white bg-[#EFEFEF99] rounded-[6px] py-[5px] px-[10px] flex gap-4 font-normal text-[#121212] text-[14px]">
                                Keith Wayman
                                <RxCross2 className="dark:text-white text-[#7A7B7C] self-center text-[14px] mt-[1px]" />
                              </button>
                              <button className="dark:text-white bg-[#EFEFEF99] rounded-[6px] py-[5px] px-[10px] flex gap-4 font-normal text-[#121212] text-[14px]">
                                Keith Wayman
                                <RxCross2 className="dark:text-white text-[#7A7B7C] self-center text-[14px] mt-[1px]" />
                              </button>
                              <button className="dark:text-white bg-[#EFEFEF99] rounded-[6px] py-[5px] px-[10px] flex gap-4 font-normal text-[#121212] text-[14px]">
                                Keith Wayman
                                <RxCross2 className="dark:text-white text-[#7A7B7C] self-center text-[14px] mt-[1px]" />
                              </button>
                              <button className="dark:text-white bg-[#EFEFEF99] rounded-[6px] py-[5px] px-[10px] flex gap-4 font-normal text-[#121212] text-[14px]">
                                Keith Wayman
                                <RxCross2 className="dark:text-white text-[#7A7B7C] self-center text-[14px] mt-[1px]" />
                              </button>
                            </div>
                          </div>

                          <div className="xl:flex gap-10 mt-6">
                            <div className="flex gap-3">
                              <div className="">
                                <p className="font-normal text-[14px] dark:text-white text-[#121F2C]">
                                  Due Date *
                                </p>
                                <div className="dark:bg-white w-[300px] border-[1px] border-[#D9D9D9] rounded-[5px] py-[13px] px-[15px]  mt-2">
                                  <CalendarPopup />
                                </div>
                              </div>

                              <div className="flex gap-2  mt-11">
                                <input type="checkbox" className="mt-[2px] " />
                                <p className=" dark:text-white font-normal text-[#121212] text-[12px] mt-[2px]">
                                  Recurring Task
                                </p>
                              </div>
                            </div>

                            <div>
                              <div className="flex gap-2 self-center mt-[22px]">
                                <p className="dark:text-white self-center font-normal text-[#121212] text-[12px] mt-3">
                                  Recurring Task
                                </p>

                                <div className="w-[90px]">
                                  <SelectMenu
                                    options={sortRepeat}
                                    selectedType={selectedRepeat}
                                    onSelectType={setSelectedRepeat}
                                  />
                                </div>

                                <div className="w-[140px]">
                                  <SelectMenu
                                    options={sortMonth}
                                    selectedType={selectedMonth}
                                    onSelectType={setSelectedMonth}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-5">
                              <p className=" font-normal text-[#121212] text-[12px] mt-11 ">
                                Ends on
                              </p>
                              <div className="">
                                <p className="dark:text-black font-normal text-[14px] text-white">
                                  .
                                </p>
                                <div className="dark:bg-white w-[200px] border-[1px] border-[#D9D9D9] rounded-[5px] py-[13px] px-[15px]  mt-2">
                                  <CalendarPopup />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex xl:justify-center gap-2 self-center mt-[22px]">
                            <p className="dark:text-white self-center font-normal text-[#121212] text-[12px] mt-3">
                              Create Next Assignemnt
                            </p>
                            <div className="w-[90px]">
                              <SelectMenu
                                options={sortRepeat}
                                selectedType={selectedRepeat}
                                onSelectType={setSelectedRepeat}
                              />
                            </div>

                            <div className="w-[140px]">
                              <SelectMenu
                                options={sortMonth}
                                selectedType={selectedMonth}
                                onSelectType={setSelectedMonth}
                              />
                            </div>

                            <p className="dark:text-white self-center font-normal text-[#121212] text-[12px] mt-3">
                              before next due date
                            </p>
                          </div>

                          <div className="mt-5">
                            <p className="dark:text-white font-normal text-[14px] text-[#121F2C]">
                              Add Notes
                            </p>
                            <textarea className="h-[120px] w-full border-[1px] border-[#D9D9D9] rounded-[5px] py-[12px] px-[15px]  mt-2"></textarea>
                          </div>

                          <div className="mt-5">
                            <p className="dark:text-white font-normal text-[14px] text-[#121F2C]">
                              Additional Notes
                            </p>
                            <textarea className="h-[80px] w-full border-[1px] border-[#D9D9D9] rounded-[5px] py-[12px] px-[15px]  mt-2"></textarea>
                          </div>

                          <div className="mt-5">
                            <p className="dark:text-white font-bold text-[16px] text-[#3D4349]">
                              Notifications Settings
                            </p>
                            <p className="dark:text-white font-normal text-[12px] text-[#3D4349] mt-1">
                              Assigned User will receive an initial notification
                              email upon the creation of the assignment.
                              Additional notifications are available as options
                              below and apply only if the assignment has not
                              been completed.
                            </p>

                            <div className="lg:flex gap-2">
                              <div className="flex gap-2 self-center mt-3">
                                <input type="checkbox" className="mt-[2px] " />
                                <p className="dark:text-white font-normal text-[#121212] text-[14px]">
                                  Remind User
                                </p>
                              </div>
                              <div className="w-[90px]">
                                <SelectMenu
                                  options={sortRepeat}
                                  selectedType={selectedRepeat}
                                  onSelectType={setSelectedRepeat}
                                />
                              </div>

                              <p className="dark:text-white self-center mt-3 font-normal text-[#121212] text-[14px]">
                                day(s) and
                              </p>
                              <div className="w-[90px]">
                                <SelectMenu
                                  options={sortRepeat}
                                  selectedType={selectedRepeat}
                                  onSelectType={setSelectedRepeat}
                                />
                              </div>

                              <p className="dark:text-white self-center mt-3 font-normal text-[#121212] text-[14px]">
                                day(s) before the overdue date, if not completed
                                by user.
                              </p>
                            </div>

                            <div className="lg:flex gap-2 mt-2">
                              <div className="flex gap-2 self-center mt-3">
                                <input type="checkbox" className="mt-[2px] " />
                                <p className="dark:text-white font-normal text-[#121212] text-[14px]">
                                  Remind Assignment Creator in every
                                </p>
                              </div>
                              <div className="w-[90px]">
                                <SelectMenu
                                  options={sortRepeat}
                                  selectedType={selectedRepeat}
                                  onSelectType={setSelectedRepeat}
                                />
                              </div>

                              <p className="dark:text-white self-center mt-3 font-normal text-[#121212] text-[14px]">
                                day(s) and
                              </p>
                              <div className="w-[90px]">
                                <SelectMenu
                                  options={sortRepeat}
                                  selectedType={selectedRepeat}
                                  onSelectType={setSelectedRepeat}
                                />
                              </div>

                              <p className="dark:text-white self-center mt-3 font-normal text-[#121212] text-[14px]">
                                day(s) before the overdue date, if not completed
                                by user.
                              </p>
                            </div>
                            <div className="flex gap-2 self-center mt-5">
                              <input type="checkbox" className="mt-[2px] " />
                              <p className="dark:text-white font-normal text-[#121212] text-[14px]">
                                Notify Assignment Creator when assignment is
                                completed
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-end gap-5 mt-5">
                            <p
                              onClick={() => setAddAssignment(false)}
                              className="font-semibold text-[#3076B1] dark:text-[#4A9FE7] text-[14px] self-center cursor-pointer"
                            >
                              Cancel
                            </p>
                            <button className="font-semibold text-white text-[14px] dark:bg-[#4A9FE7] bg-[#3076B1] hover:bg-[#18459D]  rounded-[6px] py-3 px-4 uppercase">
                              ADD
                            </button>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <div className="flex w-full h-[80vh] flex-col overflow-y-scroll dark:bg-black bg-white shadow-xl"></div>
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
