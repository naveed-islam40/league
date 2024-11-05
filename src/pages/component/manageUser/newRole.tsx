import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Switch } from "@headlessui/react";
import Configure from "./configure";
import SelectMenu from "./select";

export default function NewRole() {
  const sortInfo = ["InfoSight", "CuPolicy", "None"];
  const sortPolicy = [
    "Custom Permissions",
    "None",
    "Reviewer",
    "Limited",
    "Editor",
  ];
  const sortRecover = [
    "Custom Permissions",
    "None",
    "Reviewer",
    "Limited",
    "Editor",
  ];

  const [selectedInfo, setSelectedInfo] = useState<string>(sortInfo[0]);
  const [selectedPolicy, setSelectedPolicy] = useState<string>(sortPolicy[0]);
  const [selectedRecover, setSelectedRecover] = useState<string>(
    sortRecover[0]
  );

  const [enabledSwitch, setEnabledSwitch] = useState(null);
  const [newRole, setNewRole] = useState(false);
  const [modelContentOn, setModelContentOn] = useState(false);
  const [cuContentOn, setCuContentOn] = useState(false);
  const [archivedContentOn, setArchivedContentOn] = useState(false);
  const [publishingOn, setPublishingOn] = useState(false);

  const allOn =
    modelContentOn && cuContentOn && archivedContentOn && publishingOn;

  const handleSwitchChange = (switchId: any) => {
    setEnabledSwitch(enabledSwitch === switchId ? null : switchId);
  };

  return (
    <>
      <button
        onClick={() => setNewRole(true)}
        className="w-[40%] xl:w-[30%] font-semibold text-[14px] text-[#3076B1] dark:text-[#4a9fe7] self-center cursor-pointer"
      >
        Add New Role
      </button>

      <Transition.Root show={newRole} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setNewRole}>
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
                        <div className="fixed z-30 bg-white dark:bg-black w-full">
                          <Image
                            src={"/assets/png/dots.png"}
                            alt=""
                            width={64}
                            height={8}
                            className="mx-auto"
                          />

                          <div className="flex justify-between p-4">
                            <p className="nun font-bold text-[18px] text-[#14142B] dark:text-white">
                              Add New Role
                            </p>
                            <Image
                              onClick={() => setNewRole(false)}
                              src={"/assets/svg/cross.svg"}
                              alt=""
                              width={40}
                              height={40}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                        <div className="w-[95%] lg:w-[80%] xl:w-[60%] mx-auto pb-40 mt-20">
                          <div>
                            <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                              Name *
                            </p>
                            <input
                              type="text"
                              className="w-full border-[1px] border-[#D9D9D9] rounded-[5px] py-[12px] px-[15px]  mt-2"
                            />
                          </div>

                          <div className="mt-8">
                            <p className="font-medium text-[#121F2C] dark:text-white text-[14px] border-b-[1px] border-[#CCCCCC] pb-2">
                              General System Access
                            </p>

                            <div className="flex gap-14 mt-5">
                              <div>
                                <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                                  Assignments
                                </p>
                                <Switch
                                  checked={enabledSwitch === "assignments"}
                                  onChange={() =>
                                    handleSwitchChange("assignments")
                                  }
                                  className="mt-4 group relative flex h-7 w-12 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] bg-white p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#4CD964]"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
                                  />
                                </Switch>
                              </div>

                              <div>
                                <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                                  Files
                                </p>
                                <Switch
                                  checked={enabledSwitch === "files"}
                                  onChange={() => handleSwitchChange("files")}
                                  className="mt-4 group relative flex h-7 w-12 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] bg-white p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#4CD964]"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
                                  />
                                </Switch>
                              </div>

                              <div>
                                <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                                  Latest News
                                </p>
                                <Switch
                                  checked={enabledSwitch === "latestNews"}
                                  onChange={() =>
                                    handleSwitchChange("latestNews")
                                  }
                                  className="mt-4 group relative flex h-7 w-12 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] bg-white p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#4CD964]"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
                                  />
                                </Switch>
                              </div>

                              <div>
                                <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                                  Support
                                </p>
                                <Switch
                                  checked={enabledSwitch === "support"}
                                  onChange={() => handleSwitchChange("support")}
                                  className="mt-4 group relative flex h-7 w-12 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] bg-white p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#4CD964]"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
                                  />
                                </Switch>
                              </div>

                              <div>
                                <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                                  System Resources
                                </p>
                                <Switch
                                  checked={enabledSwitch === "systemResources"}
                                  onChange={() =>
                                    handleSwitchChange("systemResources")
                                  }
                                  className="mt-4 group relative flex h-7 w-12 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] bg-white p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#4CD964]"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
                                  />
                                </Switch>
                              </div>
                            </div>
                          </div>

                          <div className="grid lg:grid-cols-2 gap-5">
                            <div className="relative">
                              <div className="flex gap-1 mt-10">
                                <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                                  InfoSight Access
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

                                      If product access = None, user will have
                                      no access to any content from this
                                      product.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <SelectMenu
                                options={sortInfo}
                                selectedType={selectedInfo}
                                onSelectType={setSelectedInfo}
                              />
                            </div>

                            <div className="relative">
                              <div className="flex gap-1 lg:mt-10">
                                <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                                  CU PolicyPro Access
                                </p>
                                <div className="relative group">
                                  <Image
                                    src={"/assets/svg/info.svg"}
                                    alt=""
                                    height={18}
                                    width={18}
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

                                      If product access = None, user will have
                                      no access to any content from this
                                      product.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <SelectMenu
                                options={sortPolicy}
                                selectedType={selectedPolicy}
                                onSelectType={setSelectedPolicy}
                              />

                              {selectedPolicy === "Custom Permissions" && (
                                <div className="flex gap-7 mt-5">
                                  {/* Render switches only when 'Custom Permissions' is selected */}
                                  <div>
                                    <p className="font-normal text-[#121F2C] dark:text-white text-[12px]">
                                      Model Content
                                    </p>
                                    <Switch
                                      className="mt-4 group relative flex h-7 w-12 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] bg-white p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#4CD964]"
                                      checked={modelContentOn}
                                      onChange={() =>
                                        setModelContentOn(!modelContentOn)
                                      }
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
                                      />
                                    </Switch>
                                  </div>
                                  <div>
                                    <p className="font-normal text-[#121F2C] dark:text-white text-[12px]">
                                      CU Content
                                    </p>
                                    <Switch
                                      className="mt-4 group relative flex h-7 w-12 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] bg-white p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#4CD964]"
                                      checked={cuContentOn}
                                      onChange={() =>
                                        setCuContentOn(!cuContentOn)
                                      }
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
                                      />
                                    </Switch>
                                  </div>
                                  <div>
                                    <p className="font-normal text-[#121F2C] dark:text-white text-[12px]">
                                      Archived Content
                                    </p>
                                    <Switch
                                      className="mt-4 group relative flex h-7 w-12 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] bg-white p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#4CD964]"
                                      checked={archivedContentOn}
                                      onChange={() =>
                                        setArchivedContentOn(!archivedContentOn)
                                      }
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
                                      />
                                    </Switch>
                                  </div>
                                  <div>
                                    <p className="font-normal text-[#121F2C] dark:text-white text-[12px]">
                                      Publishing
                                    </p>
                                    <Switch
                                      className="mt-4 group relative flex h-7 w-12 cursor-pointer rounded-full border-[1px] border-[#E5E5EA] bg-white p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#4CD964]"
                                      checked={publishingOn}
                                      onChange={() =>
                                        setPublishingOn(!publishingOn)
                                      }
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="pointer-events-none inline-block size-6 -translate-x-1 -mt-[3px] rounded-full border-[1px] border-[#E5E5EA] bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
                                      />
                                    </Switch>
                                  </div>
                                </div>
                              )}

                              {/* Conditional Rendering of Configure Component */}
                              {cuContentOn && <Configure />}
                            </div>

                            <div className="relative lg:mt-5">
                              <div className="flex gap-1 ">
                                <p className="font-normal text-[14px] text-[#121F2C] dark:text-white">
                                  RecoveryPro Access
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

                                      If product access = None, user will have
                                      no access to any content from this
                                      product.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <SelectMenu
                                options={sortRecover}
                                selectedType={selectedRecover}
                                onSelectType={setSelectedRecover}
                              />
                            </div>
                          </div>
                          <div className="flex justify-end gap-5 mt-10">
                            <p className="font-semibold text-[#3076B1] dark:text-[#4a9fe7] text-[14px] self-center cursor-pointer">
                              Cancel
                            </p>
                            <button className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4a9fe7] hover:bg-[#18459D]  rounded-[6px] py-3 px-5 uppercase">
                              ADD
                            </button>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <div className="flex w-full h-[65vh] flex-col overflow-y-scroll bg-white dark:bg-black shadow-xl"></div>
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
