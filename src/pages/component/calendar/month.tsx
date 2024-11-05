import React, { Fragment, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image"; // Assuming you're using Next.js for Image optimization
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const localizer = momentLocalizer(moment);

interface MyEvent {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
}

// Function to get specific dates in the current month
const getSpecificDate = (day: number) => {
  const date = new Date();
  date.setDate(day); // Set the date to the specified day of the month
  return date;
};

// Define the specific dates: 23rd, 18th, 28th, 10th, and today's date
const specificDates = [
  getSpecificDate(23),
  getSpecificDate(18),
  getSpecificDate(28),
  getSpecificDate(10),
  new Date(), // Current date
];

// Array of unique titles for each event
const titles = [
  "FCC – Eliminating Unlawful Text Messages",
  "Data Privacy Regulations and Compliance",
  "Artificial Intelligence in Financial Services",
  "Cybersecurity and Risk Management",
  "Innovation in Blockchain Technology",
];

// Create events by combining titles with specific dates
const events: MyEvent[] = specificDates.map((date, index) => ({
  title: titles[index], // Assign a unique title for each event
  start: new Date(date),
  end: new Date(date),
  allDay: false,
}));

const Month: React.FC = () => {
  const [selectContent, setSelectContent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<MyEvent | null>(null);

  // State to track the current date (month and year)
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const handleSelectEvent = (event: MyEvent) => {
    setSelectedEvent(event); // Save the selected event data
    setSelectContent(true); // Open the drawer
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(nextMonth);
  };

  return (
    <>
      <div className="bg-white mt-5 p-4">
        <div className="flex gap-5">
          {/* Format the current month and year */}
          <p className="font-semibold text-[14px] text-black">
            {moment(currentDate).format("MMMM YYYY")}
          </p>
          <div className="self-center flex gap-3">
            <IoIosArrowBack onClick={handlePrevMonth} className="cursor-pointer" />
            <IoIosArrowForward onClick={handleNextMonth} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="hidden md:block bg-white dark:bg-black">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={["month"]}
          defaultView="month"
          date={currentDate} // Pass the current date to the Calendar
          onNavigate={(date) => setCurrentDate(date)} // Update current date when navigation happens
          toolbar={false}
          style={{ height: 800 }}
          onSelectEvent={handleSelectEvent}
        />
      </div>
      <Transition.Root show={selectContent} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setSelectContent}>
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
                      <div className="absolute  top-0 left-0 w-full mt-1 h-[100vh] pb-40 overflow-y-scroll ">
                        <div className="fixed w-full bg-white dark:bg-black  rounded-t-[12px] md:rounded-none  z-20">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="p-4">
                            <div className="flex justify-between">
                              <button className="mt-3 font-normal text-[#14142B] text-[12px] bg-[#E0E0E0] rounded-[4px] p-2">
                                {moment(selectedEvent?.start).format(
                                  "MMMM D, YYYY"
                                )}
                              </button>

                              <Image
                                onClick={() => setSelectContent(false)}
                                src={"/assets/svg/cross.svg"}
                                alt=""
                                width={40}
                                height={40}
                                className="cursor-pointer"
                              />
                            </div>
                            <p className="font-semibold text-[#14142B] dark:text-white text-[16px] mt-2">
                              {selectedEvent?.title}
                            </p>

                            <div className="flex gap-3">
                              <button className="mt-3 font-normal text-[#14142B]  text-[12px] bg-[#f2f6ef] rounded-[4px] p-2">
                                All Day Event
                              </button>
                              <button className="mt-3 font-normal text-[#14142B] text-[12px] bg-[#fbf7ee] rounded-[4px] p-2">
                                1 day(s)
                              </button>
                            </div>
                            <p className="font-normal text-[#14142B] dark:text-white text-[12px] mt-3">
                              Some description text related to the event{" "}
                              <span className="text-[#3076B1]">
                                {selectedEvent?.title}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <div className="flex w-full h-[80vh] flex-col overflow-y-scroll bg-white dark:bg-black rounded-t-[12px] md:rounded-none shadow-xl"></div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Month;
