import Image from "next/image";
import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Browse() {
  const [browser, setBrowser] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log("Selected files:", files);
      // Handle file upload logic here
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      console.log("Dropped files:", files);
      // Handle file upload logic here
    }
  };

  return (
    <>
      <button
        onClick={() => setBrowser(true)}
        className="uppercase font-semibold text-[14px] text-white bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] p-[10px]"
      >
        Browse
      </button>
      <Transition.Root show={browser} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setBrowser}>
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
                        <div className="bg-white dark:bg-black fixed w-full">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="flex justify-between p-4">
                            <p className="nun font-semibold text-[18px] text-[#14142B] dark:text-white">
                              Browse Server Files
                            </p>
                            <Image
                              onClick={() => setBrowser(false)}
                              src={"/assets/svg/cross.svg"}
                              alt=""
                              width={40}
                              height={40}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="w-[95%] mx-auto pb-10 mt-24">
                          <div className="flex justify-center gap-10">
                            <div
                              className="flex flex-col items-center cursor-pointer"
                              onClick={handleFileClick}
                              onDragOver={handleDragOver}
                              onDrop={handleDrop}
                            >
                              <Image
                                src={"/assets/svg/bx-cloud.svg"}
                                alt="Upload Icon"
                                width={24}
                                height={24}
                                className="mx-auto"
                              />
                              <p className="nun font-normal text-[14px] dark:text-white">
                                Upload
                              </p>
                              <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleFileChange}
                              />
                            </div>
                            <div>
                              <Image
                                src={"/assets/svg/folder-plus.svg"}
                                alt=""
                                width={24}
                                height={24}
                                className="mx-auto cursor-pointer"
                              />
                              <p className="nun font-normal text-[14px] dark:text-white">
                                New Folder
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-start gap-10 mt-10 ">
                            <div>
                              <Image
                                src={"/assets/png/log.png"}
                                alt=""
                                width={120}
                                height={120}
                                className="rounded-[20px]"
                              />
                              <p className="nun font-normal text-[12px] text-[#4E4B66] dark:text-white text-center mt-2">
                                Company Logo
                              </p>
                              <p className="nun font-normal text-[12px] text-[#4E4B66] dark:text-white text-center">
                                5 items
                              </p>
                            </div>

                            <div>
                              <Image
                                src={"/assets/png/log2.png"}
                                alt=""
                                width={120}
                                height={120}
                                className="rounded-[20px]"
                              />
                              <p className="nun font-normal text-[12px] text-[#4E4B66] dark:text-white text-center mt-2">
                                Logo 1
                              </p>
                              <p className="nun font-normal text-[12px] text-[#4E4B66] dark:text-white text-center">
                                6/23/2024, 1:16 AM
                              </p>
                            </div>

                            <div>
                              <Image
                                src={"/assets/png/log3.png"}
                                alt=""
                                width={120}
                                height={120}
                                className="rounded-[20px]"
                              />
                              <p className="nun font-normal text-[12px] text-[#4E4B66] dark:text-white text-center mt-2">
                                New Logo Revised
                              </p>
                              <p className="nun font-normal text-[12px] text-[#4E4B66] dark:text-white text-center">
                                6/23/2024, 1:16 AM
                              </p>
                            </div>


                          </div>

                          <div className="flex justify-end gap-5 mt-20 border-b-[1px] border-[#CCCCCC] pb-8">
                            <button className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D]  rounded-[6px] py-3 px-5 uppercase">
                              DONE
                            </button>
                          </div>

                          <div className="mt-5">
                            <li className="nun font-normal text-[12px] dark:text-white">
                              Files are NOT secure unless at least one security
                              role has been added
                            </li>
                            <li className="nun font-normal text-[12px] dark:text-white">
                              The default security role is Any Logged in CU
                              PolicyPro User
                            </li>
                            <li className="nun font-normal text-[12px] dark:text-white">
                              Logos and graphics are not visible on PDF/Word
                              downloads if a security role is added.
                            </li>
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
