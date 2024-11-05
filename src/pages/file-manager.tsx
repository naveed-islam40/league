import React, { useRef, useState } from "react";
import Navbar from "./component/navbar/navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "./component/footer/footer";
import { IoIosArrowForward } from "react-icons/io";
import Sidebar from "./component/file-manager/sidebar";
import Policy from "./component/file-manager/policy";
import FileTable from "./component/file-manager/table";
import FilesItem from "./component/file-manager/filesItem";
import Media from "./component/file-manager/media";
import Sure from "./component/file-manager/sure";
import NewFolder from "./component/file-manager/new-folder";
import Bot from "../../public/assets/png/bot.png";

export default function CuDocx() {
  const [activeTab, setActiveTab] = useState(1);
  const [files, setFiles] = useState(1);
  const [showPolicy, setShowPolicy] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log("Selected file:", files[0]);
    }
  };

  const handleNewFolderClick = () => {
    setActiveTab(3);
  };

  const handlePolicy = () => {
    setShowPolicy(true);
  };

  const handleBack = () => {
    setShowPolicy(false);
  };
  const handleClick = (tabIndex: any) => {
    setFiles(tabIndex);
  };

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
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

      <div className="hidden md:flex gap-2 mt-5 w-[95%] 2xl:w-[70%] mx-auto">
        <Link
          href={"/manage-user"}
          className="nun font-semibold text-[#3076B1] text-[14px]"
        >
          Admin
        </Link>
        <IoIosArrowForward className="text-[16px] text-[#121F2C] dark:text-white self-center cursor-pointer" />
        <Link href={"/"} className="nun font-normal text-[#121F2C] dark:text-white text-[14px]">
          FIle Manager
        </Link>
      </div>

      <div className=" mt-5 md:w-[95%] 2xl:w-[70%] mx-auto mb-10">
        <div className="grid grid-cols-12 md:flex justify-end gap-5 px-3 md:px-0">
          <div className="col-span-9 relative">
            <input
              type="text"
              placeholder="Search CU Documents"
              className="w-full nun font-normal text-[#7A7B7C] text-[16px] md:text-[14px] rounded-[6px] bg-[#AEE6F566] px-9 py-[15px]"
            />
            <Image
              src={"/assets/svg/bi_searchs.svg"}
              alt=""
              width={16}
              height={16}
              className="absolute top-[18px] left-3"
            />
          </div>

          <div className="col-span-3 flex gap-2">
            <div
              className={
                activeTab === 1
                  ? "active tab bg-[#EEEEEE] p-2 cursor-pointer self-center"
                  : "tab  p-2 cursor-pointer self-center"
              }
              onClick={() => handleTabClick(1)}
            >
              <Image
                src={"/assets/svg/bx-ul.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
            <div
              className={
                activeTab === 2
                  ? "active tab bg-[#EEEEEE] p-2 cursor-pointer self-center"
                  : "tab  p-2 cursor-pointer self-center"
              }
              onClick={() => handleTabClick(2)}
            >
              <Image
                src={"/assets/svg/bx-grid.svg"}
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-5 mt-3 md:mt-5">
          <div className="overflow-x-scroll md:col-span-4 xl:col-span-3 ">
            <div className="w-[450px] md:w-auto">
            <Sidebar files={files} handleClick={handleClick} />
            </div>
          </div>

          {files === 1 && (
            <>
              <div className="grid grid-cols-2 md:hidden  xl:justify-center gap-5 px-3 md:px-0">
                <div
                  className="cursor-pointer border-[1px] border-[#CCCCCC] rounded-[4px] bg-[#EFEFEF] dark:bg-[#242424]  p-2"
                  onClick={handleLog}
                >
                  <Image
                    src="/assets/svg/bx-cloud.svg"
                    alt="Upload"
                    width={24}
                    height={24}
                    className="mx-auto"
                  />
                  <p className="nun font-normal text-[#4E4B66] dark:text-white text-[14px] text-center">
                    Upload
                  </p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
                <div
                  className="cursor-pointer border-[1px] border-[#CCCCCC] rounded-[4px] bg-[#EFEFEF] dark:bg-[#242424] p-2"
                  onClick={handleNewFolderClick}
                >
                  <Image
                    src={"/assets/svg/folder-plus.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="mx-auto"
                  />
                  <p className="nun font-normal text-[#4E4B66] dark:text-white text-[14px] text-center">
                    New Folder
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-black dark:border-[1px]  md:pt-[15px] pb-0 md:rounded-[4px] shadow-sm md:col-span-8 xl:col-span-9">
                <div className="grid grid-cols-2 lg:grid-cols-3 px-[15px]">
                  <div className="hidden lg:block"></div>
                  <div className="hidden md:flex  xl:justify-center gap-5">
                    <div className="cursor-pointer" onClick={handleLog}>
                      <Image
                        src="/assets/svg/bx-cloud.svg"
                        alt="Upload"
                        width={24}
                        height={24}
                        className="mx-auto"
                      />
                      <p className="nun font-normal text-[#4E4B66] dark:text-white text-[14px] text-center">
                        Upload
                      </p>
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={handleNewFolderClick}
                    >
                      <Image
                        src={"/assets/svg/folder-plus.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="mx-auto"
                      />
                      <p className="nun font-normal text-[#4E4B66] dark:text-white text-[14px] text-center">
                        New Folder
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex justify-end  gap-5 opacity-40 cursor-not-allowed">
                    <Image
                      src={"/assets/svg/pen.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={22}
                      height={22}
                    />
                    <Sure />
                    <Image
                      src={"/assets/svg/bx-dup.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={22}
                      height={22}
                    />
                    <Image
                      src={"/assets/svg/folderM.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={22}
                      height={22}
                    />
                    <Image
                      src={"/assets/svg/trash.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={22}
                      height={22}
                    />
                  </div>
                </div>

                {activeTab === 1 && <FileTable />}

                {activeTab === 2 && (
                  <>
                    {showPolicy ? (
                      <Policy handleBack={handleBack} />
                    ) : (
                      <FilesItem handlePolicy={handlePolicy} />
                    )}
                  </>
                )}

                {activeTab !== 2 && (
                  <div>
                    {showPolicy ? (
                      <Policy handleBack={handleBack} />
                    ) : (
                      <NewFolder handlePolicy={handlePolicy} />
                    )}
                  </div>
                )}

                <div className="border-t-[1px] border-[#CCCCCC] py-5 px-[15px]">
                  <li className="nun font-normal text-[12px] text-[#121212] dark:text-white">
                    Files are NOT secure unless at least one security role has
                    been added
                  </li>
                  <li className="nun font-normal text-[12px] text-[#121212] dark:text-white">
                    The default security role is Any Logged in CU PolicyPro User
                  </li>
                  <li className="nun font-normal text-[12px] text-[#121212] dark:text-white">
                    Logos and graphics are not visible on PDF/Word downloads if
                    a security role is added.
                  </li>
                  <li className="nun font-normal text-[12px] text-[#121212] dark:text-white">
                    Multiple files can be selected, and each file should not
                    exceed 5 MB in size.
                  </li>
                </div>
              </div>
            </>
          )}

          {files === 2 && (
            <>
              <div className="grid grid-cols-2 md:hidden  xl:justify-center gap-5 px-3 md:px-0">
                <div
                  className="cursor-pointer border-[1px] border-[#CCCCCC] rounded-[4px] bg-[#EFEFEF] dark:bg-[#242424] p-2"
                  onClick={handleLog}
                >
                  <Image
                    src="/assets/svg/bx-cloud.svg"
                    alt="Upload"
                    width={24}
                    height={24}
                    className="mx-auto"
                  />
                  <p className="nun font-normal text-[#4E4B66] dark:text-white text-[14px] text-center">
                    Upload
                  </p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
                <div
                  className="cursor-pointer border-[1px] border-[#CCCCCC] rounded-[4px] bg-[#EFEFEF] dark:bg-[#242424] p-2"
                  onClick={handleNewFolderClick}
                >
                  <Image
                    src={"/assets/svg/folder-plus.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="mx-auto"
                  />
                  <p className="nun font-normal text-[#4E4B66] dark:text-white text-[14px] text-center">
                    New Folder
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-black dark:border-[1px]  pt-[15px] pb-0 rounded-[4px] shadow-sm md:col-span-8 xl:col-span-9">
                <div className="grid grid-cols-2 lg:grid-cols-3 px-[15px]">
                  <div className="hidden lg:block"></div>

                  <div className="hidden md:flex xl:justify-center gap-5">
                    <div className="cursor-pointer" onClick={handleLog}>
                      <Image
                        src="/assets/svg/bx-cloud.svg"
                        alt="Upload"
                        width={24}
                        height={24}
                        className="mx-auto"
                      />
                      <p className="nun font-normal text-[#4E4B66] dark:text-white text-[14px] text-center">
                        Upload
                      </p>
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={handleNewFolderClick}
                    >
                      <Image
                        src={"/assets/svg/folder-plus.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="mx-auto"
                      />
                      <p className="nun font-normal text-[#4E4B66] dark:text-white text-[14px] text-center">
                        New Folder
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-end gap-5">
                    <Image
                      src={"/assets/svg/pen.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={22}
                      height={22}
                    />
                    <Sure />
                    <Image
                      src={"/assets/svg/bx-dup.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={22}
                      height={22}
                    />
                    <Image
                      src={"/assets/svg/folderM.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={22}
                      height={22}
                    />
                    <Image
                      src={"/assets/svg/trash.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={22}
                      height={22}
                    />
                  </div>
                </div>

                {activeTab === 2 && (
                  <div>
                    <Media />
                  </div>
                )}

                {activeTab !== 2 && (
                  <div>
                    {showPolicy ? (
                      <Policy handleBack={handleBack} />
                    ) : (
                      <NewFolder handlePolicy={handlePolicy} />
                    )}
                  </div>
                )}

                <div className="border-t-[1px] border-[#CCCCCC] py-5 px-[15px]">
                  <li className="nun font-normal text-[12px] text-[#121212] dark:text-white">
                    Files are NOT secure unless at least one security role has
                    been added
                  </li>
                  <li className="nun font-normal text-[12px] text-[#121212] dark:text-white">
                    The default security role is Any Logged in CU PolicyPro User
                  </li>
                  <li className="nun font-normal text-[12px] text-[#121212] dark:text-white">
                    Logos and graphics are not visible on PDF/Word downloads if
                    a security role is added.
                  </li>
                  <li className="nun font-normal text-[12px] text-[#121212] dark:text-white">
                    Multiple files can be selected, and each file should not
                    exceed 5 MB in size.
                  </li>
                </div>
              </div>
            </>
          )}

          {files === 3 && (
            <>
              <div className="grid grid-cols-2 md:hidden  xl:justify-center gap-5 px-3 md:px-0">
                <div 
                  className="cursor-pointer border-[1px] border-[#CCCCCC] rounded-[4px] bg-[#EFEFEF] dark:bg-[#242424] p-2"
                  onClick={handleLog}
                >
                  <Image
                    src="/assets/svg/bx-cloud.svg"
                    alt="Upload"
                    width={24}
                    height={24}
                    className="mx-auto"
                  />
                  <p className="nun font-normal text-[#4E4B66] dark:text-white text-[14px] text-center">
                    Upload
                  </p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
                <div
                  className="cursor-pointer border-[1px] border-[#CCCCCC] rounded-[4px] bg-[#EFEFEF] dark:bg-[#242424] p-2"
                  onClick={handleNewFolderClick}
                >
                  <Image
                    src={"/assets/svg/folder-plus.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="mx-auto"
                  />
                  <p className="nun font-normal text-[#4E4B66] dark:text-white text-[14px] text-center">
                    New Folder
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-black dark:border-[1px] pt-[15px] pb-0 rounded-[4px] shadow-sm md:col-span-8 xl:col-span-9">
                <div className="grid grid-cols-2  lg:grid-cols-3 px-[15px]">
                  <div className="hidden lg:block"></div>
                  <div className="hidden md:flex xl:justify-center gap-5">
                    <div className="cursor-pointer" onClick={handleLog}>
                      <Image
                        src="/assets/svg/bx-cloud.svg"
                        alt="Upload"
                        width={24}
                        height={24}
                        className="mx-auto"
                      />
                      <p className="nun font-normal text-[#4E4B66] dark:text-white text-[14px] text-center">
                        Upload
                      </p>
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={handleNewFolderClick}
                    >
                      <Image
                        src={"/assets/svg/folder-plus.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className="mx-auto"
                      />
                      <p className="nun font-normal text-[#4E4B66] dark:text-white text-[14px] text-center">
                        New Folder
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex justify-end gap-5 opacity-40 cursor-not-allowed">
                    <Image
                      src={"/assets/svg/pen.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={22}
                      height={22}
                    />
                    <Sure />
                    <Image
                      src={"/assets/svg/bx-dup.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={22}
                      height={22}
                    />
                    <Image
                      src={"/assets/svg/folderM.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={22}
                      height={22}
                    />
                    <Image
                      src={"/assets/svg/trash.svg"}
                      alt=""
                      className="cursor-pointer"
                      width={22}
                      height={22}
                    />
                  </div>
                </div>

                {activeTab === 2 && (
                  <>
                    {showPolicy ? (
                      <Policy handleBack={handleBack} />
                    ) : (
                      <FilesItem handlePolicy={handlePolicy} />
                    )}
                  </>
                )}

                {activeTab !== 2 && (
                  <div>
                    {showPolicy ? (
                      <Policy handleBack={handleBack} />
                    ) : (
                      <NewFolder handlePolicy={handlePolicy} />
                    )}
                  </div>
                )}

                <div className="border-t-[1px] border-[#CCCCCC] py-5 px-[15px]">
                  <li className="nun font-normal text-[12px] text-[#121212] dark:text-white">
                    Files are NOT secure unless at least one security role has
                    been added
                  </li>
                  <li className="nun font-normal text-[12px] text-[#121212] dark:text-white">
                    The default security role is Any Logged in CU PolicyPro User
                  </li>
                  <li className="nun font-normal text-[12px] text-[#121212] dark:text-white">
                    Logos and graphics are not visible on PDF/Word downloads if
                    a security role is added.
                  </li>
                  <li className="nun font-normal text-[12px] text-[#121212] dark:text-white">
                    Multiple files can be selected, and each file should not
                    exceed 5 MB in size.
                  </li>
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
              <p className="font-normal text-[14px] text-[#121F2C]">All</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
                Infosight
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
                CU Policy Pro
              </p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" checked className="mt-[2px]" />
              <p className="font-normal text-[14px] text-[#121F2C]">
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
